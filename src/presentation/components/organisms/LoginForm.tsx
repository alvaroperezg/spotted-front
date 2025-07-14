import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/application/contexts/AuthContext";
import { Input } from "@/presentation/components/atoms/Input";
import { Label } from "@/presentation/components/atoms/Label";
import { Button } from "@/presentation/components/atoms/Button";
import WaveDivider from '@/presentation/components/icons/WaveDivider';

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({email, password});
      navigate("/dashboard");
      // setErrorMsg("Correo o contraseña incorrectos");
  };

  return (
    <div className="relative min-h-screen px-4 overflow-hidden w-full bg-gradient-to-b from-[#BFDBFE] to-[#FFFFFF]">
      <div className="absolute z-[1] inset-x-0 bottom-0">
        <WaveDivider fillColor="#BFDBFE"/>
      </div>
      <form
        onSubmit={handleSubmit}
        className="z-[10] absolute top-32 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg max-w-sm w-full border-2"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-1 text-center">
          Bienvenido a Spotted!
        </h2>
        <p className="text-sm text-center text-gray-700 mb-6">
          Comienza a subir y comprar fotografías de Surf de forma rápida y segura
        </p>

        <div className="mb-4">
          <Label htmlFor="email" className="text-sm font-semibold mb-1 block">
            Correo electrónico
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <Label htmlFor="password" className="text-sm font-semibold mb-1 block">
            Contraseña
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-right mb-4">
          <a
            href="/forgot-password"
            className="text-xs text-blue-600 hover:underline"
          >
            He olvidado mi contraseña
          </a>
        </div>

        {errorMsg && <p className="text-sm text-red-600 mb-2">{errorMsg}</p>}

        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-300">
          Iniciar sesión
        </Button>

        <p className="text-sm text-center mt-4">
          ¿Aún no tienes cuenta?{" "}
          <a href="/registro" className="font-semibold text-blue-700 hover:underline">
            Regístrate desde aquí
          </a>
        </p>
      </form>

    </div>
  );
}
