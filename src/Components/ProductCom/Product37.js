import React from "react";
import product39 from "../Images/product39.jpg";

function Product39() {
    return(
        <div style={{backgroundColor: "gray", height: '100vh'}}>
            <div className="card mb-3 prod-card mx-auto" style={{maxWidth: '75%',
            height: 'auto', backgroundColor: 'rgb(147,147,268)'}}>
        <div className="row g-0 justify-content-center align-items-center">
            <div className="col-md-4 pl-2">
                <img src={product39}className="img-fluid rounded-start " alt="..."/>
            </div>
            <div className="col-md-8 " >
                <div className="card-body text-white">
                    <h5 className="card-title fs-1 text-center">BESTIE Bracelet</h5>
                    <p className="card-text fs-3 text-center">Description: MULTICOLOR 4MM BEADS. BRACELET READS "BESTIE"</p>
                    <p className="card-text fs-3 text-center"><small class="text-black">Size: 8 INCHES</small></p>
                    <h5 className="card-price fs-1 text-center">$9.00</h5>
                </div>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="67E9QWMMS2SXU"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                </form>

            </div>
        </div>
    </div>
    </div>
    )
}

export default Product39;