"use client";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import ProfileDropdown from "./profile-dropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = () => {
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search Input', searchInput);
    // Add additional logic for handling the form submission if needed
  };

  return (
    <header>
      <h1 className="siteLogo">MusiList</h1>
      <div className="search">
        <form id="searchBar" method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            id="SearchInput"
            name="queryInput"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button type="submit" name="submitQuery" id="submitButton" className="flex">
            <FaCheck />
          </button>
        </form>
      </div>

      {/* Menu and Profile Button Functionality */}
      <div className="hub">
        <ProfileDropdown />

        {menuOpen ? (
          <VscChromeClose className="menu close-icon" onClick={closeSidebar} />
        ) : (
          <BiMenuAltRight className="menu" onClick={toggleMenu} />
        )}

        <div className={`sidebar${menuOpen ? " open" : ""}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
