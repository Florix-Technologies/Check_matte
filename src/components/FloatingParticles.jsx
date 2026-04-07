import { useEffect, useState } from 'react'

export default function FloatingParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 2
      }))
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bottom-0 text-2xl opacity-60 glimmer"
          style={{
            left: `${particle.left}%`,
            animation: `float-heart ${particle.duration}s linear ${particle.delay}s infinite`,
            '--duration': `${particle.duration}s`
          }}
        >
          ♥
        </div>
      ))}
    </div>
  )
}
