import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Strings } from "../../constants";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function NavBarLayout({
  handleSearch = () => {
    // intentional
  },
}) {
  // navigation
  const navigate = useNavigate();

  const handleHomeClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate("/cart"); // Navigate to the Cart page
  };

  // Destructuring constants from Strings
  const {
    logoName,
    onSale,
    shop,
    brands,
    newArrivals,
    action,
    anotherAction,
    something,
  } = Strings;

  // State to handle navbar collapse
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  // Function to handle navbar toggling
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  // Function to handle menu click and collapse navbar
  const handleMenuClick = () => {
    setIsNavbarCollapsed(false);
  };

  return (
    <div>
      {/* Sticky navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded={isNavbarCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <label className="navbar-brand fw-bold">{logoName}</label>
          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "show" : ""
            }`}
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {shop}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleMenuClick}
                    >
                      {action}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleMenuClick}
                    >
                      {anotherAction}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleMenuClick}
                    >
                      {something}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuClick}>
                  {newArrivals}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuClick}>
                  {onSale}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleMenuClick}>
                  {brands}
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center col-12 col-md-12 col-lg-7 col-xl-7">
              <div className="input-group">
                <span className="input-group-text" onClick={handleSearch}>
                  <SearchIcon />
                </span>
                <input
                  className="form-control me-1 custom-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div onClick={handleHomeClick}>
                <ShoppingCartOutlinedIcon />
              </div>
              <div className="ms-1">
                <AccountCircleOutlinedIcon />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
