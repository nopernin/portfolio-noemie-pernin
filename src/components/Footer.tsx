import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-sm">
          Fait avec <Heart className="h-4 w-4 text-accent fill-accent animate-glow-pulse" /> par Noémie Pernin
        </p>
        <p className="text-xs mt-2 opacity-70">
          © {new Date().getFullYear()} - Portfolio Game Developer & AI Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;