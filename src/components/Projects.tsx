import React from 'react';
import Heading from './Heading';
import Card from './Card';

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>

        </div>
      <h2 className="text-5xl font-bold text-center mb-8">My Projects</h2>
      
      {/* Hackathon Project (Resume Builder) */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Hackathon: Resume Builder</h3>
        <p className="text-lg mb-6">
          A dynamic resume builder project created during a hackathon. This project allows users to create, customize, and download resumes easily.
        </p>
        <h4 className="font-medium text-xl mb-2">Key Milestones:</h4>
        <ul className="list-disc pl-6">
          <li className="mb-2">1. Setup project structure and basic styling using HTML, CSS, and JavaScript.</li>
          <li className="mb-2">2. Implemented input fields to collect user data.</li>
          <li className="mb-2">3. Created a dynamic resume layout using the data entered by the user.</li>
          <li className="mb-2">4. Added functionality to preview and download the resume in PDF format.</li>
          <li className="mb-2">5. Finalized project for deployment and made it live.</li>
        </ul>
      </div>

      {/* Simple Calculator Project */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Simple Calculator</h3>
        <p className="text-lg mb-6">
          A simple calculator application built using JavaScript. This project performs basic arithmetic operations like addition, subtraction, multiplication, and division.
        </p>
        <h4 className="font-medium text-xl mb-2">Key Milestones:</h4>
        <ul className="list-disc pl-6">
          <li className="mb-2">1. Designed the layout using HTML and styled the calculator using CSS.</li>
          <li className="mb-2">2. Implemented the logic for basic arithmetic operations (addition, subtraction, etc.) using JavaScript.</li>
          <li className="mb-2">3. Added functionality for clearing the input and showing results.</li>
          <li className="mb-2">4. Tested the application for bugs and ensured the calculations were accurate.</li>
          <li className="mb-2">5. Deployed the project to GitHub Pages for public access.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
