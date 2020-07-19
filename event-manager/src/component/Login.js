import React, { Component } from 'react';
import './css/sign.css'
import Header from './header.js'
import logo1 from './imgs/logo1.png'
import { Link } from 'react-router-dom';

class LogIn extends Component {
    render() { 

        return (
            <div>
                <Header />
                <div class="wrapper fadeInDown">
                <div id="formContent">
                    
                    <div class="fadeIn first">
                        <img src={logo1} id="icon" alt="User Icon" width="20%" height="20%" />
                    </div>


                    <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                    <Link to="/Admin"><input type="submit" class="fadeIn fourth" value="Log In" /></Link>
                    </form>

 
                    <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
                </div>

            </div>
        );
    }
}
 
export default LogIn;