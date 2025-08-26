import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: Timestamp.now(),
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error al guardar suscripción:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-indigo-400 to-indigo-900 text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <h3 className="text-3xl font-bold mb-4">
          Suscríbete a nuestras
          <span className="text-yellow-400"> novedades</span>
        </h3>
        <p className="mb-8 text-lg text-indigo-100">
          Suscríbete y recibe novedades, descuentos exclusivos y tips de
          decoración.
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
            className="px-4 py-3 rounded-lg text-gray-900 bg-amber-50 flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
        )}
      </div>
    </section>
  );
}
