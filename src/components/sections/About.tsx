
import { Code, Brain, Laptop } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, title: 'Competitive Programming', description: 'Problem solving & algorithms' },
    { icon: Brain, title: 'AI/ML', description: 'Machine learning & data science' },
    { icon: Laptop, title: 'Full-stack Development', description: 'Web & mobile applications' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate computer science student with a strong foundation in problem-solving 
              and software development. My journey in tech has been driven by curiosity and a 
              constant desire to learn and build meaningful solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's tackling complex algorithms, building web applications, or exploring 
              the latest in AI and machine learning, I'm always excited to take on new challenges 
              and push the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">Problem Solver</span>
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-400/30">Quick Learner</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">Team Player</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {interests.map((interest, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 galaxy-glow-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-lg border border-blue-400/30">
                    <interest.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
                    <p className="text-gray-400">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;