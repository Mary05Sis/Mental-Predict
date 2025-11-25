"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

const depressionByGender = [
  { name: "Masculino", conDepresion: 8234, sinDepresion: 5891 },
  { name: "Femenino", conDepresion: 8102, sinDepresion: 5674 },
]

const sleepDuration = [
  { name: "<5 horas", value: 4185, color: "#ef4444" },
  { name: "5-6 horas", value: 8371, color: "#f97316" },
  { name: "7-8 horas", value: 11161, color: "#22c55e" },
  { name: ">8 horas", value: 4184, color: "#3b82f6" },
]

const dietaryHabits = [
  { name: "Saludable", value: 6975 },
  { name: "Moderado", value: 13951 },
  { name: "No saludable", value: 5580 },
  { name: "Otros", value: 1395 },
]

const COLORS = ["#0d9488", "#14b8a6", "#5eead4", "#99f6e4"]

export function DatasetCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Depresión por Género</CardTitle>
          <CardDescription>Distribución de casos de depresión según sexo del estudiante</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={depressionByGender}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="conDepresion" name="Con Depresión" fill="#0d9488" />
              <Bar dataKey="sinDepresion" name="Sin Depresión" fill="#94a3b8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Duración del Sueño</CardTitle>
          <CardDescription>Distribución de horas de sueño diarias</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sleepDuration}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {sleepDuration.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hábitos Alimenticios</CardTitle>
          <CardDescription>Patrones de alimentación de estudiantes</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dietaryHabits} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="value" fill="#0d9488" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
