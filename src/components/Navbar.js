import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../features/Action";


function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="/read">
          HRM WEB APPLICATION
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto"> {/* Sử dụng lớp ms-auto ở đây */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/read">
                LIST
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Create">
                ADD NEW TO LIST
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;