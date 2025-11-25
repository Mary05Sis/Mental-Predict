import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stats = {
  totalInstances: 27901,
  depressionPositive: 16336,
  depressionNegative: 11565,
  ageRange: { min: 18, max: 59, mean: 27.4 },
  cgpaRange: { min: 0, max: 10, mean: 6.8 },
  academicPressure: { mean: 3.2, mode: 4 },
  financialStress: { mean: 3.1, mode: 3 },
}

export function DatasetStats() {
  const depressionRate = (stats.depressionPositive / stats.totalInstances) * 100

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Depresión</CardTitle>
          <CardDescription>Variable objetivo del modelo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Con Depresión (1)</span>
              <span className="text-sm font-medium">
                {stats.depressionPositive.toLocaleString()} ({depressionRate.toFixed(1)}%)
              </span>
            </div>
            <Progress value={depressionRate} className="h-3" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Sin Depresión (0)</span>
              <span className="text-sm font-medium">
                {stats.depressionNegative.toLocaleString()} ({(100 - depressionRate).toFixed(1)}%)
              </span>
            </div>
            <Progress value={100 - depressionRate} className="h-3 [&>div]:bg-slate-400" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estadísticas de Edad</CardTitle>
          <CardDescription>Distribución etaria de estudiantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-teal-700">{stats.ageRange.min}</div>
              <div className="text-sm text-slate-600">Mínima</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-teal-700">{stats.ageRange.mean}</div>
              <div className="text-sm text-slate-600">Media</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-teal-700">{stats.ageRange.max}</div>
              <div className="text-sm text-slate-600">Máxima</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CGPA (Promedio Académico)</CardTitle>
          <CardDescription>Rendimiento académico de estudiantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-100 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-700">{stats.cgpaRange.min}</div>
              <div className="text-sm text-slate-600">Mínimo</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-700">{stats.cgpaRange.mean}</div>
              <div className="text-sm text-slate-600">Media</div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-700">{stats.cgpaRange.max}</div>
              <div className="text-sm text-slate-600">Máximo</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Factores de Estrés</CardTitle>
          <CardDescription>Niveles promedio de presión</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Presión Académica</span>
              <span className="text-sm font-medium">{stats.academicPressure.mean}/5</span>
            </div>
            <Progress value={(stats.academicPressure.mean / 5) * 100} className="h-3 [&>div]:bg-orange-500" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-600">Estrés Financiero</span>
              <span className="text-sm font-medium">{stats.financialStress.mean}/5</span>
            </div>
            <Progress value={(stats.financialStress.mean / 5) * 100} className="h-3 [&>div]:bg-red-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
