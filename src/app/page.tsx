import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { ModeloAmor } from "@/components/modelo-amor";
import { Pilares } from "@/components/pilares";
import { ProgramSection } from "@/components/program-section";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";

const arSchoolFeatures = [
  { text: "Educación libre, práctica y significativa — sin paradigmas tradicionales" },
  { text: "Sin notas ni calificaciones — evaluación por observación, proyectos y retroalimentación" },
  { text: "Sin tareas para la casa — el tiempo en familia es vínculo, no presión" },
  { text: "Tutores que acompañan, no profesores que imponen" },
  { text: "Aprendizaje por experiencias, ciclos y talleres (Ciencias, Música, Audiovisual, Finanzas)" },
  { text: "Inglés intensivo con meta B2 al egresar (Marco Europeo)" },
  { text: "Ambientes sin pantallas — espacios vivos y colaborativos" },
  { text: "Preparación con confianza para Pruebas Libres" },
];

const playGroupFeatures = [
  { text: "Educación y cuidado integral en la primera infancia" },
  { text: "Metodología basada en el juego como herramienta de aprendizaje significativo" },
  { text: "Espacio seguro, lleno de amor y dedicación" },
  { text: "Formación de valores cristianos desde los primeros años" },
  { text: "Apoyo transversal a todo el núcleo familiar" },
  { text: "Estimulación del descubrimiento y la curiosidad natural" },
  { text: "Transición natural hacia AR School Elementary" },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Countdown />

      <ModeloAmor />

      <Pilares />

      <ProgramSection
        id="ar-school"
        programa="ar-school"
        title="AR School — Centro Educacional Alternativo"
        subtitle="Pre-School · Elementary · High School"
        description="No buscamos mejorar el sistema tradicional, sino desmarcarnos de él. Donde el centro no es el contenido ni la evaluación, sino la persona. Formamos vidas con identidad, propósito y amor."
        features={arSchoolFeatures}
        bgColor="bg-white"
        accentColor="bg-primary-100 text-primary-800"
      />

      <ProgramSection
        id="play-group"
        programa="play-group"
        title="Play & Group — Educación Preescolar"
        subtitle="Primeros años de vida"
        description="Somos parte de la etapa más importante de tus hijos. Contribuimos positivamente al desarrollo natural de los niños y niñas en un ambiente donde el juego activa aprendizajes significativos."
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
