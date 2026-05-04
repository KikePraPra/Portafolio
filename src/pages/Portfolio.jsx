import React from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import ArtGallery from "../components/portfolio/ArtGallery";
import DevProjects from "../components/portfolio/DevProjects";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import { Toaster } from "../components/ui/sonner";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] h-[450px] w-[450px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-700/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-overlay grain-bg" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <ArtGallery />
          <DevProjects />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}