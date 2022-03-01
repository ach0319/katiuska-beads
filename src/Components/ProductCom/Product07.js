import React from "react";
import product07 from "../Images/product07.jpg";

function Product07() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product07}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Waistbead and Bracelet Combo</h5>
                    <p className="card-text fs-3 text-center">Description: Beautiful set of Waistbeads and Bracelet; 3MM Green/Gold/Red and White Waistbeads, White/Green/Gold/Red Bracelet</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: Green/Golden (26 inches), Red/White (26 inches),Green/Gold/Red Bracelet (7 inches)</small></p>
                    <h5 className="card-price fs-1 text-center">$30.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product07;