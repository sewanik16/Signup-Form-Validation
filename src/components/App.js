import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  // const [gender, setGender] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState(false);
  const [error,setError] = useState(false);
  const [label,setlabel]= useState('');

  let submitForm=(e)=>{
    e.preventDefault();
    let nm = document.getElementById("name").value
    let em = document.getElementById("email").value
    let num = document.getElementById("number").value
    let ps = document.getElementById("password").value
    
    if(!nm || !em || !ps || !num){
      setError(true);
    }else{
      let idx = em.indexOf('@');
      setlabel("Hello "+ em.substring(0,idx))
      setError(false);
    }
  }

  return (
    <div id="main">
      <h1>Signup Form</h1>
      <form onSubmit={submitForm}>
      {error? <label style={{color:"red"}}>All fields are mandatory</label>:
      <label>{label}</label>
      }
        <input type="text" id="name" placeholder="Enter your name" onChange={(e)=>setName(!/\d/.test(e.target.value))} />
        {name && <span>Name is not alphanumeric</span> }
        <input type="email" id="email"  placeholder="Enter your email id" onChange={(e)=>setEmail(!/@/.test(e.target.value))} />
        {email && <span>Email must contain @ </span>}
        <select onChange={(e)=>{setGender(e.target.value)}} >
          <option defaultValue="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {/* {gender && <span>Please identify as male, female or others</span>} */}
        <input type="text" id="number"  minLength="10" maxLength="10" placeholder="Enter your phone number" onChange={(e)=>setNumber(!/^\d{10}$/.test(e.target.value))} />
        {number && <span>Phone Number must contain only numbers and length 10</span>}
        <input type="password" id="password"  minLength="6"  placeholder="Enter your password" onChange={(e)=>setPassword((e.target.value.length<6))} />
        {password && <span>Password must contain atleast 6 letters</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default App;
