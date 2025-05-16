import SearchBar from "../SearchBar/SearchBar";
import Logo from '../../assets/pro-gaming-reference-full-logo-fixed.svg'

function NavBar() {
  return (
    <div className="h-16 md:h-full md:ml-[250px] flex items-center">
      {/* Mobile logo (hidden on desktop) */}
      <div className="md:hidden pl-4">
        <img 
          src={Logo} 
          alt="Logo"
          className="h-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" 
        />
      </div>
      
      <div className="flex-1 flex items-center justify-center md:justify-between px-2 md:px-4">
        <div className="w-full max-w-md">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default NavBar