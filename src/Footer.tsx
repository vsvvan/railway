import shoppingCart from "./images/shopping_cart_black_24dp 1.png";
import React from "react";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export const Footer = () => {
    return (
   <div>
   <footer className="footer">
   <div className="upper_container">
       <div className="footer-col">

       <img className="img-logo"src="Logo.svg" alt="" />

       </div>
       <div className="footer-col">
           
               <li><a href="#">About us</a></li>
               <li><a href="#">International tickets</a></li>
               <li><a href="#">Terms and Conditions</a></li>

       </div>
       <div className="footer-col">
           
               <li><a href="#">Strategy and vision</a></li>
               <li><a href="#">Integrated Transportation Systems</a></li>
           
       </div>
       <div className="footer-col">
           <div>
               <RssFeedIcon className="icons"/>
               <a href="#">RSS</a>
           </div>  
           
       </div>
   </div>
   <hr className="Line"></hr>
   <div className="lower_container">
           <div className="footer-col">
               <div className="Socialmedia">
                   <ul><a> <h4>Social Media:</h4></a></ul>
                   <ul><i className="fa-brands fa-facebook"></i><a href="#"> Facebook</a></ul>
                   <ul><i className="fa-brands fa-linkedin"></i><a href="#"> Linkedin</a></ul>
                   <ul><i className="fa-brands fa-twitter"></i><a href="#"> Twitter</a></ul>
                   <ul><i className="fa-brands fa-instagram"></i><a href="#"> Instagram</a></ul>
                   <ul><i className="fa-brands fa-youtube"></i><a href="#"> Youtube</a></ul>
               </div>
           </div>

           <div className="footer-col">
               
               <ul>
                   <h4>Email:</h4>
                   <div className="phone">
                    <EmailIcon className="icons" width="19" height="19"/>
                   <a href="#">info@slovakrail.sk</a>
                   </div>
               </ul>
           </div>

           <div className="footer-col">
                   <h4>Contact center</h4>
                   <li><a href="#">Slovakia</a></li>
                       <div className="phone">
                       <LocalPhoneIcon className="icons" width="20" height="20"/>
                       <a href="#" margin-right="20px;">18 1888</a>
                       </div>
                   <li><a href="#" >From abroad</a></li>
                       <div className="phone">
                       <PhoneCallbackIcon className="icons" width="20" height="20"/>
                       <a href="#" >+421 24 48 58 188</a>
                       </div>
           </div>
           
           <div className="footer-col">
               
               <ul>
                   <h4>Mobile app</h4>
                   <img className="App-mobile"src="qr-code.svg" alt=""/>
                   <div className="QR-CODES">
                       <img src="google-play.svg" alt=""/>
                       <img src="app-store.svg" alt=""/>
                       <img src="appgallery-logo-sk.svg" alt=""/>
                   </div>
               </ul>
           </div>           
       </div>
</footer>
   </div>)
};