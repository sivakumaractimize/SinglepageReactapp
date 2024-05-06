import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const OurTeam =()=>{



  const [data, setData] = useState([
    { id: 1, name: "Dann", des: "Barista",img:"./assets/images/team2.webp" },
    { id: 2, name: "Dann the Mann", des: "Manager",img:"./assets/images/team3.webp" },
    { id: 3, name: "D. “Petty”", des: "Web Fuler",img:"./assets/images/team4.webp"  },
    { id: 4, name: "Danny", des: "Roasters",img:"./assets/images/team1.webp"  },

  ]);


    return(
        <>
        <div className="" style={{
             backgroundColor:'#f4ece8',
          }}>
           <div className="container " >

           <h1 className="heading fw-bolder text-center">Meet Our Team</h1>
              <p className="text-center">We are a group of adventure-seeking, coffee-loving Danns.</p>



    <div className="container">
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 ">

                              {data.map((item)=>(
                                 <div className="col container-fluid  text-center " key={item.id} >
                                 <div className="card mt-4 ">
                                   <img
                                     src={item.img}
                                     className="card-img-top "
                                     alt="..."
                                   />
                                   <div className="card-body bg-dark text-white">
                                     <h5 className="card-title">{item.name}</h5>
                                     <p className="card-text">{item.des}</p>
                                    
                                   </div>
                                 </div>
                               </div>



                              ))}
                             
                             
                             
                             
                            </div>
</div>
                          
                                                 


                      <h2 className="text-center fw-bolder">Ready for the ride of your life?</h2>
                      <p className="text-center">Join our dann good team and step into the rad life!</p>
                      <div className="text-center ">
                      <button className="btn border btn-light fw-bolder  btn-outline-warning text-dark border-2 border-warning mb-2 ">View Open Positions</button>
                      </div>
           </div>

           </div>

        
        
        </>
    )
}
export default OurTeam;