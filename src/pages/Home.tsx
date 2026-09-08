import React from "react";
import { motion } from "framer-motion";
import { CRTOverlay, BlinkingCursor, CRTText } from "@/components/Effects";

const skills = [
  { name: "OutSystems Reactive Web", level: 95 },
  { name: "OutSystems Mobile", level: 85 },
  { name: "OutSystems ODC", level: 80 },
  { name: "Service / Integration Studio", level: 90 },
  { name: "REST API Integrations", level: 88 },
  { name: "Data Modeling & Workflows", level: 92 },
  { name: "CSS / HTML / JavaScript", level: 85 }
];

const quests = [
  {
    year: "2019-2020",
    company: "TechNova Solutions",
    title: "Junior OutSystems Developer",
    desc: "Began the journey. Mastered basic web apps and CRUD operations. Defeated the spaghetti code monster in the legacy portal."
  },
  {
    year: "2020-2022",
    company: "Apex Global Dynamics",
    title: "Mid-Level OutSystems Developer",
    desc: "Leveled up to Reactive Web. Integrated 3rd party REST APIs for payment gateways. Reduced loading times by 40%."
  },
  {
    year: "2022-Present",
    company: "Nexus Enterprise Systems",
    title: "Senior OutSystems Developer",
    desc: "Leading architecture for enterprise-grade mobile and web applications. Mentoring junior devs. Migrating core systems to ODC."
  }
];

const projects = [
  {
    name: "FinFlow CRM",
    type: "Enterprise Reactive App",
    desc: "A massive financial tracking dashboard with complex role-based access and real-time chart integrations."
  },
  {
    name: "HealthSync Mobile",
    type: "Native Mobile App",
    desc: "Patient portal app allowing offline data sync, appointment scheduling, and secure messaging."
  },
  {
    name: "SupplyChain Automator",
    type: "Workflow Automation (ODC)",
    desc: "End-to-end supply chain tracking leveraging OutSystems Developer Cloud and heavy integration with SAP."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <CRTOverlay />

      <main className="max-w-4xl mx-auto px-6 py-12 relative z-10 space-y-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center border-b border-border pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="font-mono text-muted-foreground text-lg mb-4">
              {">"} SYSTEM_BOOT_SEQUENCE_INITIATED... OK
              <br />
              {">"} LOADING_CHARACTER_DATA... OK
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-mono tracking-tighter uppercase text-primary">
              <CRTText>N3O_DEV</CRTText>
            </h1>
            
            <div className="text-2xl md:text-3xl font-mono text-accent space-y-2">
              <p>CLASS: OUTSYSTEMS DEVELOPER</p>
              <p>LEVEL: 5 <span className="text-muted-foreground text-sm">(5 YRS EXP)</span></p>
              <p>STATUS: <span className="text-green-500">READY FOR QUESTS</span><BlinkingCursor /></p>
            </div>
            
            <div className="pt-8 flex gap-4 font-mono">
              <a href="#quests" className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-wider font-bold" data-testid="button-start-quests">
                [ START GAME ]
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-muted text-muted-foreground hover:bg-muted hover:text-foreground transition-colors uppercase tracking-wider font-bold" data-testid="button-options">
                [ OPTIONS ]
              </a>
            </div>
          </motion.div>
        </section>

        {/* STATS / SKILLS */}
        <section id="skills" className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-mono text-primary uppercase border-b-2 border-border pb-2 inline-block"
          >
            <CRTText>CHARACTER_STATS</CRTText>
          </motion.h2>
          
          <div className="grid gap-6">
            {skills.map((skill, i) => (
              <div key={skill.name} className="space-y-2" data-testid={`skill-bar-${i}`}>
                <div className="flex justify-between font-mono text-sm md:text-base">
                  <span className="text-foreground uppercase">{skill.name}</span>
                  <span className="text-accent">LVL {skill.level}</span>
                </div>
                <div className="h-4 w-full bg-secondary border border-border p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-primary relative"
                  >
                    {/* Retro health bar detail line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white/30" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-mono text-primary uppercase border-b-2 border-border pb-2 inline-block"
          >
            <CRTText>UNLOCKS_&_BADGES</CRTText>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 font-mono">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="border-2 border-accent bg-secondary p-6 relative overflow-hidden group"
              data-testid="badge-1"
            >
              <div className="absolute top-0 right-0 p-2 text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                ★
              </div>
              <h3 className="text-xl text-accent mb-2">Associate Reactive Dev</h3>
              <p className="text-muted-foreground text-sm">Official OutSystems Certification</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="border-2 border-primary bg-secondary p-6 relative overflow-hidden group"
              data-testid="badge-2"
            >
              <div className="absolute top-0 right-0 p-2 text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                ★
              </div>
              <h3 className="text-xl text-primary mb-2">Associate Traditional Dev</h3>
              <p className="text-muted-foreground text-sm">Official OutSystems Certification</p>
            </motion.div>
          </div>
        </section>

        {/* QUESTS / EXPERIENCE */}
        <section id="quests" className="space-y-8 relative">
          <div className="absolute left-[15px] top-20 bottom-0 w-[2px] bg-border z-0" />
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-mono text-primary uppercase border-b-2 border-border pb-2 inline-block"
          >
            <CRTText>QUEST_LOG</CRTText>
          </motion.h2>
          
          <div className="space-y-12 relative z-10 pl-12">
            {quests.map((quest, i) => (
              <motion.div 
                key={quest.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
                data-testid={`quest-${i}`}
              >
                <div className="absolute -left-[54px] top-1 w-6 h-6 border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent" />
                </div>
                
                <div className="font-mono text-sm text-accent mb-1">{quest.year}</div>
                <h3 className="text-2xl font-bold font-mono text-foreground uppercase">{quest.title}</h3>
                <h4 className="text-lg text-primary font-sans mb-3">{quest.company}</h4>
                <p className="text-muted-foreground font-sans text-lg leading-relaxed border-l border-border pl-4">
                  {quest.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS / DUNGEONS */}
        <section id="projects" className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-mono text-primary uppercase border-b-2 border-border pb-2 inline-block"
          >
            <CRTText>CLEARED_DUNGEONS</CRTText>
          </motion.h2>
          
          <div className="grid gap-6">
            {projects.map((proj, i) => (
              <motion.div 
                key={proj.name}
                whileHover={{ x: 10 }}
                className="border border-border bg-card p-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center hover:border-primary transition-colors cursor-pointer group"
                data-testid={`project-${i}`}
              >
                <div>
                  <h3 className="text-2xl font-mono text-foreground group-hover:text-primary transition-colors uppercase">{proj.name}</h3>
                  <div className="text-sm font-mono text-accent mb-2">[{proj.type}]</div>
                  <p className="text-muted-foreground font-sans">{proj.desc}</p>
                </div>
                <div className="font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ENTER {">"}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT / MENU */}
        <section id="contact" className="pb-32 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-mono text-primary uppercase border-b-2 border-border pb-2 inline-block"
          >
            <CRTText>COMMUNICATIONS</CRTText>
          </motion.h2>
          
          <div className="flex flex-col gap-4 font-mono text-xl max-w-sm">
            <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 border border-border hover:bg-primary hover:text-primary-foreground transition-colors group" data-testid="link-email">
              <span className="text-accent group-hover:text-primary-foreground">{">"}</span> EMAIL
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border hover:bg-primary hover:text-primary-foreground transition-colors group" data-testid="link-linkedin">
              <span className="text-accent group-hover:text-primary-foreground">{">"}</span> LINKEDIN
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border hover:bg-primary hover:text-primary-foreground transition-colors group" data-testid="link-github">
              <span className="text-accent group-hover:text-primary-foreground">{">"}</span> GITHUB
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
