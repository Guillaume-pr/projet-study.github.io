import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/signup"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Inscription</li>
        </NavLink>
        <NavLink
          to="/create-stay"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Sejour</li>
        </NavLink>
        <NavLink
          to="/admin"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Admin</li>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Dashboard</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
