import React from "react";
import product15 from "../Images/product15.jpg";

function Product15() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product15}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Waistbead</h5>
                    <p className="card-text fs-3 text-center">Description: BEAUTIFUL PLUS SIZE BEADS FOR ALL WAIST SIZES; 3MM MULTICOLOR AND 6MM CRYSTAL 2 TONE COLORED BEADS WITH RELIGOUS HANGING CHARMS</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 54 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$22.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product15;