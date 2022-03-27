import React from "react";
import product41 from "../Images/product41.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function Product41() {
    return(
        <div style={{backgroundColor: "gray", height: '125vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product41}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">HEART Bracelet</h5>
                    <p className="card-text fs-5 text-center">Description: BLACK 4MM BEADS, SILVER HEART CHARM</p>
                    <p className="card-text fs-5 text-center"><small class="text-black">Size: 7 INCHES</small></p>
                    <h5 className="card-price fs-4 text-center">$6.00</h5>
                </div>
                <div className="email-button">
                    <a className="btn btn-success rounded" href="mailto:katiuskabeads@gmail.com">Contact Katiuska Beads</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Product41;