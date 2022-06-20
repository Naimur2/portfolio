import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import rn1 from "../../images/portfolio/rn/rn-1.png";
import rn2 from "../../images/portfolio/rn/rn-2.png";
import rn3 from "../../images/portfolio/rn/rn-3.png";
import rn4 from "../../images/portfolio/rn/rn-4.png";
import rn5 from "../../images/portfolio/rn/rn-5.png";
import rn6 from "../../images/portfolio/rn/rn-6.png";

import rc1 from "../../images/portfolio/react/1.png";

export default function Portfolio() {
    const Portfolios = [
        {
            id: 1,
            title: "Upocopo",
            description: "BlockChain Market Place",
            image: rn1,
            technologies: [
                "React Native",
                "Redux toolkit",
                "React Navigation",
                "Expo",
            ],
            category: "react-native",
            github: "https://github.com/Naimur2/upcopo",
        },
        {
            id: 2,
            title: "Seremo",
            description: "Online payment system",
            image: rn2,
            technologies: [
                "React Native",
                "Redux toolkit",
                "React Navigation",
                "Native Base",
                "Expo",
            ],
            category: "react-native",
        },
        {
            id: 3,
            title: "BrdCart",
            description: "Online shopping cart",
            image: rn3,
            technologies: [
                "React Native",
                "Redux toolkit",
                "React Navigation",
                "Native Base",
                "Expo",
            ],
            category: "react-native",
        },
        {
            id: 4,
            title: "Plant Disease Detection",
            description: "Computer vision based mobile application",
            image: rn4,
            technologies: [
                "React Native",
                "Redux toolkit",
                "NodeJs",
                "ExpressJs",
                "Tensorflow",
            ],
            category: "react-native",
            github: "https://github.com/Naimur2/plant-disease-detector",
        },
        {
            id: 5,
            title: "Food ordering system",
            description: "Online food ordering system",
            image: rn5,
            technologies: [
                "React Native",
                "Redux toolkit",
                "Expo",
                "Nodejs",
                "Expressjs",
                "MongoDB",
            ],
            category: "react-native",
            github: "https://github.com/Naimur2/food-ordering-app-react-native",
        },
        {
            id: 6,
            title: "ECard System",
            description: "Saving digital Card System",
            image: rn6,
            technologies: [
                "React Native",
                "React Navigation",
                "Reanimated2",
                "Expo",
                "TypeScript",
            ],
            category: "react-native",
        },
        {
            id: 7,
            title: "ECard System",
            description: "Saving digital Card System",
            // image: rc1,
            technologies: [
                "React Native",
                "React Navigation",
                "Reanimated2",
                "Expo",
                "TypeScript",
            ],
            category: "react",
        },
        {
            id: 8,
            title: "ECard System",
            description: "Saving digital Card System",
            // image: rc2,
            technologies: [
                "React Native",
                "React Navigation",
                "Reanimated2",
                "Expo",
                "TypeScript",
            ],
            category: "react",
        },
        {
            id: 9,
            title: "ECard System",
            description: "Saving digital Card System",
            // image: rc3,
            technologies: [
                "React Native",
                "React Navigation",
                "Reanimated2",
                "Expo",
                "TypeScript",
            ],
            category: "react",
        },
    ];
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="text-uppercase text-center text-secondary">
                    Portfolio
                </h2>
                <hr className="star-dark mb-5" />
                <div className="d-xxl-flex justify-content-xxl-center mb-4">
                    <button className="btn btn-primary mx-2" type="button">
                        All
                    </button>
                    <button className="btn btn-primary mx-2" type="button">
                        React Js
                    </button>
                    <button className="btn btn-primary mx-2" type="button">
                        React Native
                    </button>
                </div>
                <div className="row">
                    {Portfolios.map((portfolio) => (
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
                </div>
            </div>
        </section>
    );
}
