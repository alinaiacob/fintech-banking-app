import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
 
       <div className="container">
      <h1>Are you an entrepreneur? Log in here</h1>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label>Email</label>
          
        </div>

        <div className="form-control">
          <input type="password" required />
          <label>Password</label>
        </div>

        <button className="btn">Login</button>

        <p className="text">Don't have an account? <Link to='register'>Register</Link></p>
      </form>
    </div>
    
  )
}

export default Login