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
  const [modal, setModal] = useState<Project | null>(null);

  const projects: Project[] = [
   
    {
      title: "CYLON GALLERIA by janith weerasinghe",
      category: "MERN Stack web project",
      image: "/images/image.png",
      description:
        "A MERN stack art gallery platform where artists can upload and users can buy artwork.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "TailwindCSS"],
      github: "https://github.com/Tharindu409/Art_Gallery",
      live: "https://art-gallery-three-mauve.vercel.app",
    },
    {
      title: "Campus-resource-management-Hub",
      category: "Full-Stack Web Application",
      image: "/images/smart-campus.png",
      description:
        "A comprehensive full-stack web application designed to streamline campus operations and enhance the student and staff experience.",
      technologies: ["React", "Vite", "JavaScript", "Java", "Spring Boot", "REST APIs", "tailwindCSS"],
      github: "https://github.com/Tharindu409/Campus-resource-management-Hub",
      live: "https://campus-management-hub.vercel.app/",
    },
    {
      title: "ERP and HR management system",
      category: "Full-Stack ERP System",
      image: "/images/real.png",
      description:
        "An ERP and HR management system for streamlining employee, department, attendance, leave, payroll, and reporting workflows.",
      technologies: ["React","TypeScript","ASP.NET Core","C#"],
      github: "https://github.com/Tharindu409/ERP-system",
      live: "https://erp-system-lb31.onrender.com",
    },
    {
      title: "Uni Connect Club and Event Management Sytem",
      category: "Full-Stack Web Application",
      image: "/images/uniconnect_image.png",
      description:
         "Uni Connect is a comprehensive club and event management system designed to streamline the organization and participation in university clubs and events.",
      technologies:  ["React", "Vite", "JavaScript", "REST APIs", "TailwindCSS", "Node.js", "Express", "MongoDB","jwt authentication"],
      github: "https://github.com/Tharindu409/UniConnect-Full-Stack-Application",
      live: "https://uniconnectwebapp.vercel.app/",
    },
     {
      title: "Zen habit tracker",
      category: "Mobile Application",
      image: "/images/zen_habi.png",
      description:
        "A mobile application built with Kotlin for tracking daily habits and building positive routines.",
      technologies:  ["Kotlin", "Android Studio", "SharedPreferences", "Material Design"],
      github: "https://github.com/Tharindu409/Zen-_Habit_Tracker",
      live: "#",
    },
    {
      title: "Fitness Master kotlin Mobile application",
      category: "Mobile Application",
      image: "/images/fitness.png",
      description:
         "user-friendly Android app developed in Kotlin. The app offers workout tracking, goal setting, and progress monitoring that follows the 60-30-10 color rule.",
      technologies:  ["Kotlin", "Android Studio"],
      github: "https://github.com/Tharindu409/Fitness-master-Kotlin-app",
      live: "#"},
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
      title: "Movie Planet MERN Stack web application",
      category: "Web Application",
      image: "/images/movie_planet.png",
      description:
         "A MERN stack web application for browsing and discovering movies with user reviews and ratings.",
      technologies:  ["Mern","TMDb API","GoogleLogin"],
      github: "https://github.com/Tharindu409/Movie-Planet",
      live: "https://movie-planet-gold.vercel.app"},
      
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)]" />

      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
           
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Recent <span className="text-cyan-300">Projects</span>
          </h1>
           
        </div>

        <div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          {projects.map((p, index) => (
            <motion.button
              key={p.title}
              type="button"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/30"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={() => setModal(p)}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#04111f] via-[#04111f]/25 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
                  {p.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </p>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h2 className="text-lg font-semibold text-white md:text-xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/65">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-sm text-cyan-200">
                  <span>View details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {modal && (
            <motion.div
              className="fixed inset-0 z-10000 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
            >
              <motion.div
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#071727] shadow-2xl"
                initial={{ scale: 0.92, y: 24 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 18 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-sm font-medium text-white transition hover:bg-black/55"
                  onClick={() => setModal(null)}
                  aria-label="Close project details"
                >
                  Close
                </button>

                <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-60 md:min-h-full">
                    <Image
                      src={modal.image}
                      alt={modal.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#071727] via-transparent to-transparent" />
                  </div>

                  <div className="space-y-5 p-6 sm:p-8">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">
                        {modal.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        {modal.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                        {modal.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                        Technologies
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {modal.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/85"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={modal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      >
                        GitHub
                      </a>

                      {modal.live && modal.live !== "#" && (
                        <a
                          href={modal.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}