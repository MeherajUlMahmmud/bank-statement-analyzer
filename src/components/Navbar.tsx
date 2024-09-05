import React from "react";
import "../styles/Navbar.scss";
import { homeRoute } from "../utils/app_routes";
import { appName } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navMenu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Use Cases",
      route: "/use-cases",
    },
    {
      name: "Features",
      route: "/features",
    },
    {
      name: "Team",
      route: "/team",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__menuContainer">
        {navMenu.map((item, index) => {
          return (
            <Link
              to={item.route}
              key={index}
              className="navbar__menuContainer__menuItem"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
