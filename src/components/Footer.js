import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Instagram ,Facebook,Youtube,Linkedin} from 'lucide-react';
const Footer =()=>{

    return(

        <>
        <div className=""
        style={{
            backgroundColor:'black',
         }}>
        
        <div className="container text-center">
          <div className="row">
             <div class="col mt-5">
             <img src='./assets/images/cuplogo.png' alt="Your Logo"  />
              </div>
             <div className="col fs-6 mt-5 text-center">
                <ul className=" list-unstyled text-white d-flex row ">
                <li className="fw-bolder">HOME</li>
                <li className="fw-bolder mt-2 ">SHOP</li>
                <li className="fw-bolder mt-2">ABOUT</li>
                <li className="fw-bolder mt-2 ">ORDERS</li>

                </ul>
              </div>
              <div className="col navicon mt-5">
              <Instagram size={40} strokeWidth={1.5} />
              <Facebook size={40} strokeWidth={1.5} />
              <Youtube size={40} strokeWidth={1.5} />
              <Linkedin className="ms-2 mb-1" size={40} strokeWidth={1.5} />
              </div>
              

        </div>
             
                   

        <div className="container text-center text-white mt-5 ">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
              <div className="col mb-5">© 2024 Dann Good Coffee</div>
              <div className="col mb-5">
              <a href="" className="text-reset text-decoration-white">Privacy Policy</a>
               </div>
              <div className="col mb-5">
              <a href="" className="text-reset text-decoration-white">Terms of Service</a>
              </div>
              <div className="col mb-5">
               <a href="" className="text-reset text-decoration-white">Coffee Settings</a>
              </div>
               </div>
    </div>                  

                   



      </div>

    </div>
        
        </>
    )
}
export default Footer;


