"use client";
import { Navlink } from '../../Constatnt';
import React, { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaBolt } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed w-full z-[10000] transition-all duration-200 ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'bg-transparent'} h-[12vh]`}>
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaBolt className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            THARINDU NADEESHAN
          </h1>
        </div>

        {/* Nav Links */}
        <div className='hidden lg:flex items-center space-x-10'>
          {Navlink.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.url)}
              className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          {/* CV button */}
          <button className="mt-4 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-300">
            <BiDownload className="w-4 h-4" />
            Download CV
          </button>

          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 cursor-pointer text-white lg:hidden'
          />
        </div>

      </div>
    </div>
  );
};

export default Nav;
