import { useParams } from 'react-router-dom';
import { mockGames } from '../../utils/mockGames';

export default function GameDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const game = mockGames.find(game => game.slug === slug);

  if (!game) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-retro-pink font-mono text-xl">GAME NOT FOUND</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="relative rounded-lg overflow-hidden border-2 border-retro-cyan/20">
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-retro-dark/90 to-transparent p-4">
            <h1 className="text-retro-cyan font-mono text-3xl md:text-4xl font-bold">
              {game.title.toUpperCase()}
            </h1>
            <p className="text-retro-purple/80">{game.developer}</p>
          </div>
        </div>

        <div className="bg-retro-gray/50 p-6 rounded-lg border border-retro-purple/30">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-retro-yellow font-mono text-xl mb-2">RELEASE DETAILS</h2>
              <p className="text-retro-cyan">Year: <span className="text-retro-pink">{game.releaseYear}</span></p>
              <p className="text-retro-cyan">Genre: <span className="text-retro-pink">{game.genre}</span></p>
            </div>
            <div className="text-2xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < game.rating ? 'text-retro-yellow' : 'text-retro-purple/30'}>
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-retro-cyan font-mono border-b border-retro-purple/30 pb-1 mb-2">
                DESCRIPTION
              </h3>
              <p className="text-retro-purple/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                rhoncus ut eleifend nibh porttitor.
              </p>
            </div>

            <div>
              <h3 className="text-retro-cyan font-mono border-b border-retro-purple/30 pb-1 mb-2">
                KEY FEATURES
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-retro-purple/80">
                <li>Open-world cyberpunk setting</li>
                <li>Character customization</li>
                <li>Branching narrative</li>
                <li>Real-time combat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-retro-gray/50 p-6 rounded-lg border border-retro-purple/30">
          <h2 className="text-retro-yellow font-mono text-xl mb-4 border-b border-retro-purple/30 pb-2">
            SYSTEM REQUIREMENTS
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-retro-cyan">OS:</p>
              <p className="text-retro-purple/80">Windows 10</p>
            </div>
            <div>
              <p className="text-retro-cyan">Processor:</p>
              <p className="text-retro-purple/80">Intel Core i7-6700</p>
            </div>
            <div>
              <p className="text-retro-cyan">Memory:</p>
              <p className="text-retro-purple/80">16 GB RAM</p>
            </div>
            <div>
              <p className="text-retro-cyan">Graphics:</p>
              <p className="text-retro-purple/80">NVIDIA GTX 1060</p>
            </div>
          </div>
        </div>

        <div className="bg-retro-gray/50 p-6 rounded-lg border border-retro-purple/30">
          <h2 className="text-retro-yellow font-mono text-xl mb-4 border-b border-retro-purple/30 pb-2">
            AVAILABLE ON
          </h2>
          <div className="flex flex-wrap gap-3">
            {['PlayStation 5', 'Xbox Series X', 'PC'].map(platform => (
              <span 
                key={platform} 
                className="bg-retro-dark/80 text-retro-cyan px-3 py-1 rounded text-sm border border-retro-purple/30"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className="mb-12">
        <h2 className="text-retro-yellow font-mono text-xl mb-4 border-b border-retro-purple/30 pb-2">
          MEDIA
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className="aspect-video bg-retro-gray/70 border border-retro-purple/30 rounded overflow-hidden cursor-pointer hover:border-retro-cyan transition-colors"
            >
              <img
                src={`https://via.placeholder.com/300x169/1a1a2e/${i % 2 === 0 ? '00ffff' : 'ff00ff'}?text=${game.title.split(' ').join('+')}+${i}`}
                alt={`Screenshot ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Similar Games */}
      <div>
        <h2 className="text-retro-yellow font-mono text-xl mb-4 border-b border-retro-purple/30 pb-2">
          SIMILAR GAMES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockGames
            .filter(g => g.id !== game.id)
            .slice(0, 4)
            .map(game => (
              <div 
                key={game.id}
                className="bg-retro-gray/50 border border-retro-purple/30 rounded-lg overflow-hidden hover:border-retro-cyan transition-colors"
              >
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-3">
                  <h3 className="text-retro-cyan font-mono text-sm truncate">
                    {game.title.toUpperCase()}
                  </h3>
                  <p className="text-retro-purple/80 text-xs">{game.genre}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}