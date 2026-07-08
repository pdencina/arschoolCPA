import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Encuéntranos en Puente Alto
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Estamos en el corazón de la comuna, con fácil acceso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map embed placeholder */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26649.0!2d-70.58!3d-33.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d5!2sPuente+Alto!5e0!3m2!1ses!2scl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación AR School Puente Alto"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary-100 p-3">
                <MapPin className="h-6 w-6 text-primary-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Dirección</h3>
                <p className="text-gray-600 mt-1">
                  Av. José Manuel Irarrázaval 0565, Puente Alto
                  <br />
                  Región Metropolitana, Chile
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary-100 p-3">
                <Clock className="h-6 w-6 text-primary-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Horarios</h3>
                <p className="text-gray-600 mt-1">
                  Lunes a Viernes: 8:00 — 17:00
                  <br />
                  Atención matrículas: 9:00 — 14:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary-100 p-3">
                <Phone className="h-6 w-6 text-primary-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contacto</h3>
                <p className="text-gray-600 mt-1">
                  +56 9 3690 2642
                  <br />
                  contacto@arschoolglobal.com
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56912345678"}?text=${encodeURIComponent("Hola, quiero agendar una visita al campus")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 rounded-xl bg-green-500 text-white px-6 py-3 font-semibold shadow-md hover:bg-green-600 transition"
            >
              📅 Agendar visita al campus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
