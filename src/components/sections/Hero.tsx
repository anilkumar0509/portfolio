
import { Github, Linkedin, Mail, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
        <div className="space-y-6">
          {/* Avatar */}
          <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-red-400 p-1 galaxy-glow">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="photo.jpg" 
                alt="Bhumireddy Venkata Anil Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Bhumireddy Venkata Anil Kumar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Aspiring SDE | Passionate About DSA, Web, and AI
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Open to SDE roles | Always learning something new
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/anilkumar0509"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group galaxy-glow-hover"
          >
            <Github size={24} className="text-blue-400 group-hover:text-blue-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/venkata-anil-kumar-bhumireddy-948415334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group galaxy-glow-hover"
          >
            <Linkedin size={24} className="text-blue-400 group-hover:text-blue-300" />
          </a>
          <a
            href="https://leetcode.com/anilkumarbhumireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-red-400/30 hover:border-red-400 hover:bg-red-500/10 transition-all duration-300 group galaxy-glow-hover"
          >
            <Trophy size={24} className="text-red-400 group-hover:text-red-300" />
          </a>
          <a
            href="mailto:bhumireddyvenkataanilkumar@gmail.com"
            className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-purple-400/30 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 group galaxy-glow-hover"
          >
            <Mail size={24} className="text-purple-400 group-hover:text-purple-300" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full hover:from-blue-500 hover:to-red-500 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 galaxy-glow"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;