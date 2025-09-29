import paintingsCollection from "@/assets/paintings-collection.jpg";

const GameOverview = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Art of <span className="bg-gradient-primary bg-clip-text text-transparent">Strategic Bidding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enter the world's most prestigious auction house where master paintings await discerning collectors. 
            Every bid is a calculated risk, every auction a battle of wits.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-auction">
              <img 
                src={paintingsCollection} 
                alt="Collection of famous paintings by master artists" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Floating info cards */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-card border border-border/50">
                <div className="text-sm text-muted-foreground">Starting Bidcoin</div>
                <div className="text-2xl font-bold text-accent">₿1000</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-card border border-border/50">
                <div className="text-sm text-muted-foreground">Knockout Score</div>
                <div className="text-2xl font-bold text-primary">55 Points</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-golden rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Game mission */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As an elite art collector, your goal is to acquire a complete collection of 10 paintings 
                from a single master artist - or accumulate the highest value portfolio when the final 
                gavel falls.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Paintings per artist</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg font-bold text-accent">5</div>
                  <div className="text-sm text-muted-foreground">Master artists</div>
                </div>
              </div>
            </div>

            {/* Master artists */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">The Masters</h3>
              
              <div className="space-y-4">
                {[
                  { name: "Leonardo da Vinci", specialty: "Renaissance Innovation", color: "text-amber-600" },
                  { name: "Peter Paul Rubens", specialty: "Baroque Grandeur", color: "text-red-600" },
                  { name: "Rembrandt van Rijn", specialty: "Dutch Golden Age", color: "text-orange-600" },
                  { name: "Francisco Goya", specialty: "Spanish Romanticism", color: "text-purple-600" },
                  { name: "Vincent van Gogh", specialty: "Post-Impressionist Genius", color: "text-blue-600" }
                ].map((artist, index) => (
                  <div key={artist.name} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className={`w-3 h-3 rounded-full ${artist.color.replace('text-', 'bg-')}`}></div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{artist.name}</div>
                      <div className="text-sm text-muted-foreground">{artist.specialty}</div>
                    </div>
                    <div className="text-sm font-medium text-primary">10 works</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Auction Rounds", value: "15", icon: "⚡" },
            { label: "Game Duration", value: "30-60min", icon: "⏱️" },
            { label: "Strategy Depth", value: "Expert", icon: "🧠" },
            { label: "Replayability", value: "Infinite", icon: "🔄" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-auction transition-auction">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameOverview;