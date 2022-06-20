import React from "react";

export default function NavBar() {
    return (
        <nav
            className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
            id="mainNav"
        >
            <div className="container">
                <a className="navbar-brand" href="#page-top">
                    Naimur
                </a>
                <button
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#portfolio"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
