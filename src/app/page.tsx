"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/skills"; 
import Footer from "@/components/Footer"; 

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <Projects />
      <Skills />  
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
