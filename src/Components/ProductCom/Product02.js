import React from "react";
import product02 from "../Images/product02.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function Product02() {
    return(
    <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
            <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product02}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">HAGR Earrings</h5>
                    <p className="card-text fs-5 text-center">Description: BEAUTIFUL HANGING FEATHER CHARM EARRINGS, LIGHT GREEN 8mm AND 9mm GLASS STONE BEADS.</p>
                    <h5 className="card-price fs-4 text-center">$14.00</h5>
                </div>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="S8AKY69DXDN7U"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>


            </div>
        </div>
    </div>
    </div>
    )
}

export default Product02;