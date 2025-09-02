import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ClientsSection from "@/components/sections/clients-section";
import WorkSamplesSection from "@/components/sections/work-samples-section";
import WorkProcessSection from "@/components/sections/work-process-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <WorkSamplesSection />
        <WorkProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
