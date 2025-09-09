export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Xebia",
      period: "Jun 2025 - July 2025",
      description: [
        "Developed a full-stack Event Management Platform enabling end-to-end event lifecycle handling.",
        "Implemented real-time features using Socket.IO for live updates and user communication.",
        "Built secure authentication with JWT & OAuth; integrated SendGrid for automated email alerts.",
        "Selected among the top 6 candidates to contribute to Xebia's Optimism Index site."
      ],
      technologies: ["React", "Node.js", "Socket.IO", "JWT", "OAuth", "SendGrid", "MongoDB", "Express"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="text-center md:text-left mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-purple-400 mb-1">{exp.company}</h4>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-center md:text-left">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2 justify-center md:justify-start">
                        <span className="text-purple-400 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
