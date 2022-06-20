import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="text-center text-white bg-primary masthead">
            <div className="container">
                <div className="d-xxl-flex avatar mx-auto"></div>
                <h1>Naimur Rahaman</h1>
                <hr className="star-light" />
                <h2 className="font-weight-light mb-0">
                    React Js - React Native - Express developer - MongoDB
                    -NodeJs
                </h2>
                <a
                    className="btn btn-success btn-lg my-4"
                    role="button"
                    target="_blank"
                    href="https://www.fiverr.com/mdnaimurrahaman"
                >
                    Hire Me
                </a>
            </div>
        </header>
    );
}
