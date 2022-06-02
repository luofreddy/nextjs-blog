import React, { useState } from "react";
import classNames from "classnames";

const HeaderHamburgerIcon = React.memo(():React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const lineBaseStyle ='transform transition w-full h-px bg-current absolute';
  const line1st:string = classNames(lineBaseStyle, {
    'translate-y-0': isOpen,
    'rotate-45': isOpen,
    '-translate-y-2': !isOpen
  })

  const line2nd: string = classNames(lineBaseStyle,
    {
    'translate-x-3': isOpen,
    'opacity-0': isOpen,
    'opacity-100': !isOpen
  })

  const line3rd: string = classNames(lineBaseStyle,{
    '-rotate-45': isOpen,
    'translate-y-0': isOpen,
    'translate-y-2': !isOpen
  })
  return (
    <button className="flex items-center space-x-2 focus:outline-none" onClick={()=>setIsOpen(prev => !prev)}>
    <div className="w-6 flex items-center justify-center relative">
      <span className={line1st}></span>
      <span className={line2nd}></span>
      <span className={line3rd}></span>
    </div>
  </button>
  );
})

HeaderHamburgerIcon.displayName = 'HeaderHamburgerIcon';
 
export default HeaderHamburgerIcon;