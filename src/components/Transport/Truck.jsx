import React from 'react'
import trucks from './trucks'

function Truck() {
  return (
    <div>
      <h1>Truck Info</h1>
      {trucks.map((c,index)=>(
        <article key={index}>
            <img src={c.url} height={300} width={350}/>
            <p>{c.name}</p>
            <p>Color:{c.color}</p>
        </article>
      ))}
    </div>
  )
}

export default Truck
