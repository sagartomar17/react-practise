import React from 'react'
import { useForm } from 'react-hook-form';
import './App.css'


const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

 async function submitHandler(data){
    await new Promise((resolve)=> setTimeout(resolve, 5000))
    console.log(data);
    

  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>First Name:</label>
        <input className={errors.firstName?'error':''}
          type="text"
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message:"minimum lenght 3" },
            maxLength: 10,
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <br />
      <div>
        <label>Last Name:</label>
        <input type="text" {...register("lastName")} />
      </div>
      <br />
      <div>
        <label>Email:</label>
        <input type="text" {...register("email")} />
        <br />
        <br />
        <input type="submit" disabled={isSubmitting}
        value={isSubmitting? "submitting":"submit"}/>
      </div>
    </form>
  );
}

export default App