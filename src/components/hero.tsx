import { GraduationCap, Baby } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-sand-100 opacity-60" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent-50 opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block rounded-full bg-primary-800 text-white px-4 py-1.5 text-sm font-medium mb-6">
            📍 Campus Puente Alto — Admisión 2027
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Educación{" "}
            <span className="text-primary-700">libre, práctica</span>
            <br />
            y significativa
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed">
            Somos un Centro Educacional Alternativo que forma personas íntegras
            con valores cristianos, habilidades blandas y herramientas para la vida.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#ar-school"
              className="flex items-center gap-2 rounded-xl bg-primary-800 text-white px-8 py-4 font-semibold shadow-lg hover:bg-primary-900 transition w-full sm:w-auto justify-center"
            >
              <GraduationCap className="h-5 w-5" />
              AR School (Básica y Media)
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
              <span className="h-2 w-2 rounded-full bg-primary-700" />
              Educación no tradicional
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              Formación valórica cristiana
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sage-500" />
              Inglés intensivo desde Pre-School
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
