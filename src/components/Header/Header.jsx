import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="d-flex justify-content-around align-items-center bg-secondary p-3 flex-wrap">
        <div className="logo">
          <img
            className="logo-img"
            src="https://i.ibb.co/TtRpKPP/doctor.png"
            alt=""
          />
        </div>
        <div className="menu-container d-flex flex-wrap ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-decoration-none"
            }
          >
            <li className="nav-link items  ms-3 text-info fw-bolder">Home</li>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-decoration-none"
            }
          >
            <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-decoration-none"
            }
          >
            <li className="nav-link items  ms-3 text-info fw-bolder">
              Register
            </li>
          </NavLink>

          {/* <Link to="/about" className="text-decoration-none">
        <li className="nav-link items  ms-3 text-info fw-bolder">About</li>
      </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
