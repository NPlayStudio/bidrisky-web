import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  const plans = [
    {
      name: "Free Demo",
      price: "Free",
      description: "Try the game with limited rounds",
      features: [
        "5 auction rounds",
        "All core mechanics",
        "Single-player vs AI",
        "Tutorial walkthrough",
        "No time limits"
      ],
      cta: "Download Demo",
      variant: "bid" as const,
      popular: false
    },
    {
      name: "Full Game",
      price: "$19.99",
      description: "Complete Bidrisky experience",
      features: [
        "15 full auction rounds",
        "Multiplayer online mode",
        "Local hot-seat play",
        "All 50 masterpieces",
        "Advanced AI opponents",
        "Statistics tracking",
        "Achievement system"
      ],
      cta: "Buy Now",
      variant: "premium" as const,
      popular: true
    },
    {
      name: "Collector's Edition",
      price: "$29.99",
      description: "Ultimate art auction experience",
      features: [
        "Everything in Full Game",
        "Digital art gallery",
        "Artist biography cards",
        "Historical painting info",
        "Exclusive card backs",
        "Priority customer support",
        "Early access to updates"
      ],
      cta: "Get Collector's",
      variant: "golden" as const,
      popular: false
    }
  ];

  const platforms = [
    { name: "Steam", icon: "🎮", available: true },
    { name: "itch.io", icon: "🎯", available: true },
    { name: "App Store", icon: "📱", available: false },
    { name: "Google Play", icon: "🤖", available: false }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path into the world of strategic art auctions. From free demos to collector editions, 
            there's a perfect entry point for every art enthusiast and strategy gamer.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 shadow-card border transition-auction hover:shadow-auction transform hover:scale-105 ${
                plan.popular ? 'border-primary shadow-auction scale-105' : 'border-border/50'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-3">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* System requirements */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">System Requirements</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Minimum Requirements</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>OS:</strong> Windows 10 / macOS 10.14 / Ubuntu 18.04</li>
                <li><strong>Processor:</strong> Intel i3-6100 / AMD FX-6300</li>
                <li><strong>Memory:</strong> 4 GB RAM</li>
                <li><strong>Graphics:</strong> Intel HD 530 / AMD R7 240</li>
                <li><strong>Storage:</strong> 2 GB available space</li>
                <li><strong>Network:</strong> Broadband Internet (for multiplayer)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Recommended</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>OS:</strong> Windows 11 / macOS 12.0 / Ubuntu 20.04</li>
                <li><strong>Processor:</strong> Intel i5-8400 / AMD Ryzen 5 2600</li>
                <li><strong>Memory:</strong> 8 GB RAM</li>
                <li><strong>Graphics:</strong> NVIDIA GTX 1050 / AMD RX 560</li>
                <li><strong>Storage:</strong> 4 GB available space (SSD recommended)</li>
                <li><strong>Network:</strong> Stable broadband connection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Available platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Available On</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-auction ${
                  platform.available 
                    ? 'bg-card border-border/50 hover:border-primary hover:shadow-card' 
                    : 'bg-muted/50 border-muted text-muted-foreground opacity-60'
                }`}
              >
                <span className="text-2xl">{platform.icon}</span>
                <div>
                  <div className={`font-semibold ${platform.available ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {platform.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {platform.available ? 'Available Now' : 'Coming Soon'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Mobile versions for iOS and Android are in development. 
            Join our newsletter to be notified when they become available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;