import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

// 👉 Ejemplo de reviews (en Fase 3 podemos traerlas de la API de Google Places)
const testimonials = [
  {
    name: "María López",
    text: "Increíble calidad en las lámparas. La atención en YUPARI fue excelente.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Carlos Fernández",
    text: "Me recomendaron justo lo que necesitaba. 100% recomendable.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Ana Torres",
    text: "Variedad de diseños modernos y la entrega fue rápida. Volveré pronto.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Luis Ramírez",
    text: "Compré 2 lámparas y quedaron perfectas en mi sala. Muy buena experiencia.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Claudia Méndez",
    text: "Excelente asesoría, entendieron exactamente lo que buscaba.",
    image: "https://i.pravatar.cc/100?img=5",
  },
];

export default function Testimonials() {
  const googleMapsUrl =
    import.meta.env.VITE_GOOGLE_MAPS_URL ||
    "https://www.google.com/maps/place/YUPARI+LAMPARAS/";

  return (
    <section id="testimonials" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">
          Opiniones reales de nuestros clientes
        </h3>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          effect="fade"
          className="pb-12"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500"
                />
                <p className="text-gray-600 italic mb-4">“{t.text}”</p>
                <h4 className="font-semibold">{t.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botón a Google Maps */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          Ver más reseñas en Google Maps
        </a>
      </div>
    </section>
  );
}
