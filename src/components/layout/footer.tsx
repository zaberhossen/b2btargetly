import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex flex-col items-center space-y-6">
          <Logo />
          <p className="text-muted-foreground max-w-md">
            Where Data Turns Into Deals. We transform raw data into real business opportunities through lead generation, research, and digital solutions.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-muted-foreground">
            <a href="mailto:rabbibabu007@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              rabbibabu007@gmail.com
            </a>
            <a href="https://wa.me/8801767621444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +8801767621444 (WhatsApp)
            </a>
          </div>
          <div className="flex space-x-4">
            <Button asChild variant="outline" size="icon">
              <a href="https://www.linkedin.com/in/rabbi-hasan-23608321b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} b2btargetly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}