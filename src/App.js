
import './App.css';
import Menu from "./componens/menu/Menu";
import {Routes,Route} from 'react-router-dom';
import Chek from "./componens/chek/Chek"
import Qr from "./componens/qrcode/qrcode.jsx"
import { useState } from 'react';
//import chekimg from "./img/free.png"



function App() {
  
  const[disqr,set_disqr]=useState(true)
  const[dis_ch,set_disch]=useState(false)
  

  function setqr(bol){
    set_disqr(bol)
  }
  function yes(){
    set_disqr(true)
  }

  function chsetdis(){
    set_disch(false)
  }

  

  
  return (
    <>
      
    
  
    <Routes>
    <Route index element = {<Menu disqr={disqr} 
    setqr={setqr} 
    yes={yes} 
    chdis={dis_ch} 
    chsetdis={chsetdis}
    
    />} />
      <Route path={"qrcode"} element={<Qr/>} />
      <Route path={"menu"} element={<Menu/>} />
      <Route path="chek" element={<Chek/>} />
     
    </Routes>
                 
      
           
      
    
    </>    
  );
}

export default App;
