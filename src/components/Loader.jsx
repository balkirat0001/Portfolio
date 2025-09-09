'use client'

import { useState, useEffect } from 'react'

export default function Loader({ onLoadingComplete }) {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [currentSpeed, setCurrentSpeed] = useState(1200) // Start slower

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Hola", lang: "Spanish" },
    { text: "Bonjour", lang: "French" },
    { text: "Hallo", lang: "German" },
    { text: "Ciao", lang: "Italian" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "Sat Sri Akal", lang: "Punjabi" },
    { text: "Привет", lang: "Russian" },
    { text: "你好", lang: "Chinese" },
    { text: "مرحبا", lang: "Arabic" }
  ]

  // Speed curve: starts at 1200ms, gradually decreases to 200ms (slower overall)
  const getSpeedForIndex = (index) => {
    const progress = index / (greetings.length - 1)
    // Gentler exponential curve for more gradual speed increase
    return Math.max(200, 1200 * Math.pow(1 - progress, 1.5))
  }

  useEffect(() => {
    let timeoutId

    const showNextGreeting = () => {
      setCurrentLanguageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length
        
        if (nextIndex === 0) {
          // Completed full cycle, hide loader with a bit more delay
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => {
              onLoadingComplete?.()
            }, 600)
          }, 800)
          return prevIndex
        }

        // Calculate speed for next transition
        const nextSpeed = getSpeedForIndex(nextIndex)
        setCurrentSpeed(nextSpeed)
        
        // Schedule next greeting with current speed
        timeoutId = setTimeout(showNextGreeting, nextSpeed)
        
        return nextIndex
      })
    }

    // Start the animation chain
    timeoutId = setTimeout(showNextGreeting, currentSpeed)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [greetings.length, onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Background Animation - matching your site's design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Greeting Text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span 
              key={currentLanguageIndex}
              className={`gradient-text animate-fade-in-scale animate-gradient-shift transition-all duration-300 ${
                currentSpeed < 400 ? 'animate-speed-pulse' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animationDuration: `${Math.max(0.6, currentSpeed / 1000)}s`,
                transform: `scale(${1 + (1200 - currentSpeed) / 6000})`
              }}
            >
              {greetings[currentLanguageIndex].text}
            </span>
          </h1>
          <p 
            className="text-gray-400 text-lg animate-fade-in-scale transition-all duration-300"
            style={{
              animationDuration: `${Math.max(0.6, currentSpeed / 1000)}s`,
              opacity: currentSpeed < 300 ? 0.8 : 1
            }}
          >
            {greetings[currentLanguageIndex].lang}
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div 
            className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-bounce animate-pulse-glow transition-all duration-300"
            style={{ 
              animationDuration: `${Math.max(0.4, currentSpeed / 1000)}s`,
              transform: `scale(${1 + (1200 - currentSpeed) / 3000})`
            }}
          ></div>
          <div 
            className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce animation-delay-200 animate-pulse-glow transition-all duration-300"
            style={{ 
              animationDuration: `${Math.max(0.4, currentSpeed / 1000)}s`,
              transform: `scale(${1 + (1200 - currentSpeed) / 3000})`
            }}
          ></div>
          <div 
            className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-bounce animation-delay-400 animate-pulse-glow transition-all duration-300"
            style={{ 
              animationDuration: `${Math.max(0.4, currentSpeed / 1000)}s`,
              transform: `scale(${1 + (1200 - currentSpeed) / 3000})`
            }}
          ></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full transition-all ease-out"
            style={{ 
              width: `${((currentLanguageIndex + 1) / greetings.length) * 100}%`,
              transitionDuration: `${currentSpeed}ms`
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50"></div>
        </div>

        {/* Speed Indicator */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm">
            Loading Portfolio...
          </p>
          <div className="flex justify-center items-center mt-2 space-x-1">
            {Array.from({ length: Math.max(1, Math.floor((1200 - currentSpeed) / 150)) }).map((_, i) => (
              <div 
                key={i}
                className="w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 150}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}
