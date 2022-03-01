import React from "react";
import product06 from "../Images/product06.jpg";

function Product06() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product06}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Waistbead and Bracelet Combo</h5>
                    <h5 className="card-price fs-1 text-center">$23.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product06;