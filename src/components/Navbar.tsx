export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide">LUMINA</h1>

      {/* Links desktop */}
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#hero" className="hover:text-gray-300 transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-gray-300 transition">
            Productos
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-gray-300 transition">
            Opiniones
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón menú móvil */}
      <button className="md:hidden px-3 py-2 border rounded hover:bg-gray-800 transition">
        ☰
      </button>
    </nav>
  );
}
