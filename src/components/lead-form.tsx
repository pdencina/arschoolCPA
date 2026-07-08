"use client";

import { useState, useEffect } from "react";
import { getSupabase } from "@/lib/supabase";
import type { Lead } from "@/lib/supabase";
import { Send, Loader2, CheckCircle } from "lucide-react";

type Props = {
  programa: "ar-school" | "play-group";
};

export function LeadForm({ programa }: Props) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError("Nombre y teléfono son obligatorios");
      setLoading(false);
      return;
    }

    const lead: Omit<Lead, "id" | "created_at"> = {
      nombre: form.nombre.trim(),
      telefono: form.telefono.trim(),
      email: form.email.trim() || undefined,
      programa,
      comuna: "Puente Alto",
      mensaje: form.mensaje.trim() || undefined,
      ...utmParams,
    };

    try {
      const { error: dbError } = await getSupabase().from("leads").insert([lead]);

      if (dbError) throw dbError;

      // Meta Pixel conversion event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: programa,
          content_category: "matricula",
        });
      }

      setSuccess(true);
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
    } catch (err: any) {
      setError("Hubo un problema al enviar. Intenta de nuevo o escríbenos por WhatsApp.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-3" />
        <h3 className="text-lg font-semibold text-green-800">
          ¡Recibimos tu solicitud!
        </h3>
        <p className="text-green-700 mt-1">
          Te contactaremos dentro de las próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor={`nombre-${programa}`} className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del apoderado *
        </label>
        <input
          id={`nombre-${programa}`}
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
          placeholder="María González"
        />
      </div>

      <div>
        <label htmlFor={`telefono-${programa}`} className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono / WhatsApp *
        </label>
        <input
          id={`telefono-${programa}`}
          type="tel"
          required
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
          placeholder="+56 9 1234 5678"
        />
      </div>

      <div>
        <label htmlFor={`email-${programa}`} className="block text-sm font-medium text-gray-700 mb-1">
          Email (opcional)
        </label>
        <input
          id={`email-${programa}`}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
          placeholder="maria@ejemplo.cl"
        />
      </div>

      <div>
        <label htmlFor={`mensaje-${programa}`} className="block text-sm font-medium text-gray-700 mb-1">
          ¿Alguna consulta? (opcional)
        </label>
        <textarea
          id={`mensaje-${programa}`}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition resize-none"
          placeholder="Edad del niño/a, curso que busca, etc."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-800 px-6 py-3 text-white font-semibold shadow-md hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        {loading ? "Enviando..." : "Solicitar información"}
      </button>
    </form>
  );
}
