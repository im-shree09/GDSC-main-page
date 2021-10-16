import React from 'react'
import { useState } from 'react'
import loginImg from './login.svg'
import './styles.css'
 const Login =()=> {
     const [userName,setUserName]= useState('');
     const [userPassword,setUserPassword]= useState('');
  const addUserHandler = (event) => {
    
  }
  const addUserName =(event)=>{
     setUserName(event.target.value);
  }
  const addPassword =(event)=>{
    setUserPassword(event.target.value);
 }

const login = (event) => {
  fetch('https://couch-penguin.herokuapp.com/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userName , userPassword)
  })
  .then( data => data.json())
  .then(
    data => {
      this.props.userLogin(data.token);
    }
  )
  .catch( error => console.error(error))
  event.preventDefault();
    console.log(userName,userPassword);
    setUserName('');
    setUserPassword('');
}

    return (
        <div className="base-container" >
         {/* <form onSubmit={addUserHandler} > */}
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={addUserName} type="text" name="username" placeholder="username" value={userName} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={addPassword} type="password" name="password" placeholder="password" value={userPassword} />
            </div>
          </div>
         

        </div>
        <div className="footer">
          <button onClick={login}   type="button" className="btn1">
            Login
          </button>
        </div>
        {/* </form> */}
      </div>
        
    )
}
export default Login;
