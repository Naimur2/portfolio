import React from "react";
import "./App.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import NavBar from "./sections/NavBar/NavBar";
import Portfolio from "./sections/Portfolio/Portfolio";

function App() {
    const [activeSection, setActiveSection] = React.useState("portfolio");

    return (
        <>
            <NavBar />
            <Header />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
