import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { useCreateUser } from "@/services/hooks/user/useCreateUser";
import { useAuth } from "@/application/contexts/AuthContext";

import { Input } from "@/presentation/components/atoms/Input";
import { Button } from "@/presentation/components/atoms/Button";
import { Label } from "@/presentation/components/atoms/Label";
import { RoleCard } from "@/presentation/components/molecules/RegisterRoleCard";
import WaveDivider from '@/presentation/components/icons/WaveDivider';
import CircleIcon from '@/presentation/components/icons/Circle';
import SpottedIcon from '@/presentation/components/icons/Spotted';
import WaveIcon from '@/presentation/components/icons/Wave';


type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
  role: "photographer" | "surfer" | "both";
};

export const RegisterForm = () => {
  const { mutate: createUser, isSuccess, isError, error } = useCreateUser();
  const navigate = useNavigate()
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<RegisterFormData>();
  const [selectedRole, setSelectedRole] = useState<RegisterFormData["role"]>("surfer");

  const onSubmit = async (data: RegisterFormData) => {
    const { fullName, email, password } = data;
  
    const userToCreate = {
      username: email, 
      full_name: fullName,
      email,
      password,
      is_photographer: selectedRole === "photographer" || selectedRole === "both",
      is_surfer: selectedRole === "surfer" || selectedRole === "both",
      country_code: "ES", 
      labels: [], 
      frequent_surf_breaks: [],
    };
    createUser(userToCreate, {
      onSuccess: async () => {
        try {
          await login({
            email: userToCreate.email,
            password: userToCreate.password,
          });
          navigate("/dashboard");
        } catch (error) {
          console.error("Error durante el login automático:", error);
        }
      },
      onError: (error: any) => {
        console.error("Error al registrar:", error);
      },
    });
  };

  return (
    <div className="relative min-h-screen px-4 overflow-hidden w-full bg-gradient-to-b from-[#BFDBFE] to-[#FFFFFF]">
      <div className="absolute z-[1] inset-x-0 bottom-0">
        <WaveDivider fillColor="#BFDBFE"/>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-[10] absolute top-32 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg max-w-sm w-full border-2"
      >
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-1">
          Registro de nuevo usuario!
        </h2>
        <p className="text-sm text-center text-muted-foreground mb-4">
          Comienza a subir y comprar fotografías de Surf de forma rápida y segura
        </p>

        <Label className="text-sm font-medium text-primary mb-2 text-blue-400">Escoge un rol:</Label>
        <div className="flex justify-between gap-2 mb-4">
          <RoleCard
            label="Fotógrafo"
            value="photographer"
            selected={selectedRole === "photographer"}
            onSelect={() => setSelectedRole("photographer")}
            color="text-orange-500"
            icon={<CircleIcon size={40} color="#f97316" />}
            size="w-10"
            selectedStyle="border-orange-500 bg-orange-50"
          />
          <RoleCard
            label="Surfista"
            value="surfer"
            selected={selectedRole === "surfer"}
            onSelect={() => setSelectedRole("surfer")}
            color="text-blue-500"
            icon={<WaveIcon color="#3b82f6" />}
            size="w-20"
            selectedStyle="border-blue-500 bg-blue-50"
          />
          <RoleCard
            label="Ambos"
            value="both"
            selected={selectedRole === "both"}
            onSelect={() => setSelectedRole("both")}
            color="text-black"
            icon={<SpottedIcon />}
            size="w-14"
            selectedStyle="border-gray-500 bg-gray-50"
          />
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="fullName">Nombre y apellido</Label>
            <Input
              id="fullName"
              placeholder="Nombre y apellido"
              {...register("fullName")}
            />
          </div>

          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@email.com"
              {...register("email")}
            />
          </div>

          <div>
            <Label htmlFor="password">Crea una contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              {...register("password")}
            />
          </div>
          {isError && (
            <div className="text-sm text-red-500 mt-1 text-center">
              {(error as any)?.response?.data?.detail || "Ha ocurrido un error durante el registro."}
            </div>
          )}
        </div>
        <Button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-300">
          Registrarme ahora!
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="font-semibold text-primary">
            Inicia sesión aquí
          </a>
        </p>
      </form>
    </div>
  );
};

