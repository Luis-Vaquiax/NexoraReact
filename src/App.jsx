import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import LoginModal from "./components/LoginModal"
import SidebarCart from "./components/SidebarCart"
import Brands from "./pages/Brands"

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id)

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce(
    (sum, item) => sum + item.Precio * item.quantity,
    0
  )

  if (cartOpen) {
    return (
      <SidebarCart
        cart={cart}
        total={total}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        clearCart={clearCart}
        onBack={() => setCartOpen(false)}
      />
    )
  }

  return (
    <div className="bg-[#f5f7ff] min-h-screen">
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onLoginClick={() => setLoginOpen(true)}
        onCartClick={() => setCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <Products
                addToCart={addToCart}
                searchTerm={searchTerm}
              />
            </>
          }
        />

        <Route path="/marcas" element={<Brands />} />
      </Routes>

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </div>
  )
}