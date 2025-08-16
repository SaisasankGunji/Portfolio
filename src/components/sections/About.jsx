import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontendSkills = ["HTML/CSS", "JavaScript", "React", "TailwindCSS"];
  const backendSkills = ["Node.js", "ExpressJS", "MongoDB", "MySQL"];
  const programmingLanguages = ["Java", "Python", "C", "JavaScript"];
  const developerTools = ["Github", "VS Code", "Eclipse", "Git", "Vercel"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            {/* //*Skills section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, id) => (
                    <span
                      key={id}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, id) => (
                    <span
                      key={id}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, id) => (
                    <span
                      key={id}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {developerTools.map((tech, id) => (
                    <span
                      key={id}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* //*Education */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="relative">
                  <strong>B.Tech in Computer Science & Engineering</strong> -
                  Parul Institute of Engineering and Technology (2022-2026)
                  <span className="absolute right-0">
                    <strong> Grade: </strong>7.99
                  </span>
                </li>

                <li className="relative">
                  <strong>
                    12<sup>th</sup>, BIEAP (MPC: Mathematics, Physics,
                    Chemistry)
                  </strong>
                  - Narayana Junior College (2020-2022)
                  <span className="absolute right-0">
                    <strong> Percentage: </strong>95.2
                  </span>
                </li>

                <li className="relative">
                  <strong>
                    10<sup>th</sup>, BSEAP{" "}
                  </strong>{" "}
                  - Narayana E-Techno School (2019-2020)
                  <span className="absolute right-0">
                    <strong> Grade: </strong>10
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
