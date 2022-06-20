import React from "react";

export default function SLink({ link, icon }) {
    return (
        <li className="list-inline-item">
            <a
                className="btn btn-outline-light text-center btn-social rounded-circle"
                role="button"
                href={link}
                target="_blank"
            >
                <i className={`fa fa-${icon} fa-fw`}></i>
            </a>
        </li>
    );
}
