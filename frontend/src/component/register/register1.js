import React, { Component, setState, useState } from 'react';
import '../css/sign.css'
import Header from '../header.js'
import logo1 from '../imgs/logo1.png'
import Register from '../register'


class Register1 extends Component {

    sendData = () =>{
        this.props.parentCallBack({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password1: document.getElementById('password1').value,
            password2: document.getElementById('password2').value
        })  

    }

    

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
                    <input type="text" id="name" class="fadeIn second" name="login" placeholder="UserName" required/>
                    <input type="email" id="email" class="fadeIn second" name="login" placeholder="Email" required/>
                    <input type="password" id="password1" class="fadeIn third" name="login" placeholder="Enter Password" required/>
                    <input type="password" id="password2" class="fadeIn third" name="login" placeholder="Re-Enter Password" required/>

                    
                    <input type="button" id="next" class="fadeIn fourth" value="Next" onClick={()=>this.sendData()}/>
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