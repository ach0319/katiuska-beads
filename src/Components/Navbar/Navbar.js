import React from 'react';
import logo from '../Images/logo.png';
import "../Navbar/Navbar.css";

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
            <div class="container-fluid">
                <a class="navbar-brand text-white fs-2" href="#">
                <img src={logo} alt="" width="65" height="64" class="d-inline-block align-text-center px-1"/>
                Katiuska Beads
                </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse display-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active text-white fs-4 px-1" aria-current="page" href="#">Contact</a>
                  </li>
        
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default Navbar;