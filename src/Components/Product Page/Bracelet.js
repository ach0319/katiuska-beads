import React from 'react';
import banner from "../Images/banner.jpg";
import "../Navbar/Navbar.css"
import product01 from "../Images/product01.jpg";
import product03 from "../Images/product03.jpg";
import product04 from "../Images/product04.jpg";
import product05 from "../Images/product05.jpg";
import product06 from "../Images/product06.jpg";
import product07 from "../Images/product07.jpg";
import product08 from "../Images/product08.jpg";
import product09 from "../Images/product09.jpg";
import product10 from "../Images/product10.jpg";
import product11 from "../Images/product11.jpg";
import product12 from "../Images/product12.jpg";
import product16 from "../Images/product16.jpg";
import product17 from "../Images/product17.jpg";
import product18 from "../Images/product18.jpg";
import product19 from "../Images/product19.jpg";
import product20 from "../Images/product20.jpg";
import product21 from "../Images/product21.jpg";
import product22 from "../Images/product22.jpg";
import product23 from "../Images/product23.jpg";
import product24 from "../Images/product24.jpg";
import product25 from "../Images/product25.jpg";
import product26 from "../Images/product26.jpg";
import product27 from "../Images/product27.jpg";
import product28 from "../Images/product28.jpg";
import product29 from "../Images/product29.jpg";
import product32 from "../Images/product32.jpg";
import product33 from "../Images/product33.jpg";
import product34 from "../Images/product34.jpg";
import product35 from "../Images/product35.jpg";
import product36 from "../Images/product36.jpg";
import product39 from "../Images/product39.jpg";
import product40 from "../Images/product40.jpg";
import product41 from "../Images/product41.jpg";
import product42 from "../Images/product42.jpg";
import Product45 from "../Images/Product45.jpg";
import Product47 from "../Images/Product47.jpg";
import Product49 from "../Images/Product49.jpg";
import { Link } from "react-router-dom";


function Bracelet () {
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
                <Link to="/bracelet" className="btn btn-secondary col-4 filter" >Bracelet</Link>
                <Link to="/earring" className="btn btn-outline-secondary col-4 filter" >Earring</Link>
                <Link to="/waistbeads" className="btn btn-outline-secondary col-4 filter" >Waistbeads</Link>
                <Link to="/men" className="btn btn-outline-secondary col-4 filter" >Men</Link>
                <Link to="/kid" className="btn btn-outline-secondary col-4 filter" >Kid</Link>
                <Link to="/plus" className="btn btn-outline-secondary col-4 filter" >Plus</Link>
                <Link to="/headbeads" className="btn btn-outline-secondary col-4 filter" >Headbeads</Link>
            </div>
            <div className="product-page row justify-content-center align-items-center no-gutters w-100">
                <div className="card product-card h-100 text-center p-4 col-sm-4 mb-5" >
                    <img src={product01} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price ">$9.00</h5>
                        <Link to="/prod1" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card  h-100 text-center p-4 col-sm-4 mb-5" >
                    <img src={product03} clasName="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$9.00</h5>
                        <Link to="/prod3" href="#" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card  h-100 text-center p-4 col-sm-4 mb-5" >
                    <img src={product04} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$9.00</h5>
                        <Link to="/prod4" href="#" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product05} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$12.00</h5>
                        <Link to="/prod5" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product06} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$23.00</h5>
                        <Link to="/prod6" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product07} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$30.00</h5>
                        <Link to="/prod7" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product08} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$8.00</h5>
                        <Link to="/prod8" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product09} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$20.00</h5>
                        <Link to="/prod9" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product10} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$8.00</h5>
                        <Link to="/prod10" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product11} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$30.00</h5>
                        <Link to="/prod11" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product12} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$8.00</h5>
                        <Link to="/prod12" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product16} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$7.00</h5>
                        <Link to="/prod16" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
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
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product19} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$7.00</h5>
                        <Link to="/prod19" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product20} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$12.00</h5>
                        <Link to="/prod20" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product21} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title price">$7.00</h5>
                        <Link to="/prod21" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product22} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$8.00</h5>
                        <Link to="/prod22" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product23} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$11.00</h5>
                        <Link to="/prod23" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product24} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$11.00</h5>
                        <Link to="/prod24" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product25} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$19.00</h5>
                        <Link to="/prod25"className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product26} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$12.00</h5>
                        <Link to="/prod26" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product27} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$10.00</h5>
                        <Link to="/prod27" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                   <img src={product28} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$14.00</h5>
                        <Link to="/prod28" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product29} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$13.00</h5>
                        <Link to="/prod29" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product32} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$8.00</h5>
                        <Link to="/prod32" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product33} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$6.00</h5>
                        <Link to="/prod33" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product34} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$11.00</h5>
                        <Link to="/prod34" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product35} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$11.00</h5>
                        <Link to="/prod35" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product36} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$7.00</h5>
                        <Link to="/prod36" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product39} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$9.00</h5>
                        <Link to="/prod39" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product40} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$10.00</h5>
                        <Link to="/prod40" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center w-100 ">
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product41} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$6.00</h5>
                        <Link to="/prod41" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={product42} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$6.00</h5>
                        <Link to="/prod42" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product45} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <Link to="/prod45" className="btn btn-primary buy-button">Buy Now</Link>
                    </div>
                </div>
                <div className="card product-card h-100 text-center p-4 col-md-4 mb-5" >
                    <img src={Product47} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">$15.00</h5>
                        <Link to="/prod47" className="btn btn-primary buy-button">Buy Now</Link>
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

export default Bracelet;