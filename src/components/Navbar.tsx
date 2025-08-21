import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">🏮 LUMINA</h1>

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
        <button
          className="md:hidden px-3 py-2 border rounded hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-3"
          >
            <a
              href="#hero"
              className="block hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#products"
              className="block hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </a>
            <a
              href="#testimonials"
              className="block hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Opiniones
            </a>
            <a
              href="#contact"
              className="block hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
