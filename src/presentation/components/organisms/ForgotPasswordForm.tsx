import { useState } from "react";
import { useForgotPassword } from "@/services/hooks/auth/useForgotPassword";
import { Input } from "@/presentation/components/atoms/Input";
import { Button } from "@/presentation/components/atoms/Button";
import WaveDivider from '@/presentation/components/icons/WaveDivider';

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const forgotPasswordMutation = useForgotPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPasswordMutation.mutate({ email });
  };

  return (
    <div className="relative min-h-screen px-4 overflow-hidden w-full bg-gradient-to-b from-[#BFDBFE] to-[#FFFFFF]">
    <div className="absolute z-[1] inset-x-0 bottom-0">
      <WaveDivider fillColor="#BFDBFE"/>
    </div>
        <form onSubmit={handleSubmit} className="z-[10] absolute top-32 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg max-w-sm w-full border-2">
          <label className="block text-sm font-medium mb-2">Correo electrónico</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button className="mt-2" type="submit" disabled={forgotPasswordMutation.status === "pending"}>
            {forgotPasswordMutation.status === "pending" ? "Enviando..." : "Enviar"}
          </Button>
          {forgotPasswordMutation.isSuccess && (
            <p className="text-green-600 text-sm mt-2">Correo enviado con éxito</p>
          )}
          {forgotPasswordMutation.isError && (
            <p className="text-red-600 text-sm mt-2">Error: {forgotPasswordMutation.error?.message}</p>
          )}
        </form>
    </div>
  );
};
