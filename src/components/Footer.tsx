import { Button } from "@/components/ui/button";
import bidRiskyIcon from "@/assets/bidrisky-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-card border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Brand and social */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={bidRiskyIcon} 
              alt="BidRisky Game" 
              className="h-10 w-10"
            />
            <div className="text-lg font-bold text-foreground">BidRisky</div>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            {[
              { icon: "🎮", label: "Discord" },
              { icon: "🐦", label: "Twitter" },
              { icon: "📺", label: "YouTube" }
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

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 text-center">
          <div className="text-muted-foreground text-sm">
            © 2025 BidRisky Game. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;