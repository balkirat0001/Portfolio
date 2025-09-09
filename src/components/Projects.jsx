import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "MediConnect",
      description: "A comprehensive healthcare platform connecting patients with healthcare providers, featuring appointment scheduling, virtual consultations, and patient management system.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/balkirat0001/MediConnect",
      image: "/p3.png"
    },
    {
      title: "EventCraft-Host",
      description: "An event management platform that allows users to create, manage, and host events with features like ticket booking, attendee management, and real-time updates.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS", "Socket.io"],
      github: "https://github.com/balkirat0001/Eventcraft-Host",
      demo: "https://eventccraft.vercel.app/",
      image: "/p1.png"
    },
    {
      title: "Innovative Alcohol Detection System for Vehicles",
      description: "Engineered an IoT-based safety system preventing drunk driving through automated breath analysis. Programmed an Arduino microcontroller with an MQ-3 alcohol sensor for real-time detection. Integrated GPS/GSM modules for emergency location tracking and alert notifications.",
      technologies: ["Arduino", "IoT", "MQ-3 Sensor", "GPS", "GSM"],
      image: "/p2.png"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and dark theme to showcase my work and skills.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/balkirat0001/Portfolio",
      demo: "https://balkirat.vercel.app/",
      image: "/img4.png"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                      Project Screenshot
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {(project.github || project.demo) && (
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/balkirat0001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View All Projects on GitHub
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
