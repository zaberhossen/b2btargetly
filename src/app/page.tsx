import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ClientsSection from "@/components/sections/clients-section";
import WorkProcessSection from "@/components/sections/work-process-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground relative">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary),0.3),rgba(255,255,255,0))] -z-10" />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <WorkProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
