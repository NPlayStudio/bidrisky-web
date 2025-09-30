const PlatformsSection = () => {
  const platforms = [
    { 
      name: "Mac", 
      icon: "🍎", 
      available: true,
      downloadUrl: "/downloads/bidrisky-mac.dmg"
    },
    { 
      name: "iPhone", 
      icon: "📱", 
      available: true,
      downloadUrl: "https://testflight.apple.com/join/bidrisky"
    },
    { 
      name: "Android", 
      icon: "🤖", 
      available: true,
      downloadUrl: "/downloads/bidrisky-android.apk"
    },
    { 
      name: "Windows", 
      icon: "🪟", 
      available: false,
      downloadUrl: ""
    }
  ];

  const handlePlatformClick = (platform: typeof platforms[0]) => {
    if (!platform.available) return;
    
    if (platform.name === "iPhone") {
      window.open(platform.downloadUrl, '_blank');
    } else {
      // For Mac and Android, trigger download
      const link = document.createElement('a');
      link.href = platform.downloadUrl;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="download-section" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Available <span className="bg-gradient-primary bg-clip-text text-transparent">Platforms</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Play Bidrisky on your favorite device. Download now to start your art auction journey.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={platform.name}
              onClick={() => handlePlatformClick(platform)}
              className={`flex items-center gap-3 px-8 py-6 rounded-lg border transition-auction ${
                platform.available 
                  ? 'bg-card border-border/50 hover:border-primary hover:shadow-card cursor-pointer hover:scale-105' 
                  : 'bg-muted/50 border-muted text-muted-foreground opacity-60 cursor-not-allowed'
              }`}
            >
              <span className="text-3xl">{platform.icon}</span>
              <div>
                <div className={`font-semibold text-lg ${platform.available ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {platform.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {platform.available ? 'Available Now' : 'Coming Soon'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;