import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import Header from 'home/Header'
import Footer from 'home/Footer'
import PDPContent from './components/PDPContent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between space-y-4 text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="space-y-3 flex-grow">
          <Routes>
            <Route path="/products/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
