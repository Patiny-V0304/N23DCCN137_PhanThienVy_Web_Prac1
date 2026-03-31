import Button from "@/components/Button";
async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Ảnh */}
        <div className="flex justify-center items-center bg-white p-6 rounded-xl shadow">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Nội dung */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-gray-500 uppercase mb-2">
              {product.category}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-bold text-green-600 mb-6">
              ${product.price}
            </p>
          </div>

          <Button>Add to Cart</Button>
        </div>

      </div>
    </div>
  );
}