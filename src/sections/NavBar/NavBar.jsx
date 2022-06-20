import React from "react";
import NavItem from "./components/NavItem";

export default function NavBar() {
    const navRef = React.useRef(null);
    const collapsRef = React.useRef(null);
    const navItems = [
        { title: "Portfolio", url: "#portfolio" },
        { title: "About", url: "#about" },
        { title: "Contact", url: "#contact" },
    ];

    React.useEffect(() => {
        const mainNav = navRef.current;
        const collapseNavbar = function () {
            var scrollTop =
                window.pageYOffset !== undefined
                    ? window.pageYOffset
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollTop;

            if (scrollTop > 100) {
                mainNav.classList.add("navbar-shrink");
            } else {
                mainNav.classList.remove("navbar-shrink");
            }
        };
        window.addEventListener("scroll", collapseNavbar);
        return () => {
            window.removeEventListener("scroll", collapseNavbar);
        };
    }, []);
    return (
        <nav
            className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
            id="mainNav"
            ref={navRef}
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
                <div
                    ref={collapsRef}
                    className="collapse navbar-collapse"
                    id="navbarResponsive"
                >
                    <NavItem
                        navItems={navItems}
                        onClick={() =>
                            collapsRef.current.classList.remove("show")
                        }
                    />
                </div>
            </div>
        </nav>
    );
}
