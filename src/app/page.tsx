import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { ProgramSection } from "@/components/program-section";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";

const arSchoolFeatures = [
  { text: "Centro Educacional Alternativo — educación libre y significativa" },
  { text: "Pre-School, Elementary School (básica) y High School (media)" },
  { text: "Formación valórica cristiana con enfoque en habilidades blandas" },
  { text: "Programa intensivo de inglés (nivel B2 al egresar)" },
  { text: "Talleres integrados: Ciencias, Música, Audiovisual, Finanzas, Ed. Física" },
  { text: "Aprendizaje por ciclos y experiencias — sin paradigmas tradicionales" },
  { text: "Desarrollo de liderazgo personal y habilidades socioemocionales" },
];

const playGroupFeatures = [
  { text: "Niños y niñas en sus primeros años de vida" },
  { text: "Metodología basada en el juego como herramienta de aprendizaje" },
  { text: "Cuidado integral: lugar seguro, con amor y dedicación" },
  { text: "Formación de valores cristianos desde la primera infancia" },
  { text: "Apoyo transversal a todo el núcleo familiar" },
  { text: "Estimulación del descubrimiento y aprendizaje significativo" },
  { text: "Transición natural hacia AR School Elementary" },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Countdown />

      <ProgramSection
        id="ar-school"
        programa="ar-school"
        title="AR School — Centro Educacional Alternativo"
        subtitle="Pre-School · Elementary · High School"
        description="Formamos personas íntegras con sólidas habilidades sociales, valores y principios. Nuestra educación no reposa solo sobre un pilar académico — incorporamos liderazgo, habilidades blandas y experiencias significativas en cada etapa."
        features={arSchoolFeatures}
        bgColor="bg-white"
        accentColor="bg-primary-100 text-primary-800"
      />

      <ProgramSection
        id="play-group"
        programa="play-group"
        title="Play & Group — Educación Preescolar"
        subtitle="Primeros años de vida"
        description="Entregamos educación y cuidado integral en la primera infancia. Somos parte de la etapa más importante de tus hijos, contribuyendo positivamente a su desarrollo natural a través del juego y el amor."
        features={playGroupFeatures}
        bgColor="bg-sand-50"
        accentColor="bg-accent-100 text-accent-700"
      />

      <Gallery />

      <Testimonials />

      <FAQ />

      <Location />

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm">
          <p className="text-white/90 font-medium">
            © {new Date().getFullYear()} Fundación Educacional ARM Global
          </p>
          <p className="mt-2">
            Sede Puente Alto: Av. José Manuel Irarrázaval 0565
          </p>
          <p className="mt-1 text-primary-300">
            contacto@arschoolglobal.com · www.arschoolglobal.com
          </p>
        </div>
      </footer>
    </main>
  );
}
