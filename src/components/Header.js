import React from 'react'
import './Header.css'
import { Link} from "react-router-dom"
export const Header = () => {
    return (
       <header className="showcase">
       <div className="showcase-top">
          <img src="../images/couchPotatoLogo.png" alt="logo"></img>
          <Link to="/" className=" btn-rounded btn-header">
              Sign In
          </Link>
       </div>
       <div className="showcase-content">
       <h1>Chit-Chat about movies,T.V shows and more</h1>
       <p>By Just Sitting on your Couch</p>
       <Link to="/netflix-show" className=" btn-xl btn-header">
           Sign up here
       </Link>
       </div>

       </header>
    )
}
export default Header;