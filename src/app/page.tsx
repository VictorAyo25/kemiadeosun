import Hero from "@/components/Hero";
import AboutSection, { OutsideWorkSection } from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import VenturesSection from "@/components/VenturesSection";
import ConnectSection from "@/components/ConnectSection";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <AboutSection />
        <VenturesSection />
        <JourneySection />
        <OutsideWorkSection />
      </main>
      <ConnectSection />
    </>
  );
}
