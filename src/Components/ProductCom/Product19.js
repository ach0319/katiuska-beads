import React from "react";
import product20 from "../Images/product20.jpg";

function Product20() {
    return(
        <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product20}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Bracelet Set of 3</h5>
                    <p className="card-text fs-3 text-center">Description: TWO BRACELETS WITH 2 HANGING CHARMS(LEAF + STAR); ONE BRACELET WITH 2 HANGING CHARMS (MOON + FLOWER); 6 AND 8 MM LAVENDER, ORANGE AND SILVER BEADS.</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 7-8 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$12.00</h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Product20;