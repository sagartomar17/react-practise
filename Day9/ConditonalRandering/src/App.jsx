import React, { useState } from 'react'
import LogOut from './Components.jsx/LogOut'
import LoginBtn from './Components.jsx/LoginBtn'

const App = () => {
  const[isLoggedIn, setLoggedIn] = useState(true)


  return(
    <div>
      <h1>Welcome everyone to sagar tomar web dev couse</h1>
      <div>
       { isLoggedIn && <LogOut/>}
      </div>
    </div>
  )
  // yee hai logical operator hai aadhar per
  
  // if(isLoggedIn){
  //   return(
  //     <isLoggedIn/>
  //   )
  // }else{
  //   <setLoggedIn/>
  // }
// yee hai if else k base per



// or
  // return (
  //   // <div>
  //   //   {isLoggedIn? <LogOut/> : <LoginBtn/>}
  //   // </div>
    
  // )
  // yee ternary operator se hai upper wala if else k base per hai
}

export default App