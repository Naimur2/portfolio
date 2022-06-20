import React from "react";
import { socialLinks } from "../../data";
import SLink from "./components/SLink";

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
                            {socialLinks.map((item) => (
                                <SLink
                                    key={item.name}
                                    link={item.url}
                                    icon={item.icon}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
