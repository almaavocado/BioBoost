import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="bio" className="w-[150px] h-[150px]" />
      </Link>

      <ul className={`list-none sm:flex hidden justify-end items-center flex-1 ${toggle ? 'hidden' : ''}`}>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              location.pathname === nav.link ? "text-white" : "text-dimWhite"
            } ${nav === navLinks[navLinks.length - 1] ? "mr-0" : "mr-10"}`}
          >
            <Link to={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={handleToggle}
        />

        {toggle && (
          <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    location.pathname === nav.link ? "text-white" : "text-dimWhite"
                  } ${nav === navLinks[navLinks.length - 1] ? "mb-0" : "mb-4"}`}
                  onClick={handleToggle}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
