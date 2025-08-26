import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const radiusRef = useRef(150); // tamaño base del círculo
  const increasingRef = useRef(true);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let animationFrame: number;

    // Efecto linterna que sigue el mouse o el dedo
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let x: number, y: number;

      if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      } else {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }

      hero.style.setProperty("--x", `${x}px`);
      hero.style.setProperty("--y", `${y}px`);
    };

    // Animación del pulso (cambia el radio)
    const pulse = () => {
      if (increasingRef.current) {
        radiusRef.current += 0.5;
        if (radiusRef.current >= 180) increasingRef.current = false;
      } else {
        radiusRef.current -= 0.5;
        if (radiusRef.current <= 120) increasingRef.current = true;
      }

      hero.style.setProperty("--r", `${radiusRef.current}px`);
      animationFrame = requestAnimationFrame(pulse);
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("touchmove", handleMove);

    // inicializar centro por defecto
    hero.style.setProperty("--x", "50%");
    hero.style.setProperty("--y", "50%");
    hero.style.setProperty("--r", "150px");

    pulse();

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("touchmove", handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 pt-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606170033648-5d55a3edf314')", // https://picsum.photos/1920/1080?blur=2
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Efecto linterna con pulso */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle var(--r, 150px) at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.25), transparent 80%)`,
          transition: "background 0.1s ease",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Ilumina tu espacio con
          <span className="text-indigo-400"> estilo futurista</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lámparas modernas, minimalistas y únicas para darle vida a cada rincón
          de tu hogar
        </p>
        <a
          href="#products"
          className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
        >
          Ver productos
        </a>
      </div>
    </section>
  );
}
