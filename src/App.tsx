/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Download, 
  ChevronLeft,
  Menu,
  X,
  Send
} from 'lucide-react';
import { projects, experiences, skills, education } from './data';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Sobre mi' },
    { id: 'projects', label: 'Projectes' },
    { id: 'cv', label: 'Currículum' },
    { id: 'contact', label: 'Contacte' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Intersection Observer to update active nav link on scroll
  useEffect(() => {
    if (selectedProject) return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-bg-base text-ink selection:bg-accent selection:text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-bg-base/80 backdrop-blur-md border-b border-ink/10 z-50 px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => { 
          if (selectedProject) setSelectedProject(null);
          else scrollToSection('home');
        }}>
          <div className="w-9 h-9 bg-ink text-bg-base flex items-center justify-center font-display font-extrabold text-lg">
            QP
          </div>
          <span className="hidden md:block font-display font-extrabold text-xs tracking-widest uppercase">Quim Puigarnau</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (selectedProject) setSelectedProject(null);
                setTimeout(() => scrollToSection(item.id), 50);
              }}
              className={`nav-link font-display text-[11px] font-bold uppercase tracking-[0.2em] ${
                activeSection === item.id && !selectedProject ? 'active text-ink' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 bg-bg-base z-40 md:hidden flex flex-col items-center justify-center gap-10 text-2xl font-display font-extrabold border-b border-accent"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedProject(null);
                  setTimeout(() => scrollToSection(item.id), 50);
                }}
                className={`uppercase tracking-tighter ${activeSection === item.id ? 'text-accent' : 'text-ink'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="project-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="px-6 md:px-16 py-12 max-w-7xl mx-auto"
            >
              <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
            </motion.div>
          ) : (
            <div className="flex flex-col">
              <SectionWrapper id="home">
                <HomeSection onSeeProjects={() => scrollToSection('projects')} />
              </SectionWrapper>
              
              <SectionWrapper id="projects">
                <ProjectsSection onSelectProject={setSelectedProject} />
              </SectionWrapper>
              
              <SectionWrapper id="cv">
                <CVSection />
              </SectionWrapper>
              
              <SectionWrapper id="contact">
                <ContactSection />
              </SectionWrapper>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/5 py-16 px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-[10px] font-display font-bold uppercase tracking-widest text-slate-400">
        <div>© 2026 Quim Puigarnau. Product Design. Barcelona</div>
        <div className="flex gap-10">
          <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">LinkedIn <ArrowRight size={12} className="-rotate-45" /></a>
        </div>
      </footer>
    </div>
  );
}

function SectionWrapper({ children, id }: { children: React.ReactNode, id: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id={id} ref={ref} className={`min-h-[80vh] ${id === 'home' ? 'pt-12 pb-24' : 'py-24'} px-6 md:px-16 max-w-7xl mx-auto flex flex-col ${id === 'home' ? 'justify-start' : 'justify-center'} border-b border-ink/5 last:border-b-0`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

function HomeSection({ onSeeProjects }: { onSeeProjects: () => void }) {
  return (
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl leading-[0.85] tracking-tight">
            Product <br />
            Designer.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-md font-medium leading-relaxed">
            Dissenyant productes, sons i experiències amb una mirada conscient sobre la matèria i la funcionalitat. Entre la tècnica i l’estètica, explorant noves formes de donar significat als objectes.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 pt-4">
          <button 
            onClick={onSeeProjects}
            className="bg-ink text-bg-base px-10 py-4 hover:bg-accent transition-all flex items-center gap-4 font-extrabold text-[11px] uppercase tracking-[0.2em]"
          >
            Projectes <ArrowRight size={16} />
          </button>
          <button 
             onClick={() => {
               const el = document.getElementById('contact');
               if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
             }}
            className="border border-ink/20 px-10 py-4 hover:border-ink transition-all font-extrabold text-[11px] uppercase tracking-[0.2em]"
          >
            Contacte
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] bg-slate-100 border border-ink/10 overflow-hidden group">
          <img 
            src="/regenerated_image_1777453811978.png" 
            alt="Quim Puigarnau"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 font-display font-extrabold text-[9px] tracking-widest">
          ELISAVA • 2026
        </div>
      </div>
    </div>
  );
}

function ProjectsSection({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  return (
    <div className="space-y-24">
      <div className="flex items-baseline gap-6">
        <h2 className="text-6xl font-extrabold leading-none">PROJECTES</h2>
        <div className="h-[1px] flex-1 bg-ink/10"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-card group cursor-pointer"
            onClick={() => onSelectProject(project)}
          >
            <div className="relative aspect-square bg-slate-200 mb-8 overflow-hidden border border-ink/5">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="project-card-image w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-extrabold group-hover:text-accent transition-colors">{project.title}</h3>
                <span className="font-display font-bold text-[10px] opacity-30">0{idx + 1}</span>
              </div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">{project.category}</p>
              <div className="pt-4 flex items-center gap-2 font-display font-extrabold text-[9px] uppercase tracking-widest group-hover:gap-4 transition-all opacity-60">
                Veure detalls <ArrowRight size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }: { project: Project, onBack: () => void }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  return (
    <div className="space-y-32">
      <button 
        onClick={onBack}
        className="flex items-center gap-3 text-slate-400 hover:text-ink transition-colors font-display text-[10px] font-bold uppercase tracking-widest pt-4"
      >
        <ChevronLeft size={14} /> Projectes
      </button>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-12 lg:col-span-5 space-y-12 h-fit lg:pr-10"
        >
          <div className="space-y-6">
             <div className="h-1 w-8 bg-accent"></div>
             <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter">{project.title}</h1>
          </div>
          
          <div className="space-y-12">
            <p className="text-xl md:text-[28px] text-ink/90 leading-tight font-light">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-12 font-display text-[10px] font-bold uppercase tracking-[0.2em] pt-10 border-t border-ink/10">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400">Tipología</span>
                <span className="text-ink whitespace-nowrap">{project.category}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400">Curs</span>
                <span className="text-ink">{project.year}</span>
              </div>
              {project.validation && (
                <div className="flex flex-col gap-2">
                  <span className="text-slate-400">Validació</span>
                  <span className="text-ink whitespace-nowrap">{project.validation.join(' / ')}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

              <div className="md:col-span-12 lg:col-span-7 space-y-12">
          {project.renders.map((render, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="border border-ink/5 shadow-2xl shadow-ink/5 bg-slate-50 lg:w-[92%] ml-auto overflow-hidden"
            >
               <img 
                src={render} 
                className={`w-full h-auto opacity-95 hover:opacity-100 transition-all duration-700 ${project.id === 'materials-closca-ou' && i === 4 ? 'rotate-90 scale-[1.3] my-20' : ''}`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-slate-200/50 p-8 md:p-16 space-y-12">
        <h2 className="text-3xl font-extrabold italic tracking-tight">PROCESS & MAKING</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-4">
            {project.processTitle !== "" && (
              <h3 className="text-xl font-bold uppercase tracking-widest">
                {project.processTitle || "Validació del Prototip"}
              </h3>
            )}
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              {project.processDescription || "Utilitzant el taller d'Elisava per provar la resistència dels materials i l'ergonomia. Un procés iteratiu on l'anàlisi de la forma es tradueix en prototips funcionals."}
            </p>
            <div className="flex flex-wrap gap-3 font-display font-bold text-[9px] uppercase tracking-widest">
              {(project.validation || ['Impressió 3D', 'Mecanitzat', 'Maquetació']).map((tag, i) => (
                <div key={i} className="border border-ink/10 px-4 py-2">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-2 gap-6 items-start">
            {project.makingOf.map((img, i) => (
              <div key={i} className={`overflow-hidden bg-white border border-ink/5 shadow-sm ${img.includes('Captura.PNG') ? 'col-span-2' : ''}`}>
                <img 
                  src={img} 
                  className="w-full h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CVSection() {
  return (
    <div className="space-y-24">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-ink/10 pb-12 gap-8">
        <h2 className="text-8xl md:text-[9rem] font-extrabold leading-none tracking-tighter opacity-10">RESUME.</h2>
        <a 
          href="/CV%20-%20Quim%20Puigarnau%20(2026).pdf" 
          download="CV - Quim Puigarnau (2026).pdf"
          className="bg-ink text-bg-base px-10 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-accent transition-all mb-4 md:mb-0 inline-block text-center"
        >
          Curriculum PDF
        </a>
      </div>

      <div className="grid md:grid-cols-12 gap-20">
        <div className="md:col-span-8 space-y-20">
          <section className="space-y-12">
            <h3 className="text-2xl font-extrabold flex items-center gap-4">
              <span className="w-1 h-8 bg-accent"></span> EXPERIÈNCIA
            </h3>
            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-baseline font-display font-bold text-[10px] uppercase tracking-widest border-b border-ink/5 pb-2">
                    <span>{exp.company}</span>
                    <span className="text-slate-400">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-bold italic">{exp.role}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xl">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <h3 className="text-2xl font-extrabold flex items-center gap-4">
              <span className="w-1 h-8 bg-accent"></span> FORMACIÓ
            </h3>
            <div className="space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-baseline font-display font-bold text-[10px] uppercase tracking-widest border-b border-ink/5 pb-2">
                    <span>{edu.institution}</span>
                    <span className="text-slate-400">{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-bold italic">{edu.degree}</h4>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-4 space-y-6">
           {skills.map((skillGroup, i) => (
             <div key={i} className="p-10 border border-ink/10 space-y-8">
                <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent">{skillGroup.category}</h4>
                <div className="flex flex-col gap-3">
                  {skillGroup.items.map((skill, j) => (
                    <div key={j} className="text-[11px] font-bold uppercase tracking-widest flex items-center justify-between opacity-70">
                      {skill}
                    </div>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-24">
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-7xl md:text-8xl font-extrabold leading-[0.85] tracking-tight">LET'S <br /> CONNECT.</h2>
        </div>
        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
          Col·laboracions, consultoria o simplement un cafè per parlar de producte.
        </p>
        
        <div className="space-y-8 pt-8">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-10 h-10 border border-ink/10 flex items-center justify-center group-hover:border-accent transition-colors">
              <Mail size={18} className="text-slate-400 group-hover:text-accent" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Email</p>
              <p className="text-lg font-display font-bold">quim.puigarnau.ortin@gmail.com</p>
            </div>
          </div>
          <a 
            href="https://www.linkedin.com/jobs/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-6 group cursor-pointer"
          >
            <div className="w-10 h-10 border border-ink/10 flex items-center justify-center group-hover:border-accent transition-colors">
              <Linkedin size={18} className="text-slate-400 group-hover:text-accent" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">LinkedIn</p>
              <p className="text-lg font-display font-bold">/quim-puigarnau</p>
            </div>
          </a>
        </div>
      </div>

      <div className="border border-ink/20 p-10 bg-white/50 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Nom Complet</label>
              <input 
                required
                type="text" 
                className="w-full px-0 py-2 bg-transparent border-b border-ink/20 outline-none focus:border-accent transition-all font-display font-medium placeholder:text-slate-300"
                placeholder="Escriviu el vostre nom"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Correu Electrònic</label>
              <input 
                required
                type="email" 
                className="w-full px-0 py-2 bg-transparent border-b border-ink/20 outline-none focus:border-accent transition-all font-display font-medium placeholder:text-slate-300"
                placeholder="hola@exemple.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Com et puc ajudar?</label>
              <textarea 
                required
                rows={4}
                className="w-full px-0 py-2 bg-transparent border-b border-ink/20 outline-none focus:border-accent transition-all resize-none font-display font-medium placeholder:text-slate-300"
                placeholder="Detalls del projecte..."
              />
            </div>
          </div>
          <button 
            disabled={formState !== 'idle'}
            className="w-full bg-ink text-bg-base hover:bg-accent transition-all py-5 font-extrabold uppercase text-[10px] tracking-[0.3em] disabled:bg-slate-200"
          >
            {formState === 'idle' && "ENVIAR MISSATGE"}
            {formState === 'sending' && "ENVIANT..."}
            {formState === 'sent' && "REBUT!"}
          </button>
        </form>
      </div>
    </div>
  );
}

