import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/favicon.png";
import NavbarButtons from "./NavbarButtons";

export default function Navbar() {
  return (
    <div className='w-full flex flex-row items-center justify-between px-5 md:px-48 py-5'>
      <Link href='/' className='flex flex-row items-end justify-center gap-2'>
        <Image src={logo} width={35} height={35} alt='logo' />
        <h1 className='dark:text-white text-xl md:text-2xl font-bold italic'>Nextjs Template</h1>
      </Link>
      {/* @ts-expect-error */}
      <NavbarButtons />
    </div>
  );
}
