import Link from "next/link"
import { Heart, Phone, Brain, Shield, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-teal-600" />
            <span className="font-bold text-xl text-slate-800">MentalPredict</span>
          </div>
        </div>
      </header>

      {/* Hero Section - Imagen de apoyo mental */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Tu bienestar es nuestra prioridad
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                No estás solo. <br />
                <span className="text-teal-600">Estamos aquí para ayudarte.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 text-pretty">
                La salud mental es tan importante como la física. Nuestro sistema de predicción te ayuda a identificar
                señales tempranas y te conectamos con profesionales que pueden apoyarte en tu camino hacia el bienestar.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 h-14 px-8 text-lg">
                    <Link href="/predecir">
                      <Brain className="mr-2 h-5 w-5" />
                      Realizar Predicción
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  >
                    <Link href="/ayuda">
                      <Phone className="mr-2 h-5 w-5" />
                      Centros de Ayuda
                    </Link>
                  </Button>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-sky-500 text-sky-600 hover:bg-sky-50 bg-transparent sm:w-fit sm:mx-auto md:mx-0"
                >
                  <Link href="/registro">
                    <Mail className="mr-2 h-5 w-5" />
                    Recibe Mensajes de Apoyo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagen de apoyo */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-200 rounded-3xl transform rotate-3 opacity-30"></div>
              <div className="relative bg-gradient-to-br from-teal-100 to-sky-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/group-of-diverse-students-supporting-each-other--m.jpg"
                  alt="Estudiantes apoyándose mutuamente"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">+27,901</p>
                      <p className="text-sm text-slate-500">Estudiantes evaluados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje de apoyo */}
      <section className="bg-teal-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              "Pedir ayuda no es signo de debilidad, es un acto de valentía"
            </h2>
            <p className="text-teal-100">
              Si estás pasando por un momento difícil, recuerda que siempre hay personas dispuestas a escucharte y
              apoyarte. No tienes que enfrentar esto solo.
            </p>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Predicción Inteligente</h3>
            <p className="text-slate-600">
              Modelo de Machine Learning con 78.85% de precisión para identificar factores de riesgo de depresión.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="h-16 w-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Confidencial y Seguro</h3>
            <p className="text-slate-600">
              Tu información es completamente anónima y privada. Nadie más tendrá acceso a tus datos.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="h-16 w-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Apoyo Continuo</h3>
            <p className="text-slate-600">
              Regístrate para recibir mensajes personalizados de apoyo y superación directamente en tu correo.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="container mx-auto px-4 py-12 border-t">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Equipo de Investigación</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {[
            "Pedro Caballero Cáceres",
            "Mauricio Castillo Benites",
            "Jordan Castillo Aranda",
            "Marycielo Velasquez Avalos",
            "Angel Velasquez Vergara",
            "Steffano Ventura Florian",
          ].map((name) => (
            <div key={name} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <Users className="h-4 w-4 text-teal-600" />
              <span className="text-slate-700 text-sm">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 mt-6">
          Universidad Privada Antenor Orrego - Facultad de Ingeniería | Trujillo - Perú 2025
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
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
