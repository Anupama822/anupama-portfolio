import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-6 md:hidden">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anupama-bajracharya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anupama.bajracharya822@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-mono text-center">
            Designed & Built by Anupama Bajracharya
          </p>
          <p className="text-muted-foreground text-sm mt-0 font-mono text-center">
            All rights reserved. ©
          </p>
        </div>
      </div>
    </footer>
  );
};
