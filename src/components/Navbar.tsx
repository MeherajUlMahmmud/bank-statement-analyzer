import React from "react";
import "../styles/Navbar.scss";
import AppRoutes from "../utils/app_routes";
import { appName } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navMenu = [
    {
      name: "Home",
      route: AppRoutes.homeRoute,
    },
    {
      name: "Use Cases",
      route: AppRoutes.useCaseRoute,
    },
    {
      name: "Features",
      route: AppRoutes.featuresRoute,
    },
    {
      name: "Get Started",
      route: AppRoutes.signInRoute,
      special: true,
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
              className={`navbar__menuContainer__menuItem ${item.special ? "navbar__menuContainer__menuItem--special" : ""
                }`}
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
