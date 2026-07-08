import { Lightbulb, Compass, Eye, Users } from "lucide-react";

const pillars = [
  {
    letter: "A",
    title: "Aprender con libertad",
    description:
      "En un entorno seguro, el niño puede explorar y equivocarse sin ser juzgado. El error no se penaliza: se transforma en oportunidad.",
    icon: Lightbulb,
    color: "bg-accent-100 text-accent-700",
  },
  {
    letter: "M",
    title: "Madurar con propósito",
    description:
      "Acompañamos el desarrollo del carácter, la identidad y la autonomía. Aprender a ser quien está llamado a ser.",
    icon: Compass,
    color: "bg-primary-100 text-primary-800",
  },
  {
    letter: "O",
    title: "Observar y maravillarse",
    description:
      "El asombro es el punto de partida del aprendizaje profundo. Aprender haciendo, explorando y construyendo desde la curiosidad.",
    icon: Eye,
    color: "bg-sage-100 text-sage-700",
  },
  {
    letter: "R",
    title: "Relacionarse en comunidad",
    description:
      "El aprendizaje ocurre en relación con otros. No se compite: se acompaña, se apoya y se crece en comunidad.",
    icon: Users,
    color: "bg-sand-200 text-sand-800",
  },
];

export function ModeloAmor() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent-100 text-accent-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
            Nuestro modelo educativo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Modelo{" "}
            <span className="text-accent-500">A</span>
            <span className="text-primary-700">.M</span>
            <span className="text-sage-600">.O</span>
            <span className="text-sand-600">.R</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Toda educación deja una huella, pero solo el amor transforma el corazón.
            Cuando un niño sabe que es amado, todo cambia para siempre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.letter}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${pillar.color} mb-4`}>
                <pillar.icon className="h-6 w-6" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">{pillar.letter}</span>
                <span className="text-sm font-medium text-gray-400">—</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-gray-500 max-w-xl mx-auto">
            &ldquo;Acompañamos vidas que aprenden con libertad, crecen con propósito
            y florecen en amor.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
