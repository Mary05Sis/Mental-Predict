"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Heart, Mail, ArrowLeft, CheckCircle, Sparkles, Sun, Star, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    riskLevel: "",
    frequency: "diario",
    acceptTerms: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)
    setLoading(false)
  }

  const isFormValid = formData.nombre && formData.email && formData.riskLevel && formData.acceptTerms

  // Mensajes de ejemplo según nivel de riesgo
  const sampleMessages: Record<string, string[]> = {
    bajo: [
      "Buenos días! Hoy es un gran día para agradecer las pequeñas cosas. Tu equilibrio emocional es tu fortaleza.",
      "Recuerda: mantener tus hábitos saludables es la mejor inversión en ti mismo. Sigue así!",
      "Cada día que cuidas tu bienestar, construyes un futuro más brillante. Estás en el camino correcto.",
    ],
    moderado: [
      "Hoy es un nuevo comienzo. Aunque sientas presión, recuerda que eres más fuerte de lo que crees.",
      "Tip del día: dedica 10 minutos a respirar profundo. Tu mente te lo agradecerá.",
      "No tienes que ser perfecto, solo tienes que ser tú. Y eso ya es suficiente.",
    ],
    alto: [
      "Sabemos que hay días difíciles, pero cada amanecer trae nuevas oportunidades. No estás solo en esto.",
      "Hoy te invitamos a hacer una cosa que te haga feliz, por pequeña que sea. Te lo mereces.",
      "Recuerda: pedir ayuda es un acto de valentía. Estamos aquí contigo en cada paso.",
    ],
    "muy alto": [
      "Queremos que sepas que importas. Cada día que avanzas es una victoria. Estamos orgullosos de ti.",
      "Hoy, simplemente respira. Un paso a la vez. Y recuerda: buscar ayuda profesional es el acto más valiente.",
      "No tienes que cargar con todo solo. Hay personas que quieren ayudarte. La Línea 113 está disponible 24/7.",
    ],
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
        {/* Header simple */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="font-bold text-xl text-slate-800">MentalPredict</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Registro Exitoso</h1>
            <p className="text-lg text-slate-600 mb-8">
              Gracias por registrarte, <span className="font-semibold text-teal-600">{formData.nombre}</span>. Pronto
              comenzarás a recibir mensajes de apoyo y superación en tu correo electrónico.
            </p>

            <Card className="bg-teal-50 border-teal-200 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-teal-700 mb-3">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">Tu primer mensaje de ejemplo:</span>
                </div>
                <p className="text-slate-700 italic">
                  "{sampleMessages[formData.riskLevel]?.[0] || sampleMessages.moderado[0]}"
                </p>
              </CardContent>
            </Card>

            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Header simple */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-teal-600" />
            <span className="font-bold text-xl text-slate-800">MentalPredict</span>
          </Link>
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Título */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Mail className="h-4 w-4" />
              Apoyo personalizado
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recibe Mensajes de Superación</h1>
            <p className="text-lg text-slate-600">
              Regístrate para recibir mensajes positivos y personalizados según tu situación. Te acompañamos en tu
              camino hacia el bienestar.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Formulario */}
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-teal-600" />
                  Formulario de Registro
                </CardTitle>
                <CardDescription>Completa tus datos para comenzar a recibir mensajes de apoyo</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre o Apodo</Label>
                    <Input
                      id="nombre"
                      placeholder="¿Cómo te gustaría que te llamemos?"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="riskLevel">¿Cómo te has sentido últimamente?</Label>
                    <Select
                      value={formData.riskLevel}
                      onValueChange={(v) => setFormData({ ...formData, riskLevel: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bajo">Me siento bien en general</SelectItem>
                        <SelectItem value="moderado">Tengo algunos días difíciles</SelectItem>
                        <SelectItem value="alto">Estoy pasando por un momento complicado</SelectItem>
                        <SelectItem value="muy alto">Necesito mucho apoyo ahora mismo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="frequency">¿Con qué frecuencia te gustaría recibir mensajes?</Label>
                    <Select
                      value={formData.frequency}
                      onValueChange={(v) => setFormData({ ...formData, frequency: v })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diario">Diariamente</SelectItem>
                        <SelectItem value="semanal">Semanalmente</SelectItem>
                        <SelectItem value="quincenal">Cada 15 días</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                    />
                    <label htmlFor="terms" className="text-sm text-slate-600 leading-tight">
                      Acepto recibir mensajes de apoyo y entiendo que puedo cancelar en cualquier momento. Mi
                      información será tratada de forma confidencial.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 h-12"
                    disabled={!isFormValid || loading}
                  >
                    {loading ? (
                      "Registrando..."
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Registrarme
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Panel lateral - Ejemplos de mensajes */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Ejemplos de mensajes que recibirás:
              </h3>

              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Sun className="h-5 w-5 text-amber-600 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      "Buenos días! Hoy es un nuevo comienzo lleno de posibilidades. Recuerda que cada pequeño paso
                      cuenta."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-teal-600 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      "Tip del día: Dedica 5 minutos a respirar profundo. Inhala calma, exhala preocupaciones. Tu mente
                      te lo agradecerá."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      "Recuerda: No tienes que ser perfecto. Solo tienes que ser tú. Y eso ya es más que suficiente."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-slate-100 rounded-lg p-4 text-sm text-slate-600">
                <p className="font-medium text-slate-700 mb-1">Importante:</p>
                <p>
                  Estos mensajes son un complemento de apoyo, no reemplazan la ayuda profesional. Si necesitas atención
                  urgente, llama al <span className="font-bold text-teal-600">113</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
