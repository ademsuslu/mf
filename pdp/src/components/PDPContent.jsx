import React, { useState, useEffect } from 'react'

import { currency, getProductById } from 'home/products'
export default function PDPContent() {
  const id = 1
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => setProduct(product))
    } else {
      setProduct(null)
    }
  }, [id])

  if (!product) return null
  //   create details
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div className="flex">
        <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
        <div className="font-bold text-3xl flex-end">
          {currency.format(product.price)}
        </div>
      </div>
    </div>
  )
}
