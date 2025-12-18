import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="service">
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaboration with brands <br />
        and agencies to create <br />
        impactful results
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">

        {/* UI & UX Design */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="UI & UX Design"
            description="Crafting intuitive, efficient, and enjoyable interfaces that provide users with a seamless digital experience."
          />
        </div>

        {/* Web & Mobile */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard
            icon="/images/s2.png"
            name="Web & Mobile"
            description="Developing responsive websites and mobile applications that are fast, scalable, and optimized for all devices."
          />
        </div>

        {/* Design & Creative */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServiceCard
            icon="/images/s3.png"
            name="Design & Creative"
            description="Creating visually striking designs and creative assets that effectively communicate brand messages and captivate audiences."
          />
        </div>

        {/* Development */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCard
            icon="/images/s4.png"
            name="Development"
            description="Building robust, high-quality software solutions using modern technologies and best coding practices."
          />
        </div>

      </div>
    </div>
    </section>
  );
};

export default Services;
