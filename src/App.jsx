import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/Transport/NavBar'
import Car from './components/Transport/Car'
import Bike from './components/Transport/Bike'
import Truck from './components/Transport/Truck'
import Home from './components/Transport/Home'

function App() {
  return (
    <Router>
      <NavBar />
      <h2>Welcome select any Transport </h2>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Car />} />
        <Route path="/bikes" element={<Bike />} />
        <Route path="/trucks" element={<Truck />} />
      </Routes>
    </Router>
  )
}

export default App