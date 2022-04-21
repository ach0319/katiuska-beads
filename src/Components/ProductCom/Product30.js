import React from "react";
import product31 from "../Images/product31.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function Product31() {
    return(
        <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product31}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">MULTI Earring</h5>
                    <p className="card-text fs-5 text-center">Description: BEAUTIFULLY HANDCRAFTED HANGING MULTICOLOR IRREGULAR CHIP BEADS</p>
                    <p className="card-text fs-5 text-center"><small class="text-black">Size: 5 INCHES</small></p>
                    <h5 className="card-price fs-4 text-center">$15.00</h5>
                </div>
                <div className="email-button">
                   <a className="btn btn-primary buy-button" href="https://buy.stripe.com/cN2eVhdFx4J8e7S14y">Purchase Now</a>
                </div>


            </div>
        </div>
    </div>
    </div>
    )
}

export default Product31;