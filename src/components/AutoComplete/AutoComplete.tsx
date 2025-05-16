import { useEffect, useRef } from 'react';

type AutoCompleteProps = {
  suggestions: string[];
  query: string;
  onSelect: (suggestion: string) => void;
  visible: boolean;
};

export default function AutoComplete({ 
  suggestions, 
  query, 
  onSelect,
  visible 
}: AutoCompleteProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onSelect(query);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [query, onSelect]);

  if (!visible || !query || suggestions.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute z-20 mt-1 w-full bg-retro-gray/95 border-2 border-retro-cyan/30 rounded-lg 
                shadow-[0_0_15px_rgba(0,255,255,0.2)] backdrop-blur-sm overflow-hidden"
    >
      <ul className="py-1">
        {suggestions.map((suggestion, index) => (
          <li 
            key={index}
            onClick={() => onSelect(suggestion)}
            className="px-4 py-2 text-retro-cyan font-mono text-sm hover:bg-retro-purple/20 
                      cursor-pointer transition-colors flex items-center"
          >
            <span className="text-retro-pink mr-2">▸</span>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}