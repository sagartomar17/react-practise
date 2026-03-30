import React from 'react'

const User = ({Change, name}) => {
  return (
    <div>
      <button onClick={()=>Change(name)}>Click Me</button>
    </div>
  )
}

export default User