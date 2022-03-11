import React from 'react';
import aboutImage from "../Images/aboutImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from  "@fortawesome/free-brands-svg-icons"


function About() {
    return(
        <div className="about-banner pt-5" style={{backgroundColor: 'rgb(147,147,268)'}}>
            <div class="card mb-3 mx-auto border-0" style={{maxWidth: '60%', backgroundColor: 'rgb(147,147,268'}}>
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-md-4">
                        <img src={aboutImage} class="img-fluid rounded start rounded shadow-lg" alt="Jewelery on wicker circular background"></img>
                    </div>
                    <div class="col-md-8 text-center" >
                        <div class="card-body">
                            <h5 class="card-title text-center fs-1 fw-bolder pb-5">Discover<br></br>Katiuska Beads</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mx-auto border-0" style={{width: '60%', backgroundColor: 'rgb(147,147,268'}}>
                <div class="card-body text-center">
                    <p class="card-text fs-4 bg-secondary text-white rounded shadow-lg px-5 py-3">Hi guys,<br></br> 
I hope you have fun visiting our online store, we create beautiful uniquely crafted accessories along with offering a variety of cruelty free self care products.
All of our accessories are handcrafted with unique, beautiful stones which create a uniquely crafted peice. 
Here at Katiuska Beads you will find a lovely inventory at an affordable price. 
Our goal is for you to find a jewelry piece that feels more then just an accessory. 
A piece that defines you , inspires you , a piece that will simply be an expression of “You”. 
Like our accessories , our self care products are all natural based products. 
Enjoy and hope to hear from you soon.<br></br>

- Owner of Katiuska Beads</p>
                    <h5 class="card-title fs-1">Check me out on Instagram</h5>
                    <a href="https://instagram.com/katiuskabeads?utm_medium=copy_link" class="card-link fs-1 text-primary"><FontAwesomeIcon icon={faInstagram} /></a>
                    
                </div>
            </div>
<div class="elfsight-app-258fb984-0953-4a40-9898-27fd943f8d1e"></div>
    
        </div>
    )
}

export default About;