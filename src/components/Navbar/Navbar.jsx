import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="navbar-logo">Mr.Ali</h1>
      </div>
      <ul className={`app__navbar-links ${isOpen ? "open" : ""}`}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} onClick={() => setIsOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 color="white" size={20} onClick={() => setIsOpen(true)} />

        {isOpen && (
          <div>
            <HiX color="white" size={10} onClick={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
