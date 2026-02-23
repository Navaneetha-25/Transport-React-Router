import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Transport Dashboard </h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/cars"> View Cars</Link>
        <Link to="/bikes"> View Bikes</Link>
        <Link to="/trucks"> View Trucks</Link>
      </div>
    </div>
  )
}

export default Home