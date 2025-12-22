import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import App from './App'
import Product from './Product'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
