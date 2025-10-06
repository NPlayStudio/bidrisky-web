import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import heroImage from "@/assets/hero-auction-house.jpg";
import bidsBanner from "@/assets/bid_no_bg.png";
import { useState } from "react";


const HeroSection = () => {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const detectPlatform = () => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/windows phone/i.test(ua)) {
      return "Windows Phone";
    }
    if (/windows/i.test(ua)) {
      return "Windows";
    }
    if (/android/i.test(ua)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      return "iOS";
    }
    if (/Macintosh|Mac OS X/i.test(ua)) {
      return "macOS";
    }
    if (/Linux/i.test(ua)) {
      return "Linux";
    }
    return "Unknown";
  };

  const handlePlayClick = () => {
    const platform = detectPlatform();
    
    switch(platform) {
      case "iOS":
        window.open("https://testflight.apple.com/join/bidrisky", '_blank');
        break;
      case "Android":
        const androidLink = document.createElement('a');
        androidLink.href = "/downloads/bidrisky-android.apk";
        androidLink.download = '';
        document.body.appendChild(androidLink);
        androidLink.click();
        document.body.removeChild(androidLink);
        break;
      case "macOS":
        const macLink = document.createElement('a');
        macLink.href = "/downloads/bidrisky-mac.dmg";
        macLink.download = '';
        document.body.appendChild(macLink);
        macLink.click();
        document.body.removeChild(macLink);
        break;
      default:
        // For Windows, Linux, or Unknown, scroll to download section
        //const downloadSection = document.getElementById('download-section');
        //downloadSection?.scrollIntoView({ behavior: 'smooth' });
        setPopupMessage(
        `Coming soon for ${platform}. You can currently play on iOS, Android, and macOS.`
      );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Theme toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
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
            className="w-full h-full drop-shadow-2xl"
          />
        </div>
        
        {/* Main headline
        <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Master the Art of <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Risky Bids</span>
        </h1>*/}
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          A strategic multiplayer auction game where 5 players compete to collect masterpieces 
          from Da Vinci, Rembrandt, Van Gogh, Rubens, and Goya through thrilling sealed-bid auctions.
        </p>
        
        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-semibold text-lg mb-2">5 Traders</h3>
            <p className="text-muted-foreground text-sm"></p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-semibold text-lg mb-2">5 - 10 - 15 Rounds</h3>
            <p className="text-muted-foreground text-sm"></p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
            <div className="text-3xl mb-3">⏱</div>
            <h3 className="font-semibold text-lg mb-2">1-2 Hour Game</h3>
            <p className="text-muted-foreground text-sm"></p>
          </div>
        </div>
        
        {/* Call to action buttons */}
        <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="premium" 
            size="hero" 
            className="min-w-[200px]"
            onClick={handlePlayClick}
          >
            Play
          </Button>
        </div>
        
        {/* Quick stats */}
        {/*<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
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
        </div>*/}
      </div>
      {popupMessage && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm text-center">
      <h2 className="text-xl font-semibold mb-3">Notice</h2>
      <p className="text-gray-700 mb-4">{popupMessage}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => setPopupMessage(null)}
      >
        OK
      </button>
    </div>
  </div>
)}
       <br />
  <br />
  <br />
    </section>
     <br />
  <br />
  <br />
  );
};

export default HeroSection;
