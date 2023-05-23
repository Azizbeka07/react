import React from "react";
import "./style.css";
// FOOTER IMAGE
import logo from "../../assets/image/logo.png";
import instagram from "../../assets/image/instagram.png";
import twitter from "../../assets/image/twitter.png";
import facebook from "../../assets/image/facebook.png";

const Footer = ({ info }) => {

  return (
    <div className="container">
      <div className="box">
        {
          info?.map((el) => {
            return (
              <div key={el.id} className="wrapper">
                <i>{el.title}</i>
              </div>
            )
          })
        }
      </div>
    </div>

    // <footer className="page-footer">
    //   <div className="container">
    //     <div className="wrapper">
    //       <img src={logo} alt="img" />
    //       <nav className="navbar">
    //         <a href="#" className="text footer-link">Home</a>
    //         <a href="#" className="text footer-link">About</a>
    //         <a href="#" className="text footer-link">Product</a>
    //       </nav>
    //       <div className="footer-right">
    //         <div className="footer-right__img">
    //           <img className="footer-img" src={instagram} alt="img" />
    //         </div>
    //         <div className="footer-right__img">
    //           <img className="footer-img" src={twitter} alt="img" />
    //         </div>
    //         <div className="footer-right__img">
    //           <img className="footer-img" src={facebook} alt="img" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
