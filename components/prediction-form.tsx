"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  AlertTriangle,
  CheckCircle,
  Loader2,
  User,
  GraduationCap,
  Briefcase,
  Heart,
  Phone,
  Sun,
  Moon,
  Utensils,
  Users,
  Dumbbell,
  BookOpen,
  Music,
  Trees as Tree,
} from "lucide-react"

interface FormData {
  gender: string
  age: number
  profession: string
  academicPressure: number
  workPressure: number
  cgpa: number
  studySatisfaction: number
  jobSatisfaction: number
  sleepDuration: string
  dietaryHabits: string
  degree: string
  workStudyHours: number
  financialStress: number
  familyHistory: string
}

const initialFormData: FormData = {
  gender: "",
  age: 22,
  profession: "",
  academicPressure: 3,
  workPressure: 2,
  cgpa: 7.0,
  studySatisfaction: 3,
  jobSatisfaction: 2,
  sleepDuration: "",
  dietaryHabits: "",
  degree: "",
  workStudyHours: 6,
  financialStress: 3,
  familyHistory: "",
}

const professions = [
  "Ingeniería de Sistemas",
  "Medicina",
  "Derecho",
  "Psicología",
  "Arquitectura",
  "Contabilidad",
  "Administración",
  "Enfermería",
  "Comunicaciones",
  "Educación",
  "Ingeniería Civil",
  "Biología",
  "Química",
  "Economía",
]

const degrees = ["Pregrado", "Maestría", "Doctorado", "Técnico Superior", "Especialización"]

interface Recommendation {
  icon: React.ReactNode
  title: string
  description: string
  priority: "alta" | "media" | "baja"
}

function getRecommendations(formData: FormData, riskLevel: string): Recommendation[] {
  const recommendations: Recommendation[] = []

  // Recomendaciones basadas en sueño
  if (formData.sleepDuration === "<5h" || formData.sleepDuration === "5-6h") {
    recommendations.push({
      icon: <Moon className="h-5 w-5" />,
      title: "Mejora tu higiene del sueño",
      description:
        "Intenta dormir 7-8 horas diarias. Establece una rutina: acuéstate y levántate a la misma hora, evita pantallas 1 hora antes de dormir.",
      priority: "alta",
    })
  }

  // Recomendaciones basadas en estrés financiero
  if (formData.financialStress >= 4) {
    recommendations.push({
      icon: <BookOpen className="h-5 w-5" />,
      title: "Busca apoyo financiero",
      description:
        "Consulta becas y apoyos económicos en tu universidad. El área de bienestar estudiantil puede orientarte sobre opciones disponibles.",
      priority: "alta",
    })
  }

  // Recomendaciones basadas en presión académica
  if (formData.academicPressure >= 4) {
    recommendations.push({
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Gestiona tu carga académica",
      description:
        "Habla con tus profesores o tutor académico sobre tu situación. Considera técnicas como Pomodoro y divide las tareas grandes en pasos pequeños.",
      priority: "alta",
    })
  }

  // Recomendaciones basadas en hábitos alimenticios
  if (formData.dietaryHabits === "Unhealthy") {
    recommendations.push({
      icon: <Utensils className="h-5 w-5" />,
      title: "Cuida tu alimentación",
      description:
        "Una dieta balanceada impacta directamente en tu estado de ánimo. Incluye frutas, verduras y evita el exceso de comida procesada y azúcares.",
      priority: "media",
    })
  }

  // Actividades físicas siempre recomendadas
  recommendations.push({
    icon: <Dumbbell className="h-5 w-5" />,
    title: "Incorpora actividad física",
    description:
      "30 minutos de ejercicio moderado (caminar, trotar, bailar) libera endorfinas que mejoran naturalmente tu estado de ánimo.",
    priority: riskLevel === "Muy Alto" || riskLevel === "Alto" ? "alta" : "media",
  })

  // Actividades sociales
  recommendations.push({
    icon: <Users className="h-5 w-5" />,
    title: "Mantén conexiones sociales",
    description:
      "No te aísles. Dedica tiempo a familiares y amigos de confianza. Compartir cómo te sientes puede aliviar la carga emocional.",
    priority: "media",
  })

  // Actividades de relajación
  recommendations.push({
    icon: <Music className="h-5 w-5" />,
    title: "Practica técnicas de relajación",
    description:
      "Dedica 10-15 minutos diarios a respiración profunda, meditación guiada (apps como Calm o Headspace) o escucha música que te relaje.",
    priority: "media",
  })

  // Contacto con naturaleza
  recommendations.push({
    icon: <Tree className="h-5 w-5" />,
    title: "Conecta con la naturaleza",
    description:
      "Pasar tiempo al aire libre reduce el cortisol (hormona del estrés). Visita parques, camina por áreas verdes o simplemente toma sol 15 minutos.",
    priority: "baja",
  })

  // Rutina matutina
  recommendations.push({
    icon: <Sun className="h-5 w-5" />,
    title: "Crea una rutina matutina positiva",
    description:
      "Empieza el día con algo que disfrutes: estiramiento, desayuno tranquilo, o escribe 3 cosas por las que estés agradecido.",
    priority: "baja",
  })

  // Si el riesgo es alto, agregar recomendación de ayuda profesional
  if (riskLevel === "Muy Alto" || riskLevel === "Alto") {
    recommendations.unshift({
      icon: <Phone className="h-5 w-5" />,
      title: "Busca ayuda profesional",
      description:
        "Te recomendamos contactar a un profesional de salud mental. No tienes que enfrentar esto solo. Revisa nuestros centros de ayuda en Trujillo.",
      priority: "alta",
    })
  }

  return recommendations
}

export function PredictionForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [result, setResult] = useState<{ risk: number; level: string; color: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handlePredict = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    let riskScore = 0

    // Financial Stress (más influyente según Random Forest)
    riskScore += (formData.financialStress / 5) * 25

    // Sleep Duration
    if (formData.sleepDuration === "<5h") riskScore += 20
    else if (formData.sleepDuration === "5-6h") riskScore += 12
    else if (formData.sleepDuration === "7-8h") riskScore += 5
    else if (formData.sleepDuration === ">8h") riskScore += 8

    // Study Satisfaction (inverso)
    riskScore += ((5 - formData.studySatisfaction) / 5) * 15

    // Academic Pressure
    riskScore += (formData.academicPressure / 5) * 15

    // CGPA (inverso)
    riskScore += ((10 - formData.cgpa) / 10) * 10

    // Work/Study Hours
    if (formData.workStudyHours > 10) riskScore += 8
    else if (formData.workStudyHours > 8) riskScore += 5

    // Family History
    if (formData.familyHistory === "Yes") riskScore += 10

    // Dietary Habits
    if (formData.dietaryHabits === "Unhealthy") riskScore += 5
    else if (formData.dietaryHabits === "Moderate") riskScore += 2

    riskScore = Math.min(100, Math.max(0, riskScore))

    let level = ""
    let color = ""

    if (riskScore < 30) {
      level = "Bajo"
      color = "green"
    } else if (riskScore < 50) {
      level = "Moderado"
      color = "yellow"
    } else if (riskScore < 70) {
      level = "Alto"
      color = "orange"
    } else {
      level = "Muy Alto"
      color = "red"
    }

    setResult({ risk: Math.round(riskScore), level, color })
    setLoading(false)
  }

  const isFormComplete =
    formData.gender &&
    formData.profession &&
    formData.sleepDuration &&
    formData.dietaryHabits &&
    formData.degree &&
    formData.familyHistory

  const recommendations = result ? getRecommendations(formData, result.level) : []

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Datos Demográficos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-teal-600" />
              Datos Demográficos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Género</Label>
              <Select value={formData.gender} onValueChange={(v) => setFormData({ ...formData, gender: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Masculino</SelectItem>
                  <SelectItem value="Female">Femenino</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Edad: {formData.age} años</Label>
              <Slider
                value={[formData.age]}
                onValueChange={([v]) => setFormData({ ...formData, age: v })}
                min={18}
                max={59}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Profesión/Carrera</Label>
              <Select value={formData.profession} onValueChange={(v) => setFormData({ ...formData, profession: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar carrera" />
                </SelectTrigger>
                <SelectContent>
                  {professions.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Grado Académico</Label>
              <Select value={formData.degree} onValueChange={(v) => setFormData({ ...formData, degree: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar grado" />
                </SelectTrigger>
                <SelectContent>
                  {degrees.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Factores Académicos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-teal-600" />
              Factores Académicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Presión Académica: {formData.academicPressure}/5</Label>
              <Slider
                value={[formData.academicPressure]}
                onValueChange={([v]) => setFormData({ ...formData, academicPressure: v })}
                min={0}
                max={5}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>CGPA (Promedio): {formData.cgpa.toFixed(1)}</Label>
              <Slider
                value={[formData.cgpa]}
                onValueChange={([v]) => setFormData({ ...formData, cgpa: v })}
                min={0}
                max={10}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <Label>Satisfacción con Estudios: {formData.studySatisfaction}/5</Label>
              <Slider
                value={[formData.studySatisfaction]}
                onValueChange={([v]) => setFormData({ ...formData, studySatisfaction: v })}
                min={0}
                max={5}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Horas de Estudio/Trabajo diarias: {formData.workStudyHours}h</Label>
              <Slider
                value={[formData.workStudyHours]}
                onValueChange={([v]) => setFormData({ ...formData, workStudyHours: v })}
                min={0}
                max={12}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        {/* Factores Laborales y Financieros */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-teal-600" />
              Factores Laborales y Financieros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Presión Laboral: {formData.workPressure}/5</Label>
              <Slider
                value={[formData.workPressure]}
                onValueChange={([v]) => setFormData({ ...formData, workPressure: v })}
                min={0}
                max={5}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Satisfacción Laboral: {formData.jobSatisfaction}/4</Label>
              <Slider
                value={[formData.jobSatisfaction]}
                onValueChange={([v]) => setFormData({ ...formData, jobSatisfaction: v })}
                min={0}
                max={4}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Estrés Financiero: {formData.financialStress}/5</Label>
              <Slider
                value={[formData.financialStress]}
                onValueChange={([v]) => setFormData({ ...formData, financialStress: v })}
                min={1}
                max={5}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        {/* Estilo de Vida */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-teal-600" />
              Estilo de Vida
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Duración del Sueño</Label>
              <Select
                value={formData.sleepDuration}
                onValueChange={(v) => setFormData({ ...formData, sleepDuration: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<5h">Menos de 5 horas</SelectItem>
                  <SelectItem value="5-6h">5-6 horas</SelectItem>
                  <SelectItem value="7-8h">7-8 horas</SelectItem>
                  <SelectItem value=">8h">Más de 8 horas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Hábitos Alimenticios</Label>
              <Select
                value={formData.dietaryHabits}
                onValueChange={(v) => setFormData({ ...formData, dietaryHabits: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Healthy">Saludable</SelectItem>
                  <SelectItem value="Moderate">Moderado</SelectItem>
                  <SelectItem value="Unhealthy">No saludable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Historial Familiar de Enfermedad Mental</Label>
              <Select
                value={formData.familyHistory}
                onValueChange={(v) => setFormData({ ...formData, familyHistory: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Sí</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botón de Predicción */}
      <div className="mt-8 text-center">
        <Button
          size="lg"
          className="bg-teal-600 hover:bg-teal-700 px-12"
          onClick={handlePredict}
          disabled={!isFormComplete || loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analizando...
            </>
          ) : (
            "Realizar Predicción"
          )}
        </Button>
        {!isFormComplete && (
          <p className="text-sm text-slate-500 mt-2">Complete todos los campos para realizar la predicción</p>
        )}
      </div>

      {/* Resultado */}
      {result && (
        <div className="mt-8 space-y-6">
          <Card
            className={`border-2 ${
              result.color === "green"
                ? "border-green-500 bg-green-50"
                : result.color === "yellow"
                  ? "border-yellow-500 bg-yellow-50"
                  : result.color === "orange"
                    ? "border-orange-500 bg-orange-50"
                    : "border-red-500 bg-red-50"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center text-2xl">
                {result.color === "green" ? (
                  <CheckCircle className="h-8 w-8 text-green-600" />
                ) : (
                  <AlertTriangle
                    className={`h-8 w-8 ${
                      result.color === "yellow"
                        ? "text-yellow-600"
                        : result.color === "orange"
                          ? "text-orange-600"
                          : "text-red-600"
                    }`}
                  />
                )}
                Resultado de la Predicción
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div
                className={`text-6xl font-bold mb-2 ${
                  result.color === "green"
                    ? "text-green-600"
                    : result.color === "yellow"
                      ? "text-yellow-600"
                      : result.color === "orange"
                        ? "text-orange-600"
                        : "text-red-600"
                }`}
              >
                {result.risk}%
              </div>
              <div className="text-xl font-medium text-slate-700 mb-4">
                Riesgo de Depresión: <span className="font-bold">{result.level}</span>
              </div>
              <div className="max-w-xl mx-auto text-slate-600">
                {result.color === "green" && (
                  <p>
                    Los indicadores sugieren un bajo riesgo de depresión. Mantén tus hábitos saludables y equilibrio
                    vida-estudio.
                  </p>
                )}
                {result.color === "yellow" && (
                  <p>
                    Existe un riesgo moderado. Presta atención a las recomendaciones y considera mejorar algunos
                    hábitos.
                  </p>
                )}
                {result.color === "orange" && (
                  <p>
                    El riesgo es elevado. Te recomendamos seguir las actividades sugeridas y considerar buscar apoyo
                    profesional.
                  </p>
                )}
                {result.color === "red" && (
                  <p>
                    El riesgo es muy alto. Por favor, busca ayuda profesional. Recuerda que no estás solo y hay personas
                    capacitadas para ayudarte.
                  </p>
                )}
              </div>

              {/* Botón a centros de ayuda si el riesgo es alto */}
              {(result.color === "orange" || result.color === "red") && (
                <div className="mt-6">
                  <Button asChild className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/ayuda">
                      <Phone className="mr-2 h-4 w-4" />
                      Ver Centros de Ayuda en Trujillo
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-teal-600" />
                Recomendaciones para tu Bienestar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Basándonos en tu evaluación, estas son actividades que pueden ayudarte a mejorar tu salud mental:
              </p>

              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 p-4 rounded-xl ${
                      rec.priority === "alta"
                        ? "bg-teal-50 border-l-4 border-teal-500"
                        : rec.priority === "media"
                          ? "bg-sky-50 border-l-4 border-sky-400"
                          : "bg-slate-50 border-l-4 border-slate-300"
                    }`}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        rec.priority === "alta"
                          ? "bg-teal-100 text-teal-600"
                          : rec.priority === "media"
                            ? "bg-sky-100 text-sky-600"
                            : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {rec.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{rec.title}</h4>
                      <p className="text-slate-600 text-sm">{rec.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-slate-100 rounded-xl text-center">
                <p className="text-slate-600 text-sm">
                  <strong>Recuerda:</strong> Esta herramienta es orientativa y no reemplaza el diagnóstico profesional.
                  Si te sientes abrumado o en crisis, no dudes en buscar ayuda.
                </p>
                <p className="text-teal-600 font-bold mt-2">Línea de ayuda MINSA: 113 (24 horas)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
