"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define a type for project objects
type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
};

export default function Projects() {
  const [modal, setModal] = useState<Project | null>(null); // Fix: state can be Project or null

  const projects: Project[] = [
    {
      title: "Ride Ready – Car Rental System",
      category: "Web Application",
      image: "/images/php1.png",
      description:
        "A complete modern car rental system with bookings, admin dashboard, vehicle management, and user authentication.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Tharindu409/Ride_Ready_car_rental",
      live: "#",
    },
    {
      title: "full-stack Java web application",
      category: "Web Application",
      image: "/images/cyber.png",
      description:
        "A full-stack Java web application built using Servlets and JSP, designed to provide a secure and modern online banking experience. The system allows users to register, log in, manage their accounts, and perform transactions such as money transfers and viewing transaction history.",
      technologies: ["Java", "MySQL", "TailwindCSS", "JWT"],
      github: "https://github.com/Tharindu409/Cybertrust-bank",
      live: "#",
    },
    {
      title: "CYLON GALLERIA by janith weerasinghe",
      category: "MERN Stack web project",
      image: "/images/image.png",
      description:
        "A MERN stack art gallery platform where artists can upload and users can buy artwork.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "TailwindCSS"],
      github: "https://github.com/Tharindu409/Art_Gallery",
      live: "#",
    },
  ];

  return (
    <section id="projects">
      <div className="pt-16 pb-20">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
          Recent <span className="text-cyan-300">Projects</span>
        </h1>

        {/* Cards Grid */}
        <div
          className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-3 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setModal(p)} // Now correctly typed
            >
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h2 className="text-lg md:text-xl text-white font-semibold mt-3">
                {p.title}
              </h2>
              <p className="text-white/70 text-sm md:text-base">{p.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modal && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#111] w-[90%] md:w-[600px] p-6 rounded-xl border border-white/20 relative z-[10001]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {/* Close button */}
                <button
                  className="absolute -top-4 -right-4 text-3xl text-white hover:text-cyan-300 z-[10002] bg-[#111] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                  onClick={() => setModal(null)}
                >
                  ✕
                </button>

                <Image
                  src={modal.image}
                  alt={modal.title}
                  width={600}
                  height={350}
                  className="rounded-lg"
                />

                <h2 className="text-2xl text-white font-bold mt-4">{modal.title}</h2>
                <p className="text-white/70 mt-3">{modal.description}</p>

                <h3 className="text-cyan-300 font-semibold mt-5">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {modal.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={modal.github}
                    target="_blank"
                    className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    🔗 GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
