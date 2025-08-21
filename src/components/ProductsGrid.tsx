import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const mockProducts = [
  {
    id: 1,
    name: "Lámpara Aurora",
    description: "Diseño minimalista con luz cálida.",
    price: 120,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Lámpara Orbital",
    description: "Estilo futurista con acabados metálicos.",
    price: 150,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "Lámpara Vintage",
    description: "Toque clásico para ambientes elegantes.",
    price: 90,
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    name: "Lámpara Zenith",
    description: "Iluminación moderna para techos altos.",
    price: 200,
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    name: "Lámpara Prisma",
    description: "Diseño geométrico con luz LED.",
    price: 170,
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    name: "Lámpara Boreal",
    description: "Inspirada en las auroras boreales.",
    price: 250,
    image: "https://picsum.photos/400/300?random=6",
  },
];

export default function ProductsGrid() {
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
        {mockProducts.map((product) => (
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
