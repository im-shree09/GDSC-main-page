import React,{useState,useEffect} from 'react'
import './nav.css'
import {Link} from 'react-router-dom';
import NetflixAvatar from '../../images/NetflixAvatar.png'
const Nav = () => {
    const [show,setShow]= useState(false);

    const NavVisibility =()=>{
        if(window.scrollY>100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    useEffect(()=>{
     window.addEventListener("scroll",NavVisibility);

     return () => {
        window.removeEventListener("scroll",NavVisibility)
     }
    },[])
    return (
        <div className={`nav $(show && "nav-black")`}>
            <Link to="/">
                <h2 className="nav-logo written">CouchPotato</h2>
            </Link>
            <img src={NetflixAvatar} className="nav-avatar" alt="logo"></img>
            
        </div>
    )
}

export default Nav
