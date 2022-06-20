import React from "react";

import "./Contact.css";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="text-uppercase text-center text-secondary mb-0">
                    Contact Me
                </h2>
                <hr className="star-dark mb-5" />
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form
                            id="contactForm"
                            name="sentMessage"
                            noValidate="novalidate"
                        >
                            <div className="control-group">
                                <div className="mb-0 form-floating controls pb-2">
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        required=""
                                        placeholder="Name"
                                    />
                                    <label className="form-label">Name</label>
                                    <small className="form-text text-danger help-block"></small>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="mb-0 form-floating controls pb-2">
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        required=""
                                        placeholder="Email Address"
                                    />
                                    <label className="form-label">
                                        Email Address
                                    </label>
                                    <small className="form-text text-danger help-block"></small>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="mb-5 form-floating controls pb-2">
                                    <textarea
                                        className="form-control txtArea"
                                        id="message"
                                        required
                                        placeholder="Message"
                                    ></textarea>
                                    <label className="form-label">
                                        Message
                                    </label>
                                    <small className="form-text text-danger help-block"></small>
                                </div>
                            </div>
                            <div id="success"></div>
                            <div>
                                <button
                                    className="btn btn-primary btn-xl"
                                    id="sendMessageButton"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
