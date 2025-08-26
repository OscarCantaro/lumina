import { useState } from "react";
import type { FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const API_URL = import.meta.env.VITE_NEWSLETTER_API_URL;
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ email, token: captchaToken }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setCaptchaToken(null);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <h3 className="text-3xl font-bold mb-4">
          Suscríbete y mantente
          <span className="text-yellow-400"> conectado con LUMINA</span>
        </h3>
        <p className="mb-8 text-lg text-indigo-100">
          Suscríbete y recibe novedades, descuentos exclusivos y tips de
          decoración con luz.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-2 justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            className="px-4 py-3 rounded-lg text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          {/* 🔹 reCAPTCHA */}
          <ReCAPTCHA
            sitekey={SITE_KEY}
            onChange={(token: string | null) => setCaptchaToken(token)}
          />

          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Suscribirme
          </button>
        </form>

        {status === "success" && (
          <p className="mt-2 text-green-300">¡Gracias por suscribirte!</p>
        )}
        {status === "error" && (
          <p className="mt-2 text-red-300">
            Hubo un error, inténtalo otra vez.
          </p>
        )}
      </div>
    </section>
  );
}
