import React, { useRef } from 'react'

const App = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event)=>{
    event.preventDefault()
   const user = document.querySelector("#user").value
   const password = document.querySelector("#password").value;
   console.log(user);
    console.log(password);
   
    
  }

  function ClickHandler(event){
    event.preventDefault()
    const user = userRef.current.value
    const password = passwordRef.current.value
    console.log(user);
     console.log(password);
    

  }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text" id="user" placeholder="enter your username" />
        <br />
        <input
          type="password"
          id="password"
          placeholder="enter your password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <hr />
      <h1>Uncontrolled component with useRef</h1>
      <form action="" onSubmit={ClickHandler}>
        <input
          type="text"
          ref={userRef}
          id="user"
          placeholder="enter your username"
        />
        <br />
        <input
          type="password"
          ref={passwordRef}
          id="password"
          placeholder="enter your password"
        />
        <br />
        <br />
        <button>SubmitRef</button>
      </form>
    </div>
  );
}

export default App