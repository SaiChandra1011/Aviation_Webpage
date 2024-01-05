import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <p> © {currentYear} Copyright: AviaNation.com </p>
        </footer>
    )
      
}
export default Footer;