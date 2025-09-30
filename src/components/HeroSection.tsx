import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-auction-house.jpg";
import bidsBanner from "@/assets/bids-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant auction house interior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-golden rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={bidsBanner} 
            alt="BidRisky - Sealed Bids to Un-Sealed Bids" 
            className="mx-auto h-32 md:h-40 drop-shadow-2xl"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Master the Art of <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Risky Bids</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          A strategic multiplayer auction game where 5 players compete to collect masterpieces 
          from Da Vinci, Rembrandt, Van Gogh, Rubens, and Goya through thrilling sealed-bid auctions.
        </p>
        
        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-lg mb-2">50 Masterpieces</h3>
            <p className="text-muted-foreground text-sm">Collect paintings from 5 legendary artists</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-lg mb-2">Sealed Bidding</h3>
            <p className="text-muted-foreground text-sm">Strategic hidden bids with penalty pots</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-lg mb-2">Knockout Wins</h3>
            <p className="text-muted-foreground text-sm">Complete a collection for instant victory</p>
          </div>
        </div>
        
        {/* Call to action buttons */}
        <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="premium" 
            size="hero" 
            className="min-w-[200px]"
            onClick={() => {
              const downloadSection = document.getElementById('download-section');
              downloadSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Play
          </Button>
        </div>
        
        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Players</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">50</div>
            <div className="text-sm text-muted-foreground">Paintings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">15</div>
            <div className="text-sm text-muted-foreground">Rounds</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">30-60</div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;