import React from "react";
import product22 from "../Images/product22.jpg";

function Product22() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product22}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Bracelet</h5>
                    <p className="card-text fs-3 text-center">Description: 6MM ORANGE TONE, STRETCHY BRACELET SILVER HANGING CRUCIFIX CHARM</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 8 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$8.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product22;