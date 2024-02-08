"use client";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const ProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false); // Assume the user is not logged in initially

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    // Implement your login logic here
    setLoggedIn(true);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
    setDropdownOpen(false);
  };

  const profileContent = `profileContent ${isDropdownOpen ? "open" : "closed"}`;

  return (
    <div className="profileContainer" onMouseEnter={toggleDropdown}
    onMouseLeave={toggleDropdown}>
      <CgProfile className="profile" />
      {isDropdownOpen && (
        <div className={`profileContent${isDropdownOpen ? " open" : "closed"}`}>
          {isLoggedIn ? (
            <div onClick={handleLogout}>
              <a>Logout</a>
            </div>
          ) : (
            <div onClick={handleLogin}>
              <a>Login</a>
              <a>Register</a>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default ProfileDropdown;
