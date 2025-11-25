import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trees, TrendingUp } from "lucide-react"

export function ModelRandomForest() {
  const regressionMetrics = {
    correlation: 0.91,
    r2: 0.83,
    mae: 0.115,
    rmse: 0.162,
  }

  const classificationMetrics = {
    accuracy: 79.46,
    correlation: 0.5961,
    mae: 0.318,
    rmse: 0.396,
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Trees className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <CardTitle>Random Forest</CardTitle>
              <CardDescription>Ensamble de árboles de decisión con bagging</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            Random Forest combina múltiples árboles de decisión entrenados con subconjuntos aleatorios. Se utilizó tanto
            para clasificación (Depression) como para regresión (Academic Pressure).
          </p>
          <div className="flex gap-2">
            <Badge variant="outline">100 árboles</Badge>
            <Badge variant="outline">maxDepth: 10</Badge>
            <Badge variant="outline">Bootstrap Aggregating</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Regresión: Academic Pressure
          </CardTitle>
          <CardDescription>Predicción del nivel de presión académica</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Coeficiente R²</span>
              <span className="text-sm font-medium text-emerald-600">{(regressionMetrics.r2 * 100).toFixed(0)}%</span>
            </div>
            <Progress value={regressionMetrics.r2 * 100} className="h-2 [&>div]:bg-emerald-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-emerald-700">{regressionMetrics.correlation}</div>
              <div className="text-xs text-slate-500">Correlación</div>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-emerald-700">{regressionMetrics.r2}</div>
              <div className="text-xs text-slate-500">R²</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{regressionMetrics.mae}</div>
              <div className="text-xs text-slate-500">MAE</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{regressionMetrics.rmse}</div>
              <div className="text-xs text-slate-500">RMSE</div>
            </div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg">
            <p className="text-sm text-emerald-700">
              El modelo explica el 83% de la variabilidad de la presión académica.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clasificación: Depression</CardTitle>
          <CardDescription>Predicción binaria de depresión</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Accuracy</span>
              <span className="text-sm font-medium">{classificationMetrics.accuracy}%</span>
            </div>
            <Progress value={classificationMetrics.accuracy} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{classificationMetrics.correlation}</div>
              <div className="text-xs text-slate-500">Correlación</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{classificationMetrics.mae}</div>
              <div className="text-xs text-slate-500">MAE</div>
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">Random Forest supera a J48 en precisión y menor sobreajuste.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Factores más Influyentes</CardTitle>
          <CardDescription>Variables con mayor peso en la predicción</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Financial Stress", desc: "Estrés financiero", importance: 85 },
              { name: "Sleep Duration", desc: "Duración del sueño", importance: 78 },
              { name: "Study Satisfaction", desc: "Satisfacción de estudio", importance: 72 },
              { name: "CGPA", desc: "Promedio académico", importance: 68 },
            ].map((factor) => (
              <div key={factor.name} className="p-4 bg-slate-50 rounded-lg">
                <div className="font-medium text-slate-800 mb-1">{factor.name}</div>
                <div className="text-xs text-slate-500 mb-2">{factor.desc}</div>
                <Progress value={factor.importance} className="h-1.5" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
