import React from "react";
import product40 from "../Images/product40.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function Product40() {
    return(
        <div style={{backgroundColor: "gray", height: '125vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product40}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">SLAY Bracelet</h5>
                    <p className="card-text fs-5 text-center">Description: MULTICOLOR 6MM BEADS, BRACELET READS "SLAY"</p>
                    <p className="card-text fs-5 text-center"><small class="text-black">Size: 6 INCHES</small></p>
                    <h5 className="card-price fs-4 text-center">$10.00</h5>
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

export default Product40;