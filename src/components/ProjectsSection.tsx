import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "SaaS Management Platform",
    description:
      "A comprehensive SaaS solution designed to serve retail, hospitality, and education sectors. Built with scalable architecture handling thousands of daily transactions with real-time notifications via Firebase Cloud Messaging.",
    tech: ["Laravel", "Next.js", "PostgreSQL", "FCM", "Docker"],
    image: null,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with custom CMS for jewelry and cosmetics businesses. Includes product management, order processing, inventory tracking, and payment gateway integrations.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js", "Livewire"],
    image: null,
  },
  {
    title: "Enterprise Management System",
    description:
      "Internal business management system with RESTful APIs, secure authentication, role-based access control, and comprehensive reporting dashboards serving multiple client organizations.",
    tech: ["Laravel", "Svelte", "PostgreSQL", "Docker", "Redis"],
    image: null,
  },
];

const otherProjects = [
  {
    title: "Content Management System",
    description: "Custom CMS for managing digital content with user-friendly interfaces and robust backend.",
    tech: ["Laravel", "MySQL", "Blade"],
  },
  {
    title: "Notification Service",
    description: "Real-time notification system using Firebase Cloud Messaging for mobile and web platforms.",
    tech: ["Node.js", "FCM", "PostgreSQL"],
  },
  {
    title: "API Integration Hub",
    description: "Centralized API gateway for managing third-party integrations and background job processing.",
    tech: ["Laravel", "Redis", "Docker"],
  },
  {
    title: "Training Portal",
    description: "Educational platform for developer training on Laravel, HTML5, and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
  },
  {
    title: "Inventory Management",
    description: "Retail inventory system with real-time stock tracking and automated reorder notifications.",
    tech: ["Laravel", "MySQL", "Alpine.js"],
  },
  {
    title: "Client Dashboard",
    description: "Interactive dashboard for clients to track project progress and communicate with development teams.",
    tech: ["Svelte", "PostgreSQL", "REST API"],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-primary font-mono">03.</span>
            <h2 className="text-3xl font-bold text-foreground">Some Things I've Built</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-32 mb-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative grid md:grid-cols-12 items-center gap-4 ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image/Placeholder */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6 md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative group rounded-lg overflow-hidden">
                    <div className="aspect-video bg-navy-light">
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center">
                        <Folder className="w-16 h-16 text-primary/50" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 md:row-start-1 ${
                    index % 2 === 1 ? "md:col-start-1 md:order-1" : "md:col-start-6 md:order-2"
                  }`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="glass p-6 rounded-lg mb-4 relative z-10">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}>
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">
              Other Noteworthy Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="glass p-6 rounded-lg hover:translate-y-[-8px] transition-transform duration-300 group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
