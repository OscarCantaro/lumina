import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

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

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("touchmove", handleMove);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("touchmove", handleMove);
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

      {/* Efecto linterna */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.25), transparent 80%)`,
          transition: "background 0.1s ease",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Ilumina tu espacio con{" "}
          <span className="text-indigo-400">estilo futurista</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lámparas modernas, minimalistas y únicas para darle vida a cada rincón
          de tu hogar.
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
