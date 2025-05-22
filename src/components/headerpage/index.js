import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import "./index.css";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const services = [
    { to: "rajasthani-mehndi", name: "Rajasthani Mehndi" },
    { to: "madhubani-mehndi", name: "Madhubani Mehndi" },
    { to: "bridal-mehndi", name: "Bridal Mehndi" },
    { to: "3d-mehndi", name: "3D Mehndi" },
    { to: "engagement-mehndi", name: "Engagement Mehndi" },
    { to: "festival-mehndi", name: "Festival Mehndi" },
  ];

  useEffect(() => {
    if (isServicesOpen) setIsServicesOpen(true);
    else setIsServicesOpen(false);
  }, [isServicesOpen]);

  return (
    <nav className="jaipuri-header">
      <div className="jaipuri-header-container">
        <img src="/images/logo.png" alt="Logo" className="jaipuri-header-logo" />
        <div className={`jaipuri-nav-menu ${isNavOpen ? "open" : ""}`}>
          <ul className={`jaipuri-nav-list ${isNavOpen ? "mobile" : ""}`}>
            <li><NavLink to="/homepage" onClick={() => setIsNavOpen(false)}>Home</NavLink></li>
            <li><a href="/aboutpage" onClick={() => setIsNavOpen(false)}>About Us</a></li>
            <li><NavLink to="/gallery" onClick={() => setIsNavOpen(false)}>Gallery</NavLink></li>
            <li className="jaipuri-dropdown">
              <div onClick={() => setIsServicesOpen(prev => !prev)} className="jaipuri-dropdown-toggle">
                <NavLink to="#">Services</NavLink>
                <span>{isServicesOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
              </div>
              <div className={`jaipuri-dropdown-menu ${isServicesOpen ? "show" : ""}`}>
                {services.map(service => (
                  <span key={service.to}>
                    <NavLink
                      to={`/services/${service.to}`}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsNavOpen(false);
                      }}
                    >
                      {service.name}
                    </NavLink>
                  </span>
                ))}
              </div>
            </li>
            <li><NavLink to="/contact-us" onClick={() => setIsNavOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="jaipuri-menu-icon" onClick={() => setIsNavOpen(prev => !prev)}>
          {isNavOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
