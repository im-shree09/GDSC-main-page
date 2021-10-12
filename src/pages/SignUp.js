import React from "react";
import { useState } from 'react';
import Nav from "../components/nav/nav";
import Login from "../components/signUp/Login";
import Register from "../components/signUp/Register";
import './SignUp.css'


const SignUp=()=>{
  let [isActive, setIsActive] = useState(true);

  let activeHandler = () => {
    
    setIsActive(!isActive);
  }
  const current = isActive ? "Register" : "Login";
  const currentActive = isActive ? "login" : "register";
    return(
        <div>
             <Nav/>
        <div className="App">
            <div className="login">
            <div className="container1">
            {isActive ? (<Login></Login>) : (<Register/>)}
            </div>
            <RightSide
            current={current}
            currentActive={currentActive}
            
            onClick={activeHandler}
          />
            </div>  
            
        </div>
      
        </div>
       
    )
}
const RightSide = props => {
    return (
      <div
        className={`right-side ${props.isActive ? "left" : "right"} `} 
        
       
        onClick={props.onClick}
      >
        <div className="inner-container ">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };
export default SignUp;
