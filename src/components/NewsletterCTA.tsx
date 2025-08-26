import { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const API_URL = import.meta.env.VITE_NEWSLETTER_API_URL;
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setStatus("error");
      return;
    }

    try {
      // 🔹 Ejecutar reCAPTCHA invisible
      const token = await executeRecaptcha("newsletter_signup");

      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ email, token }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
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
          Suscríbete a nuestras
          <span className="text-yellow-400"> novedades</span>
        </h3>
        <p className="mb-8 text-lg text-indigo-100">
          Suscríbete y recibe novedades, descuentos exclusivos y tips de
          decoración con luz.
        </p>
        {/* Formulario */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="px-4 py-3 rounded-lg text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Suscribirme
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-green-300">¡Gracias por suscribirte!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-300">
            Hubo un error, inténtalo otra vez.
          </p>
        )}{" "}
      </div>
    </section>
  );
}

export default function NewsletterCTA() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      <NewsletterForm />
    </GoogleReCaptchaProvider>
  );
}
