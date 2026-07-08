"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  {
    src: "/images/campus-exterior.jpg",
    alt: "Fachada del campus AR School Puente Alto",
  },
  {
    src: "/images/sala-clases.jpg",
    alt: "Sala de clases con grupos reducidos",
  },
  {
    src: "/images/patio.jpg",
    alt: "Patio de juegos y recreación",
  },
  {
    src: "/images/play-group.jpg",
    alt: "Niños en actividad Play & Group",
  },
  {
    src: "/images/taller-arte.jpg",
    alt: "Taller de arte extraprogramático",
  },
  {
    src: "/images/biblioteca.jpg",
    alt: "Biblioteca y espacio de lectura",
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  };

  const goPrev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Conoce nuestro campus
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Espacios diseñados para el aprendizaje y el bienestar de tus hijos
          </p>
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label={`Ver foto: ${photo.alt}`}
            >
              {/* Placeholder hasta que se suban fotos reales */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 text-primary-700">
                <span className="text-sm text-center px-4 font-medium">
                  {photo.alt}
                </span>
              </div>
              {/* Cuando tengas fotos reales, descomenta esto:
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full aspect-video rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <p className="text-lg font-medium">{photos[lightbox].alt}</p>
              <p className="text-sm text-gray-400 mt-2">
                {lightbox + 1} / {photos.length}
              </p>
            </div>
            {/* Cuando tengas fotos reales:
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="h-full w-full object-contain"
            />
            */}
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
