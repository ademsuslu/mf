import React, { useState, useEffect } from 'react'
import { currency, getProducts } from '../products'

export default function HomeContent() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-5 border-2 border-gray-200 shadow-sm"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <h3 className="text-md font-bold">{product.name}</h3>
          <p className="text-gray-600">{currency.format(product.price)}</p>
        </div>
      ))}
    </div>
  )
}
