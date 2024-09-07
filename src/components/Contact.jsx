import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });
    const handelChange = (e)=>{
      const {name, value} = e.target
      setFormInput({...formInputs, [name]:value});
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formInputs);
    }

    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>User Name </label>
        <input type="text" value={formInputs.name} name="name" onChange={handelChange} />
  
        <label>Email </label>
        <input type="text" value={formInputs.email} name="email" onChange={handelChange} />
        <label>Age </label>
        <input type="text" value={formInputs.age} name="age" onChange={handelChange} />
  
        <hr />
        <button type='submit'>Submit</button>

        {formInputs.name || formInputs.email || formInputs.age ? (
          <div>
            <p><strong>Name:</strong> {formInputs.name || "Not Provided"}</p>
            <p><strong>Email:</strong> {formInputs.email || "Not Provided"}</p>
            <p><strong>Age:</strong> {formInputs.age || "Not Provided"}</p>
          </div>
        ) : (
          <div>
            <p><em>No data provided yet.</em></p>
          </div>
        )}
        
      </form>
      </>
    )
  }