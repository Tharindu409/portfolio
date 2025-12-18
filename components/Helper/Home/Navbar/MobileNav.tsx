import { Navlink } from '@/constant/constant'
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';
 

type Props={
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({closeNav,showNav}:Props) => {
  const navOpen = showNav ? "translate-x-0":"translate-x-[100%]";
  return (
    <div>
       {/* overlay */}
       <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[10000z] bg-black
       opacity-70 w-full h-screen`}></div>

       {/*navlinks */}

       <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full treansform transition-all
       duration-500 delay-300 w-[88%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}>
        {Navlink.map((link) => {
          return (
          <Link key = {link.id} href={link.url} scroll={false}>
            <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-2xl font-medium hover:text-cyan-300'>
              {link.label}
            </p>
          </Link>
          );
        })}
        
        {/*cross icon */}
       <CgClose onClick ={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>

       </div>

       


    </div>
  )
}

export default MobileNav
