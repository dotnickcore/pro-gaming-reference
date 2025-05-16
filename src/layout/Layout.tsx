import SideBar from '../components/SideBar/SideBar'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Logo from '../assets/pro-gaming-reference-full-logo-fixed.svg'
import { useState } from 'react';

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:grid md:grid-areas-layout md:grid-cols-[250px_1fr] md:grid-rows-[60px_1fr] min-h-screen bg-retro-dark">
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-retro-dark/90 backdrop-blur-sm md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="w-4/5 h-full bg-retro-gray/95 p-4 border-r border-retro-purple overflow-y-auto">
          <SideBar />
        </div>
      </div>

      <div className="md:grid-in-navbar bg-retro-gray text-retro-cyan md:col-span-2 relative border-b border-retro-purple/50">
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <Link to="/" className="active:scale-95 transform transition-transform z-10">
            <img 
              src={Logo} 
              alt="Home"
              className="h-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] hover:scale-105 transition-transform" 
            />
          </Link>
          <button 
            onClick={toggleMenu} 
            className="text-retro-cyan p-1"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
        
        {/* Desktop layout remains unchanged */}
        <div className="hidden md:absolute md:left-0 md:w-[250px] md:h-full md:flex md:items-center md:pl-4 md:border-r md:border-retro-purple">
          <Link to="/">
            <img src={Logo} alt="Home" className="h-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
          </Link>
        </div>
        <NavBar />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:grid-in-sidebar md:block bg-retro-gray/80 h-[calc(100vh-60px)] overflow-y-auto border-r border-retro-purple/30">
        <SideBar />
      </div>

      {/* Main Content */}
      <main className="md:grid-in-main bg-retro-dark p-4 md:p-5 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout