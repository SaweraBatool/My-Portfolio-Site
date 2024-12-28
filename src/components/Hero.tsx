import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left lg:bg-[10%] bg-cover relative"
      style={{
        backgroundImage: "url('/Profile Picture.jpg')",
        backgroundPosition: "30% 50%",
        backgroundSize: "27%",
      }}
    >
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-50"></div>
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] relative z-10 px-4">
        <div className="hidden lg:block"></div>
        <div className="text-center lg:text-left text-white flex justify-center items-center">
          <div className="space-y-4">
            <p className="text-2xl lg:text-xl" data-aos="fade-up">Hey there,</p>
            <p className="text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up">Welcome to My Portfolio</p>
            <p className="text-2xl lg:text-xl mb-4" data-aos="fade-up">I'm</p>
            <p className="text-4xl lg:text-5xl font-bold" data-aos="fade-up">Sawera Batool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
