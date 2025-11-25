import Link from "next/link"
import { Brain, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModelJ48 } from "@/components/model-j48"
import { ModelNaiveBayes } from "@/components/model-naive-bayes"
import { ModelKNN } from "@/components/model-knn"
import { ModelRandomForest } from "@/components/model-random-forest"

export default function ModelosPage() {
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
            <Link href="/dataset" className="text-slate-600 hover:text-teal-600 font-medium">
              Dataset
            </Link>
            <Link href="/modelos" className="text-teal-600 font-medium">
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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Modelos de Machine Learning</h1>
          <p className="text-slate-600">
            Comparativa de algoritmos de clasificación para predicción de depresión estudiantil.
          </p>
        </div>

        <Tabs defaultValue="j48" className="space-y-6">
          <TabsList className="bg-white grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="j48">J48</TabsTrigger>
            <TabsTrigger value="naive-bayes">Naive Bayes</TabsTrigger>
            <TabsTrigger value="knn">KNN</TabsTrigger>
            <TabsTrigger value="random-forest">Random Forest</TabsTrigger>
          </TabsList>

          <TabsContent value="j48">
            <ModelJ48 />
          </TabsContent>

          <TabsContent value="naive-bayes">
            <ModelNaiveBayes />
          </TabsContent>

          <TabsContent value="knn">
            <ModelKNN />
          </TabsContent>

          <TabsContent value="random-forest">
            <ModelRandomForest />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
