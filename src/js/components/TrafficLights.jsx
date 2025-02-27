import React, {useState, useEffect} from 'react'

const TrafficLights = () => {
    const [color, setColor] = useState(['red', 'yellow', 'green', 'purple']);
        
    return(
        <div className='boxCont d-flex justify-content-center align-items-center'>
         <div className='container d-flex flex-column align-items-center justify-content-center gap-1'>
         <div className='container d-flex flex-column align-items-center justify-content-center bg-warning' style={{borderRadius:'10px 10px 0px 0px'}}>
            <div className="lightBox bg-dark d-flex justify-content-center align-items-center me-5">
                 <div onClick={() => setColor("red")} className={`red-light ${color === "red" ? "light" : ""}`}></div>
            </div>
        </div>
        <div className='container d-flex flex-column align-items-center justify-content-center bg-warning'>
            <div className="lightBox bg-dark d-flex justify-content-center align-items-center me-5">
                 <div onClick={() => setColor("yellow")} className={`yellow-light ${color === "yellow" ? "light" : ""}`}></div>
            </div>
        </div>
        <div className='container d-flex flex-column align-items-center justify-content-center bg-warning' style={{borderRadius:'0px 0px 10px 10px'}}>
            <div className="lightBox bg-dark d-flex justify-content-center align-items-center me-5">
                 <div onClick={() => setColor("green")} className={`green-light ${color === "green" ? "light" : ""}`}></div>
            </div>
        </div>        
        </div>
        </div>
    );
 };

export default TrafficLights;