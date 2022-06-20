import React from "react";
import { motion } from "framer-motion";

export default function PortfolioCard({
    title,
    description,
    image,
    technologies,
    github,
    website,
}) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="col-md-6 col-lg-4 mb-4 "
        >
            <div className="px-2 card portf-card">
                <div className="portfolio-image px-2 py-4">
                    <img className="portfolo-image" src={image} alt={title} />
                </div>
                <div className="row px-2">
                    <div className="col-12 my-2">
                        <h3>{title}</h3>
                    </div>
                    <div className="col-12 my-2">
                        <p className="lead">{description}</p>
                    </div>
                    <div className="col-12 my-2 langs">
                        {technologies?.map((technology, index) => (
                            <div
                                key={index}
                                className="btn btn-danger languages"
                            >
                                <span>{technology}</span>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 my-2 langs">
                        {github && (
                            <div>
                                <a className="site-link" href={github}>
                                    <i className="fab fa-github-square ilink-cons"></i>
                                </a>
                            </div>
                        )}
                        {website && (
                            <div className="mx-2">
                                <a className="site-link" href={website}>
                                    <i className="fas fa-globe ilink-cons"></i>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
