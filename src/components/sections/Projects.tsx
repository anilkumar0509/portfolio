import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Weather GUI',
      description: 'A graphical user interface application that displays weather data for selected locations in a clean and interactive format.',
      techStack: ['Python', 'Tkinter', 'API'],
      githubUrl: 'https://github.com/anilkumar0509/weather_gui',
      liveUrl: null,
      image: 'weather.png'
    },
    {
      title: 'Image Resize & Compression',
      description: 'A utility for resizing and compressing images efficiently while maintaining quality, useful for optimizing media assets.',
      techStack: ['Python', 'Pillow'],
      githubUrl: 'https://github.com/anilkumar0509/resize-and-compression-of-an-image',
      liveUrl: null,
      image: 'image_compression.png'
    },
    {
      title: 'Navigation',
      description: 'A navigation system demonstrating pathfinding and grid movement, useful for robotics, path visualization, and algorithm learning.',
      techStack: ['Python', 'Algorithms'],
      githubUrl: 'https://github.com/anilkumar0509/navigation',
      liveUrl: 'https://navigation-gold.vercel.app/',
      image: 'navigation.png'
    },
    
    {
      title: 'Library Management System',
      description: 'A library management system that helps manage book inventories, issue tracking, and user management efficiently.',
      techStack: ['Python', 'SQLite', 'Tkinter'],
      githubUrl: 'https://github.com/anilkumar0509/Library-management-system',
      liveUrl: null,
      image: 'library.png'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group galaxy-glow-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg hover:from-blue-500 hover:to-red-500 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
