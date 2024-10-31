import { useState } from 'react'

export default function CartContent() {
  const [token, setToken] = useState('')
  return (
    <div className="max-w-[200px]">
      JWT: <p>{token}</p>
    </div>
  )
}
