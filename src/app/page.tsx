import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FeatureSection from "@/components/FeatureSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import OurService from "@/components/OurService";
import OurTeam from "@/components/OurTeam";
import PortfolioSection from "@/components/PortfolioSection";
import WhyToChooseUsSection from "@/components/WhyToChooseUs";
import FunfactSection from "@/components/FunfactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurService />
      <FeatureSection />
      <PortfolioSection />
      <FunfactSection/>
      <WhyToChooseUsSection />
      <OurTeam />
      <BlogSection />
      <ContactSection />
      <FooterSection/>
    </>
  );
}
