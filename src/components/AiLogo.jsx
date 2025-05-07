const AiLogo = () => {
    return (
      <div className="flex items-center justify-center  w-fit rounded-full bg-gray-900">
      <div className="relative">
        {/* Spinning Outer Ring */}
        <svg
          className="w-12 h-12 animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#aiGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            className="animate-pulse stroke-glow"
          />
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* AI Text */}
        <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold tracking-wide drop-shadow-lg animate-fade-in">
          AI
        </span>

        {/* Soft Glowing Background */}
        <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-30 animate-glow"></div>
      </div>
    </div>
    );
  };
  
  export default AiLogo;