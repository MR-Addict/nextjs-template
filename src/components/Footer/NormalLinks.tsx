import Image from "next/image";
import Link from "next/link";

import { links } from "./config";
import LinkCard from "./LinkCard";
import logo from "../../../public/favicon.png";

export default function NormalLinks() {
  return (
    <div className='hidden md:flex w-full flex-row items-start justify-between'>
      {links.map((item1, index1) => (
        <div key={index1} className='flex flex-col gap-5'>
          <h1 className='dark:text-white'>{item1.head}</h1>
          <div className='flex flex-col gap-1'>
            {item1.data.map((item2, index2) => (
              <LinkCard item={item2} key={index2} />
            ))}
          </div>
        </div>
      ))}
      <div className='flex flex-col gap-10 items-start'>
        <Link href='/' className='flex flex-row items-end justify-center gap-2'>
          <Image src={logo} width={40} height={40} alt='logo' />
          <h1 className='dark:text-white text-2xl font-bold italic'>Nextjs Template</h1>
        </Link>
      </div>
    </div>
  );
}
