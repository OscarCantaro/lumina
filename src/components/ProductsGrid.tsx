import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Lámpara Aurora",
    description: "Diseño minimalista con luz cálida.",
    price: 85,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Lámpara Orbital",
    description: "Estilo futurista con acabados metálicos.",
    price: 70,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "Lámpara Vintage",
    description: "Toque clásico para ambientes elegantes.",
    price: 90,
    image: "https://picsum.photos/400/300?random=3",
  },
];

export default function ProductsGrid() {
  return (
    <section id="products" className="py-16 px-6 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">
        Nuestros Productos
      </h3>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
