import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Head = () => {

    return (
        <>
<div className="headcontainer img-fluid" style={{ 
    backgroundImage: 'url(./assets/images/background.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    
    }}>
    <div className="content text-center text-white">
        <h1 className="heading fw-bolder ">Chill Vibes and</h1>
        <h1 className="heading  fw-bolder ">Dann Good Coffee </h1>
        <p>An inspiring space to fuel your ambition and coffee that’s dann good.</p>
        <div><button className="btn btn-warning  btn-outline-success fw-bolder text-dark">ORDER</button><button className="btn btn-light  btn-outline-warning ms-2 fw-bolder text-dark">MENU</button></div>
        <p className="mt-4">OPEN DAILY 7AM TO 7PM</p>
    </div>
     </div>



        </>
    )
}
export default Head;