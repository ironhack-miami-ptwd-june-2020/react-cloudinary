import React, { Component } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav-style">
            <Link to="/"> Home </Link>
        </nav>
    );
}

export default NavBar;
