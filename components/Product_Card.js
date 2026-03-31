import Link from "next/link"; // Thêm dòng này

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col h-full bg-white">
      {/* Bọc toàn bộ ảnh và title trong thẻ Link */}
      <Link href={`/product/${product.id}`} className="grow">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-48 w-full object-contain mb-4 hover:scale-105 transition-transform" 
        />
        <h2 className="font-semibold text-lg line-clamp-2 mb-1">{product.title}</h2>
        <p className="text-gray-500 text-sm mb-2 uppercase">{product.category}</p>
      </Link>

      <div className="flex justify-between items-center mt-auto pt-4 border-t">
        <span className="text-xl font-bold text-green-600">${product.price}</span>
        <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-black transition">
          Add +
        </button>
      </div>
    </div>
  );
}