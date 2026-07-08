import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    role: "Mamá de Matías — Elementary School",
    text: "Buscábamos algo diferente para nuestro hijo, que no fuera el sistema tradicional. En AR School encontró un espacio donde aprende con pasión y no siente la educación como una carga.",
  },
  {
    name: "Francisco R.",
    role: "Papá de Emilia — Play & Group",
    text: "La metodología basada en el juego fue clave para nosotros. Emilia va feliz cada día y sabemos que está en un lugar seguro, con amor y un propósito claro de formación.",
  },
  {
    name: "Patricia L.",
    role: "Mamá de Joaquín — High School",
    text: "Lo que más valoro es que no solo forman académicamente, sino que trabajan los valores y habilidades blandas. Joaquín ha desarrollado liderazgo y confianza que no veíamos antes.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-sand-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Lo que dicen nuestras familias
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Familias que ya son parte de nuestra comunidad educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white p-6 shadow-md border border-sand-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 text-accent-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-4 pt-4 border-t border-sand-100">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
