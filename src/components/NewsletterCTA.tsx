export default function NewsletterCTA() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <h3 className="text-3xl font-bold mb-4">
          Mantente conectado con LUMINA
        </h3>
        <p className="mb-8 text-lg text-indigo-100">
          Suscríbete y recibe novedades, descuentos exclusivos y tips de
          decoración con luz.
        </p>

        {/* Formulario */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias por suscribirte ✨ (ejemplo)");
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Ingresa tu correo"
            className="px-4 py-3 rounded-lg text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
