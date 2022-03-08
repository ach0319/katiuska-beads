import React from "react";
import product02 from "../Images/product02.jpg";

function Product02() {
    return(
    <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
            <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product02}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Earring</h5>
                    <p className="card-text fs-3 text-center">Description: BEAUTIFUL HANGING FEATHER CHARM EARRINGS, LIGHT GREEN 8mm AND 9mm GLASS STONE BEADS.</p>
                    <h5 className="card-price fs-1 text-center">$14.00</h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Product02;