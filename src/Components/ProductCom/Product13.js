import React from "react";
import product13 from "../Images/product13.jpg";

function Product13() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product13}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Waistbeads</h5>
                    <p className="card-text fs-3 text-center">Description: MULTICOLOR SET OF WAISTBEADS; 3MM MULTICOLOR BEADS AND 6MM SILVER BEADS</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 31 1/2 INCHES AND 30 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$25.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product13;