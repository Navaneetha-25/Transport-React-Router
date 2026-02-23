import React from 'react'
import bikes from "./bikes"

function Bike() {
  return (
    <div>
      <h1>Bike Info</h1>
      {bikes.map((c,index)=>(
        <article key={index}>
            <img src={c.url} height={300} width={350}/>
            <p>{c.name}</p>
            <p>Color:{c.color}</p>
        </article>
      ))}
    </div>
  )
}

export default Bike
