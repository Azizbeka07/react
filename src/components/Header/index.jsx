import React, { useEffect } from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderNav from "./HeaderNav";
import "./style.css"

const Header = () => {


    return (
        <header className="page-header">
            <HeaderNav />
            <HeaderInfo />
        </header>
    )
}

export default Header;