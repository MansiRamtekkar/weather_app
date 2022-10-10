import React from "react";

function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            <p>Made with 🤍 &copy; <a href="https://github.com/MansiRamtekkar" target={"_blank"} rel="noreferrer">Mansi Ramtekkar</a> {year}</p>
        </footer>
    )
}

export default Footer;