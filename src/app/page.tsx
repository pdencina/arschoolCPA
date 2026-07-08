import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { ProgramSection } from "@/components/program-section";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";

const arSchoolFeatures = [
  { text: "Enseñanza básica (1° a 8°) con reconocimiento MINEDUC" },
  { text: "Proyecto educativo cristiano con formación integral" },
  { text: "Grupos reducidos — máximo 25 alumnos por sala" },
  { text: "Inglés intensivo desde 1° básico" },
  { text: "Talleres extraprogramáticos incluidos (arte, música, deporte)" },
  { text: "Acompañamiento socioemocional permanente" },
  { text: "Jornada completa con almuerzo (JUNAEB)" },
];

const playGroupFeatures = [
  { text: "Niños de 2 a 5 años en ambiente seguro y estimulante" },
  { text: "Metodología lúdica basada en el juego y la exploración" },
  { text: "Educadoras de párvulos tituladas + auxiliares" },
  { text: "Grupos pequeños — máximo 15 niños por sala" },
  { text: "Alimentación incluida (desayuno, almuerzo, colación)" },
  { text: "Estimulación temprana, psicomotricidad y lenguaje" },
  { text: "Transición fluida hacia AR School (prioridad de matrícula)" },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Countdown />

      <ProgramSection
        id="ar-school"
        programa="ar-school"
        title="AR School — Enseñanza Básica"
        subtitle="1° a 8° Básico"
        description="Un colegio donde cada estudiante es conocido, valorado y desafiado a dar lo mejor de sí. Formamos personas íntegras con base cristiana, pensamiento crítico y herramientas para el siglo XXI."
        features={arSchoolFeatures}
        bgColor="bg-white"
        accentColor="bg-primary-100 text-primary-700"
      />

      <ProgramSection
        id="play-group"
        programa="play-group"
        title="Play & Group — Preescolar"
        subtitle="2 a 5 años"
        description="La primera experiencia educativa de tu hijo/a en un espacio de cariño, contención y aprendizaje. Porque los primeros años construyen las bases de todo lo que viene después."
        features={playGroupFeatures}
        bgColor="bg-accent-50"
        accentColor="bg-accent-100 text-accent-700"
      />

      <Gallery />

      <Testimonials />

      <FAQ />

      <Location />

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm">
          <p className="text-white/80">
            © {new Date().getFullYear()} Fundación Educacional ARM Global — Campus Puente Alto
          </p>
          <p className="mt-2">
            Av. José Manuel Irarrázaval 0565, Puente Alto, RM, Chile
          </p>
        </div>
      </footer>
    </main>
  );
}
