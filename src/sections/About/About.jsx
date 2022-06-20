import React from "react";

export default function About() {
    return (
        <section className="text-white bg-primary mb-0" id="about">
            <div className="container">
                <h2 className="text-uppercase text-center text-white">About</h2>
                <hr className="star-light mb-5" />
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <p className="lead">
                            Hi, My name is NaimurRahaman. I'm a Full Stack
                            Developer with over 2 years of front-end and
                            back-end programming experience. Currently employed
                            as a MERN Stack Developer. Which integrates MongoDB,
                            Express, React, and Node.
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p className="lead">
                            I provide cross-platform app development solutions
                            using React Native, a React-based mobile app
                            development framework. I am delighted to take on new
                            and hard job since it is the only way for me to
                            learn more.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <a
                        className="btn btn-outline-light btn-xl"
                        role="button"
                        href="../../assets/pdfs/resume_naimur.pdf"
                        download={true}
                    >
                        <i className="fa fa-download me-2"></i>
                        <span>Download Resume!</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
