import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_black">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Austin Carstens </div>
        <div className="footer_copyright">All rights reserved.</div>
      </Fade>
    </footer>
  );
};

export default Footer;
