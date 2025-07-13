
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'Backend & DB',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB']
    },
    {
      title: 'Languages',
      icon: '💻',
      skills: ['C', 'Python', 'c++','JavaScript']
    },
    {
      title: 'Tools & Version Control',
      icon: '🔧',
      skills: ['Git']
    },
    {
      title: 'Data Structures & Algorithms',
      icon: '🧠',
      skills: ['Problem Solving', 'Algorithms', 'Competitive Programming']
    },
    {
      title: 'Areas of Interest',
      icon: '🚀',
      skills: ['Natural Language Processing (NLP)', 'Artificial Intelligence']
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 galaxy-glow-hover">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-blue-400">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
