import React,{useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios";
const RegisterPage = () => {
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setCPassword]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const submit=(e)=>{
      if(email.length!=0 && name.length!=0 && password.length!=0 && cpassword.length!=0 && password==cpassword && phoneNumber.length!=0){
        let obj={
          name:name,
          email:email,
          password:password,
          cpassword:cpassword
        }
        console.log(obj)
      }else if( password.length!=0 && cpassword.length!=0 && password!==cpassword ){
        alert('Passwords do not match')
      }
        e.preventDefault();
        console.log('submit') 
      
    }

    axios.post()
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