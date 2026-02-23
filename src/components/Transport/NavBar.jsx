import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav style={{ padding: '10px', background: '#222' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
      <Link to="/cars" style={{ color: 'white', marginRight: '15px' }}>Cars</Link>
      <Link to="/bikes" style={{ color: 'white', marginRight: '15px' }}>Bikes</Link>
      <Link to="/trucks" style={{ color: 'white' }}>Trucks</Link>
    </nav>
  )
}

export default NavBar