import { useState } from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

const categories = [
  "Todos",
  "Computadoras",
  "Impresoras",
  "Componentes de PC",
  "Accesorios de Computadora",
  "Gaming",
  "Redes y Conectividad",
  "Telefonía y Tablets",
  "Audio y Video",
]

export default function ProductsPage({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedBrand, setSelectedBrand] = useState("Todas")

  const brands = [
    "Todas",
    ...new Set(products.map((p) => p.Marca?.Nombre).filter(Boolean)),
  ]

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Todos" ||
      product.Categoria === selectedCategory

    const brandMatch =
      selectedBrand === "Todas" ||
      product.Marca?.Nombre === selectedBrand

    return categoryMatch && brandMatch
  })

  return (
    <section className="bg-[#f5f7ff] min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-8">

        <aside className="bg-white rounded-3xl p-6 shadow-sm h-fit sticky top-36">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Filtros</h2>

            <button
              onClick={() => {
                setSelectedCategory("Todos")
                setSelectedBrand("Todas")
              }}
              className="text-blue-600 text-sm font-semibold"
            >
              Limpiar filtro
            </button>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4">Categoría</h3>

            <div className="space-y-3">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="accent-blue-600"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Marca</h3>

            <div className="space-y-3">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                    className="accent-blue-600"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
            <h1 className="text-4xl font-black text-gray-900">
              Productos
            </h1>

            <p className="text-gray-500 mt-2">
              Mostrando {filteredProducts.length} productos disponibles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}