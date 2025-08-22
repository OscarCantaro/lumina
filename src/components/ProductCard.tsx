type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  whatsapp: string;
};

export default function ProductCard({
  name,
  description,
  price,
  image,
  whatsapp,
}: ProductProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h4 className="text-xl font-semibold mb-2">{name}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-bold mb-4">S/ {price}</p>
      <a
        href={`https://wa.me/${whatsapp}?text=Hola, quiero más información sobre ${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium text-center"
      >
        Comprar vía WhatsApp
      </a>
    </div>
  );
}
