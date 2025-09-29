import { useState } from "react";
import { Button } from "@/components/ui/button";
import gameDashboard from "@/assets/game-dashboard.jpg";

const HowToPlay = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Pre-Game Setup",
      icon: "🎲",
      description: "The art deck is shuffled and each player receives their starting collection",
      details: [
        "50 paintings are shuffled into a randomized deck",
        "Each player receives 10 mixed paintings (4 + 3 + 3 distribution)",
        "Every player starts with exactly 1000 Bidcoin",
        "Turn order is established: Player A → B → C → D → E"
      ],
      visual: "Setup phase with cards being dealt to 5 players around a virtual auction table"
    },
    {
      title: "Auction Flow",
      icon: "🔨",
      description: "Strategic sealed bidding with hidden information and calculated risks",
      details: [
        "Active trader selects 2 paintings from their collection for auction",
        "All players submit sealed bids using their Bidcoin",
        "Bids are revealed simultaneously - highest bid wins",
        "Winner pays their bid and receives the paintings",
        "Auction timer adds tension to each decision"
      ],
      visual: "Auction interface showing sealed bid cards transitioning to revealed bids"
    },
    {
      title: "Penalty Pots",
      icon: "⚠️",
      description: "Risk-reward mechanics that can make or break your strategy",
      details: [
        "Tied bids create penalty situations with shared losses",
        "Example: If D bids 300 alone, D wins and pays 300",
        "Example: If B and D both bid 150, they split 150 each (75 loss each)",
        "Pot distributions can dramatically shift the game balance",
        "Smart bidding avoids penalties while maximizing value"
      ],
      visual: "Penalty pot calculation showing split payments and risk scenarios"
    },
    {
      title: "Win Conditions",
      icon: "🏆",
      description: "Multiple paths to victory keep every game exciting until the end",
      details: [
        "Knockout Victory: Complete any artist collection (10 paintings = 55 points)",
        "Endgame Victory: Highest total score after 15 rounds",
        "Score calculation includes painting values and remaining Bidcoin",
        "Strategic depth: Go for knockout or play the long game?",
        "Every decision matters from first bid to final auction"
      ],
      visual: "Victory screen showing completed collection or highest score winner"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to <span className="bg-gradient-primary bg-clip-text text-transparent">Master the Auction</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn the elegant mechanics that make every game a unique strategic challenge. 
            From setup to victory, every element is designed for balanced, exciting gameplay.
          </p>
        </div>

        {/* Interactive step selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {steps.map((step, index) => (
            <Button
              key={index}
              variant={activeStep === index ? "auction" : "bid"}
              size="lg"
              onClick={() => setActiveStep(index)}
              className="flex items-center gap-3"
            >
              <span className="text-lg">{step.icon}</span>
              <span className="hidden sm:inline">{step.title}</span>
            </Button>
          ))}
        </div>

        {/* Active step content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-auction bg-card">
              <img 
                src={gameDashboard} 
                alt={`Game visualization: ${steps[activeStep].visual}`}
                className="w-full h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"></div>
              
              {/* Step indicator overlay */}
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                {activeStep + 1}
              </div>
              
              {/* Floating step icon */}
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-golden">
                {steps[activeStep].icon}
              </div>
            </div>
            
            {/* Decorative animation elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-golden rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-4xl">{steps[activeStep].icon}</span>
                {steps[activeStep].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Step details */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Mechanics:</h4>
              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex-1"
              >
                Previous Step
              </Button>
              <Button 
                variant="auction" 
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="flex-1"
              >
                Next Step
              </Button>
            </div>
          </div>
        </div>

        {/* Quick reference */}
        <div className="mt-20 bg-card rounded-2xl p-8 shadow-card border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Quick Reference</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold text-foreground mb-1">Objective</div>
              <div className="text-sm text-muted-foreground">Complete any artist collection for instant victory</div>
            </div>
            
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">⏱️</div>
              <div className="font-semibold text-foreground mb-1">Duration</div>
              <div className="text-sm text-muted-foreground">15 rounds, 30-60 minutes total</div>
            </div>
            
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">🧮</div>
              <div className="font-semibold text-foreground mb-1">Strategy</div>
              <div className="text-sm text-muted-foreground">Balance risk vs reward in every bid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;