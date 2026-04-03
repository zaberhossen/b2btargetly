import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Linkedin, Mail, MailCheck, Search } from "lucide-react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SectionWrapper from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  {
    title: "Google, Business Directories & Company Websites",
    description:
      "We collect verified company and decision-maker information from trusted public sources to build a strong research foundation.",
    icon: Search,
  },
  {
    title: "LinkedIn & LinkedIn Sales Navigator",
    description:
      "We identify the right professionals in your target market so your outreach reaches real buyers and decision-makers.",
    icon: Linkedin,
  },
  {
    title: "Premium Automation Tools",
    description:
      "We use Apollo, ZoomInfo, Crunchbase, and similar premium tools to streamline data collection and enrichment.",
    icon: Building2,
  },
  {
    title: "NeverBounce for Email Validation",
    description:
      "Every email is checked for deliverability so you receive verified, usable contact data.",
    icon: MailCheck,
  },
  {
    title: "Manual Research & Quality Check",
    description:
      "Our expert team reviews the final output to maximize data accuracy, relevance, and reliability.",
    icon: BadgeCheck,
  },
] as const;

const coreServices = [
  "B2B Lead Generation",
  "List Building",
  "Data Enrichment",
  "Data Scraping",
] as const;

export const metadata: Metadata = {
  title: "About - B2BTargetly",
  description:
    "Learn about B2BTargetly's lead generation, data enrichment, data scraping, and list building services led by Rabbi Hasan.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <div className="absolute left-0 top-0 -z-10 h-[720px] w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsla(var(--primary),0.28),rgba(255,255,255,0))]" />
      <Header />
      <main className="flex-1 pt-16">
        <SectionWrapper className="section-glow flex min-h-[calc(100dvh-4rem)] items-center border-b border-border/40 py-8 md:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-20 md:flex-row">
              <Card className="flex-1 max-w-[450px] scale-in overflow-hidden border-border/60 bg-card/75 shadow-[0_24px_80px_-40px_hsl(var(--primary))] backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3.7] overflow-hidden border-b border-border/50 bg-secondary/30 lg:aspect-square">
                    <Image
                      src="/rabbi_hasan.png"
                      alt="Rabbi Hasan"
                      fill
                      className="object-cover"
                      unoptimized
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background via-background/60 to-transparent" />
                  </div>
                  <div className="space-y-3 p-5 md:p-6">
                    <div className="space-y-1">
                      <p className="text-2xl font-semibold text-foreground">Rabbi Hasan</p>
                      <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Founder & CEO at B2BTargetly
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Rabbi Hasan leads B2BTargetly with a focus on building accurate, targeted,
                      decision-maker data that supports sales, outreach, and long-term business growth.
                    </p>
                    <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
                      <Button
                        asChild
                        variant="outline"
                        className="justify-start rounded-full border-border/70 bg-background/25 text-foreground hover:bg-background/45 hover:text-white! sm:flex-1"
                      >
                        <a href="mailto:rabbi@b2btargetly.com">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="truncate">rabbi@b2btargetly.com</span>
                        </a>
                      </Button>
                      <Button asChild className="rounded-full sm:flex-1">
                        <Link href="https://www.linkedin.com/in/rabbi-hasan-23608321b/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          Visit LinkedIn
                          <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="fade-in-up space-y-5 flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  About B2BTargetly
                </p>
                <div className="space-y-3">
                  <h1 className="max-w-3xl font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Our Lead Generation & Data Services
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-[1.03rem] md:leading-8">
                    We specialize in B2B lead generation, list building, data enrichment, and data
                    scraping using trusted sources and premium tools to ensure accuracy and quality.
                  </p>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-[1.03rem] md:leading-8">
                    With a systematic research and validation workflow, we deliver high-quality,
                    targeted data that helps businesses grow and connect with the right clients.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                    Core Services
                  </p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {coreServices.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/60 px-3.5 py-2.5 text-sm font-medium text-foreground/90"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="fade-in-up mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                How We Build Reliable B2B Data
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Our process combines premium tooling with human verification so the final dataset is
                accurate, relevant, and ready for outreach.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="fade-in-up h-full border-border/60 bg-card/60 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl leading-7">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground md:text-base">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-t border-border/40 pt-16 md:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="fade-in-up overflow-hidden border-border/60 bg-linear-to-br from-card to-secondary/30">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-2xl space-y-3">
                  <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    High-quality, targeted data that drives business growth
                  </h2>
                  <p className="text-base leading-7 text-muted-foreground md:text-lg">
                    If you need accurate company, contact, and decision-maker data for your next outreach
                    campaign, B2BTargetly can help you build it with confidence.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/#contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}