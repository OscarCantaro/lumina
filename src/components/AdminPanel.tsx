import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminPanel() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    whatsapp: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "products"), {
        ...form,
        price: Number(form.price),
      });
      setMessage("✅ Producto agregado correctamente!");
      setForm({
        name: "",
        description: "",
        price: "",
        image: "",
        whatsapp: "",
      });
    } catch (error) {
      console.error("Error agregando producto: ", error);
      setMessage("❌ Error al guardar el producto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Panel de Administración
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre del producto"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción del producto"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Precio"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="URL de la imagen"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="Número de WhatsApp (ej: 51987654321)"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Guardando..." : "Agregar Producto"}
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </section>
  );
}
