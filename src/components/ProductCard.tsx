import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER; // 🔹 desde .env
  const handleBuy = () => {
    const message = `Hola, me interesa el producto: ${product.name} - S/ ${product.price}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-xl p-4 shadow-md hover:shadow-xl transition bg-white"
    >
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{product.category}</p>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold text-indigo-600 mt-4">S/ {product.price}</p>
      <button
        onClick={handleBuy}
        className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Comprar
      </button>
    </motion.div>
  );
}
