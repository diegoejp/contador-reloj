import React from "react";
import ReactDOM from "react-dom";
import Reloj from "./Reloj"
import "bootstrap/dist/css/bootstrap.min.css"
import Contador from "./ContadorBoton";

let App = (()=>{
    return(
        <>
            <Reloj/>
            <Contador/>
        </>
    )
});



ReactDOM.render(<App/>,document.querySelector("#root"));