export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo + descripción */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">LUMINA</h1>
          <p className="text-sm text-gray-400">
            Iluminamos tu espacio con diseño y estilo futurista. Lámparas únicas
            para cada rincón de tu hogar.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="font-semibold text-white mb-3">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-indigo-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-indigo-400 transition">
                Productos
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-indigo-400 transition"
              >
                Opiniones
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contáctanos</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Lima, Perú</li>
            <li>📧 contacto@lumina.com</li>
            <li>
              <a
                href="https://wa.me/51987654321?text=Hola, quiero más info sobre las lámparas LUMINA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                📱 WhatsApp: +51 987 654 321
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} LUMINA. Todos los derechos reservados.
      </div>
    </footer>
  );
}
