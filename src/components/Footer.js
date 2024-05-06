import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <>
            <div className="bg-dark">
                <div className="container text-center py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-3 mb-4 mb-md-0">
                            <img src='./assets/images/cuplogo.png' alt="Your Logo" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled text-white d-flex flex-column flex-md-row">
                                <li className="fw-bolder mb-2 mb-md-0 me-md-4">HOME</li>
                                <li className="fw-bolder mb-2 mb-md-0 me-md-4">SHOP</li>
                                <li className="fw-bolder mb-2 mb-md-0 me-md-4">ABOUT</li>
                                <li className="fw-bolder">ORDERS</li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-white">
                            <div className="row gy-1 gy-md-0">
                            <div className="col-3 col-md-3 mb-3 mb-md-0">
                           <img src="./assets/images/instagram (1).svg" className="img-fluid icon" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)" }} alt="Instagram" />
                          </div>

                                <div className="col-3 col-md-3 mb-3 mb-md-0">
                                <img src="./assets/images/facebook (3).svg" className="img-fluid" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)" }}></img>
                                   
                                </div>
                                <div className="col-3 col-md-3 mb-3 mb-md-0">
                                <img src="./assets/images/youtube.svg" className="img-fluid" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)" }}></img>
                                   
                                </div>
                                <div className="col-3 col-md-3 mb-3 mb-md-0">
                                   <img src="./assets/images/linkedin.svg" className="img-fluid" style={{ filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)" }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center text-white py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-3 mb-3 mb-md-0">© 2024 Dann Good Coffee</div>
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <a href="#" className="text-reset text-decoration-white">Privacy Policy</a>
                        </div>
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <a href="#" className="text-reset text-decoration-white">Terms of Service</a>
                        </div>
                        <div className="col-12 col-md-3">
                            <a href="#" className="text-reset text-decoration-white">Coffee Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
