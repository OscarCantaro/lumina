import { FaTruck, FaShieldAlt, FaLightbulb } from "react-icons/fa";

export default function Features() {
  const features = [
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
    {
      icon: <FaLightbulb className="text-indigo-500 text-4xl mb-4" />,
      title: "Diseños únicos",
      desc: "Lámparas modernas y exclusivas para iluminar con estilo.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">¿Por qué elegir LUMINA?</h3>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gray-50"
            >
              {feature.icon}
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
