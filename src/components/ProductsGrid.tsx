import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");

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

  const filteredProducts = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <section className="py-16 px-6 bg-gray-50" id="products">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Productos
        </h2>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setFilter("")}
            className={`px-4 py-2 rounded-lg ${
              filter === "" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("mesa")}
            className={`px-4 py-2 rounded-lg ${
              filter === "mesa" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Mesa
          </button>
          <button
            onClick={() => setFilter("techo")}
            className={`px-4 py-2 rounded-lg ${
              filter === "techo" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Techo
          </button>
          <button
            onClick={() => setFilter("colgantes")}
            className={`px-4 py-2 rounded-lg ${
              filter === "colgantes"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Colgantes
          </button>
          <button
            onClick={() => setFilter("led")}
            className={`px-4 py-2 rounded-lg ${
              filter === "led" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            LED
          </button>
        </div>

        {/* Grid con animación stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
