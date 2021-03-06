import React from 'react'
import loginImg from './login.svg'
import './styles.css'

const Register=()=> {
    return (
        <div className="base-container" >
        <div className="header1">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="register" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn1">
            Register
          </button>
        </div>
      </div>
        
    )
}
export default Register;
