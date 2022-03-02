import React from "react";
import product32 from "../Images/product32.jpg";

function Product32() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product32}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Bracelet</h5>
                    <p className="card-text fs-3 text-center">Description: 6MM YELLOW AND CLEAR CRYSTAL BEADS; 8MM PEARLY, BROWN, BLACK AND SILVER BEADS</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 4 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$8.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product32;