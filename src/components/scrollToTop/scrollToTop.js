import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './scrollToTop.css'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [isVisible,setIsVisible]= useState(false);

    const toggleVisibility=()=>{
        if(window.pageYOffset >300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    const scrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    }

    useEffect(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return()=>{
            window.removeEventListener("scroll",toggleVisibility);
        }
    },[]);
    return (
        <div className="scroll-to-top">
            {
             isVisible && (
                 <div onClick={scrollTop}>
                 <FontAwesomeIcon icon={faArrowCircleUp} className="fa-5x"></FontAwesomeIcon>
                 </div>
             )
            }
        </div>
    )
}

export default ScrollToTop
