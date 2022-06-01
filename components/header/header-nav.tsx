import React from "react";
import Link from "next/link";

const HeaderNav = ():React.ReactElement => {
  return (
    <nav>
      <Link href='/article' title='article'>文章</Link>
      <Link href='/notes' title="notes">筆記</Link>
      <Link href='/about' title="about">關於我</Link>
    </nav>
  );
}
 
export default HeaderNav;