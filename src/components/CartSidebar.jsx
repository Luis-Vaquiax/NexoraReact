import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function CartSidebar() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    total,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext)

  const formatMoney = (value) => value.toLocaleString("es-GT")

  return (
    <>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w- [460px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Tu carrito de compras</h2>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            ×
          </button>
        </div>

        <div className="p-4 h-[72vh] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500 p-4">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-5 border-b border-gray-200"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={item.ImageUrl}
                    alt={item.Nombre}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-gray-500 text-sm">
                    {item.Marca?.Nombre || item.Categoria}
                  </p>

                  <h3 className="font-bold text-[16px] leading-tight uppercase">
                    {item.Nombre}
                  </h3>

                  <p className="text-lg mt-4">
                    Q{formatMoney(item.Precio)}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                    <div className="w-14 h-12 flex items-center justify-center text-blue-600 font-bold">
                      {item.quantity}
                    </div>

                    <div className="flex flex-col border-l border-gray-200">
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-8 h-6 hover:bg-gray-100 text-sm"
                      >
                        ˄
                      </button>

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-6 hover:bg-gray-100 text-sm"
                      >
                        ˅
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xl hover:text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t bg-white">
          <div className="flex justify-between text-xl font-bold mb-5">
            <span>Total:</span>
            <span>Q{formatMoney(total)}</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold">
            Finalizar comprasddf
          </button>
        </div>
      </aside>
    </>
  )
}