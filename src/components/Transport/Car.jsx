import React from 'react'
import cars from './cars'

function Car() {
  return (
    <div>
      <h1>Car Info</h1>
      {cars.map((c,index)=>(
        <article key={index}>
            <img src={c.url} height={300} width={350}/>
            <p>{c.name}</p>
            <p>Color:{c.color}</p>
        </article>
      ))}
    </div>
  )
}

export default Car
