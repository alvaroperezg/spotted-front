import { useState } from "react";
import { useLogin } from "@/services/hooks/auth/useLogin";
import { useGetUsers } from "@/services/hooks/user/useGetUsers";

export default function AuthTestPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [customToken, setCustomToken] = useState("");
  const [useCustomToken, setUseCustomToken] = useState(false);

  const { mutate: login, data: loginData, isPending: loggingIn } = useLogin();

  const {
    data: users,
    isLoading: loadingUsers,
    refetch,
  } = useGetUsers({ surfer: true, photographer: false }, useCustomToken ? customToken : token);

  const handleLogin = () => {
    login({ email, password }, {
      onSuccess: (data) => {
        setToken(data.access_token);
      }
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Auth Test Page</h1>

      <div className="space-y-2">
        <h2 className="font-semibold">Login</h2>
        <input
          className="border px-2 py-1 w-full"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border px-2 py-1 w-full"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleLogin}
          disabled={loggingIn}
        >
          {loggingIn ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
        {token && <p className="text-sm break-all">Token guardado: {token}</p>}
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Token manual</h2>
        <input
          className="border px-2 py-1 w-full"
          placeholder="Pega aquí un token JWT"
          value={customToken}
          onChange={e => setCustomToken(e.target.value)}
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={useCustomToken}
            onChange={e => setUseCustomToken(e.target.checked)}
          />
          <span>Usar este token manual en vez del generado</span>
        </label>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Usuarios</h2>
        <button
          className="bg-green-600 text-white px-3 py-1 rounded"
          onClick={() => refetch()}
        >
          Obtener usuarios
        </button>

        {loadingUsers ? (
          <p>Cargando usuarios...</p>
        ) : (
          <ul className="list-disc list-inside">
            {users?.map(user => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
