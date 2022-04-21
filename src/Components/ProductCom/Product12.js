import React from "react";
import product12 from "../Images/product12.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function Product12() {
    return(
        <div style={{backgroundColor: "gray", height: '90vh'}}>
    <       div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product12}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">CRYS Bracelet</h5>
                    <p className="card-text fs-5 text-center">Description: MULTICOLOR 3MM CRYSTAL BEADS</p>
                    <p className="card-text fs-4 text-center"><small class="text-black">Size: 8 INCHES</small></p>
                    <h5 className="card-price fs-4 text-center">$9.00</h5>
                </div>
                <div className="email-button">
                   <a className="btn btn-primary buy-button" href="https://buy.stripe.com/7sI3cz9ph0sS1l66oA">Purchase Now</a>
                </div>


            </div>
        </div>
    </div>
    </div>
    )
}

export default Product12;