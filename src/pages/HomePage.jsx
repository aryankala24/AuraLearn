import HeroSection from "../components/HeroSection";
import TechnologySection from "../components/TechnologySection";
import LearningProductsSection from "../components/LearningProductsSection";
import FeaturesSection from "../components/FeaturesSection";
import PartnersSection from "../components/PartnersSection";
import LatestArticlesSection from "../components/LatestArticlesSection";
import GetInTouch from "../components/GetinTouch";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LearningProductsSection />
      <TechnologySection />
      <FeaturesSection />
      <PartnersSection />
      <LatestArticlesSection />
      <GetInTouch />
    </>
  );
}
