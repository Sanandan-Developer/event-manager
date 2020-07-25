import React, { Component, setState, useState } from 'react';
import '../css/sign.css'
import Header from '../header.js'
import logo1 from '../imgs/logo1.png'
import Register from '../register';

class Register1 extends Component {
    render() { 

        return (
            <div>
                <Header />
                <div class="wrapper fadeInDown">
                <div id="formContent">
                    
                    <div class="fadeIn first">
                    <img src={logo1} id="icon" alt="User Icon" width="80%" height="80%" />
                    </div>


                    <form>
                    <input type="text" id="name" class="fadeIn second" name="login" placeholder="UserName" />
                    <input type="email" id="login" class="fadeIn second" name="login" placeholder="Email" />
                    <input type="password" id="password1" class="fadeIn third" name="login" placeholder="Enter Password" />
                    <input type="password" id="password2" class="fadeIn third" name="login" placeholder="Re-Enter Password" />

                    
                    <input type="submit" class="fadeIn fourth" value="Next" onClick={this.props.action}/>
                    </form>


                    {
                    /*<div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>*/
                    }



                </div>
                </div>

            </div>
        );
    }
}
 
export default Register1;