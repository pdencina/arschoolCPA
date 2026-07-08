import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    role: "Mamá de Matías (2° básico)",
    text: "El cambio que vimos en Matías fue increíble. Llegó tímido de otro colegio y hoy es un niño seguro, con amigos y con ganas de ir a clases.",
  },
  {
    name: "Francisco R.",
    role: "Papá de Emilia (Play Group)",
    text: "Buscábamos un lugar donde nuestra hija se sintiera segura para su primera experiencia fuera de casa. En Play & Group encontramos eso y más.",
  },
  {
    name: "Patricia L.",
    role: "Mamá de Joaquín (4° básico)",
    text: "Lo que más valoro es la cercanía de los profesores. Conocen a cada niño por su nombre y nos mantienen informados siempre.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Lo que dicen nuestras familias
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Familias de Puente Alto que ya son parte de nuestra comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white p-6 shadow-md border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-4 pt-4 border-t border-gray-100">
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
