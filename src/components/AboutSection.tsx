import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js",
  "Laravel",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Svelte",
  "Tailwind CSS",
  "Alpine.js",
  "TypeScript",
  "Git",
  "Docker",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Anupama, a Full Stack Developer based in{" "}
                <span className="text-primary">Pokhara, Nepal</span>. I enjoy creating things 
                that live on the internet, whether that be websites, applications, or anything in between.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I have over <span className="text-primary">4 years of experience</span> building 
                scalable web applications. My expertise spans the entire development lifecycle — from 
                designing robust backend architectures to crafting intuitive frontend interfaces.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I've had the privilege of working on diverse projects including{" "}
                <span className="text-primary">SaaS platforms</span>,{" "}
                <span className="text-primary">e-commerce solutions</span>, and management systems 
                serving retail, hospitality, education, and service-based organizations.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Here are some technologies I've been working with recently:
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-navy-light">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-8xl font-bold text-gradient">AB</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
