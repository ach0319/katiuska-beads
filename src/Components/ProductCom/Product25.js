import React from "react";
import product26 from "../Images/product26.jpg";

function Product26() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product26}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">Charm Bracelet</h5>
                    <p className="card-text fs-3 text-center">Description: 6MM YELLOW, PURPLE AND BLUE CRYSTAL BEADS AND 4MM BEADS WITH SILVER EVIL EYE CHARM</p>
                    <h5 className="card-price fs-1 text-center">$12.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product26;