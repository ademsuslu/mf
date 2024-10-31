import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { currency, getProductById } from 'home/products'
export default function PDPContent() {
  const { id } = useParams()
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
      <div className="h-full flex flex-col justify-evenly ">
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end text-green-600">
            {currency.format(product.price)}
          </div>
        </div>
        <span className="my-3">{product.description}</span>
        <span>{product.longDescription}</span>
      </div>
    </div>
  )
}
