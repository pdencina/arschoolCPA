import { LeadForm } from "./lead-form";
import { CheckCircle2 } from "lucide-react";

type Feature = {
  text: string;
};

type Props = {
  id: string;
  programa: "ar-school" | "play-group";
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  bgColor: string;
  accentColor: string;
};

export function ProgramSection({
  id,
  programa,
  title,
  subtitle,
  description,
  features,
  bgColor,
  accentColor,
}: Props) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${bgColor}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info */}
          <div>
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accentColor}`}
            >
              {subtitle}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Solicita información
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Te contactamos en menos de 24 horas
            </p>
            <LeadForm programa={programa} />
          </div>
        </div>
      </div>
    </section>
  );
}
