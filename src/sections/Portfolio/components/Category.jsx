import React from "react";

export default function Category({ category, onClick, active }) {
    return (
        <div
            onClick={onClick}
            className={`btn btn-${active ? "danger" : "primary"} mx-2`}
        >
            {category.title}
        </div>
    );
}
