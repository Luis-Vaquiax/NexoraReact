import products from "../data/products"
import ProductCard from "../components/ProductCard"

export default function NewProducts({ addToCart }) {
  const newProducts = products.slice(-8).reverse()

  return (
    <section className="bg-[#f5f7ff] min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl p-10 mb-10 shadow-sm">
          <span className="text-blue-600 font-bold uppercase text-sm">
            Lo más reciente
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-2">
            Productos nuevos
          </h1>

          <p className="text-gray-500 mt-3">
            Explora los últimos productos agregados: celulares, tablets, accesorios y tecnología premium.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="relative">
              <span className="absolute top-4 left-4 z-10 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                NUEVO
              </span>

              <ProductCard
                product={product}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}