import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TreeDeciduous, CheckCircle, XCircle } from "lucide-react"

export function ModelJ48() {
  const metrics = {
    accuracy: 76.25,
    kappa: 0.5052,
    mae: 0.3429,
    rmse: 0.4145,
    rocArea: 0.8,
    class0: { precision: 0.731, recall: 0.676, f1: 0.702 },
    class1: { precision: 0.782, recall: 0.824, f1: 0.803 },
    confusionMatrix: {
      tp: 13462,
      fn: 2874,
      fp: 3752,
      tn: 7813,
    },
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TreeDeciduous className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <CardTitle>Árbol de Decisión J48</CardTitle>
              <CardDescription>Algoritmo de clasificación basado en ganancia de información</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            El modelo J48 fue entrenado con validación cruzada de 10 folds sobre 27,901 instancias. Destaca por su alta
            interpretabilidad, permitiendo visualizar las reglas de decisión.
          </p>
          <div className="flex gap-2">
            <Badge variant="outline">Confidence Factor: 0.25</Badge>
            <Badge variant="outline">MinNumObj: 2</Badge>
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
            <Progress value={metrics.accuracy} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{metrics.kappa}</div>
              <div className="text-xs text-slate-500">Kappa</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-slate-700">{metrics.rocArea}</div>
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
