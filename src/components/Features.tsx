import { FaTruck, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <FaLightbulb className="text-indigo-500 text-4xl mb-4" />,
      title: "Diseños únicos",
      desc: "Lámparas modernas y exclusivas para iluminar con estilo.",
    },
    {
      icon: <FaTruck className="text-indigo-500 text-4xl mb-4" />,
      title: "Envío rápido",
      desc: "Recibe tus lámparas en la puerta de tu casa en tiempo récord.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-500 text-4xl mb-4" />,
      title: "Garantía asegurada",
      desc: "Calidad certificada con garantía en cada producto.",
    },
  ];

  return (
    <section
      className="py-16 px-6 bg-gradient-to-r from-gray-50 via-white to-gray-100"
      id="features"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">
          ¿Por qué elegir <span className="text-indigo-600">LUMINA</span>?
        </h3>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {feature.icon}
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
