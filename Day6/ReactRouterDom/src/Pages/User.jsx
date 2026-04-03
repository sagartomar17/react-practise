import React from 'react'
import { Link } from 'react-router-dom';

const User = () => {
  const user = [
    { id: 1, name: "sagar", age: 20, email: "sagar@gmail.com" },
    { id: 2, name: "harsh", age: 21, email: "harsh@gmail.com" },
    { id: 3, name: "manu", age: 22, email: "manu@gmail.com" },
    { id: 4, name: "aakash", age: 23, email: "aakash@gmail.com" }
  ];
  return (
    <>
      {user.map((data) => (
        <div key={data.id}>
          <Link to={`/user/${data.id}`}>
            <h1>{data.name}</h1>
          </Link>
        </div>
      ))}
    </>
  );
}

export default User