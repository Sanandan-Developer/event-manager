import React, { Component } from 'react';
import '../css/sign.css'
import Header from '../header.js'
import logo1 from '../imgs/logo1.png'
import axios from 'axios'
import { useHistory } from "react-router-dom";
const querystring = require('querystring')

function Register2(props){
        
        const history = useHistory()

        function register(){
            console.log(props,"Inside func")
            var request = {
                name: props.data.name,
                email: props.data.email,
                password1: props.data.password1,
                password2: props.data.password2,
                userType: document.getElementById('userType').value,
                phNum: document.getElementById('phNum').value

            }
            
            axios.post("/register", querystring.stringify(request))
            .then(resp=>{
                alert( "No Error")
                history.push("/Admin")
            })
            .catch(err=>{
                 console.log(err, "Oh! Error")
            })
        }
        
        return (
            <div>
                <Header />
                <div class="wrapper fadeInDown">
                <div id="formContent">
                    
                    <div class="fadeIn first">
                    <img src={logo1} id="icon" alt="User Icon" width="80%" height="80%" />
                    </div>


                    <form>
                    <input type="text" id="userType" class="fadeIn second" name="login" placeholder="Admin or User" />
                    <input type="text" id="phNum" class="fadeIn second" name="login" placeholder="Phone Number(for Admin)" />
        
                    <input type="button" class="fadeIn fourth" value="Register" onClick={()=>register()}/>
                    <input type="button" style={{marginTop:"0px"}} class="fadeIn fourth" value="Back" onClick={()=>props.back()} />
                    </form>
                    {/*<div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>*/}
                </div>
                </div>

            </div>
        );
}
 
export default Register2;