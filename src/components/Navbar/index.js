import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Navbar
 **/

const Navbar = props => {
  const [search, setSearch] = useState(false);

  const submitSearch = e => {
    e.preventDefault();
    alert("Searhed");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">Movie</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
