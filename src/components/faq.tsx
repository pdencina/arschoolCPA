"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuándo es el período de matrículas?",
    answer:
      "Las matrículas están abiertas todo el año sujetas a disponibilidad de vacantes. Sin embargo, el período principal de postulaciones para el año siguiente es entre julio y octubre. Te recomendamos consultar cuanto antes para asegurar tu cupo.",
  },
  {
    question: "¿Qué documentos necesito para matricular?",
    answer:
      "Certificado de nacimiento del alumno/a, informe de notas del colegio anterior (si aplica), certificado de traslado (para alumnos que vienen de otro establecimiento) y cédula de identidad del apoderado. Para Play & Group solo necesitas certificado de nacimiento y carné de vacunas.",
  },
  {
    question: "¿Tienen convenio con JUNAEB?",
    answer:
      "Sí, contamos con alimentación JUNAEB para todos los niveles de enseñanza básica. Los alumnos reciben desayuno y almuerzo sin costo adicional.",
  },
  {
    question: "¿Cuál es el valor de la mensualidad?",
    answer:
      "Somos un colegio particular subvencionado, por lo que el copago es accesible. Te invitamos a consultar directamente para conocer los valores actualizados y planes de pago disponibles.",
  },
  {
    question: "¿Es obligatorio ser cristiano para matricularse?",
    answer:
      "No. Recibimos familias de todas las creencias. Nuestro proyecto educativo está inspirado en valores cristianos (respeto, amor, servicio), pero no es requisito profesar una fe particular.",
  },
  {
    question: "¿Qué pasa después del preescolar Play & Group?",
    answer:
      "Los niños que egresan de Play & Group tienen prioridad de matrícula para 1° básico en AR School, con una transición acompañada por nuestro equipo pedagógico para que el paso sea natural y sin estrés.",
  },
  {
    question: "¿Tienen transporte escolar?",
    answer:
      "Contamos con convenio con servicios de transporte escolar del sector. Te podemos conectar con los operadores que cubren tu zona de Puente Alto.",
  },
  {
    question: "¿Puedo visitar el colegio antes de matricular?",
    answer:
      "¡Por supuesto! Realizamos jornadas de puertas abiertas mensuales y también puedes agendar una visita personalizada. Escríbenos por WhatsApp y coordinamos.",
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
            Todo lo que necesitas saber sobre nuestro colegio
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
