import React,{useEffect,useState} from 'react'
import './nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            // window.removeEventListener("scroll");
            // window.removeEventListener("scroll")
        };
    },[]);

    return (

    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix-Logo'/>
        <img className='smileLogo' src="https://www.freepnglogos.com/uploads/smile-png/happy-smile-emoji-emoticon-icon-transparent-png-svg-vector-25.png" alt="smile-logo"/>
    </div>
  )
}

export default Nav