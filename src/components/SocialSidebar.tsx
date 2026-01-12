import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialSidebar = () => {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 left-8 hidden md:flex flex-col items-center gap-6 z-40"
      >
        <a
          href="https://github.com/Anupama822"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/anupama-bajracharya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:anupama.bajracharya822@gmail.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Mail size={22} />
        </a>
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 right-8 hidden md:flex flex-col items-center gap-6 z-40"
      >
        <a
          href="mailto:anupama.bajracharya822@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          anupama.bajracharya822@gmail.com
        </a>
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>
    </>
  );
};
