import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f4ece8' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='./assets/images/cuplogo.png' alt="Your Logo" id="navlogo" />
                </a>
                <button className="navbar-toggler" type="button" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
                    <div className="row w-100 justify-content-between align-items-center">
                        <div className="col-sm-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active fw-bold fs-4 " aria-current="page" href="#">
                                        HOME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fw-bold fs-4 " aria-current="page" href="#">
                                        SHOP
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 fw-bold" href="#">
                                        ABOUT
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-warning fw-bolder">ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
