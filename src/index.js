import ReactDOM from "react-dom";
import Reloj from "./Reloj"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";




let App = (()=>{
    const [ms,setMs] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
        setMs(prevMs=>(prevMs+10));
    },10);
    },[]);
    let milisegundo = Math.floor((ms/100)%10);
    let minutos = Math.floor((ms/10000)%10);
    let segundos =Math.floor((ms/1000)%10);
    let hora = Math.floor((ms/100000)%10);
    
    
    return(
        <>
            
            <Reloj ms={milisegundo} segundos={segundos} min={minutos}
            hr={hora}
            icono={<FontAwesomeIcon icon={faClock}/>}
            />
        </>
    )
});



ReactDOM.render(<App/>,document.querySelector("#root"));