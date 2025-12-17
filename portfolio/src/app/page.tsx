import Image from "next/image";

import Navbar from './components/navbar';
import Hero from "./components/Hero";
import About from './components/about';
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
