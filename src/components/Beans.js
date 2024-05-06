import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Beans =()=>{

    return(
        <>
          <div className="" 
             style={{
             backgroundColor:'#f4ece8',
          }}>
                  
                      <div className="container">   
                  
                        <div className=" row">
                       
                        <div className="col-sm-6 mt-5">
                                <img src="./assets/images/BEANS.webp" className="img-fluid mb-4" style={{
                                    width: '500px',
                                    borderRadius: '10%',
                                    boxShadow: 'rgba(192, 118, 10, 0.8) 0px 5px 15px',
                                }} />
                        </div>

                               <div className="col-sm-6  mt-5 sm-text-center">
                  
                                  <h1 className="cupheading fw-bolder ">Organic,</h1>
                                  <h1 className="cupheading  fw-bolder ">Single Origin </h1>
                                  <h1 className="cupheading  fw-bolder ">& Dann Good </h1>
                                  <p className="">Step into a world of surf, skating, snowboarding, outdoor adventure, and mid-century awesomeness
                                       at Dann Good Coffee. Our coffee shop is inspired by the retro vibes of the
                                        past, offering a cozy and nostalgic atmosphere for coffee lovers to enjoy.</p>
                                        <button className="btn border-2 border-warning  btn-outline-warning fw-bolder text-dark mb-2">SHOP BEANS</button>
                                 
          
                      </div>
                  
                  
                         </div>
                  
                  
                       </div>
        </div> 
                          
                          
                          </>
    )
}
export default Beans;