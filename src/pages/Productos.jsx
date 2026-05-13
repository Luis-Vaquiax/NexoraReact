import products from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Productos() {

  return (

    <div className="p-10">

      <h1 className="text-4xl text-white font-bold mb-10">
        Productos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((producto) => (

          <ProductCard
            key={producto.id}
            producto={producto}
          />

        ))}

      </div>

    </div>
  )
}