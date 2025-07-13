
import Navbar from '../components/Navbar';
import GalaxyBackground from '../components/GalaxyBackground';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import LeetCode from '../components/sections/LeetCode';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <GalaxyBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
