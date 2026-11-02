import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notfound/NotFound'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router'
import Settings from './Settings'

function App() {
  const [currency, setCurrency] = useState('USD')

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route 
          path="/"
          exact
          element={<Home currency={currency}/>} 
        />
        <Route 
          path="/about"
          element={<About />} 
        />
        <Route 
          path="/settings"
          element={<Settings currency={currency} setCurrency={setCurrency}/>} 
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
