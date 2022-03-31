import React from "react";
import product07 from "../Images/product07.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function Product07() {
    return(
        <div style={{backgroundColor: "gray", height: '110vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product07}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">GRGW Waistbead and Bracelet Combo</h5>
                    <p className="card-text fs-5 text-center">Description: Beautiful set of Waistbeads and Bracelet; 3MM Green/Gold/Red and White Waistbeads, White/Green/Gold/Red Bracelet</p>
                    <p className="card-text fs-5 text-center"><small class="text-black">Size: Green/Golden (26 inches), Red/White (26 inches),Green/Gold/Red Bracelet (7 inches)</small></p>
                    <h5 className="card-price fs-4 text-center">$30.00</h5>
                </div>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="RWBRL5SUA2X98"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>


                
            </div>
        </div>
    </div>
    </div>
    )
}

export default Product07;