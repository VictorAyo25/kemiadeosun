import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import VenturesSection from "@/components/VenturesSection";
import ConnectSection from "@/components/ConnectSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <JourneySection />
        <VenturesSection />
        <ConnectSection />
      </main>
      <SiteFooter />
    </>
  );
}
