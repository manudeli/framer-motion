import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Base, Order, Toppings } from '~/pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/base" element={<Base />} />
        <Route path="/toppings" element={<Toppings />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
