import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import 'remixicon/fonts/remixicon.css'

import Header from 'home/Header'
import Footer from 'home/Footer'
import CartContent from './components/CartContent'

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
