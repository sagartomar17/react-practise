import React from 'react'
import { useParams, useLocation, Navigate, useNavigate} from 'react-router-dom'

const Dynamic = () => {
  const {slug} = useParams();
  const user = [
    { id: 1, name: "sagar", age: 20, email: "sagar@gmail.com" },
    { id: 2, name: "harsh", age: 21, email: "harsh@gmail.com" },
    { id: 3, name: "manu", age: 22, email: "manu@gmail.com" },
    { id: 4, name: "aakash", age: 23, email: "aakash@gmail.com" },
  ];
  const result = user.find(data=>data.id==slug)
  const location = useLocation();
  const navigate = useNavigate();

  
  return (
    <div>
      <h2>Id: {result.id}</h2>
      <h2>Age: {result.age}</h2>
      <h2>Name: {result.name}</h2>
      <h2>Email: {result.email}</h2>
      {
        location.pathname=='/user/3' && <div><h2>Hello {result.name}</h2></div>
      }
      <div>
        <button onClick={()=>navigate('/')}>Go to home</button>
      </div>
    </div>
  );
}

export default Dynamic

// use location hook specific kisi page jaise page number 3 per button dikhana hai yaa specific kuch cheez dikhani hai too uske liye hota hai pathname 

// and useParams hook hmara sara data dikhane k lie hota hai 

// navigate redirect k liye hota hai jaise me page 3 per hu yaa khi bhi hu aur vha button me us per click krke home page per phuch jau