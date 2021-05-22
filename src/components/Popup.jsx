import React from 'react'
import './popup.css';
import  pop1 from "../images/pop1.png";
import  pop2 from "../images/pop2.png";

function Popup(props) {
    return ( props.trigger )?(
        
        <div className="popup">
            
            <div className="popup-inner">
            {props.children}
            <img className="p1" src={pop2}/>
            <h1>First time here?</h1>
            <img className="p2" src={pop1}/>
            
            <p>Join our Telegram channel for updates, jobs and <br/>new challenges</p>
            <button className="btn">View Channel</button>
             
            </div> 
            
        </div>
    ):"";
}

export default Popup;
 
//   <button className="clone-btn" onClick={() => props.setTrigger(false)}> close </button>
//