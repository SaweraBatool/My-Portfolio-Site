import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="flex items-center justify-center min-h-screen py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-5xl font-bold text-center mb-16 text-[#283432]">My Projects</h2>

        {/* Projects Grid: 2 Projects at the center */}
        <div className="flex justify-center gap-8">
          
          {/* Hackathon Project (Resume Builder) */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full max-w-[500px]">
            <h3 className="text-2xl font-semibold mb-4 text-[#283432]">Hackathon: Resume Builder</h3>
            <p className="text-[#283432E6] text-lg mb-4">
              A dynamic resume builder created during a hackathon, allowing users to create, customize, and download resumes with ease.
            </p>
            <h4 className="font-medium text-xl text-[#283432] mb-2">Key Milestones:</h4>
            <ul className="list-disc pl-6 space-y-2 text-[#283432E6]">
              <li>1. Structured the project using HTML, CSS, and JavaScript.</li>
              <li>2. Implemented input fields for user data collection.</li>
              <li>3. Created a dynamic resume layout using user data.</li>
              <li>4. Added resume preview and PDF download functionality.</li>
              <li>5. Finalized and deployed the project live.</li>
            </ul>
          </div>

          {/* Simple Calculator Project */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full max-w-[500px]">
            <h3 className="text-2xl font-semibold mb-4 text-[#283432]">Simple Calculator</h3>
            <p className="text-[#283432E6] text-lg mb-4">
              A simple calculator application built with JavaScript, performing basic arithmetic operations like addition, subtraction, multiplication, and division.
            </p>
            <h4 className="font-medium text-xl text-[#283432] mb-2">Key Milestones:</h4>
            <ul className="list-disc pl-6 space-y-2 text-[#283432E6]">
              <li>1. Designed the layout using HTML and styled it with CSS.</li>
              <li>2. Implemented arithmetic logic with JavaScript.</li>
              <li>3. Added functionality to clear input and display results.</li>
              <li>4. Tested for accuracy and resolved any bugs.</li>
              <li>5. Deployed the project on GitHub Pages for public access.</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
