import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center p-2">
                  <Image 
                    src="/profileimg.jpg" 
                    alt="Balkirat Singh" 
                    width={256}
                    height={256}
                    className="w-64 h-64 rounded-full object-cover border-4 border-gray-700"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent bg-gradient-to-br from-purple-500 to-blue-500 animate-spin-slow opacity-20"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m Balkirat Singh, a passionate Electronics and Communication Engineering student at Thapar Institute of Engineering and Technology
                with a strong foundation in both frontend and backend development. Currently pursuing my B.Tech 
                while building modern web applications using cutting-edge technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in web technologies and modern development practices, I specialize in creating scalable, 
                user-friendly applications that solve real-world problems. I have successfully completed internships 
                and developed several projects including MediConnect and EventCraft-Host that demonstrate my technical skills.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-white mb-2">Education</h4>
                  <p className="text-gray-300 text-sm">B.E Electronics and Communication Engineering</p>
                  <p className="text-gray-400 text-sm">2022 - 2026</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-white mb-2">Focus</h4>
                  <p className="text-gray-300 text-sm">Full Stack Development</p>
                  <p className="text-gray-400 text-sm">MERN Stack</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  '3+ Projects Completed',
                  '5+ Technologies Mastered', 
                  'Internship Experiences'
                ].map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 rounded-full border border-gray-700">
                    <span className="text-sm font-medium text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
