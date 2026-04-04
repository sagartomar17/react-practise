
// import { createContext, useState } from 'react'
import { createContext, useState } from 'react';
import UserA from './Components/UserA'
import './App.css'

// step1. create Context
// const userContext = createContext()
// step2. wrap all the child inside the provider
// step 3. pass value
// step4. consumer k ander jakr value consume krlo
  const themeContext = createContext()

const App = () => {
  // const [user, setUser] = useState({name:"sagar tomar"})
  const [theme, setTheme] = useState("light")
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div id='context' style={{backgroundColor:theme=='light'? 'beige':'black'}}>
          <UserA/>
        </div>
      </themeContext.Provider>
      {/* <userContext.Provider value={user}>
        <UserA />
      </userContext.Provider> */}
    </>
  );
}

export default App
// export {userContext}
export {themeContext}