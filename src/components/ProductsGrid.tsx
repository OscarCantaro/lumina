import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  whatsapp: string;
};

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items: Product[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProducts(items);
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-16 px-6 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">
        Nuestros <span className="text-indigo-600">Productos</span>
      </h3>

      <motion.div
        className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
