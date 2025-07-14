import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useResetPassword } from "@/services/hooks/auth/useResetPassword";
import { Button } from "@/presentation/components/atoms/Button";
import { Label } from "@/presentation/components/atoms/Label";
import { Input } from "@/presentation/components/atoms/Input";
import WaveDivider from '@/presentation/components/icons/WaveDivider';

interface ResetPasswordFormData {
  token: string;
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const { register, handleSubmit, watch } = useForm<ResetPasswordFormData>();
  const resetPasswordMutation = useResetPassword();
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState("");

  useEffect(() => {
    const t = searchParams.get("token");
    if (t) {
      setToken(t);
    }
  }, [searchParams]);

  const onSubmit = (data: ResetPasswordFormData) => {
    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log(token)
    console.log(data.password)
    resetPasswordMutation.mutate({
      reset_token: token,
      new_password: data.password,
    });
  };

  return (
    <div className="relative min-h-screen px-4 overflow-hidden w-full bg-gradient-to-b from-[#BFDBFE] to-[#FFFFFF]">
      <div className="absolute z-[1] inset-x-0 bottom-0">
        <WaveDivider fillColor="#BFDBFE"/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="z-[10] absolute top-32 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg max-w-sm w-full border-2"
      >
        <div className="space-y-2">
          <Label htmlFor="password">Nueva contraseña</Label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", { required: true })}
          />
        </div>

        <Button type="submit" className="mt-5" disabled={resetPasswordMutation.status === "pending"}>
          Cambiar contraseña
        </Button>
      </form>
    </div>
  );
};
