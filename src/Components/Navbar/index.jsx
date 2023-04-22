import React from "react";
import { NavLink } from "react-router-dom";
import { navOptions } from "./constants";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark py-1">
      <div className="container-fluid text-decoration-none">
        <NavLink className="navbar-brand" to="/">
          <h3 className="fs-5 mb-0">Red Rogue Inquisitors</h3>
        </NavLink>
        <button
          className="navbar-toggler my-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-md-auto">
            {navOptions.map(({ id, title, url }) => (
              <NavLink
                className="nav-link"
                aria-current="page"
                to={url}
                key={id}
              >
                <div
                  className="w-100"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  {title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
