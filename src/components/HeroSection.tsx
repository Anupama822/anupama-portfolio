import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Briefcase, Code, Database, Layout } from "lucide-react";

const skills = [
  "Next.js", "Laravel", "Node.js", "PostgreSQL", "MySQL", "MongoDB", 
  "Svelte", "Tailwind CSS", "TypeScript", "Docker"
];

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Beautiful, responsive interfaces with React, Next.js & Svelte"
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Robust APIs & databases with Node.js, Laravel & PostgreSQL"
  },
  {
    icon: Code,
    title: "Full Stack Solutions",
    description: "End-to-end web applications from concept to deployment"
  },
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono mb-4 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          >
            Anupama Bajracharya
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            <span className="text-primary">4+ years of experience</span> building scalable web applications. 
            I turn ideas into exceptional digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="mailto:anupama.bajracharya822@gmail.com?subject=Hiring Inquiry"
              className="group px-8 py-4 bg-primary text-primary-foreground font-mono rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              <Briefcase size={20} />
              Hire Me
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>

            <a
              href="/Anupama_Bajracharya_Resume.pdf"
              download
              className="group px-6 py-4 bg-secondary text-secondary-foreground font-mono rounded-lg hover:bg-secondary/80 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 bg-secondary/50 rounded-full"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/anupama-bajracharya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 bg-secondary/50 rounded-full"
            >
              <Linkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-muted-foreground font-mono text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-mono text-sm rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* What I Can Do For You */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-center text-muted-foreground font-mono text-sm mb-8">What I can do for you</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                className="group p-6 bg-secondary/30 border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
