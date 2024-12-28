import React from 'react';
import { FaMailBulk } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-16 sm:pt-24 md:pt-32 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left mb-4">Let's Keep In Touch</h2>
          <p className="text-[#283432E6] text-base sm:text-lg text-center md:text-left">
            Feel free to reach out by filling out the form—whether you'd like to chat, call, or leave a message!
          </p> 
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <FaMailBulk size={24} className="text-[#283432]" />
              <span className="text-sm sm:text-base">sawerakiyani21@gmail.com</span>
            </div>
            <div className="flex gap-3 items-center">
              <BsFillTelephoneFill size={24} className="text-[#283432]" />
              <span className="text-sm sm:text-base">(+92) 343-276-0811</span>
            </div>
            <div className="flex gap-3 items-center">
              <IoLogoLinkedin size={24} className="text-[#283432]" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-500 transition duration-300 ease-in-out">
          LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg font-medium">Full Name:</label>
            <input 
              type="text" 
              id="name" 
              className="h-[50px] bg-transparent border border-[#283432] px-4 text-[#283432] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#283432]"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium">Email Address:</label>
            <input 
              type="email" 
              id="email" 
              className="h-[50px] bg-transparent border border-[#283432] px-4 text-[#283432] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#283432]"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="msg" className="text-lg font-medium">Message:</label>
            <textarea 
              id="msg" 
              rows={6} 
              className="bg-transparent border border-[#283432] px-4 py-2 text-[#283432] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#283432]"
              placeholder="Write your message here"
            />
          </div>
          <button className="bg-[#283432] text-white py-2 px-8 rounded-md hover:bg-[#1f2b2a] transition-all">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
