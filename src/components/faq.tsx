"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipo de colegio es AR School?",
    answer:
      "Somos un Centro Educacional Alternativo. No seguimos paradigmas tradicionales — incorporamos educación libre, práctica y significativa con énfasis en valores cristianos, habilidades blandas y liderazgo personal.",
  },
  {
    question: "¿Qué niveles educativos ofrecen?",
    answer:
      "Ofrecemos Pre-School (preescolar desde los 5 años), Elementary School (educación básica) y High School (educación media). Además, Play & Group atiende a niños en sus primeros años de vida con metodología basada en el juego.",
  },
  {
    question: "¿Cuál es la metodología de enseñanza?",
    answer:
      "Implementamos aprendizaje por ciclos y experiencias significativas. No es educación tradicional de pizarra — nuestros estudiantes descubren, crean y aprenden a través de talleres integrados como Ciencias, Música, Audiovisual, Finanzas y Educación Física.",
  },
  {
    question: "¿Cómo es el programa de inglés?",
    answer:
      "El inglés se enseña de forma intensiva desde Pre-School. El objetivo es que nuestros alumnos alcancen un nivel B2 según el Marco Común Europeo al egresar de High School, dándoles acceso real al mundo globalizado.",
  },
  {
    question: "¿Qué valores se enseñan en AR School?",
    answer:
      "Nuestros ejes centrales son Dios y Familia. A partir de ellos desarrollamos: fidelidad, amor, generosidad, humildad, honestidad, obediencia, orden, prudencia, tolerancia, responsabilidad, respeto y solidaridad. No es solo teoría — se vive diariamente en la comunidad.",
  },
  {
    question: "¿Es necesario ser cristiano para matricularse?",
    answer:
      "No es requisito profesar una fe particular. Recibimos familias de diversas creencias. Nuestro proyecto educativo está inspirado en valores cristianos que se traducen en un ambiente de amor, respeto y servicio.",
  },
  {
    question: "¿Qué es Play & Group?",
    answer:
      "Play & Group es nuestra unidad preescolar, parte de la Fundación ARM Global. Brinda educación y cuidado integral a niños en sus primeros años de vida, con metodología basada en el juego y un ambiente seguro lleno de amor y dedicación.",
  },
  {
    question: "¿Puedo visitar el campus antes de matricular?",
    answer:
      "¡Por supuesto! Puedes agendar una visita personalizada al campus de Puente Alto. Escríbenos por WhatsApp y coordinamos un recorrido para que conozcas nuestros espacios y equipo.",
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
            Todo lo que necesitas saber sobre AR School
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
