import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '~/App.css'
import { Base, Home, Order, Toppings } from '~/pages'
import { Pizza } from '~/types'

function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: '', toppings: [] })

  const handleAddBase = (base: Pizza['base']) =>
    setPizza((prev) => ({ ...prev, base }))

  const handleAddTopping = (topping: Pizza['toppings'][number]) =>
    setPizza((prev) => ({ ...prev, toppings: [...prev.toppings, topping] }))

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/base"
          element={<Base addBase={handleAddBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={handleAddTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
      </Routes>
    </div>
  )
}

export default App
