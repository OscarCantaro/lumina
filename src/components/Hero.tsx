export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-6 pt-20"
    >
      {/* Título principal */}
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Ilumina tu espacio con{" "}
        <span className="text-indigo-400">estilo futurista</span>
      </h2>

      {/* Descripción */}
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Lámparas modernas, minimalistas y únicas para darle vida a cada rincón
        de tu hogar.
      </p>

      {/* Botón CTA */}
      <a
        href="#products"
        className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
      >
        Ver productos
      </a>
    </section>
  );
}
