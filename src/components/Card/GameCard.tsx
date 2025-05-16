import { Link } from 'react-router-dom';

type GameCardProps = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  releaseYear: number;
  genre: string;
  imageUrl: string;
  rating: number;
};

export default function GameCard({
  slug,
  title,
  developer,
  releaseYear,
  genre,
  imageUrl,
  rating
}: GameCardProps) {
  // Generate star rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span 
      key={i} 
      className={i < Math.floor(rating) ? 'text-retro-yellow' : 'text-retro-purple/30'}
    >
      ★
    </span>
  ));

  return (
    <Link 
      to={`/games/${slug}`}
      className="group block bg-retro-gray/50 hover:bg-retro-gray/70 border-2 border-retro-purple/20 hover:border-retro-cyan transition-all duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-retro-glow"
    >
      {/* Game Cover Image */}
      <div className="relative pt-[56.25%] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Release Year Badge */}
        <span className="absolute top-2 right-2 bg-retro-dark/90 text-retro-cyan text-xs font-mono px-2 py-1 rounded">
          {releaseYear}
        </span>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="text-retro-cyan group-hover:text-retro-yellow font-mono font-bold text-lg mb-1 transition-colors">
          {title.toUpperCase()}
        </h3>
        <p className="text-retro-purple/80 text-sm mb-2">{developer}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-retro-pink text-xs font-mono bg-retro-dark/80 px-2 py-1 rounded">
            {genre.toUpperCase()}
          </span>
          <div className="text-lg">{stars}</div>
        </div>
      </div>
    </Link>
  );
}