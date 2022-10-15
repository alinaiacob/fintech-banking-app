import React,{useState} from 'react'
import {Link} from "react-router-dom"
const RegisterPage = () => {
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setCPassword]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const submit=(e)=>{
        e.preventDefault();
        console.log('submit') 
      
    }
  return (
    <div className='container'>
        <h1>Do you have a business idea? Create an account</h1>
        <div className='form-control'>
            <div>
              <p>Email</p>
              <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
              <p>Name</p>
              <input type='email' value={name}  onChange={(e)=>setName(e.target.value)}/>
            </div>


            <div>
              <p>Phone number</p>
              <input type='tel' value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>

            <div>
              <p>Password</p>
              <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div>
              <p>Confirm Password</p>
              <input type='password' value={cpassword}  onChange={(e)=>setCPassword(e.target.value)}/>
            </div>
            
            <button onClick={submit}>Submit</button>
        </div>
        <Link to='/'>Back to homepage</Link>
    </div>
  )
}

export default RegisterPage