import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="space-y-3 h-screen">
      <HomeContent />
    </div>
    <Footer />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
