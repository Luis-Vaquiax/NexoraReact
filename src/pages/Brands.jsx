const brands = [
  { name: "Apple", image: "/images/marcas/apple.png" },
  { name: "Samsung", image: "/images/marcas/samsung.png" },
  { name: "HP", image: "/images/marcas/hp.png" },
  { name: "Dell", image: "/images/marcas/dell.png" },
  { name: "Lenovo", image: "/images/marcas/lenovo.png" },
  { name: "ASUS", image: "/images/marcas/asus.png" },
  { name: "Acer", image: "/images/marcas/acer.png" },
  { name: "MSI", image: "/images/marcas/msi.png" },
  { name: "Sony", image: "/images/marcas/sony.png" },
  { name: "LG", image: "/images/marcas/lg.png" },
  { name: "Xiaomi", image: "/images/marcas/xiaomi.png" },
  { name: "Huawei", image: "/images/marcas/huawei.png" },
  { name: "Motorola", image: "/images/marcas/motorola.png" },
  { name: "Intel", image: "/images/marcas/intel.png" },
  { name: "AMD", image: "/images/marcas/amd.png" },
  { name: "NVIDIA", image: "/images/marcas/nvidia.png" },
  { name: "Logitech", image: "/images/marcas/logitech.png" },
  { name: "Corsair", image: "/images/marcas/corsair.png" },
  { name: "Kingston", image: "/images/marcas/kingston.png" },
  { name: "Gigabyte", image: "/images/marcas/gigabyte.png" },
  { name: "Razer", image: "/images/marcas/razer.png" },
  { name: "HyperX", image: "/images/marcas/hyperx.png" },
  { name: "Redragon", image: "/images/marcas/redragon.png" },
  { name: "Epson", image: "/images/marcas/epson.png" },
  { name: "Canon", image: "/images/marcas/canon.png" },
  { name: "Brother", image: "/images/marcas/brother.png" },
  { name: "Xerox", image: "/images/marcas/xerox.png" },
  { name: "TP-Link", image: "/images/marcas/tplink.png" },
  { name: "Cisco", image: "/images/marcas/cisco.png" },
  { name: "Ubiquiti", image: "/images/marcas/ubiquiti.png" },
  { name: "JBL", image: "/images/marcas/jbl.png" },
  { name: "Bose", image: "/images/marcas/bose.png" },
  { name: "Microsoft", image: "/images/marcas/microsoft.png" },
  { name: "Google", image: "/images/marcas/google.png" },
  { name: "Nintendo", image: "/images/marcas/nintendo.png" },
  { name: "TCL", image: "/images/marcas/tcl.png" },
  { name: "Hisense", image: "/images/marcas/hisense.png" },
]

export default function Brands() {
  return (
    <section className="bg-[#f5f7ff] min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl p-10 mb-12 shadow-sm overflow-hidden relative">
          <h1 className="text-5xl font-black text-gray-900">
            Nuestras Marcas
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Explora las mejores marcas tecnológicas disponibles en Nexora.
          </p>

          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-gradient- to-r from-blue-500 to-cyan-400 rounded-l-full" />
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Buscar marca..."
            className="w-full max-w-xl bg-white rounded-2xl px-6 py-4 outline-none border border-gray-200 focus:border-blue-600 shadow-sm"
          />
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-5">
          {brands.map((brand) => (
            <button
              key={brand.name}
              className="
                bg-white
                w-44
                h-32
                rounded-3xl
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                border
                border-gray-100
                hover:border-blue-500
                flex
                items-center
                justify-center
                p-6
              "
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-14 object-contain"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}