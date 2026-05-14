import { useState } from "react"

import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Grid2X2,
  Monitor,
  Printer,
  Cpu,
  Mouse,
  Gamepad2,
  Router,
  Smartphone,
  Headphones,
} from "lucide-react"

const categories = [
  {
    name: "Computadoras",
    icon: Monitor,
    sub: [
      "Laptop",
      "Equipo de Mesa",
      "Todo en Uno",
      "Mini PC",
      "Workstation",
    ],
  },
  {
    name: "Impresoras",
    icon: Printer,
    sub: [
      "Hogar / Estudio",
      "Impresoras de Recibos",
      "Láser",
      "Fotocopiadoras",
      "Multifuncionales",
    ],
  },
  {
    name: "Componentes de PC",
    icon: Cpu,
    sub: [
      "Procesadores",
      "Tarjetas Madre",
      "Memoria RAM",
      "Tarjetas Gráficas",
      "Fuentes de Poder",
    ],
  },
  {
    name: "Accesorios de Computadora",
    icon: Mouse,
    sub: [
      "Mouse",
      "Teclados",
      "Cámaras Web",
      "Bases para Laptop",
      "Mouse Pad",
    ],
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    sub: [
      "Consolas",
      "Controles",
      "Teclados Gamer",
      "Mouse Gamer",
      "Sillas Gamer",
    ],
  },
  {
    name: "Redes y Conectividad",
    icon: Router,
    sub: [
      "Routers",
      "Switches",
      "Access Point",
      "Adaptadores WiFi",
      "Cables de Red",
    ],
  },
  {
    name: "Telefonía y Tablets",
    icon: Smartphone,
    sub: [
      "Smartphones",
      "Tablets",
      "Smartwatch",
      "Teléfonos IP",
      "Accesorios para Celular",
    ],
  },
  {
    name: "Audio y Video",
    icon: Headphones,
    sub: [
      "Bocinas",
      "Audífonos",
      "Micrófonos",
      "Smart TV",
      "Proyectores",
    ],
  },
]

export default function Navbar({
  onLoginClick = () => {},
  onCartClick = () => {},
  cartCount = 0,
  searchTerm = "",
  onSearchChange = () => {},
}) {

  const [openCategories, setOpenCategories] = useState(false)

  const [activeCategory, setActiveCategory] = useState(
    categories[0]
  )

  return (

    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6 relative">

        {/* LOGO */}
        <div
          onClick={() => {
            onSearchChange("")
            window.location.href = "/"
          }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >

          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-md hover:scale-105 transition">
            N
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-900 hover:text-blue-600 transition">
              Nexora
            </h1>

            <p className="text-xs text-gray-400 -mt-1">
              Tecnología Premium
            </p>
          </div>

        </div>

        {/* CATEGORÍAS */}
        <div className="relative">

          <button
            onClick={() =>
              setOpenCategories(!openCategories)
            }
            className="hidden lg:flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition px-6 py-4 rounded-2xl font-semibold text-gray-700"
          >

            <Grid2X2 size={20} />

            Categorías

          </button>

          {openCategories && (

            <div className="absolute left-0 top-[64px] w-[620px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-[999]">

              <div className="grid grid-cols-[280px_1fr] min-h-[420px]">

                {/* LISTA */}
                <div className="bg-white border-r border-gray-100 py-3 max-h-[430px] overflow-y-auto">

                  {categories.map((cat) => {

                    const Icon = cat.icon

                    const active =
                      activeCategory.name === cat.name

                    return (

                      <button
                        key={cat.name}
                        onMouseEnter={() =>
                          setActiveCategory(cat)
                        }
                        onClick={() =>
                          setActiveCategory(cat)
                        }
                        className={`w-full flex items-center justify-between px-5 py-4 text-left transition ${
                          active
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >

                        <span className="flex items-center gap-4">

                          <Icon size={22} />

                          <span className="font-medium">
                            {cat.name}
                          </span>

                        </span>

                        <ChevronRight size={18} />

                      </button>

                    )
                  })}

                </div>

                {/* SUBCATEGORÍAS */}
                <div className="bg-gray-50 p-7">

                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {activeCategory.name}
                  </h3>

                  <div className="grid grid-cols-1 gap-3">

                    {activeCategory.sub.map((item) => (

                      <button
                        key={item}
                        onClick={() => {
                          onSearchChange(item)
                          setOpenCategories(false)
                        }}
                        className="text-left bg-white hover:bg-blue-50 hover:text-blue-600 transition px-5 py-4 rounded-2xl font-medium text-gray-600 border border-gray-100"
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

        {/* BUSCADOR */}
        <div className="flex-1 hidden md:flex">

          <div className="w-full flex items-center bg-white rounded-2xl overflow-hidden border-2 border-transparent focus-within:border-blue-600 transition-all duration-200 shadow-sm">

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                onSearchChange(e.target.value)
              }
              placeholder="Buscar en Nexora..."
              className="flex-1 bg-transparent px-6 py-4 outline-none text-gray-700 placeholder:text-gray-400"
            />

            <button
              onClick={() =>
                onSearchChange(searchTerm)
              }
              className="bg-blue-600 hover:bg-blue-700 transition w-16 h-14 flex items-center justify-center text-white"
            >

              <Search size={22} />

            </button>

          </div>

        </div>

        {/* ICONOS */}
        <div className="flex items-center gap-8">

          {/* LOGIN */}
          <button
            onClick={onLoginClick}
            className="hidden md:flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >

            <div className="w-11 h-11 rounded-full border flex items-center justify-center">
              <User size={20} />
            </div>

            <div className="text-left">

              <p className="text-xs text-gray-400">
                Mi
              </p>

              <p className="font-semibold text-sm">
                Cuenta
              </p>

            </div>

          </button>

          {/* FAVORITOS */}
          <button className="hidden md:flex items-center gap-3 text-gray-700 hover:text-red-500 transition">

            <div className="w-11 h-11 rounded-full border flex items-center justify-center">
              <Heart size={20} />
            </div>

            <div className="text-left">

              <p className="text-xs text-gray-400">
                Mis
              </p>

              <p className="font-semibold text-sm">
                Favoritos
              </p>

            </div>

          </button>

          {/* CARRITO */}
          <button
            onClick={onCartClick}
            className="relative flex items-center justify-center"
          >

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">

              <ShoppingCart
                size={22}
                className="text-blue-600"
              />

            </div>

            <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
              {cartCount}
            </span>

          </button>

        </div>

      </div>

      {/* MENÚ INFERIOR */}
      <div className="border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-center gap-10 text-gray-600 font-medium text-sm">

          <a
            href="/ofertas"
            className="hover:text-blue-600 transition"
          >
            Ofertas
          </a>

          <a
            href="/productos"
            className="hover:text-blue-600 transition"
          >
            Productos
          </a>

          <a
            href="/marcas"
            className="hover:text-blue-600 transition"
          >
            Marcas
          </a>

          <a
            href="/nuevo"
            className="hover:text-blue-600 transition"
          >
            Nuevo
          </a>

          <a
            href="#"
            className="hover:text-blue-600 transition"
          >
            Empresa
          </a>

          <button className="flex items-center gap-1 hover:text-blue-600 transition">

            Soporte

            <ChevronDown size={16} />

          </button>

          <button className="flex items-center gap-1 hover:text-blue-600 transition">

            Políticas

            <ChevronDown size={16} />

          </button>

        </div>

      </div>

    </header>

  )
}