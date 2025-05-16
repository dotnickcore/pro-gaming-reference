import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ServerError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-retro-dark p-4 text-center">
      {/* Pulsing 500 text */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <motion.h1 
          className="text-9xl font-bold text-retro-magenta font-mono relative z-10"
          animate={{ 
            textShadow: [
              '0 0 10px rgba(255, 0, 255, 0.7)',
              '0 0 20px rgba(255, 0, 255, 0.9)',
              '0 0 10px rgba(255, 0, 255, 0.7)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          500
        </motion.h1>
        <div className="absolute inset-0 bg-retro-magenta rounded-full blur-2xl opacity-20 -z-0"></div>
      </motion.div>

      {/* Error message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl text-retro-cyan font-mono mb-4">
          SERVER MELTDOWN
        </h2>
        <p className="text-retro-purple/80 max-w-md">
          Our systems are experiencing technical difficulties. The team has been notified.
        </p>
      </motion.div>

      {/* Animated action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex gap-4"
      >
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-retro-cyan text-retro-dark font-mono font-bold rounded-lg
                    hover:bg-retro-yellow transition-all duration-300
                    border-2 border-retro-cyan hover:border-retro-yellow
                    shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,204,0,0.4)]"
        >
          GO HOME
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="inline-block px-6 py-2 bg-retro-magenta/20 text-retro-cyan font-mono font-bold rounded-lg
                    hover:bg-retro-magenta/40 transition-all duration-300
                    border-2 border-retro-magenta/50 hover:border-retro-magenta
                    shadow-[0_0_10px_rgba(255,0,255,0.1)] hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]"
        >
          TRY AGAIN
        </button>
      </motion.div>

      {/* Glitch effect overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full h-0.5 bg-retro-magenta/10"
            style={{ top: `${Math.random() * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ServerError