import React, { Component } from 'react';
import './css/contacts.css'
import './css/w3.css'
import map from './imgs/map.png'

class Contacts extends Component {
    state = {  }
    render() { 
        return (
            <div class="w3-row w3-padding-64" >
                
                <div class="w3-col l6 w3-padding-large">
                    <a href ="https://www.google.com/maps/place/Divine+Apartment/@25.4243816,81.9258044,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x39854b3bff3434b1:0x13b5d49886bc186a!2sTrivenipuram,+Andanva,+Prayagraj,+Uttar+Pradesh+211019!3b1!8m2!3d25.4254004!4d81.9282464!3m4!1s0x39854b3943af1c1f:0x64f8f4b163cceed2!8m2!3d25.4243816!4d81.9270806"><img src={map} class="w3-round w3-image w3-opacity-min" alt="Menu" width="100%"/></a>
                </div>

                <div class="w3-col l6 w3-padding-large">
                <div class="fcf-body">

                <div id="fcf-form">
                <h1 class="fcf-h3"><strong>Contact us</strong></h1>

                <form id="fcf-form-id" class="fcf-form-class" >

                    <div class="fcf-form-group">
                        <label for="Name" class="fcf-label">Your name</label>
                        <div class="fcf-input-group">
                            <input type="name" id="Name" name="Name" class="fcf-form-control" required/>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <label for="Email" class="fcf-label">Your email address</label>
                        <div class="fcf-input-group">
                            <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <label for="Message" class="fcf-label">Your message</label>
                        <div class="fcf-input-group">
                            <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                    </div>


                </form>
                </div>

                </div>                  
                </div>
                
            </div>



             /*<div class="fcf-body">

                <div id="fcf-form">
                <h1 class="fcf-h3"><strong>Contact us</strong></h1>

                <form id="fcf-form-id" class="fcf-form-class" >

                    <div class="fcf-form-group">
                        <label for="Name" class="fcf-label">Your name</label>
                        <div class="fcf-input-group">
                            <input type="name" id="Name" name="Name" class="fcf-form-control" required/>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <label for="Email" class="fcf-label">Your email address</label>
                        <div class="fcf-input-group">
                            <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <label for="Message" class="fcf-label">Your message</label>
                        <div class="fcf-input-group">
                            <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                        </div>
                    </div>

                    <div class="fcf-form-group">
                        <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                    </div>


                </form>
                </div>

            </div>*/ 

        );
    }
}
 
export default Contacts;