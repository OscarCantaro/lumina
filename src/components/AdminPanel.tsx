import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function AdminPanel() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // 🔹 Leer productos en tiempo real
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      const items: Product[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(items);
    });
    return () => unsub();
  }, []);

  // 🔹 Manejar inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  // 🔹 Guardar o actualizar producto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let imageUrl = "";

      if (file) {
        const storageRef = ref(storage, `products/${file.name}-${Date.now()}`);
        await uploadBytes(storageRef, file);
        imageUrl = await getDownloadURL(storageRef);
      }

      if (editingId) {
        // Update
        const productRef = doc(db, "products", editingId);
        await updateDoc(productRef, {
          ...form,
          price: Number(form.price),
          ...(imageUrl && { image: imageUrl }),
        });
        setMessage("✅ Producto actualizado!");
        setEditingId(null);
      } else {
        // Create
        await addDoc(collection(db, "products"), {
          ...form,
          price: Number(form.price),
          image: imageUrl,
        });
        setMessage("✅ Producto agregado!");
      }

      setForm({ name: "", description: "", price: "", category: "" });
      setFile(null);
    } catch (error) {
      console.error("Error en CRUD:", error);
      setMessage("❌ Error en la operación.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Editar producto
  const handleEdit = (product: Product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
    });
    setEditingId(product.id);
  };

  // 🔹 Eliminar producto
  const handleDelete = async (id: string) => {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;
    await deleteDoc(doc(db, "products", id));
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Panel de Administración
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
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

          {/* Selector de categoría */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">Selecciona categoría</option>
            <option value="mesa">Lámparas de mesa</option>
            <option value="techo">Lámparas de techo</option>
            <option value="colgantes">Lámparas colgantes</option>
            <option value="led">Lámparas LED</option>
          </select>

          {/* Subida de imagen */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading
              ? "Guardando..."
              : editingId
              ? "Actualizar Producto"
              : "Agregar Producto"}
          </button>
        </form>

        {message && <p className="text-center mb-6">{message}</p>}

        {/* Listado de productos */}
        <h3 className="text-xl font-semibold mb-4">Productos existentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h4 className="text-lg font-bold">{p.name}</h4>
              <p className="text-gray-600">{p.description}</p>
              <p className="font-semibold mt-2">S/ {p.price}</p>
              <p className="text-xs text-indigo-600 mt-1">{p.category}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(p)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
