export default function Hero() {
  return (
    <section className="px-6 py-12">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Tecnología sin límites
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight text-gray-900">

            Descubre lo último
            <span className="text-blue-600">
              {" "}en tecnología
            </span>

          </h1>

          <p className="text-gray-500 text-lg mt-6 leading-relaxed">

            Explora nuestra selección premium de teléfonos,
            laptops, consolas y accesorios modernos.

          </p>

          {/* Botones */}
          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl shadow-lg">
              Comprar ahora
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 transition px-8 py-4 rounded-2xl">
              Ver ofertas
            </button>

          </div>

        </div>

        {/* Imagen */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            alt="Laptop"
            className="relative rounded-[40px] shadow-2xl"
          />

        </div>

      </div>

      {/* Cards inferiores */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 mt-16">

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-lg">
            Envío rápido
          </h3>

          <p className="text-gray-500 mt-2">
            A todo el país
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-lg">
            Garantía oficial
          </h3>

          <p className="text-gray-500 mt-2">
            Productos originales
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-lg">
            Pago seguro
          </h3>

          <p className="text-gray-500 mt-2">
            Métodos protegidos
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-lg">
            Soporte 24/7
          </h3>

          <p className="text-gray-500 mt-2">
            Siempre disponibles
          </p>
        </div>

      </div>

    </section>
  )
}