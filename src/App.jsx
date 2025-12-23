import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Network, 
  Database, 
  Code, 
  Terminal, 
  Activity, 
  Mountain, 
  Globe, 
  Download,
  ChevronDown,
  HeartPulse,
  Plane,
  Trophy,
  Users,
  Waves
} from 'lucide-react';

// --- Composants UI ---

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors[color] || colors.blue} backdrop-blur-sm`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// --- Données ---

const projects = [
  {
    title: "Architecture FPGA & UART VHDL",
    year: "2025",
    desc: "Conception et implémentation d'un module UART en VHDL pour communication série sur carte FPGA.",
    tags: ["VHDL", "FPGA", "Hardware"],
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    category: "Hardware"
  },
  {
    title: "Compilateur RAT",
    year: "2025",
    desc: "Création complète d'un compilateur pour le langage RAT : analyse lexicale, syntaxique et génération de code.",
    tags: ["OCaml", "Compilation", "Algorithmique"],
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    category: "Dev"
  },
  {
    title: "Infrastructure Réseau FAI",
    year: "2025",
    desc: "Simulation complète : site entreprise, VPN, et configuration d'un fournisseur d'accès internet.",
    tags: ["Réseau", "SysAdmin", "Sécurité"],
    icon: <Network className="w-6 h-6 text-blue-400" />,
    category: "Réseau"
  },
  {
    title: "Performance RMI vs Agent Mobile",
    year: "2025",
    desc: "Création d'un agent mobile et étude comparative des performances avec une architecture RMI classique.",
    tags: ["Java", "Systèmes Distribués"],
    icon: <Activity className="w-6 h-6 text-red-400" />,
    category: "Réseau"
  },
  {
    title: "Algorithmes de Routage Telecom",
    year: "2025",
    desc: "Simulation et analyse comparative de différents algorithmes de routage pour les réseaux de télécommunications.",
    tags: ["Matlab", "Algo", "Telecom"],
    icon: <Network className="w-6 h-6 text-cyan-400" />,
    category: "Réseau"
  },
  {
    title: "IA & Prédiction Sportive",
    year: "2023",
    desc: "Développement d'un modèle d'IA pour prédire les résultats de matchs de football.",
    tags: ["Python", "Machine Learning", "Data Science"],
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    category: "IA"
  },
  {
    title: "Étude du mouvement des planètes",
    year: "2023",
    desc: "Simulation numérique et étude physique des orbites planétaires.",
    tags: ["Mathématiques", "Physique", "Simulation"],
    icon: <Globe className="w-6 h-6 text-indigo-400" />,
    category: "IA"
  }
];

const experiences = [
  {
    role: "Stagiaire IA & Développement",
    company: "Secteur Bancaire",
    period: "2025",
    desc: "Création d'un prototype d'application de courtage bancaire intelligente incluant un chatbot conversationnel (LLM).",
    skills: ["Web", "Python", "n8n", "UX/UI"],
    type: "tech"
  },
  {
    role: "Freelance",
    company: "Missions Indépendantes",
    period: "2024",
    desc: "Développement d'automatisations sur n8n et Make, incluant l'écriture de scripts JavaScript pour manipuler les données et connecter des API.",
    skills: ["n8n", "Make", "JavaScript", "API REST"],
    type: "tech"
  },
  {
    role: "Sauveteur BNSSA",
    company: "Secourisme en Lac",
    period: "4 Saisons (2022-2025)",
    desc: "Surveillance, intervention d'urgence. Compétences acquises : travail d'équipe, haute responsabilité et gestion du stress.",
    skills: ["Leadership", "Sang-froid", "Travail d'équipe"],
    type: "job"
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  // Smooth scroll
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">
            MDC<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollTo('about')} className="hover:text-blue-400 transition-colors">À propos</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-blue-400 transition-colors">Projets</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-blue-400 transition-colors">Expérience</button>
            <button onClick={() => scrollTo('softskills')} className="hover:text-blue-400 transition-colors">Soft Skills</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
          </div>
          <a 
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-500 hover:text-white transition-all"
          >
            Me recruter
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge color="blue">Étudiant Ingénieur ENSEEIHT</Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6 tracking-tight leading-tight"
          >
            Mano Dinnat Creusier
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ingénieur en devenir. Je recherche un stage de 2e année (2 à 3 mois) en systèmes ou réseaux.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              Voir mes projets <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Télécharger CV
            </button>
          </motion.div>
        </div>
      </header>

      {/* Formation Only Grid */}
      <Section id="about">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code className="w-64 h-64" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Formation Académique
            </h3>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-blue-300">ENSEEIHT (N7)</h4>
                  <span className="text-sm font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">2023 - 2026</span>
                </div>
                <p className="text-white font-medium">Cycle d'ingénieur en Science du Numérique</p>
                <p className="text-slate-400 text-sm">Parcours Architecture, Systèmes et Réseaux.</p>
              </div>
              
              <div className="md:border-l border-slate-700 md:pl-8 space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-slate-300">Université de Toulouse</h4>
                  <span className="text-sm font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">2020 - 2023</span>
                </div>
                <p className="text-slate-200 font-medium">Double Licence Mathématiques & Informatique</p>
                <p className="text-slate-400 text-sm">Bases théoriques solides en algèbre, analyse et algorithmique avancée.</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-slate-900/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Mes Projets</h2>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
             {['All', 'Hardware', 'Dev', 'IA', 'Réseau'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeTab === cat.toLowerCase() 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.filter(p => activeTab === 'all' || p.category.toLowerCase() === activeTab).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col justify-between group cursor-default">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                        {project.icon}
                      </div>
                      <span className="text-xs font-mono text-slate-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Expériences Professionnelles</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2" />
                
                {/* Center dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-950 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 ${exp.type === 'tech' ? 'bg-blue-500' : 'bg-slate-500'}`}></div>

                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className={`transition-colors ${exp.type === 'tech' ? 'border-blue-500/20 hover:border-blue-500/50' : 'hover:border-slate-500/50'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <Badge color={exp.type === 'tech' ? "blue" : "red"}>{exp.period}</Badge>
                    </div>
                    <p className="text-slate-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-400 text-sm mb-4">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-semibold text-slate-500">#{skill}</span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SOFT SKILLS SECTION */}
      <Section id="softskills" className="bg-slate-900/30">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Soft Skills & Intérêts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Card className="hover:bg-emerald-900/10 hover:border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Sport & Activités</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Pratique intense et variée : Trail, Alpinisme, Musculation, Spéléologie.
            </p>
             <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Waves className="w-4 h-4 text-emerald-400" /> Diplôme PADI OpenWater
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Mountain className="w-4 h-4 text-emerald-400" /> GR20 en 4 jours
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                 <Activity className="w-4 h-4 text-emerald-400" /> Ultra Trail
              </li>
            </ul>
            <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-slate-300 font-medium flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" /> Index UTMB
              </span>
              <span className="text-emerald-400 font-bold text-xl">604</span>
            </div>
          </Card>

          <Card className="hover:bg-red-900/10 hover:border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Engagement</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Impliqué dans le secourisme et la solidarité.
            </p>
            <ul className="space-y-2">
               <li className="flex items-center gap-2 text-sm text-slate-300">
                <Users className="w-4 h-4 text-red-400" /> Diplômes PSE1 & BNSSA
              </li>
               <li className="flex items-center gap-2 text-sm text-slate-300">
                <HeartPulse className="w-4 h-4 text-red-400" /> + de 20 dons (sang/plasma)
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Activity className="w-4 h-4 text-red-400" /> Gestion de crise & Discipline
              </li>
            </ul>
          </Card>

          <Card className="hover:bg-indigo-900/10 hover:border-indigo-500/30">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Ouverture</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Voyages en autonomie (Islande, Sri Lanka, Indonésie).
            </p>
            <div className="space-y-3">
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <h4 className="text-white text-sm font-bold mb-1">Anglais</h4>
                <p className="text-xs text-slate-400">Pratique courante en contexte international.</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                 <h4 className="text-white text-sm font-bold mb-1">Adaptabilité</h4>
                <p className="text-xs text-slate-400">Capacité à s'intégrer rapidement dans de nouveaux environnements.</p>
              </div>
            </div>
          </Card>

        </div>
      </Section>

      {/* CTA / Contact Section */}
      <Section id="contact" className="pb-32">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-16 border border-blue-500/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à collaborer ?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Je suis disponible pour un stage de <span className="text-white font-bold">2 à 3 mois</span> à partir de Juin 2025.
            Mobile géographiquement et avide de défis techniques.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:manodinnatcreusier@gmail.com" className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
              <Mail className="w-5 h-5" />
              Me contacter
            </a>
            <a href="https://linkedin.com/in/mano-dinnat-7028662b2/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 border border-slate-700 transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/mano-dinnatcreusier" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 border border-slate-700 transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>© 2025 Mano Dinnat Creusier. Développé avec React & Tailwind.</p>
      </footer>
    </div>
  );
}