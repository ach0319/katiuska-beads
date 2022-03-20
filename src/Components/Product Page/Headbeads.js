import React from 'react';
import banner from "../Images/banner.jpg";
import "../Navbar/Navbar.css"
import Product45 from "../Images/Product45.jpg";
import Product46 from "../Images/Product46.jpg";
import Product47 from "../Images/Product47.jpg";
import Product48 from "../Images/Product48.jpg";
import Product49 from "../Images/Product49.jpg";
import { Link } from "react-router-dom";


function Headbeads () {
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
                <Link to="/men" className="btn btn-outline-secondary col-4 filter" >Men</Link>
                <Link to="/kid" className="btn btn-outline-secondary col-4 filter" >Kid</Link>
                <Link to="/plus" className="btn btn-outline-secondary col-4 filter" >Plus</Link>
                <Link to="/headbeads" className="btn btn-secondary col-4 filter" >Headbeads</Link>
            </div>
            <div className="product-page row justify-content-center align-items-center no-gutters w-100">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product45} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <Link to="/prod45" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product46} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$10.00-20.00</h5>
                        <Link to="/prod46" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product47} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <Link to="/prod47" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product48} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$8.00-20.00</h5>
                        <Link to="/prod48" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product49} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <Link to="/prod49" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
            

    )
}

export default Headbeads;