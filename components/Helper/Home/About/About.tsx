"use client";

import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-300">Me</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Get to know more about who I am, my journey, and what drives me.
          </p>
        </div>

        {/* Content */}
        <div className="text-center">

          <h2 
            className="text-2xl font-semibold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I'm Tharindu 
          </h2>

          <p 
            className="text-gray-300 leading-relaxed mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I am a passionate Web and Mobile Developer and Undergraduate at SLIIT who enjoys
            building modern and user-friendly web and mobile applications. I am especially
            interested in full-stack development, where I can work on both the
            frontend and backend to create complete, real-world systems.
          </p>

          <p 
            className="text-gray-300 leading-relaxed mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Over time, I have worked on several projects including an Online
            Banking System and an Art Gallery platform and Smart Campus Hub. Through these projects,
            I have gained hands-on experience in authentication, API development,
            database design, and creating responsive user interfaces.
          </p>

          <p 
            className="text-gray-300 leading-relaxed mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I enjoy solving problems, learning new technologies, and improving
            my coding skills every day. I am also interested in writing clean,
            maintainable code and following best practices in software
            development.
          </p>

          <p 
            className="text-gray-300 leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            My goal is to become a skilled full-stack developer and contribute
            to building impactful and scalable applications in the future.
          </p>

          {/* Buttons */}
          <div 
            className="flex justify-center gap-4 flex-wrap"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="https://www.linkedin.com/tharindu-nadeeshan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
            >
              <BsLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/Tharindu409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-gray-400 hover:bg-white hover:text-black rounded-lg transition"
            >
              <BsGithub />
              GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}