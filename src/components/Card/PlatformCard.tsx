import { Link } from 'react-router-dom';

type PlatformCardProps = {
  slug: string;
  name: string;
  manufacturer: string;
  releaseYear: number | null;
  logo: string;
  activeUsers: string;
};

export default function PlatformCard({
  slug,
  name,
  manufacturer,
  releaseYear,
  logo,
  activeUsers
}: PlatformCardProps) {
  return (
    <Link 
      to={`/platforms/${slug}`}
      className="group block bg-retro-gray/50 hover:bg-retro-gray/70 border-2 border-retro-purple/20 hover:border-retro-cyan transition-all duration-300 rounded-lg overflow-hidden p-4 text-center"
    >
      <div className="flex justify-center mb-3">
        <img 
          src={logo} 
          alt={name} 
          className="h-20 w-20 object-contain group-hover:scale-110 transition-transform"
        />
      </div>
      
      <h3 className="text-retro-cyan group-hover:text-retro-yellow font-mono text-xl mb-1">
        {name.toUpperCase()}
      </h3>
      <p className="text-retro-purple/80 text-sm mb-2">{manufacturer}</p>
      
      <div className="flex justify-between text-xs mt-4">
        <span className="bg-retro-dark/80 text-retro-pink px-2 py-1 rounded">
          {releaseYear ? `RELEASED ${releaseYear}` : 'ACTIVE PLATFORM'}
        </span>
        <span className="bg-retro-dark/80 text-retro-cyan px-2 py-1 rounded">
          {activeUsers}
        </span>
      </div>
    </Link>
  );
}