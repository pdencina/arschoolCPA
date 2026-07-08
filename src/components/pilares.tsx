import { Heart, Brain, Sparkles, BookOpen } from "lucide-react";

const pilares = [
  {
    title: "Valórica",
    description:
      "Integridad, respeto y amor por los demás. El conocimiento encuentra su mayor valor acompañado de un carácter sólido.",
    icon: Heart,
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    title: "Emocional",
    description:
      "El bienestar emocional es base esencial para aprender, relacionarse y crecer de manera saludable.",
    icon: Sparkles,
    color: "text-sage-600",
    bg: "bg-sage-50",
  },
  {
    title: "Espiritual",
    description:
      "Acompañamos el desarrollo de la identidad, el propósito y la relación con Dios, vivida de forma auténtica.",
    icon: Sparkles,
    color: "text-sand-600",
    bg: "bg-sand-50",
  },
  {
    title: "Académica",
    description:
      "Competencias para enfrentar el mundo actual con sentido. Excelencia con propósito, no por presión.",
    icon: BookOpen,
    color: "text-primary-700",
    bg: "bg-primary-50",
  },
];

export function Pilares() {
  return (
    <section className="py-16 sm:py-24 bg-sand-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Educamos la mente, el corazón,
            <br className="hidden sm:block" /> el carácter y el espíritu
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Cuatro dimensiones que crecen juntas en cada estudiante
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar) => (
            <div
              key={pilar.title}
              className={`rounded-2xl ${pilar.bg} p-6 border border-white/50`}
            >
              <div className={`${pilar.color} mb-4`}>
                <pilar.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {pilar.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
