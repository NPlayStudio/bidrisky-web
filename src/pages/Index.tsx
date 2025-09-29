import HeroSection from "@/components/HeroSection";
import GameOverview from "@/components/GameOverview";
import HowToPlay from "@/components/HowToPlay";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GameOverview />
      <HowToPlay />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
