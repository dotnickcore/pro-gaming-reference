import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./layout/Layout"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Platforms from "./pages/Listings/Platforms"
import Genres from "./pages/Listings/Genres"
import GenresDetails from "./pages/Genres/GenreDetails"
import PlatformsDetails from "./pages/Platforms/PlatformDetails"
import NotFound from "./pages/Errors/NotFound"
import GameDetails from "./pages/Games/GameDetails"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/games/:slug" element={<GameDetails />}/>
          <Route path="/platforms" element={<Platforms />}/>
          <Route path="/platforms/:slug" element={<PlatformsDetails />}/>
          <Route path="/genres" element={<Genres />}/>
          <Route path="/genres/:slug" element={<GenresDetails />}/>
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App
