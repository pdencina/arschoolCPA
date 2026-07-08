import { GraduationCap, Baby } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium mb-6">
            📍 Campus Puente Alto — Matrículas Abiertas 2027
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Educación cristiana de{" "}
            <span className="text-accent-200">excelencia</span>
            <br />
            en Puente Alto
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-primary-100 leading-relaxed">
            Un espacio seguro donde tus hijos crecen en valores, aprenden con
            metodologías innovadoras y se preparan para el futuro.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#ar-school"
              className="flex items-center gap-2 rounded-xl bg-white text-primary-800 px-8 py-4 font-semibold shadow-lg hover:bg-primary-50 transition w-full sm:w-auto justify-center"
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
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-200">
            <span className="flex items-center gap-1">✅ Reconocimiento oficial MINEDUC</span>
            <span className="flex items-center gap-1">✅ Grupos reducidos (max 25 alumnos)</span>
            <span className="flex items-center gap-1">✅ Jornada completa con almuerzo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
