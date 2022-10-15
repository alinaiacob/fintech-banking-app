import React from 'react'
import "./Header.css"
//import {ConnectButton,Select,DatePicker,Input, Button} from "web3uikit"
const Header = () => {
  const click=(e)=>{
    
    console.log('click')
  }
  return (
    <div className="header">
      <h1>Header</h1>
      <div className='header-btns'>
        <button onClick={click}>Donate</button>

      </div>
    </div>
  )
}

export default Header