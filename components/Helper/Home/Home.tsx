"use client";
import React, { useEffect } from 'react'
import Hero from '../../Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from '../Home/Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import AboutPage from './About/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


 
const Home = () => {


useEffect(()=>{
  const initAOS = async()=>{
    await import('aos');
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom",
    });
  };
  initAOS();
},[]);


  return (
    <div className='overflow-hidden '>
      <Hero/>
      <AboutPage/>
      <Services/>
      <Resume/>
      <Projects/>
      <Skills/>
      <Contact/>


    </div>
  )
}

export default Home