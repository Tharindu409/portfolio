"use client";
import React, { useState } from 'react' 
import Nav from '../Navbar/Nav'
import MobileNav from '../Navbar/MobileNav';

const ResponsiveNav = () => {

  const [showNav,setShowNav] = useState(false);

  const openNavHandler = () => {
    setShowNav(true);
  }
  const closeHandler = () => {
    setShowNav(false);
  }

  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <MobileNav showNav = {showNav} closeNav={closeHandler}/>
    </div>
  )
}

export default ResponsiveNav

