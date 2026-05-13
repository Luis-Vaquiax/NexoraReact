import { useState } from "react"

export default function LoginModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("")

  if (!isOpen) return null

  const goToVerify = () => {
    setMode("verify")
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded- [32px] shadow-2xl w-full max-w-md p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-2xl text-gray-400 hover:text-red-500"
        >
          ×
        </button>

        {mode === "login" && (
          <>
            <h2 className="text-4xl font-bold text-gray-900">
              Iniciar Sesión
            </h2>

            <p className="text-gray-500 mt-2">
              Bienvenido de nuevo a <span className="text-blue-600 font-semibold">Nexora</span>
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-bold text-gray-700">
                  CORREO ELECTRÓNICO
                </label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="mt-2 w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700">
                  CONTRASEÑA
                </label>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="mt-2 w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg">
                Ingresar
              </button>

              <p className="text-center text-sm text-gray-500">
                ¿No tienes cuenta?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="text-blue-600 font-bold"
                >
                  Regístrate gratis
                </button>
              </p>
            </div>
          </>
        )}

        {mode === "register" && (
          <>
            <h2 className="text-4xl font-bold text-gray-900">
              Crear Cuenta
            </h2>

            <p className="text-gray-500 mt-2">
              Completa tus datos para registrarte.
            </p>

            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-blue-600"
                />

                <input
                  type="text"
                  placeholder="Apellido"
                  className="bg-gray-100 border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-blue-600"
                />
              </div>

              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Número de teléfono"
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <button
                onClick={goToVerify}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg"
              >
                Crear Cuenta
              </button>

              <p className="text-center text-sm text-gray-500">
                ¿Ya tienes cuenta?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-blue-600 font-bold"
                >
                  Inicia sesión
                </button>
              </p>
            </div>
          </>
        )}

        {mode === "verify" && (
          <>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-5">
                ✉️
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Verifica tu correo
              </h2>

              <p className="text-gray-500 mt-3">
                Hemos enviado un código de 6 dígitos a:
              </p>

              <p className="text-blue-600 font-bold">
                {email || "tu correo registrado"}
              </p>
            </div>

            <div className="grid grid-cols-6 gap-2 mt-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <input
                  key={num}
                  maxLength="1"
                  className="h-14 text-center text-2xl font-bold border border-gray-300 rounded-xl outline-none focus:border-blue-600"
                />
              ))}
            </div>

            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg">
              Verificar Código
            </button>

            <p className="text-center text-sm text-gray-500 mt-5">
              ¿No recibiste el código?{" "}
              <button className="text-blue-600 font-bold">
                Reenviar código
              </button>
            </p>
          </>
        )}

      </div>
    </div>
  )
}