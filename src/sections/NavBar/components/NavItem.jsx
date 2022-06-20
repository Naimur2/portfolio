import React from "react";

export default function NavItem({ navItems, onClick }) {
    return (
        <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
                <li
                    onClick={onClick}
                    className="nav-item mx-0 mx-lg-1"
                    key={item.title}
                >
                    <a
                        className="nav-link py-3 px-0 px-lg-3 rounded"
                        href={item.url}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
