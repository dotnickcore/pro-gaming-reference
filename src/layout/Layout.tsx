import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Logo from '../assets/pro-gaming-reference-full-logo-fixed.svg'

function Layout() {
  return (
    <div className="grid grid-areas-layout grid-cols-[250px_1fr] grid-rows-[60px_1fr] min-h-screen relative bg-retro-dark">
      {/* Navbar with glowing effect */}
      <div className="grid-in-navbar bg-retro-gray text-retro-cyan col-span-2 relative 
                    border-b border-retro-purple/50 shadow-[0_0_15px_rgba(157,0,255,0.3)]">
        <div className="absolute left-0 w-[250px] h-full flex items-center pl-4 border-r border-retro-purple">
          <img 
            src={Logo} 
            alt="Company Logo"
            className="h-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" 
          />
        </div>
        <NavBar />
      </div>

      {/* Sidebar with grid pattern */}
      <div className="grid-in-sidebar bg-retro-gray/80 h-[calc(100vh-60px)] overflow-y-auto
                     border-r border-retro-purple/30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNTcsIDAsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]">
        <SideBar />
      </div>

      {/* Main content with scanlines */}
      <div className="grid-in-main bg-retro-dark p-5 overflow-y-auto
                     bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMSIgZmlsbD0icmdiYSgwLCAyNTUsIDI1NSwgMC4wMykiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc2NhbmxpbmVzKSIvPjwvc3ZnPg==')]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout