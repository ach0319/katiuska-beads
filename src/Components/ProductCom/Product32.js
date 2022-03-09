import React from "react";
import product33 from "../Images/product33.jpg";

function Product33() {
    return(
        <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product33}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Bracelet</h5>
                    <p className="card-text fs-3 text-center">Description: 6MM RED AND YELLOW TWO TONE BEADS</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 6 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$6.00</h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Product33;