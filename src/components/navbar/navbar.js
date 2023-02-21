import React from "react";
import './navbar.css';
import {BrowserRouter as Link} from "react-router-dom";

//Images
import Logo from "../../Assets/Dobiri.png";
import searchIcon from "../../Assets/search-icon.png";
import cartIcon from "../../Assets/shopping-cart 1.png"

const Navbar = () =>{
    return(
        <div className="container-fluid navbar-container">
          <div className="container">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img src={Logo} alt="Dobiri-Logo" className="img-fluid"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                      <a class="navbar-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="navbar-link active" href="#">Liquor</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="navbar-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Spaces
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Beds</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Tables</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Chairs</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Shoeracks</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Shelves</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Couches</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="searchContainer" role="search">
                    <input class="div-control nav-search" type="search" placeholder="Search Liquor..." aria-label="Search"/>
                    <div class="btn searchbtn" type="submit"><img src={searchIcon} className="img-fluid searchIcon" alt="search-icon"/></div>
                    <div class="btn cartbtn" type="submit"><img src={cartIcon} className="img-fluid cartIcon" alt="search-icon"/></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>          
        </div>
      );
}

export default Navbar;