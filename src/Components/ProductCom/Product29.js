import React from "react";
import product30 from "../Images/product30.jpg";

function Product30() {
    return(
        <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product30}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Earring</h5>
                    <p className="card-text fs-3 text-center">Description: BEAUTIFUL 2 STRAND EARRINGS; 6MM CRYSTAL BEADS, 8MM BLACK BEADS AND 9MM DARK SILVER ROUND BEADS</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 3 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$14.00</h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Product30;