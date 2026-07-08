import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    role: "Mamá — Elementary School",
    text: "Mi hijo por fin disfruta aprender. Sin notas, sin presión. Aquí lo ven como persona, no como un número. Los tutores lo conocen y lo acompañan de verdad.",
  },
  {
    name: "Francisco R.",
    role: "Papá — Play & Group",
    text: "Buscábamos un lugar donde nuestra hija no solo estuviera segura, sino que creciera con amor y propósito. Play & Group fue exactamente eso — juego con sentido.",
  },
  {
    name: "Patricia L.",
    role: "Mamá — High School",
    text: "Lo que más valoro es que trabajan el carácter y las habilidades blandas. Mi hijo desarrolló liderazgo, empatía y confianza. Eso no lo enseña un colegio tradicional.",
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
            Familias que eligieron una educación diferente para sus hijos
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
