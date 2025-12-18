"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrow90DegRight, BsArrowRight } from "react-icons/bs";
import ParticlesHero from "../Hero/PaticelBackground";

const Hero = () => {
  return (
    <section id="home">
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">

        <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        
        <Image 
        src="/images/my.png"
        alt="hero image"
        width={120}
        height={120}
        className="rounded-full border-2 border-cyan-300 shadow-lg 
        shadow-cyan-300/20 object-cover"

        data-aos="fade-up"
      />


        <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          creating web Applications  <br />
          brands,{" "}
          <span className="text-cyan-200">and experiences.</span>
        </h1>

        <h2 data-aos="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I'm Tharindu — A Passionate{" "}
          <span className="text-cyan-200 font-bold pl-2">
            <Typewriter
              options={{
                strings: [
                  "frontend developer",
                  "backend developer",
                  "fullstack developer",
                  "designer",
                  "tech enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
            </h2>
          <a href="#projects">
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900
            text-white font-semibold rounded-xl flex items-center 
             gap-2 transition-all duration-300 group"
          >
          <span>See my work</span>
           <BsArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
          </button>
          </a>


      
      </div>
    </div>
    </section>
  );
};

export default Hero;

