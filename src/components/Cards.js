import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Cards =()=>{


  const [data, setData] = useState([
    { id: 1, name: "Custom Roasts", des: "Bring your coffee ideas and we’ll make a custom roast just for you.",img:"./assets/images/card1.svg", btn:"Let's Roast"  },
    { id: 2, name: "20 Coffee Flavors", des: "Discover our selection of 20 unique coffee flavors, each a journey in a cup.",img:"./assets/images/card3.svg", btn:"Discover"  },
    { id: 3, name: "Hygiene", des: "Ensuring utmost hygiene standards for your peace of mind and well-being.",img:"./assets/images/card4.svg", btn:"Verify it"  },

  ]);



    return(

        <>
        <div className="container-fluid"   style={{
            backgroundColor:'#c06522',
         }}>
        <div className="container ">
                <div className="row d-flex justify-content-center">

                
                         <div className="row mb-5">
                          {data.map((items)=>(
                            <div className="col-sm-4 text-center " key={items.id}>
                            <img src={items.img} className="img-fluid" style={{width:'150px'}}></img>
                            <h2 className="fs-1 fw-bolder text-dark">{items.name}</h2>
                            <p>{items.des}</p>
                            <button className="btn btn-light  btn-outline-warning fw-bolder text-dark">{items.btn}</button>
                          </div>


                          ))}

                         </div>


                </div>
               
         </div>


         </div>

        
        </>
    )
}
export default Cards;