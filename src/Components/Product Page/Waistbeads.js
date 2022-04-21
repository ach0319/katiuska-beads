import React from 'react';
import banner from "../Images/banner.jpg";
import "../Navbar/Navbar.css"
import product06 from "../Images/product06.jpg";
import product07 from "../Images/product07.jpg";
import product09 from "../Images/product09.jpg";
import product11 from "../Images/product11.jpg";
import product13 from "../Images/product13.jpg";
import product15 from "../Images/product15.jpg";
import product38 from "../Images/product38.jpg";
import { Link } from "react-router-dom";


function Waistbeads () {
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
                <Link to="/waistbeads" className="btn btn-secondary col-4 filter" >Waistbeads</Link>
                <Link to="/men" className="btn btn-outline-secondary col-4 filter" >Men</Link>
                <Link to="/kid" className="btn btn-outline-secondary col-4 filter" >Kid</Link>
                <Link to="/plus" className="btn btn-outline-secondary col-4 filter" >Plus</Link>
                <Link to="/headbeads" className="btn btn-outline-secondary col-4 filter" >Headbeads</Link>
            </div>
            <div className="product-page row justify-content-center align-items-center no-gutters w-100">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product06} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$23.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/00g3cz591grQ8Ny7sy">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product07} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$30.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/3cs6oL30T7Vk2pa28f">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product09} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$20.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/7sI9AX8ldb7wfbWdQZ">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product11} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$30.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/cN27sPfNFcbA1l68wH">Purchase Now</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product13} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$25.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/00geVh9ph4J84xi9AN">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product15} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$22.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/14keVhbxp4J86FqbIW">Purchase Now</a>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product38} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <a className="btn btn-primary buy-button" href="https://buy.stripe.com/9AQ8wT1WP3F47JubJi">Purchase Now</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
            

    )
}

export default Waistbeads;