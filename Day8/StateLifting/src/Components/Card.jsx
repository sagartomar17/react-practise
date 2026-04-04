import React from 'react'

const Card = ({setName}) => {
  return (
    <div>
      <h1>Add Card</h1>
    <input type="text" onChange={(e)=>setName(e.target.value)} />
    
    </div>
  )
}

export default Card
