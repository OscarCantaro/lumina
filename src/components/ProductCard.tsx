type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
      {/* Imagen */}
      <img src={image} alt={name} className="h-48 w-full object-cover" />

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {/* Precio y botón */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold">S/ {price}</span>
          <a
            href={`https://wa.me/51987654321?text=Hola, quiero la lámpara ${name} por S/${price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
