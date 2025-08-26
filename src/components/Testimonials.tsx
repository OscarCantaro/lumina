export default function Testimonials() {
  const testimonials = [
    {
      name: "Mary Legui",
      text: "Las lámparas de LUMINA transformaron mi sala. Excelente calidad y diseño único.",
      image: "https://i.pravatar.cc/100?img=28",
    },
    {
      name: "Carolina Fernández",
      text: "Me encantó el servicio, la entrega fue rápida y el producto superó mis expectativas.",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Ana Torres",
      text: "Tenía dudas al inicio, pero ahora soy fan. Definitivamente volveré a comprar.",
      image: "https://i.pravatar.cc/100?img=10",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-indigo-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">
          Lo que dicen nuestros
          <span className="text-indigo-600"> clientes</span>
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500"
              />
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
