import { mockGenres } from '../../utils/mockGenres';
import GenreCard from '../../components/Card/GenreCard';

function Genres() {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-retro-cyan font-mono text-3xl mb-8 border-b border-retro-purple/30 pb-2">
          GENRES
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockGenres.map(genre => (
            <GenreCard key={genre.id} {...genre} />
          ))}
        </div>
      </div>
    );
}

export default Genres