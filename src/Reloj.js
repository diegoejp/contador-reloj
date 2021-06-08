

const Reloj = (({segundos,ms,min,hr,icono})=>{
  
    
    return(
        <div className="container bg-dark p-3 d-flex justify-content-center">
            <span className="">Reloj</span>
            <div className="bg-dark bg-gradient text-light text-center p-3 m-1">{icono}</div>
            <div className="bg-dark bg-gradient text-light text-center p-3 m-1">0</div>
            <div className="bg-dark bg-gradient text-light text-center p-3 m-1">{hr}</div>
            <div className="bg-dark bg-gradient text-light text-center p-3 m-1">{min}</div>
            <div className="bg-dark bg-gradient text-light text-center p-3 m-1">{segundos}</div>
            <div className="bg-dark bg-gradient text-light text-center p-3 m-1">{ms}</div>
        </div>
    )
});


export default Reloj;