import Link from "next/link"
import { Heart, Phone, MapPin, Clock, ArrowLeft, AlertCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const centrosAyuda = [
  {
    nombre: "Hospital Regional Docente de Trujillo",
    tipo: "Hospital Público",
    direccion: "Av. Mansiche 795, Trujillo",
    telefono: "(044) 231581",
    horario: "24 horas - Emergencias",
    servicios: ["Psiquiatría", "Psicología", "Emergencias de Salud Mental"],
    descripcion: "Cuenta con servicio de psiquiatría y atención de emergencias de salud mental las 24 horas.",
  },
  {
    nombre: "Centro de Salud Mental Comunitario Trujillo",
    tipo: "Centro Público MINSA",
    direccion: "Jr. Independencia 562, Trujillo",
    telefono: "(044) 242720",
    horario: "Lunes a Viernes: 8:00 - 17:00",
    servicios: ["Consulta Psicológica", "Terapia Individual", "Terapia Grupal", "Atención a Universitarios"],
    descripcion: "Centro especializado en salud mental comunitaria con atención gratuita o a bajo costo.",
  },
  {
    nombre: "Consultorio Psicológico UPAO",
    tipo: "Servicio Universitario",
    direccion: "Campus UPAO, Av. América Sur 3145",
    telefono: "(044) 604444 Anexo 2250",
    horario: "Lunes a Viernes: 8:00 - 18:00",
    servicios: ["Atención a Estudiantes UPAO", "Orientación Psicológica", "Talleres de Bienestar"],
    descripcion: "Servicio gratuito para estudiantes de la Universidad Privada Antenor Orrego.",
  },
  {
    nombre: "Centro Psicológico Renacer",
    tipo: "Centro Privado",
    direccion: "Av. Larco 724, Urb. San Andrés, Trujillo",
    telefono: "(044) 295840",
    horario: "Lunes a Sábado: 9:00 - 20:00",
    servicios: ["Terapia Cognitivo-Conductual", "Terapia para Ansiedad", "Tratamiento de Depresión"],
    descripcion: "Centro especializado con psicólogos certificados en tratamiento de depresión y ansiedad.",
  },
  {
    nombre: "Psicología Clínica - Dra. María Elena Rodríguez",
    tipo: "Consultorio Privado",
    direccion: "Jr. Pizarro 538, Of. 302, Trujillo Centro",
    telefono: "976 542 318",
    horario: "Lunes a Viernes: 10:00 - 19:00",
    servicios: ["Atención Individual", "Terapia para Estudiantes", "Consulta Online"],
    descripcion: "Especialista en atención a jóvenes universitarios con problemas de estrés académico y depresión.",
  },
  {
    nombre: "Instituto Guestalt de Trujillo",
    tipo: "Centro Privado",
    direccion: "Av. Húsares de Junín 890, Urb. La Merced",
    telefono: "(044) 224466",
    horario: "Lunes a Sábado: 8:00 - 21:00",
    servicios: ["Terapia Gestalt", "Grupos de Apoyo", "Talleres de Autoestima"],
    descripcion: "Centro con enfoque humanista especializado en terapia grupal y desarrollo personal.",
  },
]

const lineasEmergencia = [
  {
    nombre: "Línea 113 - MINSA",
    numero: "113",
    descripcion: "Línea gratuita del Ministerio de Salud para orientación en salud mental",
    disponibilidad: "24 horas",
  },
  {
    nombre: "Línea 0800-00-113",
    numero: "0800-00-113",
    descripcion: "Línea gratuita de atención de crisis y prevención del suicidio",
    disponibilidad: "24 horas",
  },
  {
    nombre: "Chat de Apoyo Emocional MINSA",
    numero: "WhatsApp: 952 842 623",
    descripcion: "Servicio de chat para quienes prefieren escribir en lugar de llamar",
    disponibilidad: "24 horas",
  },
]

export default function AyudaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Header */}
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
        {/* Título y mensaje */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Centros de Ayuda en Trujillo</h1>
          <p className="text-lg text-slate-600">
            Recuerda que buscar ayuda profesional es un paso importante hacia tu bienestar. Aquí encontrarás recursos y
            profesionales capacitados para apoyarte.
          </p>
        </div>

        {/* Líneas de Emergencia */}
        <div className="mb-12">
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertCircle className="h-6 w-6" />
                Líneas de Emergencia - Disponibles 24/7
              </CardTitle>
              <CardDescription className="text-red-600">
                Si estás en una situación de crisis, no dudes en llamar. Hay personas capacitadas esperando para
                ayudarte.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {lineasEmergencia.map((linea) => (
                  <div key={linea.nombre} className="bg-white rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-1">{linea.nombre}</h3>
                    <p className="text-2xl font-bold text-teal-600 mb-2">{linea.numero}</p>
                    <p className="text-sm text-slate-600 mb-1">{linea.descripcion}</p>
                    <p className="text-xs text-teal-600 font-medium">{linea.disponibilidad}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Centros */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Centros y Profesionales en Trujillo</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {centrosAyuda.map((centro) => (
            <Card key={centro.nombre} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block bg-teal-100 text-teal-700 text-xs font-medium px-2 py-1 rounded mb-2">
                      {centro.tipo}
                    </span>
                    <CardTitle className="text-xl">{centro.nombre}</CardTitle>
                  </div>
                </div>
                <CardDescription>{centro.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{centro.direccion}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    <span className="text-teal-600 font-medium">{centro.telefono}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-600">{centro.horario}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-slate-500 mb-2">Servicios:</p>
                    <div className="flex flex-wrap gap-2">
                      {centro.servicios.map((servicio) => (
                        <span key={servicio} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                          {servicio}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mensaje final */}
        <Card className="bg-teal-600 text-white border-0">
          <CardContent className="py-8">
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Tu bienestar mental importa</h3>
              <p className="text-teal-100 mb-6">
                No tienes que enfrentar esto solo. Dar el primer paso y buscar ayuda es un acto de fortaleza. Los
                profesionales de salud mental están capacitados para escucharte sin juzgarte y ayudarte a encontrar el
                camino hacia el bienestar.
              </p>
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <Link href="/predecir">
                  Realizar mi evaluación
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-2">
            Si necesitas ayuda urgente, llama a la Línea 113 del Ministerio de Salud
          </p>
          <p className="text-teal-400 font-bold text-xl">113</p>
        </div>
      </footer>
    </div>
  )
}
