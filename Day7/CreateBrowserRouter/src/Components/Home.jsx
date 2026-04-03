import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  function handlechange(){
   navigate('/about')
  }
  return (
    <div>Welcome to Home page
      <button onClick={handlechange}>Go to About page</button>
    </div>
  )
}

export default Home

// use navigate hook aapka navigate krta hai ki home page per jaise button hai usse clikc krke aap kha jana chate ho