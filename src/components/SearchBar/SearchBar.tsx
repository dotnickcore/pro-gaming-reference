import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-xl">
      <div className={`relative z-10 flex items-center border-2 rounded-full 
                      ${isFocused ? 'border-retro-cyan shadow-[0_0_15px_rgba(0,255,255,0.4)]' : 'border-retro-purple/50'}
                      transition-all duration-300 bg-retro-gray/80 backdrop-blur-sm`}>
        <div className="pl-4 pr-2 text-retro-purple">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="ENTER SEARCH TERM..."
          className="flex-1 py-3 px-2 bg-transparent outline-none text-retro-cyan placeholder-retro-purple/70 
                    font-mono tracking-wider text-sm uppercase"
        />

        {query && (
          <button 
            onClick={() => setQuery('')}
            className="px-3 text-retro-pink hover:text-retro-yellow transition-colors"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className={`absolute bottom-0 left-0 h-0.5 bg-retro-cyan transition-all duration-500 
                      ${isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>

      <div className={`absolute -inset-1 rounded-full bg-retro-cyan blur-md opacity-0 transition-opacity 
                      ${isFocused ? 'opacity-20' : ''}`}></div>
    </div>
  );
};

export default SearchBar