import {
  ShoppingCart,
  Search,
  User,
  Moon,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7ff] text-black">

      {/* NAVBAR */}
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-3xl font-bold text-blue-600">
            Nexora
          </h1>

          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">

            <a href="#" className="hover:text-blue-600 transition">
              Inicio
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Productos
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Marcas
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Ofertas
            </a>

          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">

            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <Search size={20} />
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <User size={20} />
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
              <ShoppingCart size={20} />

              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <Moon size={20} />
            </button>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Tecnología sin límites
          </span>

          <h2 className="text-6xl font-bold leading-tight mt-6">

            Descubre lo último

            <span className="text-blue-600 block">
              en tecnología
            </span>

          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Explora nuestra selección premium de laptops,
            teléfonos, accesorios y consolas.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
              Comprar ahora
            </button>

            <button className="bg-white border border-gray-300 hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-semibold">
              Ver ofertas
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="relative rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* CATEGORIAS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex justify-between items-center mb-8">

          <h3 className="text-3xl font-bold">
            Categorías principales
          </h3>

          <button className="text-blue-600 font-semibold">
            Ver todas →
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "Laptops",
            "Teléfonos",
            "Audio",
            "Accesorios",
          ].map((item) => (

            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group"
            >

              <div className="h-32 bg-gray-100 rounded-2xl mb-6"></div>

              <h4 className="text-xl font-semibold group-hover:text-blue-600 transition">
                {item}
              </h4>

              <p className="text-gray-500 mt-2">
                Ver productos
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}