"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipo de colegio es AR School?",
    answer:
      "Somos un Centro Educacional Alternativo, parte de la Fundación ARM Global. No seguimos el modelo tradicional — implementamos el Modelo Educativo A.M.O.R., donde el centro es la persona, no el contenido ni la evaluación. Educamos con libertad, propósito y amor.",
  },
  {
    question: "¿Por qué no tienen notas?",
    answer:
      "Porque una calificación nunca refleja el proceso, el esfuerzo ni el desarrollo del carácter. Evaluamos por observación, proyectos, retroalimentación, autoevaluación y evidencias reales. El aprendizaje guía la evaluación, no al revés.",
  },
  {
    question: "¿Por qué no hay tareas para la casa?",
    answer:
      "El tiempo en familia es vínculo, no presión académica. Creemos que el descanso también es aprendizaje. Todo el trabajo significativo ocurre dentro de nuestros espacios de aprendizaje, en comunidad.",
  },
  {
    question: "¿Qué son las Pruebas Libres?",
    answer:
      "Son evaluaciones oficiales que permiten validar los estudios ante el Ministerio de Educación sin estar en el sistema escolar tradicional. Preparamos a nuestros estudiantes con confianza para rendirlas exitosamente.",
  },
  {
    question: "¿Qué rol tienen los tutores?",
    answer:
      "No hablamos de profesores, sino de tutores: guías cercanos que caminan junto a los niños. Educan desde el vínculo, no desde la imposición. Observan antes de intervenir, comprenden el error como parte natural del aprendizaje y aprenden junto a los estudiantes.",
  },
  {
    question: "¿Qué significa que son un colegio 'sin pantallas'?",
    answer:
      "Nuestros espacios de aprendizaje no dependen de dispositivos electrónicos. Privilegiamos la experiencia directa, la exploración manual, la creatividad y las relaciones humanas. El ambiente educa tanto como el contenido.",
  },
  {
    question: "¿Qué niveles educativos ofrecen?",
    answer:
      "Pre-School (preescolar), Elementary School (educación básica) y High School (educación media). Además, Play & Group atiende a niños en sus primeros años de vida con metodología basada en el juego.",
  },
  {
    question: "¿Es necesario ser cristiano para matricularse?",
    answer:
      "No es requisito profesar una fe particular. Recibimos familias de diversas creencias. Nuestro proyecto se inspira en valores cristianos que se viven en comunidad: amor, respeto, generosidad, propósito.",
  },
  {
    question: "¿Qué es el Modelo A.M.O.R.?",
    answer:
      "Es nuestro modelo educativo: Aprender con libertad, Madurar con propósito, Observar y maravillarse, Relacionarse en comunidad. Se sustenta en fundamentos bíblicos, pedagógicos (Piaget, Vygotsky, Montessori) y científicos (neurociencia del aprendizaje).",
  },
  {
    question: "¿Puedo visitar el campus antes de matricular?",
    answer:
      "¡Por supuesto! Puedes agendar una visita personalizada para conocer nuestros espacios, tutores y comunidad. Escríbenos por WhatsApp y coordinamos.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Todo lo que necesitas saber sobre AR School y nuestro modelo
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="px-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
