import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import OurService from "@/components/OurService";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurService/>
      <FeatureSection/>
      <BlogSection/>
      <ContactSection/>
    </>
  );
}
