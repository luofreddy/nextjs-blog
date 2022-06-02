import React from "react";
import HeaderNav from './header-nav';
import HeaderLogo from './header-logo'
import HeaderSocial from './header-social'
import HeaderHamburgerIcon from "./header-hamburger-icon";



const Header = ():React.ReactElement => {
  return (
    <header className="py-2 border-gray-200 border-b">
      <div className="container flex justify-between max-w-5xl mx-auto ">
        <HeaderLogo />
        <HeaderNav />
        <HeaderHamburgerIcon />
        <HeaderSocial />
      </div>
    </header>
  );
}
 
export default Header;