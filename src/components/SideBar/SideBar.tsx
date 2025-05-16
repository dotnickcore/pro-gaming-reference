import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="p-4 space-y-6">
      <div className="mb-8">
        <h2 className="text-retro-cyan text-xl font-mono font-bold 
                      tracking-wider mb-4 border-b border-retro-purple/30 pb-2">
          MENU
        </h2>
        <nav className="space-y-2">
          {['DASHBOARD', 'GAMES', 'LEADERBOARDS', 'FORUMS'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block py-2 px-3 text-retro-cyan/80 hover:text-retro-yellow
                        hover:bg-retro-purple/20 rounded transition-all duration-200
                        border-l-2 border-transparent hover:border-retro-pink"
            >
              <span className="flex items-center gap-2">
                <span className="text-retro-pink">■</span> {item}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-12">
        <div className="h-0.5 bg-gradient-to-r from-retro-purple/0 via-retro-purple to-retro-purple/0"></div>
      </div>
    </div>
  );
}

export default SideBar