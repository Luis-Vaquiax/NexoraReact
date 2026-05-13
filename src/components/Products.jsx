import products from "../data/products"
import ProductCard from "./ProductCard"

export default function Products({
  addToCart = () => {},
  searchTerm = "",
}) {

  const filteredProducts = products.filter((product) => {

    if (searchTerm.trim() === "") return true

    return (
      product.Nombre?.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) ||

      product.Categoria?.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) ||

      product.Marca?.Nombre?.toLowerCase().includes(
        searchTerm.toLowerCase()
      )
    )

  })

  return (

    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />

        ))}

      </div>

    </section>

  )
}