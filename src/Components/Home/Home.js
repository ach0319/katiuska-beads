import React from 'react';
import banner from "../Images/banner.jpg";
import "../Navbar/Navbar.css"


function Home () {
    return (
        <div>
            <div class="card bg-dark text-white border-0">
                <img class="card-img" src={banner} alt="Card image"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 class="card-title display-1 text-center">Find your signature peice</h5>
                </div>
            </div>
            
        </div>

    )
}

export default Home;