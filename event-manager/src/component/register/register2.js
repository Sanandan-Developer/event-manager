import React, { Component } from 'react';
import '../css/sign.css'
import Header from '../header.js'
import logo1 from '../imgs/logo1.png'
import {Link} from 'react-router-dom'
class Register2 extends Component {
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
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Admin or User" />
                    <input type="email" id="login" class="fadeIn second" name="login" placeholder="Phone Number(for Admin)" />
                    


                    <Link to="/Admin"><input type="submit" class="fadeIn fourth" value="Register" /></Link>

                    <input type="submit" style={{marginTop:"0px"}} class="fadeIn fourth" value="Back" onClick={this.props.back} />

                    </form>


                    {/*<div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>*/}



                </div>
                </div>

            </div>
        );
    }
}
 
export default Register2;