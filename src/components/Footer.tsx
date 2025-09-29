import { Button } from "@/components/ui/button";
import bidRiskyIcon from "@/assets/bidrisky-icon.png";

const Footer = () => {
  const links = {
    game: [
      { name: "How to Play", href: "#how-to-play" },
      { name: "Download", href: "#download" },
      { name: "System Requirements", href: "#requirements" },
      { name: "FAQ", href: "#faq" }
    ],
    community: [
      { name: "Discord", href: "#discord" },
      { name: "Reddit", href: "#reddit" },
      { name: "Twitter", href: "#twitter" },
      { name: "YouTube", href: "#youtube" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Bug Reports", href: "#bugs" },
      { name: "Feature Requests", href: "#features" },
      { name: "Player Guide", href: "#guide" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "License", href: "#license" },
      { name: "Credits", href: "#credits" }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter signup */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16 text-center shadow-auction">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Stay Updated on Bidrisky
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Get notified about game updates, new features, tournament announcements, 
            and exclusive collector content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            />
            <Button variant="golden" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={bidRiskyIcon} 
                alt="BidRisky Game" 
                className="h-12 w-12"
              />
              <div>
                <div className="text-xl font-bold text-foreground">BidRisky</div>
                <div className="text-sm text-muted-foreground">Master the Art of Risky Bids</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The ultimate strategic auction game where art meets cunning. 
              Collect masterpieces, outsmart opponents, and build your legacy 
              in the world's most prestigious auction house.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: "🎮", label: "Discord" },
                { icon: "🐦", label: "Twitter" },
                { icon: "📺", label: "YouTube" },
                { icon: "📘", label: "Facebook" }
              ].map((social, index) => (
                <button 
                  key={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-auction"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([category, categoryLinks]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-foreground mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {categoryLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 BidRisky Game. All rights reserved. 
              Art auction mechanics patent pending.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for art lovers</span>
              <span>•</span>
              <span>Version 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;