"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

// Fecha límite de matrículas — ajustar cada año
const TARGET_DATE = new Date("2026-10-31T23:59:59");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft | null {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl sm:text-4xl font-bold text-primary-700 tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 mt-1">{label}</span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // No renderizar hasta que se monte en el cliente (evita hydration mismatch)
  if (!mounted) return null;

  // Si ya pasó la fecha, no mostrar el countdown
  if (!timeLeft) return null;

  return (
    <section className="py-12 bg-gradient-to-r from-primary-50 to-accent-50 border-y border-primary-100">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-primary-600" />
          <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">
            Matrículas abiertas hasta octubre 2026
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          ¡Asegura tu cupo para el 2027!
        </h2>

        <div className="inline-flex items-center gap-4 sm:gap-6 bg-white rounded-2xl px-6 sm:px-10 py-5 shadow-md border border-gray-100">
          <TimeBlock value={timeLeft.days} label="Días" />
          <span className="text-2xl text-gray-300 font-light">:</span>
          <TimeBlock value={timeLeft.hours} label="Horas" />
          <span className="text-2xl text-gray-300 font-light">:</span>
          <TimeBlock value={timeLeft.minutes} label="Min" />
          <span className="text-2xl text-gray-300 font-light">:</span>
          <TimeBlock value={timeLeft.seconds} label="Seg" />
        </div>

        <p className="mt-6 text-gray-600">
          Vacantes limitadas — grupos reducidos de máximo 25 alumnos
        </p>

        <a
          href="#ar-school"
          className="inline-block mt-4 rounded-xl bg-primary-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-primary-700 transition"
        >
          Reservar mi cupo ahora
        </a>
      </div>
    </section>
  );
}
