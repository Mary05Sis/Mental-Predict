import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, CheckCircle, XCircle } from "lucide-react"

export function ModelKNN() {
  const metrics = {
    accuracy: 78.85,
    kappa: 0.5605,
    mae: 0.2856,
    rmse: 0.3859,
    rocArea: 0.86,
    class0: { precision: 0.765, recall: 0.71, f1: 0.737 },
    class1: { precision: 0.803, recall: 0.845, f1: 0.823 },
    confusionMatrix: {
      tp: 4123,
      fn: 759,
      fp: 1011,
      tn: 2477,
    },
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <CardTitle>K-Nearest Neighbors (KNN)</CardTitle>
              <CardDescription>Clasificación basada en proximidad de instancias</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            KNN (IBk en WEKA) clasifica nuevas instancias según la clase mayoritaria de sus k vecinos más cercanos.
            Presenta alta sensibilidad en la detección de casos positivos de depresión.
          </p>
          <div className="flex gap-2">
            <Badge variant="outline">K = 5</Badge>
            <Badge variant="outline">Distancia Euclidiana</Badge>
            <Badge variant="outline">10-fold CV</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Métricas Generales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Accuracy</span>
              <span className="text-sm font-medium">{metrics.accuracy}%</span>
            </div>
            <Progress value={metrics.accuracy} className="h-2 [&>div]:bg-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-blue-700">{metrics.kappa}</div>
              <div className="text-xs text-slate-500">Kappa</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-blue-700">{metrics.rocArea}</div>
              <div className="text-xs text-slate-500">ROC Area</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{metrics.mae}</div>
              <div className="text-xs text-slate-500">MAE</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{metrics.rmse}</div>
              <div className="text-xs text-slate-500">RMSE</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Desempeño por Clase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="font-medium">Clase 0 (Sin Depresión)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="text-slate-500">Precision:</span> {metrics.class0.precision}
                </div>
                <div>
                  <span className="text-slate-500">Recall:</span> {metrics.class0.recall}
                </div>
                <div>
                  <span className="text-slate-500">F1:</span> {metrics.class0.f1}
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">Clase 1 (Con Depresión)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="text-slate-500">Precision:</span> {metrics.class1.precision}
                </div>
                <div>
                  <span className="text-slate-500">Recall:</span> {metrics.class1.recall}
                </div>
                <div>
                  <span className="text-slate-500">F1:</span> {metrics.class1.f1}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Matriz de Confusión</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
            <div></div>
            <div className="text-center text-sm font-medium text-slate-600">Pred: 0</div>
            <div className="text-center text-sm font-medium text-slate-600">Pred: 1</div>
            <div className="text-sm font-medium text-slate-600 flex items-center">Real: 0</div>
            <div className="bg-green-100 p-4 rounded text-center font-bold text-green-700">
              {metrics.confusionMatrix.tn.toLocaleString()}
            </div>
            <div className="bg-red-100 p-4 rounded text-center font-bold text-red-700">
              {metrics.confusionMatrix.fp.toLocaleString()}
            </div>
            <div className="text-sm font-medium text-slate-600 flex items-center">Real: 1</div>
            <div className="bg-red-100 p-4 rounded text-center font-bold text-red-700">
              {metrics.confusionMatrix.fn.toLocaleString()}
            </div>
            <div className="bg-green-100 p-4 rounded text-center font-bold text-green-700">
              {metrics.confusionMatrix.tp.toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
