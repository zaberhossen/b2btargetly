import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-muted-foreground">Where Data Turns Into Deals.</p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:rabbibabu007@gmail.com" className="hover:text-accent transition-colors">
                  rabbibabu007@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="https://wa.me/8801767621444" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +8801767621444 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/rabbi-hasan-23608321b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LeadSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
