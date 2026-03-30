import React, { useState } from 'react'

const App = () => {
  let[form, setForm] = useState({
    firstName: "", lastName: "", password: "", email: "", html: false, css: false, javascript: false, country:"india", mode:""
  })
  function changeHandler(event){
    let{name, value, type, checked} = event.target
    setForm((prev)=> ({...prev, [name]:type==='checkbox'? checked: value}))
    

  }
  function submitHandler(event){
    event.preventDefault()
    console.log(form);
    

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={changeHandler}
          value={form.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={changeHandler}
          value={form.lastName}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="Password"
          name="password"
          id="password"
          onChange={changeHandler}
          value={form.password}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={form.email}
        />
        <br />
        <br />

        <input
          type="checkbox"
          name="html"
          id="html"
          onChange={changeHandler}
          value={form.html}
        />
        <label htmlFor="html">HTML</label>
        <br />

        <input
          type="checkbox"
          name="css"
          id="css"
          onChange={changeHandler}
          value={form.css}
        />
        <label htmlFor="css">CSS</label>
        <br />

        <input
          type="checkbox"
          name="javascript"
          id="javascript"
          onChange={changeHandler}
          value={form.javascript}
        />
        <label htmlFor="javascript">Javascript</label>
        <br />
        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          onChange={changeHandler}
          value={form.country}
        >
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="japan">Japan</option>
        </select>
        <br />
        <br />

        <input
          type="radio"
          id="online-mode"
          name="mode"
          value="online-mode"
          onChange={changeHandler}
        />
        <label htmlFor="online-mode">Online-Mode</label>
        <br />

        <input
          type="radio"
          id="offline-mode"
          name="mode"
          value="offline-mode"
          onChange={changeHandler}
        />
        <label htmlFor="offline-mode">Offline-Mode</label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App
