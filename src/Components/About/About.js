import React from 'react';
import aboutImage from "../Images/aboutImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function About() {
    return(
        <div className="about-banner pt-5" style={{backgroundColor: 'rgb(147,147,268)'}}>
            <div class="card mb-3 mx-auto border-0" style={{maxWidth: '60%', backgroundColor: 'rgb(147,147,268'}}>
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-md-4">
                        <img src={aboutImage} class="img-fluid rounded start rounded" alt="image of jewelery on wicker circular background"></img>
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
                    <p class="card-text fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec felis ut nibh lobortis venenatis. Cras tristique at justo ut finibus. Aliquam in dolor volutpat, finibus orci a, blandit </p>
                    <h5 class="card-title fs-1">Check me out on Instagram</h5>
                    <a href="#" class="card-link"><FontAwesomeIcon icon="fa-instagram" /></a>
                    
                </div>
</div>
    
        </div>
    )
}

export default About;