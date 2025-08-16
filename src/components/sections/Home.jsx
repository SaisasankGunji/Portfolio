import React from "react";
import RevealOnScroll from "./RevealOnScroll";
import profilePic from "../../assets/logo.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Resume from "../../assets/Resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[120vh] lg:min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-[40%_auto] lg:grid-cols-[35%_auto] gap-10 items-center mx-auto px-6 md:px-12 mt-20 lg:px-20 max-w-7xl">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-blue-500/50 shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span className="whitespace-nowrap">Sai Sasank</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I am an aspiring Software Development Engineer (SDE) and
              fourth-year Computer Science student with strong proficiency in
              Java, Python, JavaScript, and Data Structures & Algorithms.
              Skilled in building full-stack web applications using the MERN
              stack (MongoDB, Express.js, React, Node.js). Experienced in
              developing scalable applications and working collaboratively in
              team environments.
            </p>

            {/* Social Media Links - Updated to match component styling */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://github.com/SaisasankGunji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/30 py-2 px-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <FaGithub className="text-xl" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sai-sasank-gunji-9a4054288/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-500/30 py-2 px-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <FaLinkedin className="text-xl" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/Sai_sasank_Gunji/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 hover:text-orange-400 hover:border-orange-500/30 py-2 px-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(255,165,0,0.2)]"
              >
                <SiLeetcode className="text-xl" />
                <span className="hidden sm:inline">LeetCode</span>
              </a>

              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 hover:text-green-400 hover:border-green-500/30 py-2 px-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]"
              >
                <span>View Resume</span>
              </a>

              <a
                href={Resume}
                download="Resume"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 hover:text-yellow-400 hover:border-yellow-500/30 py-2 px-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(234,179,8,0.2)]"
              >
                <span>Download Resume</span>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium hover:bg-blue-500/10 hover:shadow-md hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
