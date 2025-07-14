import type { ReactNode } from "react";
import { createContext, useState, useEffect, useContext } from "react";
import type { UserDetail  } from "@/services/models/User";
import type { LoginRequest, LoginResponse } from "@/services/models/Auth";
import { login as loginApi } from "@/services/api/auth";
import { getMe } from "@/services/api/user";
import { setAccessToken, getAccessToken, removeAccessToken } from '@/lib/auth';

interface AuthContextType {
  user: UserDetail  | null;
  token: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDetail  | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (credentials: LoginRequest) => {
    try {
      const response: LoginResponse = await loginApi(credentials);
      setAccessToken(response.access_token);
      setToken(response.access_token); 
      console.log(response.access_token)
      const userInfoRaw = await getMe();

      const userInfo: UserDetail  = {
        ...userInfoRaw,
        profile_picture: userInfoRaw.profile_picture ?? "",
      };
      console.log(userInfo)
      setUser(userInfo);
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    removeAccessToken();
    setUser(null);
  };

  useEffect(() => {
    const token = getAccessToken();
  
    if (token) {
      setToken(token);
  
      getMe()
        .then(userInfoRaw => {
          const userInfo: UserDetail  = {
            ...userInfoRaw,
            profile_picture: userInfoRaw.profile_picture ?? "",
          };
          setUser(userInfo);
        })
        .catch(error => {
          console.error("Error al rehidratar sesión:", error);
          setToken(null);
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoggedIn: !!user, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
