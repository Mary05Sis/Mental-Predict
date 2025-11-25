import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PredictionForm } from "@/components/prediction-form"

export default function PredecirPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Evaluación de Bienestar Mental</h1>
          <p className="text-slate-600">
            Complete el formulario con sus datos para obtener una evaluación del riesgo de depresión y recomendaciones
            personalizadas para mejorar su bienestar.
          </p>
        </div>

        <PredictionForm />
      </div>

      <footer className="bg-slate-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-1">Si necesitas ayuda urgente, llama a la Línea 113 del MINSA</p>
          <p className="text-teal-400 font-bold text-xl">113</p>
        </div>
      </footer>
    </div>
  )
}
