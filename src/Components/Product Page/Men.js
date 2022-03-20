import React from 'react';
import banner from "../Images/banner.jpg";
import "../Navbar/Navbar.css"
import product16 from "../Images/product16.jpg";
import product17 from "../Images/product17.jpg";
import product18 from "../Images/product18.jpg";

import { Link } from "react-router-dom";


function Men () {
    return (
        <div style={{backgroundColor: 'rgb(147,147,268)'}}>
            <div class="card bg-dark text-white border-0 w-100">
                <img class="card-img" src={banner} alt="flowers and jewlery on dresser"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 class="card-title display-1 text-center">Find your signature piece</h5>
                </div>
            </div>
            <div className="container" style={{backgroundColor: 'rgb(147,147,268)'}}>
            <div className="filter-buttons row justify-content-center mt-5">
                <Link to="/" className="btn btn-outline-secondary col-4 filter" >All</Link>
                <Link to="/bracelet" className="btn btn-outline-secondary col-4 filter" >Bracelet</Link>
                <Link to="/earring" className="btn btn-outline-secondary col-4 filter" >Earring</Link>
                <Link to="/waistbeads" className="btn btn-outline-secondary col-4 filter" >Waistbeads</Link>
                <Link to="/men" className="btn btn-secondary col-4 filter" >Men</Link>
                <Link to="/kid" className="btn btn-outline-secondary col-4 filter" >Kid</Link>
                <Link to="/plus" className="btn btn-outline-secondary col-4 filter" >Plus</Link>
                <Link to="/headbeads" className="btn btn-outline-secondary col-4 filter" >Headbeads</Link>
            </div>
            <div className="product-page row justify-content-center align-items-center no-gutters w-100">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product16} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$7.00</h5>
                        <Link to="/prod16" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product17} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$7.00</h5>
                        <Link to="/prod17" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-cardh-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product18} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$7.00</h5>
                        <Link to="/prod18" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
            

    )
}

export default Men;