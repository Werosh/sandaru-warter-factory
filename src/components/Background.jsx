import React from "react";
import { useEffect, useState } from "react";

const Background = () => {
  const [bubbles, setBubbles] = useState([]);
  const [waves, setWaves] = useState(Array(3).fill(0));

  // Generate new bubble
  const createBubble = () => {
    const newBubble = {
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 4 + 3
    };
    setBubbles(prev => [...prev, newBubble]);

    // Remove bubble after animation
    setTimeout(() => {
      setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
    }, newBubble.duration * 1000);
  };

  // Generate bubbles periodically
  useEffect(() => {
    const interval = setInterval(createBubble, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate waves
  useEffect(() => {
    const interval = setInterval(() => {
      setWaves(prev => prev.map((_, i) => (Math.sin(Date.now() / 1000 + i) + 1) / 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-to-b from-blue-200 to-blue-500 overflow-hidden">
      {/* Waves */}
      {waves.map((wave, i) => (
        <div
          key={i}
          className="absolute bottom-0 w-full h-32 opacity-30"
          style={{
            transform: `translateY(${wave * 20}px)`,
            backgroundColor: `rgba(255, 255, 255, ${0.3 - i * 0.1})`,
            transition: 'transform 0.5s ease',
            bottom: `${i * 10}%`
          }}
        />
      ))}

      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `rise ${bubble.duration}s linear`,
          }}
        />
      ))}

      {/* Water droplets */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        {Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: '10px',
              animation: `droplet 3s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div> */}

      <style jsx>{`
        @keyframes rise {
          from {
            transform: translateY(100vh) scale(1);
          }
          to {
            transform: translateY(-100px) scale(0.5);
          }
        }
        
        @keyframes droplet {
          0% {
            transform: translateY(-10px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(10px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-10px) scale(1);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;