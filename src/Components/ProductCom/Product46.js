import React from "react";
import Product48 from "../Images/Product48.jpg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from  "@fortawesome/free-solid-svg-icons"

function product48() {
    return(
        <div style={{backgroundColor: "gray", height: '105vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
                <div className="back-forward-button">
                    <Link to="/" className="btn house text-secondary border-secondary rounded"><FontAwesomeIcon icon={faHouse} /></Link>
                </div>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={Product48}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-4 text-center">MULTI Set of Head Beads and Bracelet</h5>
                    <p className="card-text fs-5 text-center">Description: SET OF HEAD BEADS AND BRACELET</p>
                    <p className="card-text fs-5 text-center"><small class="text-black">Size: 22 INCHES AND 8 INCHES</small></p>
                    <h5 className="card-price fs-4 text-center">$8.00-20.00</h5>
                </div>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="B6F7U6BCKPJXU"/>
                    <table>
                        <tr><td><input type="hidden" name="on0" value="Options"/>Options</td></tr><tr><td><select name="os0">
	                        <option value="Bracelet">Bracelet $8.00 USD</option>
	                        <option value="Head Beads and Bracelet">Head Beads and Bracelet $20.00 USD</option>
                        </select> </td></tr>
                    </table>
                    <input type="hidden" name="currency_code" value="USD"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>


            </div>
        </div>
    </div>
    </div>
    )
}

export default product48;