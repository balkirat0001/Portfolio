'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const roles = [
      'Software Developer',
      'Electronics and Communication Engineering student', 
      'Frontend Developer',
      'Backend Developer'
    ]
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(current => {
        if (isDeleting) {
          setTypingSpeed(75)
          return fullText.substring(0, current.length - 1)
        } else {
          setTypingSpeed(150)
          return fullText.substring(0, current.length + 1)
        }
      })

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            Hello, I&apos;m{' '}
            <span className="gradient-text">Balkirat Singh</span>.
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 text-gray-300 min-h-[3rem] flex items-center justify-center">
            <span>I&apos;m a </span>
            <span className="ml-2 text-white font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Electronics and Communication Engineering student at Thapar Institute of Engineering and Technology, 
            passionate about creating innovative web solutions and building scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            
            <a
              href="/resume final 2.pdf"
              download="Balkirat_Singh_Resume.pdf"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              Download Resume
            </a>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">3+</h3>
              <p className="text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">2</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
