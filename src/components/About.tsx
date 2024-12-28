import React from 'react';

const About = () => {
  return (
    <div id="about" className="container mx-auto pt-16 sm:pt-24 md:pt-32 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
        Get To Know Me
      </h2>
      <p
        className="text-[#283432E6] text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left"
        data-aos="flip-down"
      >
        I am a student at GIAIC, pursuing a comprehensive course in Artificial Intelligence, Web 3.0, and the Metaverse.
        Passionate about technology, I am dedicated to building a strong foundation in these advanced fields and 
        continuously learning new skills to stay up-to-date with the latest innovations. I am eager to explore 
        the practical applications of AI in solving real-world problems, understand the decentralized nature of 
        Web 3.0, and dive into the immersive experiences offered by the Metaverse. My goal is to leverage my 
        knowledge to contribute meaningfully to the tech industry and shape the future of digital experiences.
      </p>
    </div>
  );
}

export default About;
