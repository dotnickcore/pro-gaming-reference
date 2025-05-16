import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="p-2 md:p-4 space-y-4 md:space-y-6">
      <div className="mb-4 md:mb-8">
        <h2 className="text-retro-cyan text-lg md:text-xl font-mono font-bold tracking-wider mb-2 md:mb-4 border-b border-retro-purple/30 pb-1 md:pb-2">
          MENU
        </h2>
        <nav className="space-y-1 md:space-y-2">
          {['DASHBOARD', 'GAMES', 'LEADERBOARDS', 'FORUMS'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block py-1 px-2 md:py-2 md:px-3 text-retro-cyan/80 hover:text-retro-yellow hover:bg-retro-purple/20 rounded transition-all duration-200 border-l-2 border-transparent hover:border-retro-pink text-sm md:text-base"
            >
              <span className="flex items-center gap-2">
                <span className="text-retro-pink text-xs md:text-sm">■</span> 
                {item}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideBar