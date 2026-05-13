import { motion, AnimatePresence } from "framer-motion"

export default function ProductModal({ product, open, onClose, addToCart }) {

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* Caja modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl"
          >

            <div className="grid md:grid-cols-2">

              {/* Imagen */}
              <div className="bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-6">

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h- [400px] object-contain"
                />

              </div>

              {/* Información */}
              <div className="p-8 flex flex-col justify-between">

                <div>

                  <h2 className="text-4xl font-bold mb-4 dark:text-white">
                    {product.Nombre}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                    {product.description}
                  </p>

                  <h3 className="text-3xl font-bold text-cyan-500">
                    Q{product.Precio}
                  </h3>

                </div>

                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-bold transition"
                  >
                    Agregar al carrito
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-3 border dark:border-zinc-700 rounded-xl dark:text-white"
                  >
                    Cerrar
                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}