import { GraduationCap, Baby } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-50 opacity-70" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent-50 opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block rounded-full bg-primary-100 border border-primary-200 px-4 py-1.5 text-sm font-medium text-primary-800 mb-6">
            📍 Campus Puente Alto — Matrículas Abiertas 2027
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Educación cristiana de{" "}
            <span className="text-primary-700">excelencia</span>
            <br />
            en Puente Alto
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed">
            Un espacio seguro donde tus hijos crecen en valores, aprenden con
            metodologías innovadoras y se preparan para el futuro.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#ar-school"
              className="flex items-center gap-2 rounded-xl bg-primary-800 text-white px-8 py-4 font-semibold shadow-lg hover:bg-primary-900 transition w-full sm:w-auto justify-center"
            >
              <GraduationCap className="h-5 w-5" />
              AR School (Básica)
            </a>
            <a
              href="#play-group"
              className="flex items-center gap-2 rounded-xl bg-accent-500 text-white px-8 py-4 font-semibold shadow-lg hover:bg-accent-600 transition w-full sm:w-auto justify-center"
            >
              <Baby className="h-5 w-5" />
              Play & Group (Preescolar)
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Reconocimiento oficial MINEDUC
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Grupos reducidos (max 25 alumnos)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Jornada completa con almuerzo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
