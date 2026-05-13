import { useState } from "react"
import {
  Home,
  Store,
  Wallet,
  CreditCard,
  Trash2,
  Plus,
  Minus,
  CircleX,
  Truck,
  CheckCircle,
  Download,
} from "lucide-react"

import Navbar from "./Navbar"

export default function SidebarCart({
  cart = [],
  total = 0,
  removeFromCart = () => {},
  increaseQty = () => {},
  decreaseQty = () => {},
  onBack = () => {},
  clearCart = () => {},
}) {
  const [step, setStep] = useState(1)
  const [deliveryType, setDeliveryType] = useState("domicilio")
  const [paymentType, setPaymentType] = useState("tarjeta")

  const formatMoney = (value) => Number(value).toLocaleString("es-GT")

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const steps = ["Carrito", "Envío", "Pago", "Pedido"]

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f5f7ff] px-6 py-8">
        <div className="max-w-7xl mx-auto">

          {/* STEPS */}
          <div className="flex justify-center gap-24 border-b border-gray-200 pb-4 mb-10 font-semibold">
            {steps.map((item, index) => {
              const number = index + 1
              const active = step === number
              const completed = step > number

              return (
                <button
                  key={item}
                  onClick={() => setStep(number)}
                  className={`pb-4 flex items-center gap-2 border-b-4 ${
                    active
                      ? "text-blue-600 border-blue-600"
                      : completed
                      ? "text-green-500 border-green-500"
                      : "text-gray-400 border-transparent"
                  }`}
                >
                  <span
                    className={`w-5 h-5 text-xs rounded-full flex items-center justify-center text-white ${
                      active
                        ? "bg-blue-600"
                        : completed
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  >
                    {number}
                  </span>
                  {item}
                </button>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div className="bg-white rounded-[26px] p-8 shadow-sm grid md:grid-cols-2 gap-10">
                    <div>
                      <h2 className="text-xl font-extrabold">
                        Forma de entrega
                      </h2>
                      <p className="text-gray-500 text-sm mb-6">
                        Selecciona cómo recibirás tu pedido.
                      </p>

                      <div className="flex gap-4 flex-wrap">
                        <button
                          onClick={() => setDeliveryType("domicilio")}
                          className={`flex items-center gap-3 px-8 py-3 rounded-full border font-bold ${
                            deliveryType === "domicilio"
                              ? "border-blue-600 text-blue-600 bg-blue-50"
                              : "bg-gray-100 text-gray-400 border-transparent"
                          }`}
                        >
                          <Home size={18} />
                          A domicilio
                        </button>

                        <button
                          onClick={() => setDeliveryType("pickup")}
                          className={`flex items-center gap-3 px-8 py-3 rounded-full border font-bold ${
                            deliveryType === "pickup"
                              ? "border-blue-600 text-blue-600 bg-blue-50"
                              : "bg-gray-100 text-gray-400 border-transparent"
                          }`}
                        >
                          <Store size={18} />
                          Pickup en tienda
                        </button>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-extrabold">
                        Forma de pago
                      </h2>

                      <div className="flex gap-4 mt-10 flex-wrap">
                        <button
                          onClick={() => setPaymentType("paypal")}
                          className={`flex items-center gap-3 px-8 py-3 rounded-full border font-bold ${
                            paymentType === "paypal"
                              ? "border-blue-600 text-blue-600 bg-blue-50"
                              : "bg-gray-100 text-gray-400 border-transparent"
                          }`}
                        >
                          <Wallet size={18} />
                          PayPal
                        </button>

                        <button
                          onClick={() => setPaymentType("tarjeta")}
                          className={`flex items-center gap-3 px-8 py-3 rounded-full border font-bold ${
                            paymentType === "tarjeta"
                              ? "border-blue-600 text-blue-600 bg-blue-50"
                              : "bg-gray-100 text-gray-400 border-transparent"
                          }`}
                        >
                          <CreditCard size={18} />
                          Tarjeta
                        </button>
                      </div>
                    </div>
                  </div>

                  <CartProducts
                    cart={cart}
                    formatMoney={formatMoney}
                    removeFromCart={removeFromCart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                  />
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="bg-white rounded-[26px] p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-2">
                    Datos de envío para productos físicos
                  </h2>

                  <p className="text-gray-500 mb-8">
                    Completa la información para entregar tu pedido.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Alias de la dirección" placeholder="Casa, Trabajo" />
                    <Input label="Dirección" placeholder="Dirección, calle y avenida" />
                    <Select label="Departamento" value="Guatemala" />
                    <Select label="Municipio" value="Guatemala" />
                    <Input label="Zona" placeholder="0" />
                    <Input label="Teléfono de contacto" placeholder="55885588" />
                  </div>

                  <textarea
                    placeholder="Notas adicionales"
                    className="mt-4 w-full h-28 bg-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="bg-white rounded-[26px] p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-8">
                    Datos de factura
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <Input label="NIT" placeholder="888888-6" />
                    <Input label="Teléfono" placeholder="55885588" />
                    <Input label="Razón social" placeholder="Juan Pérez" />
                    <Input label="Correo electrónico" placeholder="correo@ejemplo.com" />
                    <Input label="Dirección de factura" placeholder="6ta avenida 8-56 Zona 9" />
                  </div>

                  {paymentType === "tarjeta" ? (
                    <>
                      <h2 className="text-2xl font-bold mb-5">
                        Datos de la tarjeta
                      </h2>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input label="Número de tarjeta" placeholder="4000123456789010" />
                        <Input label="Nombre impreso en la tarjeta" placeholder="Juan Pérez" />
                        <Input label="Fecha de expiración" placeholder="mm/aa" />
                        <Input label="CVV" placeholder="321" />
                      </div>
                    </>
                  ) : (
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-600">
                        Pago con PayPal
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Al finalizar la compra serás redirigido a PayPal para completar el pago.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="bg-white rounded-[26px] p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="text-green-500" size={34} />
                    <h2 className="text-3xl font-bold">
                      Pedido confirmado
                    </h2>
                  </div>

                  <p className="text-gray-500 mb-8">
                    Tu factura ha sido generada correctamente.
                  </p>

                  <div className="border rounded-3xl p-6 bg-gray-50">
                    <h3 className="text-xl font-bold mb-4">
                      Factura Nexora
                    </h3>

                    <p><b>No. Pedido:</b> #NEX-2026-001</p>
                    <p><b>Fecha:</b> 09/05/2026</p>
                    <p><b>Total:</b> Q{formatMoney(total)}</p>

                    <div className="mt-6 space-y-3">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between border-b pb-2">
                          <span>{item.Nombre} x {item.quantity}</span>
                          <span>Q{formatMoney(item.Precio * item.quantity)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
                    <Download size={20} />
                    Descargar factura
                  </button>
                </div>
              )}
            </div>

            {/* SUMMARY */}
            <aside className="bg-white rounded-[26px] shadow-sm h-fit overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h2 className="text-xl font-extrabold">
                  Resumen
                </h2>
              </div>

              <div className="p-8 space-y-5">
                <div className="flex justify-between text-gray-600">
                  <span>Sub Total</span>
                  <span>Q{formatMoney(total)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Descuento</span>
                  <span>-Q0</span>
                </div>

                <div className="border-t pt-5 flex justify-between text-lg font-extrabold">
                  <span>Total</span>
                  <span>Q{formatMoney(total)}</span>
                </div>

                {step < 4 && (
                  <button
                    onClick={nextStep}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
                  >
                    {step === 1 ? "Finalizar mi compra →" : "Continuar →"}
                  </button>
                )}

                {step > 1 && step < 4 && (
                  <button
                    onClick={prevStep}
                    className="w-full border border-gray-300 py-4 rounded-xl text-gray-500 font-bold hover:bg-gray-50 transition"
                  >
                    ← Regresar
                  </button>
                )}

                {step === 1 && (
                  <>
                    <button
                      onClick={onBack}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-bold transition"
                    >
                      Agregar otro producto +
                    </button>

                    <button
                      onClick={clearCart}
                      className="w-full border border-gray-300 py-4 rounded-xl text-gray-400 font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                    >
                      Limpiar mi carrito
                    </button>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="mt-2 w-full bg-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

function Select({ label, value }) {
  return (
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase">
        {label}
      </label>
      <select className="mt-2 w-full bg-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500">
        <option>{value}</option>
        <option>Chimaltenango</option>
        <option>Antigua Guatemala</option>
        <option>Escuintla</option>
      </select>
    </div>
  )
}

function CartProducts({
  cart,
  formatMoney,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  return (
    <div className="bg-white rounded-[26px] p-8 shadow-sm">
      <h2 className="text-xl font-extrabold">
        Entrega a domicilio
      </h2>

      <p className="text-gray-500 text-sm mb-8">
        Recibe este producto en tu domicilio.
      </p>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 border-b border-gray-100 pb-6"
            >
              <div className="relative">
                <span className="absolute -top-2 -left-2 bg-blue-100 text-blue-600 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {item.quantity}
                </span>

                <img
                  src={item.ImageUrl}
                  alt={item.Nombre}
                  className="w-24 h-24 object-contain rounded-xl bg-gray-50 p-2"
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-400 text-xs uppercase">
                  {item.Marca?.Nombre || item.Categoria}
                </p>

                <h3 className="text-sm leading-tight max-w-md font-medium">
                  {item.Nombre}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Precio unitario Q{formatMoney(item.Precio)}
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl flex items-center gap-4 px-5 py-3">
                <span className="text-sm">
                  Sub Total
                  <b> Q{formatMoney(item.Precio * item.quantity)}</b>
                </span>

                <button onClick={() => decreaseQty(item.id)}>
                  <Minus size={14} />
                </button>

                <span className="font-bold">{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>
                  <Plus size={14} />
                </button>

                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}