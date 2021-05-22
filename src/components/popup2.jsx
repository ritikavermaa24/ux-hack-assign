import React from 'react'
import './popup.css';
import  pop2 from "../images/pop2.png";
import  pop3 from "../images/pop3.png";

function Popup2(props) {
    return ( props.trigger )?(
        
        <div className="popup">
            
            <div className="popup-inner">
            {props.children}
            <img className="p1" src={pop2}/>
            <h1>First time here?</h1>
            <img className="p3" src={pop3}/>
            
            
            <p>Join our Weekly Newsletter for updates, <br/>jobs and new challenges </p>

            <input className="email" type="text" placeholder="Your email Id" name="mail" required></input>
            <button className="btn2">Join Newsletter</button>
             
            </div> 
            
        </div>
    ):"";
}

export default Popup2;
 
//   <button className="clone-btn" onClick={() => props.setTrigger(false)}> close </button>
//