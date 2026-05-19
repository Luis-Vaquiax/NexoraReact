const getImageUrl = (imageUrl) => {
  if (!imageUrl) return "/images/no-image.png"

  if (imageUrl.startsWith("/uploads")) {
    return `http://localhost:4000${imageUrl}`
  }

  return imageUrl
}

export default function ProductCard({
  product,
  addToCart = () => {},
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
      <img
        src={getImageUrl(product.ImageUrl)}
        alt={product.Nombre}
        className="w-full h-64 object-contain p-5"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">
          {product.Nombre}
        </h3>

        <p className="text-blue-600 text-xl font-semibold mt-2">
          Q{product.Precio}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          {product.Descripcion}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl transition"
        >
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  )
}