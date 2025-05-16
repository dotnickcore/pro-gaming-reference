import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-retro-dark p-4 text-center">
      {/* Glowing 404 text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <h1 className="text-9xl font-bold text-retro-pink font-mono relative z-10">
          404
        </h1>
        <div className="absolute inset-0 bg-retro-pink rounded-full blur-2xl opacity-20 -z-0"></div>
      </motion.div>

      {/* Error message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl text-retro-cyan font-mono mb-4">
          PAGE NOT FOUND
        </h2>
        <p className="text-retro-purple/80 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </motion.div>

      {/* Animated return button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-retro-cyan text-retro-dark font-mono font-bold rounded-lg
                    hover:bg-retro-yellow hover:text-retro-dark transition-all duration-300
                    border-2 border-retro-cyan hover:border-retro-yellow
                    shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,204,0,0.5)]"
        >
          RETURN TO SAFETY
        </Link>
      </motion.div>

      {/* CRT scanline effect */}
      <div className="fixed inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMSIgZmlsbD0icmdiYSgwLCAyNTUsIDI1NSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc2NhbmxpbmVzKSIvPjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
}

export default NotFound