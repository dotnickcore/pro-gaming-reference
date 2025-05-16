import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <div className={`relative z-10 flex items-center border-2 rounded-full 
                      ${isFocused ? 'border-retro-cyan shadow-[0_0_8px_rgba(0,255,255,0.3)]' : 'border-retro-purple/40'}
                      transition-all duration-300 bg-retro-gray/80 backdrop-blur-sm`}>
        {/* Search icon */}
        <div className="pl-3 pr-1 md:pl-4 md:pr-2 text-retro-purple">
          <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
          placeholder="SEARCH..."
          className="flex-1 py-2 md:py-3 px-1 md:px-2 bg-transparent outline-none text-retro-cyan placeholder-retro-purple/70 
                    font-mono tracking-wider text-xs md:text-sm uppercase"
        />

        {query && (
          <button 
            onClick={() => setQuery('')}
            className="px-2 md:px-3 text-retro-pink hover:text-retro-yellow transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar