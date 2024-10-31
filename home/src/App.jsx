import React from 'react'
import ReactDOM from 'react-dom/client'

import 'remixicon/fonts/remixicon.css'
import './index.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'

const App = () => (
  <div className=" flex flex-col justify-between space-y-4 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="space-y-3 flex-grow">
      <HomeContent />
    </div>
    <Footer />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
