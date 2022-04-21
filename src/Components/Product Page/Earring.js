import React from 'react';
import banner from "../Images/banner.jpg";
import "../Navbar/Navbar.css"
import product02 from "../Images/product02.jpg";
import product30 from "../Images/product30.jpg";
import product31 from "../Images/product31.jpg";
import product43 from "../Images/product43.jpg";

import { Link } from "react-router-dom";


function Earring () {
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
                <Link to="/earring" className="btn btn-secondary col-4 filter" >Earring</Link>
                <Link to="/waistbeads" className="btn btn-outline-secondary col-4 filter" >Waistbeads</Link>
                <Link to="/men" className="btn btn-outline-secondary col-4 filter" >Men</Link>
                <Link to="/kid" className="btn btn-outline-secondary col-4 filter" >Kid</Link>
                <Link to="/plus" className="btn btn-outline-secondary col-4 filter" >Plus</Link>
                <Link to="/headbeads" className="btn btn-outline-secondary col-4 filter" >Headbeads</Link>
            </div>
            <div className="product-page row justify-content-center align-items-center no-gutters w-100">
                <div className="card product-card  h-100 text-center p-4 col-sm-4 mb-5" >
                    <img src={product02} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$14.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/5kAfZlatlcbAgg09AB">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product30} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$14.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/aEU3czcBtgrQ5Bm28B">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product31} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/cN2eVhdFx4J8e7S14y">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product43} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$12.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/6oE28vfNFfnM9RCfZD">Purchase Now</a>
                    </div>
                </div>
            </div>
            
            </div>
            </div>
            

    )
}

export default Earring;