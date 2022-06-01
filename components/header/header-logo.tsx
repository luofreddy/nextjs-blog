import Link from "next/link";

const HeaderLogo = ():React.ReactElement => {
  return (
    <Link href='/'>
      <a title="homepage" className=" text-2xl font-bold text-gray-800">Freddy</a>
    </Link>
  );
}
 
export default HeaderLogo;