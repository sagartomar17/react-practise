import React from 'react'
// import { userContext } from '../App'
import { useContext } from 'react'
import { themeContext } from '../App'

const UserC = () => {
  // const user = useContext(userContext)
  const {theme, setTheme} = useContext(themeContext)
  function changetheme(){
    if(theme==='light')
      setTheme('dark')
      else(
        setTheme('light')
      )
    
  }
  return (
    <div>
      <button onClick={changetheme}>
       change Theme
      </button>

    </div>
  )
}

export default UserC