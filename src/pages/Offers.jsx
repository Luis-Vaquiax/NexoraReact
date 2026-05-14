import offers from "../data/offers"
import ProductCard from "../components/ProductCard"

export default function Offers({ addToCart }) {
  return (
    <section className="bg-[#f5f7ff] min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl p-10 mb-10 shadow-sm">
          <span className="text-blue-600 font-bold uppercase text-sm">
            Promociones especiales
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-2">
            Ofertas Nexora
          </h1>

          <p className="text-gray-500 mt-3">
            Productos con precios rebajados por tiempo limitado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((product) => (
            <div key={product.id} className="relative">
              <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                OFERTA
              </span>

              <ProductCard
                product={product}
                addToCart={addToCart}
              />

              <p className="mt-2 text-center text-sm text-gray-400 line-through">
                Antes Q{product.PrecioNormal}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}