import Link from "next/link"
import { Brain, ArrowLeft, Database, Hash, Type, Binary } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DatasetStats } from "@/components/dataset-stats"
import { DatasetCharts } from "@/components/dataset-charts"

const attributes = [
  { name: "Gender", description: "Sexo del estudiante", type: "Nominal", values: "Male, Female" },
  { name: "Age", description: "Edad del estudiante en años", type: "Numérico", values: "18-59" },
  { name: "Profession", description: "Área de estudio o profesión", type: "Nominal", values: "14 categorías" },
  {
    name: "Academic Pressure",
    description: "Nivel de presión académica percibida",
    type: "Discreto",
    values: "Escala 0-5",
  },
  { name: "Work Pressure", description: "Nivel de presión laboral percibida", type: "Discreto", values: "Escala 0-5" },
  { name: "CGPA", description: "Promedio ponderado acumulado", type: "Continuo", values: "0-10" },
  {
    name: "Study Satisfaction",
    description: "Grado de satisfacción con los estudios",
    type: "Discreto",
    values: "Escala 0-5",
  },
  {
    name: "Job Satisfaction",
    description: "Grado de satisfacción con el empleo",
    type: "Discreto",
    values: "Escala 0-4",
  },
  {
    name: "Sleep Duration",
    description: "Promedio de horas de sueño diario",
    type: "Nominal",
    values: "<5h, 5-6h, 7-8h, >8h",
  },
  {
    name: "Dietary Habits",
    description: "Patrones de alimentación",
    type: "Nominal",
    values: "Healthy, Moderate, Unhealthy, Others",
  },
  { name: "Degree", description: "Programa académico cursado", type: "Nominal", values: "28 categorías" },
  {
    name: "Work/Study Hours",
    description: "Horas diarias de trabajo/estudio",
    type: "Discreto",
    values: "0-12 horas/día",
  },
  { name: "Financial Stress", description: "Nivel de estrés financiero", type: "Discreto", values: "Escala 1-5" },
  {
    name: "Family History of Mental Illness",
    description: "Antecedentes familiares de enfermedad mental",
    type: "Binario",
    values: "Yes, No",
  },
  {
    name: "Depression",
    description: "Variable objetivo - presencia de depresión",
    type: "Binario",
    values: "0 = No, 1 = Sí",
  },
]

export default function DatasetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-teal-600" />
            <span className="font-bold text-xl text-slate-800">MentalPredict</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-teal-600 font-medium">
              Inicio
            </Link>
            <Link href="/dataset" className="text-teal-600 font-medium">
              Dataset
            </Link>
            <Link href="/modelos" className="text-slate-600 hover:text-teal-600 font-medium">
              Modelos
            </Link>
            <Link href="/predecir" className="text-slate-600 hover:text-teal-600 font-medium">
              Predicción
            </Link>
          </nav>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/predecir">Hacer Predicción</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dataset de Estudiantes</h1>
          <p className="text-slate-600">
            Conjunto de datos con 27,901 instancias y 15 atributos relacionados con factores de depresión.
          </p>
        </div>

        <Tabs defaultValue="atributos" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="atributos">Atributos</TabsTrigger>
            <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
            <TabsTrigger value="visualizaciones">Visualizaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="atributos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-teal-600" />
                  Descripción de Atributos
                </CardTitle>
                <CardDescription>
                  15 variables seleccionadas tras excluir id, City y "Have you ever had suicidal thoughts?"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="text-left p-3 font-semibold text-slate-700">Atributo</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Descripción</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Tipo</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Valores</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attributes.map((attr, index) => (
                        <tr key={attr.name} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-3 font-medium text-slate-900">{attr.name}</td>
                          <td className="p-3 text-slate-600">{attr.description}</td>
                          <td className="p-3">
                            <Badge
                              variant={
                                attr.type === "Nominal"
                                  ? "default"
                                  : attr.type === "Binario"
                                    ? "destructive"
                                    : attr.type === "Continuo"
                                      ? "secondary"
                                      : "outline"
                              }
                            >
                              {attr.type === "Nominal" && <Type className="mr-1 h-3 w-3" />}
                              {attr.type === "Binario" && <Binary className="mr-1 h-3 w-3" />}
                              {(attr.type === "Discreto" || attr.type === "Continuo") && (
                                <Hash className="mr-1 h-3 w-3" />
                              )}
                              {attr.type}
                            </Badge>
                          </td>
                          <td className="p-3 text-slate-600">{attr.values}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="estadisticas">
            <DatasetStats />
          </TabsContent>

          <TabsContent value="visualizaciones">
            <DatasetCharts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
