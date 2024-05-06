import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Cup =()=>{
    


    return(
        <>
        
        <div className=""  style={{
        backgroundColor:'#369392',
      }}>

    <div className="container">   

      <div className=" row">
           <div className="col-sm-6 text-center mt-5">

        <h1 className="cupheading fw-bolder ">Peruse Our</h1>
        <h1 className="cupheading  fw-bolder ">Vintage, Mid- </h1>
        <h1 className="cupheading  fw-bolder ">Century Vibe </h1>
        <p className="mt-5">Step into a world of surf, skating, snowboarding, outdoor adventure, and mid-century awesomeness
             at Dann Good Coffee. Our coffee shop is inspired by the retro vibes of the
              past, offering a cozy and nostalgic atmosphere for coffee lovers to enjoy.</p>
              <button className="btn btn-light  btn-outline-warning ms-2 fw-bolder text-dark">READ OUR ORIGIN STORY</button>

            </div>
            <div className="col-sm-6">
                <img src="./assets/images/cup.webp" className="img-fluid"></img>

             </div>


           </div>


     </div>
     </div> 
        </>
    )
}
export default Cup;