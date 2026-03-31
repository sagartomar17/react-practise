import React, { useRef } from 'react'
import UserRef from './UserRef'

const App = () => {
  const User = useRef(null)
 function changeHandler(){
  User.current.value = 1000
  User.current.focus()
  User.current.style.color="red"

 }
  return (
    <div>
      <h1>ForwarRef in React</h1>
       <UserRef ref={User}/>
      <button onClick={changeHandler}>Click Me</button>
    </div>
  )
}

export default App