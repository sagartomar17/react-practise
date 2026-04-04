import React, { useState } from 'react'
import Card from './Components/Card';
import User from './Components/User';

const App = () => {
  const[name, setName] = useState('');
  return (
    <div>
      <Card setName={setName} />
     <User name={name}/>
     
    </div>
  );
}

export default App

// jbb kbhi bhi lifting state up concept  ka use krna hai jaise ekk parent component hai aur 2 uske child component hai thk hai too child 2 ka data hmee child 1 one show krana hai too phele hmee child 2 ka data ya state hmee parent me bnani pdegi thk hai fir vha se bheja jyga child 1 me data 