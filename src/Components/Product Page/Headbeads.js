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
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product45} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/14kdRd591dfE3tebJp">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product46} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$20.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/14kdRd44X7VkaVG8xe">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product47} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/dR6cN98ld6Rg7Ju5l3">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product48} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">20.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/3cs14rcBtfnM6Fq14O">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product49} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/00g00ncBtejIbZK3cX">Purchase Now</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
        </div>
            

    )
}

export default Headbeads;