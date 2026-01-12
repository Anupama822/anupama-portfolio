import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Skybase Innovations",
    role: "Full Stack Web Developer",
    period: "September 2022 - August 2025",
    location: "Pokhara",
    highlights: [
      "Led end-to-end development of multiple full-stack web applications, contributing to internal systems, client projects, and SaaS platforms",
      "Built scalable backend architectures using Laravel, with structured RESTful APIs and secure authentication mechanisms",
      "Developed modern frontend interfaces using Blade, Livewire, Next.js, Tailwind CSS, Alpine.js, and Svelte",
      "Designed and optimized relational databases using MySQL and PostgreSQL for performance and scalability",
      "Delivered over 15 client engagements, collaborating closely with stakeholders to translate business requirements into technical solutions",
      "Mentored junior developers and students by conducting training sessions on Laravel, HTML5, and Tailwind CSS",
      "Contributed to real-world SaaS platforms and management systems serving retail, hospitality, education, and service-based organizations",
    ],
  },
  {
    company: "Websoft Technology Nepal",
    role: "Full Stack Web Developer",
    period: "October 2021 - December 2021",
    location: "Pokhara",
    highlights: [
      "Designed and developed multiple client and internal web applications for management systems and e-commerce platforms",
      "Developed e-commerce platforms including Kalif Jewelry (custom CMS) and Alya Cosmetics (Malaysia-based platform)",
      "Built client-focused solutions for content management systems",
      "Collaborated with cross-functional teams to deliver high-quality web solutions",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">02.</span>
            <h2 className="text-3xl font-bold text-foreground">Where I've Worked</h2>
            <div className="glow-line flex-1 max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === index
                      ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary -mb-px md:mb-0 md:-ml-px"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-[400px]"
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experiences[activeTab].role}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-muted-foreground font-mono text-sm mb-6">
                {experiences[activeTab].period} • {experiences[activeTab].location}
              </p>

              <ul className="space-y-4">
                {experiences[activeTab].highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
