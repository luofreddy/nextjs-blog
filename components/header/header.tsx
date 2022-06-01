import React from "react";
import HeaderNav from './header-nav';
import HeaderLogo from './header-logo'
import HeaderSocial from './header-social'



const Header = ():React.ReactElement => {
  return (
    <header className="py-2 border-gray-200 border-b">
      <div className="container flex justify-between max-w-5xl mx-auto ">
        <HeaderLogo />
        <HeaderNav />
        <HeaderSocial />
      </div>
    </header>
  );
}
 
export default Header;