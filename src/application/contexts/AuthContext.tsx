import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface User {
  id: string
  name: string
  email: string
  role: "surfer" | "photographer"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken")
      const savedUser = localStorage.getItem("user")

      if (token && savedUser) {
        try {
          const userData = JSON.parse(savedUser)
          setUser(userData)
          setIsLoggedIn(true)
        } catch (error) {
          localStorage.removeItem("authToken")
          localStorage.removeItem("user")
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (email === "surfer@spotted.com" && password === "password123") {
        const userData: User = {
          id: "1",
          name: "John Doe",
          email: email,
          role: "surfer",
        }

        localStorage.setItem("authToken", "demo-token-123")
        localStorage.setItem("user", JSON.stringify(userData))

        setUser(userData)
        setIsLoggedIn(true)
        return true
      } 
      
      if (email === "photographer@spotted.com" && password === "password123") {
        const userData: User = {
          id: "2",
          name: "Jane Lens",
          email: email,
          role: "photographer",
        }
  
        localStorage.setItem("authToken", "demo-token-456")
        localStorage.setItem("user", JSON.stringify(userData))
  
        setUser(userData)
        setIsLoggedIn(true)
        return true
      }
      throw new Error("Credenciales incorrectas")

    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
    setUser(null)
    setIsLoggedIn(false)
    navigate("/login")
  }

  return <AuthContext.Provider value={{ user, isLoading, isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
