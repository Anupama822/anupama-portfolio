import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Profile Image with ASCII/Dot Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-1 flex-shrink-0"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] lg:w-96 lg:h-[480px]">
              {/* Dotted overlay effect like Gazi's portfolio */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
                  backgroundSize: '4px 4px',
                }}
              />
              
              {/* Scanline effect */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.3) 2px,
                    rgba(0, 0, 0, 0.3) 4px
                  )`,
                }}
              />

              {/* Profile image */}
              <img
                src={profilePhoto}
                alt="Anupama Bajracharya"
                className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                style={{
                  filter: 'contrast(1.1) brightness(0.95)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
              />

              {/* Teal color overlay */}
              <div 
                className="absolute inset-0 bg-primary/20 mix-blend-color rounded-lg pointer-events-none"
              />

              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl -z-10 rounded-full" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl order-2 lg:order-2 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-mono mb-4 text-sm md:text-base"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3"
            >
              hi, <span className="text-primary">anupama</span> here.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              I'm a Full Stack Developer with <span className="text-primary">4+ years of experience</span> building 
              scalable web applications. Currently focused on creating exceptional digital experiences 
              with <span className="text-primary">Next.js</span>, <span className="text-primary">Node.js</span>, and{" "}
              <span className="text-primary">PostgreSQL</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="group px-6 py-3 bg-transparent border-2 border-primary text-primary font-mono rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                Say hi!
              </a>

              <a
                href="/Anupama_Bajracharya_Resume.pdf"
                download
                className="group px-6 py-3 bg-primary text-primary-foreground font-mono rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anupama-bajracharya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
