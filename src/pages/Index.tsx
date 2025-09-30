import HeroSection from "@/components/HeroSection";
import GameOverview from "@/components/GameOverview";
// import HowToPlay from "@/components/HowToPlay";
import PlatformsSection from "@/components/PlatformsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GameOverview />
      {/* <HowToPlay /> */}
      <PlatformsSection />
      <Footer />
    </div>
  );
};

export default Index;
