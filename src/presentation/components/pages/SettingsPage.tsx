import { useEffect, useState } from "react"
import { Mail, Camera } from "lucide-react"
import { useAuth } from "@/application/contexts/AuthContext"
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { Label } from "@/presentation/components/atoms/Label"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import { Badge } from "@/presentation/components/atoms/Badge"
import { GearForm } from "@/presentation/components/molecules/GearForm"
import { PricingForm } from "@/presentation/components/molecules/PricingForm"

interface UserSettings {
  profilePhoto: string
  username: string
  fullName: string
  email: string
  selectedLanguages: string[]
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const { logout, user } = useAuth()
  const userRole = user?.role
  let tabs = [{ id: "general", label: "Información general" }]
  if (userRole === "photographer") {
    tabs.push({ id: "team", label: "Equipo" })
    tabs.push({ id: "pricing", label: "Tarifas" })
  }

  const activeColor = userRole === "photographer" ? "orange" : "blue"

  const [settings, setSettings] = useState<UserSettings>({
    profilePhoto: "",
    username: "usuario1",
    fullName: "you@email.com",
    email: "you@email.com",
    selectedLanguages: ["Badge-lg"],
  })

  const availableLanguages = ["Badge-lg", "Badge-lg", "Badge-lg"]

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

  const handleSave = () => {
    console.log("Saving settings:", settings)
    // Aquí implementarías la lógica para guardar los cambios
  }

  const handleResetPassword = () => {
    console.log("Reset password requested")
    // Aquí implementarías la lógica para restablecer contraseña
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
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Foto de perfil</Label>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-16 w-16 bg-gray-100">
                    <AvatarImage src={settings.profilePhoto || "/placeholder.svg"} alt="Profile" />
                    <AvatarFallback className="text-xl font-medium text-gray-600">A</AvatarFallback>
                  </Avatar>
                  <button className={`absolute -bottom-1 -right-1 h-6 w-6 bg-${activeColor}-500 rounded-full flex items-center justify-center text-white hover:bg-${activeColor}-600`}>
                    <Camera className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Nombre de usuario (Apodo)
              </Label>
              <Input
                id="username"
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
        <GearForm/>
      )}

      {activeTab === "pricing" && (
        <PricingForm/>
      )}
    </div>
  )
}
