import GameCard from "../../components/Card/GameCard";
import { mockGames } from "../../utils/mockGames";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-retro-cyan font-mono text-3xl mb-8 border-b border-retro-purple/30 pb-2">
        LATEST RELEASES
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockGames.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
}

export default Home