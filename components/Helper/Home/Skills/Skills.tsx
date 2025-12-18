"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const skillData = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 89 },
  { name: "React.js", icon: <SiReact />, percentage: 92 },
  { name: "Next.js", icon: <SiNextdotjs />, percentage: 90 },
  { name: "Node.js", icon: <SiNodedotjs />, percentage: 78 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 94 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 75 },
];

const Skills = () => {
  return (
    <section id="skills">
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-cyan-300">Technical</span> Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16"
         
          >
        {skillData.map((skill,i) => (
          <Tilt
            key={skill.name}
            scale={1.05}
            transitionSpeed={400}
            className="w-40 h-48"
          >
            <div className="bg-[#14134145] text-center 
              w-40 h-48 rounded-3xl flex flex-col items-center
              justify-around hover:scale-105 transition-all duration-300"
              data-aos="flip-right" 
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 100}>
                
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="text-2xl font-semibold">{skill.percentage}%</p>
              <p className="text-purple-400 mt-1">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
