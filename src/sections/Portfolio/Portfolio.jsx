import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { categories, portfolios } from "../../data";
import Category from "./components/Category";
import PortfolioCard from "./components/PortfolioCard";

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = React.useState("all");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredPortfolios = portfolios.filter((portfolio) => {
        if (selectedCategory === "all") {
            return portfolio;
        } else {
            return portfolio.category === selectedCategory;
        }
    });

    // sort by first letter of title
    const sortedPortfolios = filteredPortfolios.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="text-uppercase text-center text-secondary">
                    Portfolio
                </h2>
                <hr className="star-dark mb-5" />
                <div className="d-xxl-flex justify-content-xxl-center mb-4">
                    {categories.map((category) => (
                        <Category
                            key={category.id}
                            onClick={() => handleCategoryChange(category.name)}
                            category={category}
                            active={selectedCategory === category.name}
                        />
                    ))}
                </div>

                <motion.div layout className="row">
                    <AnimatePresence>
                        {sortedPortfolios.map((portfolio) => (
                            <PortfolioCard
                                key={portfolio.id}
                                title={portfolio.title}
                                description={portfolio.description}
                                image={portfolio.image}
                                technologies={portfolio.technologies}
                                github={portfolio.github}
                                website={portfolio.website}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
