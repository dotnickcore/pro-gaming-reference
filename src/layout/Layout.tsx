import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Logo from '../assets/pro-gaming-reference-full-logo-fixed.svg'

function Layout() {
  return (
    <div className="flex flex-col md:grid md:grid-areas-layout md:grid-cols-[250px_1fr] md:grid-rows-[60px_1fr] min-h-screen relative bg-retro-dark">
      {/* Mobile menu button (hidden on desktop) */}
      <button className="md:hidden fixed top-4 right-4 z-50 text-retro-cyan p-2 bg-retro-gray/90 rounded-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Navbar - Mobile first then desktop */}
      <div className="md:grid-in-navbar bg-retro-gray text-retro-cyan md:col-span-2 relative border-b border-retro-purple/50">
        <div className="hidden md:absolute md:left-0 md:w-[250px] md:h-full md:flex md:items-center md:pl-4 md:border-r md:border-retro-purple">
          <img 
            src={Logo} 
            alt="Pro Gaming Reference Logo"
            className="h-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" 
          />
        </div>
        <NavBar />
      </div>

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:grid-in-sidebar md:block bg-retro-gray/80 h-[calc(100vh-60px)] overflow-y-auto border-r border-retro-purple/30">
        <SideBar />
      </div>

      {/* Mobile sidebar overlay (shown when menu button clicked) */}
      <div className="fixed inset-0 z-40 bg-retro-dark/90 backdrop-blur-sm md:hidden" id="mobile-sidebar">
        <div className="w-4/5 h-full bg-retro-gray/95 p-4 border-r border-retro-purple">
          <SideBar />
        </div>
      </div>

      {/* Main content */}
      <div className="md:grid-in-main bg-retro-dark p-4 md:p-5 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout