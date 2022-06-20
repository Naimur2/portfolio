import React from "react";

export default function Footer() {
    return (
        <footer className="text-center footer">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">
                            MD Naimur Rahaman
                        </h4>
                        <p>Mirpur, Dahaka, Bangladesh</p>
                    </div>
                    <div className="col-md-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase">Around the Web</h4>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light text-center btn-social rounded-circle"
                                    role="button"
                                    href="#"
                                >
                                    <i className="fa fa-facebook fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light text-center btn-social rounded-circle"
                                    role="button"
                                    href="#"
                                >
                                    <i className="fa fa-linkedin fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light text-center btn-social rounded-circle"
                                    role="button"
                                    href="#"
                                >
                                    <i className="fa fa-twitter fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    className="btn btn-outline-light text-center btn-social rounded-circle"
                                    role="button"
                                    href="#"
                                >
                                    <i className="fa fa-github fa-fw"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
