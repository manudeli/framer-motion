import React from 'react'
import { Link } from 'react-router-dom'
import { Pizza } from '~/types'

interface Props {
  addTopping: (topping: string) => void
  pizza: Pizza
}

const Toppings = ({ addTopping, pizza }: Props) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  )
}

export default Toppings
