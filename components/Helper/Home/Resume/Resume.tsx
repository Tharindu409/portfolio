import React from 'react'
import { BsDatabase } from 'react-icons/bs'
import { FaCodepen, FaReact, FaUniversity, FaSchool } from 'react-icons/fa'
import { MdEngineering } from 'react-icons/md'
import { BiBadge } from 'react-icons/bi'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <section id='resume'>
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* Work Experience */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experiences</span>
          </h1>

          <div
            className="mt-10 flex flex-col items-start"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="Developed full-stack web applications using MERN stack with secure authentication and REST APIs."
            />

            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="Built responsive and modern UIs using React, Next.js, Tailwind CSS, and reusable components."
            />

            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              description="Designed efficient databases and backend logic using Node.js, Express, MongoDB, and SQL."
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div
            className="mt-10 flex flex-col items-start"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={FaUniversity}
              role="Sri Lanka Institute of Information Technology (SLIIT)"
              date="Oct 2023 – Present"
              description="Undergraduate student following a BSc in Information Technology."
            />

            <ResumeCard
              Icon={BiBadge}
              role="BSc in Information Technology"
              description="Specialized in Information Technology with strong focus on software development."
            />

            <ResumeCard
              Icon={MdEngineering}
              role="Advanced Level – Engineering Technology Stream"
              description="Completed A/L with emphasis on engineering concepts and problem solving."
            />

            <ResumeCard
              Icon={FaSchool}
              role="University of Ruhuna – Selection"
              description="Successfully selected for university admission based on academic performance."
            />

            <ResumeCard
              Icon={MdEngineering}
              role="BTEC Engineering Technology"
              description="Completed vocational training focused on engineering fundamentals and technical skills."
            />
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Resume
