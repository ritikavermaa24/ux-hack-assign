import { useEffect, useState } from 'react';
import './App.css';
import Popup from './components/Popup';
import  homemain from "./images/Homemain.png";

function App() {
  //const [buttonPopup,setButtonPopup]= useState(false);
  const [popupt,setPopupt]= useState(false);
  //<button onClick={()=>setButtonPopup(true)}>open</button>

  useEffect(()=>{
    setTimeout(()=>{
      setPopupt(true);
    },5000);
  },[]);

  return (

    <div className="App">
      <main>
        <img src={homemain}/>
        
    
      </main>
      <Popup trigger={popupt} setTrigger={setPopupt}>
       
      </Popup>
    
    </div>
  );
}

export default App;
