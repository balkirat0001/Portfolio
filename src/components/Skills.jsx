export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML/CSS" },
        { name: "SQL" }
      ]
    },
    {
      title: "Technologies & Frameworks", 
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Tailwind CSS" },
        { name: "MongoDB" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git/GitHub" },
        { name: "VS Code" },
        { name: "Vercel" },
        { name: "AWS ( EC-2)" },
        { name: "Jira" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Team Collaboration" },
        { name: "Communication" },
        { name: "Leadership" },
        { name: "Adaptability" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build amazing digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white text-center group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group/skill">
                      <div className="relative bg-gray-800/40 px-4 py-3 rounded-xl border border-gray-600/40 hover:border-purple-400/60 transition-all duration-300 hover:bg-gray-700/50 hover:transform hover:scale-105 cursor-default">
                        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 hover:from-purple-500/5 hover:to-blue-500/5 rounded-xl transition-all duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Technologies */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Additional <span className="gradient-text">Expertise</span>
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                Other tools and technologies I leverage to deliver comprehensive solutions
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "REST APIs", "Redux", "Figma", "OAuth", "Linux", "AWS", 
                  "Netlify", "AutoCAD", "Arduino IDE", "Excel", "Power BI"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="group px-5 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-white rounded-full border border-gray-600/50 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 cursor-default hover:transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <span className="font-medium group-hover:text-purple-300 transition-colors duration-300">
                      {tech}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
