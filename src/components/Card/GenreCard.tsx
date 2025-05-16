import { Link } from 'react-router-dom';

type GenreCardProps = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  popularTitles: string[];
};

export default function GenreCard({
  slug,
  name,
  description,
  icon,
  popularTitles
}: GenreCardProps) {
  return (
    <Link 
      to={`/genres/${slug}`}
      className="group block bg-retro-gray/50 hover:bg-retro-gray/70 border-2 border-retro-purple/20 hover:border-retro-cyan transition-all duration-300 rounded-lg overflow-hidden p-5"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="text-retro-cyan group-hover:text-retro-yellow font-mono text-xl mb-1">
            {name.toUpperCase()}
          </h3>
          <p className="text-retro-purple/80 text-sm mb-3">{description}</p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {popularTitles.map(title => (
              <span 
                key={title} 
                className="text-xs bg-retro-dark/80 text-retro-pink px-2 py-1 rounded"
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}