import React, { Component } from 'react';
import img4 from './imgs/img4.jpg'
import './css/w3.css'
import img5 from './imgs/img5.jpg'
import img6 from './imgs/img6.jpg'

class About extends Component {
    render() { 
        return ( 
        <div>
            {/*First */}
            <div class="w3-row w3-padding-64" style={{backgroundColor:"#e6ffff"}}>
            <div class="w3-col m6 w3-padding-large">
            <img src={img4} class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="100%" height="100%" />
            </div>

            <div class="w3-col m6 w3-padding-large">
            <h1 class="w3-center"><strong  style={{fontSize:"80px"}}>About</strong></h1><br/>
            <h3 class="w3-center"></h3>
            
            </div>
            </div>
            
            {/* Second */ }
            <div class="w3-row w3-padding-64" >
                <div class="w3-col l6 w3-padding-large">
                    
                </div>
                
                <div class="w3-col l6 w3-padding-large">
                <img src={img5} class="w3-round w3-image w3-opacity-min" alt="Menu" width="100%" height="100%"/>
                </div>
            </div>

            { /* Third */}
            <div class="w3-row w3-padding-64" style={{backgroundColor:"#e6ffff"}}>
                <div class="w3-col m6 w3-padding-large">
                <img src={img6} class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="100%" height="100%" />
                </div>

                <div class="w3-col m6 w3-padding-large">
                <h1 class="w3-center"><strong></strong></h1><br/>
                <h3 class="w3-center"></h3>
               
            
                </div>
            </div>
        </div>
        );
    }
}
 
export default About;