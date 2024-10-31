import { useState } from 'react'
import Login from './login'

export default function CartContent() {
  const [token, setToken] = useState('')
  return (
    <div className="max-w-[200px]">
      <Login />
    </div>
  )
}
