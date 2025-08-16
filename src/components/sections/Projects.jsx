import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">Movies Mania</h3>
              <p className="text-gray-400 mb-4">
                The Movie Search Engine is a responsive Vite + React app that
                lets users browse trending movies, search titles, and manage a
                personalized favorites list. Powered by TMDb API for real-time
                data, it includes features like modal-based details, pagination,
                and localStorage persistence. State is managed globally with
                React Context API, ensuring favorites remain intact across
                sessions. The project focuses on clean UI/UX, responsiveness
                across devices, and a modular, maintainable code structure.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "ReactJS",
                  "HTML/CSS",
                  "API Integration",
                  "Vercel Deployment",
                ].map((tech, id) => (
                  <span
                    key={id}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="https://movie-search-engine-82u9-peach.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Project
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
                <a
                  href="https://github.com/SaisasankGunji/Movie-Search-Engine"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">Expenses Tracker</h3>
              <h4 className="text-md font-bold my-2">
                Led the frontend development
              </h4>
              <p className="text-gray-400 mb-4">
                The Expenses Tracker is a responsive MERN-based financial
                management app built with React (Vite) and Tailwind CSS. It lets
                users securely register, log in, and manage income/expenses with
                features like category management, date/type filtering, and an
                interactive Chart.js dashboard. Powered by React Query for
                efficient API handling and JWT authentication for protected
                routes, it delivers real-time updates, a clean modular UI, and
                clear financial insights.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "MongoDB",
                  "ExpressJS",
                  "Node.js",
                  "React Redux",
                  "Tailwind CSS",
                  "Vercel Deployment",
                ].map((tech, id) => (
                  <span
                    key={id}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="https://production-repo-expenses-tracker.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Project
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
                <a
                  href="https://github.com/SaisasankGunji/MERN-ExpensesTracker"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">Task Master</h3>
              <p className="text-gray-400 mb-4">
                TaskMaster is a full-stack task management web application I
                built using the MERN stack. It allows users to register, log in
                securely, and perform full CRUD operations (create, read,
                update, delete) on their personal task list. All tasks are
                user-specific and securely stored in MongoDB. Built a reusable
                AlertMessage component for async user feedback, decreasing
                frontend error confusion by 40%.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "MongoDB",
                  "Node.js",
                  "ExpressJS",
                  "Tailwind CSS",
                  "Vercel Deployment",
                ].map((tech, id) => (
                  <span
                    key={id}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="https://mern-todolist-lovat.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Project
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
                <a
                  href="https://github.com/SaisasankGunji/MERN-ExpensesTracker"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">Weather Application</h3>
              <p className="text-gray-400 mb-4">
                A responsive JavaScript-based Weather Application that fetches
                real-time weather data from the OpenWeatherMap API based on
                user-entered city names. Displays key weather details such as
                city name, humidity, temperature (in °C), sky condition, and an
                emoji-based weather representation for better visual appeal.
                Implements time-based dynamic backgrounds with morning and night
                themes for enhanced user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "HTML", "CSS", "API Integration"].map(
                  (tech, id) => (
                    <span
                      key={id}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="https://saisasankgunji.github.io/Weather-BrowserBased-App/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Project
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
                <a
                  href="https://github.com/SaisasankGunji/Weather-BrowserBased-App"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository
                  <span className="mx-2 font-extrabold">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
