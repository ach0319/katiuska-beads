import React from "react";
import product25 from "../Images/product25.jpg";

function Product25() {
    return(
    <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '90%',
    height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product25}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">CharmBracelet</h5>
                    <p className="card-text fs-3 text-center">Description: BEAUTIFUL SILVER BANGLE WITH HANGING LETTER CHARMS THAT READ "GOOD VIBES", 2 CRYSTAL RED HEARTS AND HANGING SETS OF BLUE AND RED BEADS</p>
                    <h5 className="card-price fs-1 text-center">$19.00</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product25;