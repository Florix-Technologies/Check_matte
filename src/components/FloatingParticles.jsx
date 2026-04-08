import { useEffect, useState } from 'react'

export default function FloatingParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 7 + Math.random() * 5,
        delay: Math.random() * 3,
        symbol: i % 3 === 0 ? '♟' : '♥',
        size: i % 3 === 0 ? 'text-base' : 'text-lg',
        opacity: 0.15 + Math.random() * 0.25
      }))
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 9000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute bottom-0 ${particle.size} text-red-500`}
          style={{
            left: `${particle.left}%`,
            opacity: particle.opacity,
            animation: `float-heart ${particle.duration}s linear ${particle.delay}s infinite`,
          }}
        >
          {particle.symbol}
        </div>
      ))}
    </div>
  )
}