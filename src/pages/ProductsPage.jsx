import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import {
  getProducts,
  getCategories,
  getBrands,
} from "../services/productService"

export default function ProductsPage({ addToCart }) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedBrand, setSelectedBrand] = useState("Todas")

  useEffect(() => {
    const loadData = async () => {
      const productosDB = await getProducts()
      const categoriasDB = await getCategories()
      const marcasDB = await getBrands()

      setProducts(productosDB)
      setCategories(categoriasDB)
      setBrands(marcasDB)
    }

    loadData()
  }, [])

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Todos" ||
      product.Categoria === selectedCategory

    const brandMatch =
      selectedBrand === "Todas" ||
      product.Marca === selectedBrand

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
              <label className="flex items-center gap-3 text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === "Todos"}
                  onChange={() => setSelectedCategory("Todos")}
                  className="accent-blue-600"
                />
                Todos
              </label>

              {categories.map((cat) => (
                <label
                  key={cat.Id}
                  className="flex items-center gap-3 text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat.Nombre}
                    onChange={() => setSelectedCategory(cat.Nombre)}
                    className="accent-blue-600"
                  />
                  {cat.Nombre}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Marca</h3>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === "Todas"}
                  onChange={() => setSelectedBrand("Todas")}
                  className="accent-blue-600"
                />
                Todas
              </label>

              {brands.map((brand) => (
                <label
                  key={brand.Id}
                  className="flex items-center gap-3 text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === brand.Nombre}
                    onChange={() => setSelectedBrand(brand.Nombre)}
                    className="accent-blue-600"
                  />
                  {brand.Nombre}
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
                key={product.Id}
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