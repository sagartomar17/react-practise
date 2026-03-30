import React from 'react'
import User from './User'

const App = () => {

  function Change(name){
    alert(name)
  }


  return (
    <div>
      <h1>Pass Function in Component as a props</h1>
      <User Change={Change} name="sagar"></User>
      <User Change={Change} name="Aakash"></User>
      <User Change={Change} name="akshay"></User>
      <User Change={Change} name="harsh"></User>
    </div>
  );
}

export default App