import { useEffect, useState } from "react"
import { Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/application/contexts/AuthContext"
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { Label } from "@/presentation/components/atoms/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/presentation/components/atoms/Select"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Badge } from "@/presentation/components/atoms/Badge"
import { GearForm } from "@/presentation/components/molecules/GearForm"
import { PricingForm } from "@/presentation/components/molecules/PricingForm"
import { ProfilePictureUploader } from "@/presentation/components/molecules/ProfilePictureUploader"
import { useUpdateMe } from "@/services/hooks/user/useUpdateMe";
import { useCountryOptions } from "@/services/hooks/continents/useCountryOptions";
import { useUpdatePhotographerProfile } from "@/services/hooks/user/photographer/useUpdatePhotographerProfile"
import { useCreatePhotographerProfile } from "@/services/hooks/user/photographer/useCreatePhotographerProfile"
import { useGetPhotographerProfile } from "@/services/hooks/user/photographer/useGetPhotographerProfile"
import type { Equipment } from "@/services/models/Photographer"

interface UserSettings {
  profilePhoto: string
  username: string
  fullName: string
  email: string
  selectedLanguages: string[]
  countryCode: string
}

export default function SettingsPage() {
  const navigate = useNavigate()
  const { logout, user } = useAuth()
  const userId = user?.id
  const [activeTab, setActiveTab] = useState("general")
  const updateMeMutation = useUpdateMe();
  const countryOptions = useCountryOptions();
  const userRole = user?.is_photographer === true ? "photographer" : "surfer"
  const { data: profile, isLoading } = useGetPhotographerProfile(userId!)
  const createMutation = useCreatePhotographerProfile(userId!)
  const updateMutation = useUpdatePhotographerProfile(userId!)

  const [initialEquipment, setInitialEquipment] = useState<Equipment>({
    cameras: [],
    lenses: [],
    accessories: [],
  })

  const activeColor = userRole === "photographer" ? "orange" : "blue"
  let tabs = [{ id: "general", label: "Información general" }]
  if (userRole === "photographer") {
    tabs.push({ id: "team", label: "Equipo" })
    tabs.push({ id: "pricing", label: "Tarifas" })
  }

  const [settings, setSettings] = useState<UserSettings>({
    profilePhoto: user?.profile_picture || "",
    username: user?.username || "usuario1",
    fullName: user?.full_name || "usuario uno",
    email: user?.email || "you@email.com",
    selectedLanguages: ["Español"],
    countryCode: user?.country_code || "Prueba"
  })

  const availableLanguages = ["Español", "Inglés"]

  useEffect(() => {
    if (profile?.equipment) {
      console.log("📷 Perfil recuperado:", profile)
      setInitialEquipment({
        cameras: profile.equipment.cameras ?? [],
        lenses: profile.equipment.lenses ?? [],
        accessories: profile.equipment.accessories ?? [],
      })
    }
  }, [profile])

  const handleLanguageToggle = (language: string) => {
    setSettings((prev) => ({
      ...prev,
      selectedLanguages: prev.selectedLanguages.includes(language)
        ? prev.selectedLanguages.filter((lang) => lang !== language)
        : [...prev.selectedLanguages, language],
    }))
  }

  const handleInputChange = (field: keyof UserSettings, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = async () => {
    try {
      const payload = {
        // profile_picture: settings.profilePhoto,
        email: settings.email,
        full_name: settings.fullName,
        country_code: "ES"
        // country_code: settings.countryCode || "ES"
      };
      await updateMeMutation.mutateAsync(payload);
  
      alert("Datos guardados correctamente.");
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("Ocurrió un error al guardar los cambios.");
    }
  };

  const handleSaveEquipment = (equipment: Equipment) => {
    console.log("🛠️ Equipamiento recibido en handleSaveEquipment:", equipment)
  
    if (!profile) {
      console.log("📸 No hay perfil, creando uno nuevo")
      createMutation.mutate({ equipment })
    } else {
      console.log("✏️ Perfil existente, actualizando")
      updateMutation.mutate({ equipment })
    }
  }

  const handleResetPassword = () => {
    navigate('/forgot-password')
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Información del usuario</h1>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? `border-${activeColor}-500 text-${activeColor}-600`
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Settings Form */}

      {activeTab === "general" && (
        <Card className="max-w-md ml-[30%]">
          <CardContent className="p-6 space-y-6">
            {/* Profile Photo */}
            <ProfilePictureUploader
              imageUrl={settings.profilePhoto || "/placeholder.svg"}
              onImageUpload={(file: File) => {
                const reader = new FileReader()
                reader.onloadend = () => {
                  const base64String = reader.result as string
                  setSettings((prev) => ({ ...prev, profilePhoto: base64String }))
                }
                reader.readAsDataURL(file)
              }}
            />

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Nombre de usuario (Apodo)
              </Label>
              <Input
                id="username" disabled
                value={settings.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Nombre y apellidos
              </Label>
              <Input
                id="fullName"
                value={settings.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">Idiomas</Label>
              <div className="flex flex-wrap gap-2">
                {availableLanguages.map((language, index) => (
                  <Badge
                    key={index}
                    variant={settings.selectedLanguages.includes(language) ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1 ${
                      settings.selectedLanguages.includes(language)
                        ? `border-${activeColor}-500 bg-${activeColor}-500 hover:bg-${activeColor}-600 text-white`
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleLanguageToggle(language)}
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="countryCode" className="text-sm py-0">
                País
              </Label>
              <Select
                value={settings.countryCode || ""}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, countryCode: value }))
                }
              >
                <SelectTrigger id="countryCode">
                  <SelectValue placeholder="Selecciona un país" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((country:any) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reset Password */}
            <div className="pt-4 border-t border-gray-100">
              <Button
                variant="outline"
                onClick={handleResetPassword}
                className="w-full text-gray-600 hover:text-gray-800"
              >
                Opción de restablecer tu contraseña
              </Button>
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <Button onClick={handleSave} className={`w-full bg-${activeColor}-500 hover:bg-${activeColor}-600`}>
                Guardar cambios
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "team" && (
        <GearForm
        initialData={initialEquipment}
        onSave={handleSaveEquipment}
        loading={createMutation.isPending || updateMutation.isPending || isLoading}
      />
      )}

      {activeTab === "pricing" && (
        <PricingForm/>
      )}
    </div>
  )
}
