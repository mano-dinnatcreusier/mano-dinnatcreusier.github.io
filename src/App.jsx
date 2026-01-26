import React, { useState } from 'react';
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
  Waves,
  Copy,
  Check,
  FileText, 
  Languages 
} from 'lucide-react';

// --- Traductions ---

const translations = {
  fr: {
    navAbout: "À propos",
    navProjects: "Projets",
    navExperience: "Expérience",
    navSoftSkills: "Soft Skills",
    navContact: "Contact",
    navBtn: "Me contacter",
    heroBadge: "Étudiant Ingénieur ENSEEIHT",
    heroTitle: "Mano Dinnat Creusier",
    heroDesc: "Ingénieur en devenir. Je recherche un stage de 2e année (2 mois) en systèmes ou réseaux, prolongeable par une alternance.",
    heroProjects: "Mes projets",
    heroCV: "Télécharger CV",
    cvUrl: "/cv.pdf", // Lien vers votre CV en français
    formationTitle: "Formation Académique",
    formationN7: "Cycle d'ingénieur en Science du Numérique",
    formationN7Sub: "Parcours Architecture, Systèmes et Réseaux.",
    formationUni: "Double Licence Mathématiques & Informatique",
    formationUniSub: "Bases théoriques solides en algèbre, analyse et algorithmique avancée.",
    projectsTitle: "Mes Projets",
    expTitle: "Expériences Professionnelles",
    softSkillsTitle: "Soft Skills & Intérêts",
    contactTitle: "Me contacter",
    contactDesc: "Je suis disponible pour un stage de 2 à 3 mois à partir de Juin 2025. Mobile géographiquement et avide de défis techniques.",
    copyEmail: "Ou copier mon email",
    emailCopied: "Email copié !",
    footer: "Développé avec React & Tailwind."
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navSoftSkills: "Soft Skills",
    navContact: "Contact",
    navBtn: "Contact me",
    heroBadge: "Engineering Student at ENSEEIHT",
    heroTitle: "Mano Dinnat Creusier",
    heroDesc: "Aspiring Engineer. I am looking for a 2nd-year internship (2 - 3 months) in systems or networks.",
    heroProjects: "My projects",
    heroCV: "Download CV",
    cvUrl: "/cv-en.pdf", // Lien vers votre CV en anglais
    formationTitle: "Academic Background",
    formationN7: "Engineering Degree in Computer Science",
    formationN7Sub: "Specialization in Architecture, Systems and Networks.",
    formationUni: "Double Bachelor's in Mathematics & Computer Science",
    formationUniSub: "Solid theoretical foundations in algebra, analysis, and advanced algorithms.",
    projectsTitle: "My Projects",
    expTitle: "Professional Experience",
    softSkillsTitle: "Soft Skills & Interests",
    contactTitle: "Contact Me",
    contactDesc: "I am available for a 2 to 3-month internship starting June 2025. Geographically mobile and eager for technical challenges.",
    copyEmail: "Or copy my email",
    emailCopied: "Email copied!",
    footer: "Developed with React & Tailwind."
  }
};

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
    desc: {
      fr: "Conception et implémentation d'un module UART en VHDL pour communication série sur carte FPGA.",
      en: "Design and implementation of a UART module in VHDL for serial communication on an FPGA board."
    },
    tags: ["VHDL", "FPGA", "Hardware"],
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    category: "Hardware",
    github: "https://github.com/AchilleTheux/UART_FPGA", 
    pdf: null
  },
  {
    title: { fr: "Compilateur RAT", en: "RAT Compiler" },
    year: "2025",
    desc: {
      fr: "Création complète d'un compilateur pour le langage RAT : analyse lexicale, syntaxique et génération de code.",
      en: "Complete creation of a compiler for the RAT language: lexical and syntactic analysis, and code generation."
    },
    tags: ["OCaml", "Compilation", "Algorithmique"],
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    category: "Dev",
    github: "https://github.com/Ravemi987/tdl-project",
    pdf: "/projets/rapport_rat.pdf"
  },
  {
    title: { fr: "Infrastructure Réseau FAI", en: "ISP Network Infrastructure" },
    year: "2025",
    desc: {
      fr: "Simulation complète : site entreprise, VPN, et configuration d'un fournisseur d'accès internet.",
      en: "Full simulation: corporate site, VPN, and ISP configuration."
    },
    tags: ["Réseau", "SysAdmin", "Sécurité"],
    icon: <Network className="w-6 h-6 text-blue-400" />,
    category: "Réseau",
    github: null,
    pdf: "/projets/rapport_interconnexion.pdf"
  },
  {
    title: { fr: "Performance RMI vs Agent Mobile", en: "RMI vs Mobile Agent Performance" },
    year: "2025",
    desc: {
      fr: "Création d'un agent mobile et étude comparative des performances avec une architecture RMI classique.",
      en: "Creation of a mobile agent and comparative performance study with a classic RMI architecture."
    },
    tags: ["Java", "Systèmes Distribués"],
    icon: <Activity className="w-6 h-6 text-red-400" />,
    category: "Réseau",
    github: "https://github.com/30Alexis01/Projet-Donn-es-R-parties-Intergiciel",
    pdf: "/projets/rapport_rmi.pdf"
  },
  {
    title: { fr: "Algorithmes de Routage Telecom", en: "Telecom Routing Algorithms" },
    year: "2025",
    desc: {
      fr: "Simulation et analyse comparative de différents algorithmes de routage pour les réseaux de télécommunications.",
      en: "Simulation and comparative analysis of different routing algorithms for telecommunication networks."
    },
    tags: ["Matlab", "Algo", "Telecom"],
    icon: <Network className="w-6 h-6 text-cyan-400" />,
    category: "Réseau",
    github: "https://github.com/mano-dinnatcreusier/telecom",
    pdf: "projets/rapport_telecom.pdf"
  },
  {
    title: { fr: "IA & Prédiction Sportive", en: "AI & Sports Prediction" },
    year: "2023",
    desc: {
      fr: "Développement d'un modèle d'IA pour prédire les résultats de matchs de football.",
      en: "Development of an AI model to predict football match results."
    },
    tags: ["Python", "Machine Learning", "Data Science"],
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    category: "IA",
    github: null,
    pdf: "/projets/rapport_ia.pdf"
  },
  {
    title: { fr: "Étude du mouvement des planètes", en: "Planetary Motion Study" },
    year: "2023",
    desc: {
      fr: "Simulation numérique et étude physique des orbites planétaires.",
      en: "Numerical simulation and physical study of planetary orbits."
    },
    tags: ["Mathématiques", "Physique", "Simulation"],
    icon: <Globe className="w-6 h-6 text-indigo-400" />,
    category: "IA",
    github: null,
    pdf: "/projets/projet_maths.pdf"
  }
];

const experiences = [
  {
    role: { fr: "Stagiaire IA & Développement", en: "AI & Development Intern" },
    company: { fr: "Secteur Bancaire", en: "Banking Sector" },
    period: "2025",
    desc: {
      fr: "Création d'un prototype d'application de courtage bancaire intelligente incluant un chatbot conversationnel (LLM).",
      en: "Creation of a smart banking brokerage application prototype including a conversational chatbot (LLM)."
    },
    skills: ["Web", "Python", "n8n", "UX/UI"],
    type: "tech"
  },
  {
    role: "Freelance",
    company: { fr: "Missions Indépendantes", en: "Independent Missions" },
    period: "2024",
    desc: {
      fr: "Développement d'automatisations sur n8n et Make, incluant l'écriture de scripts JavaScript pour manipuler les données et connecter des API.",
      en: "Development of automations on n8n and Make, including writing JavaScript scripts to manipulate data and connect APIs."
    },
    skills: ["n8n", "Make", "JavaScript", "API REST"],
    type: "tech"
  },
  {
    role: { fr: "Sauveteur BNSSA", en: "Lifeguard (BNSSA)" },
    company: { fr: "Secourisme en Lac", en: "Lake Lifeguarding" },
    period: "4 Saisons (2022-2025)",
    desc: {
      fr: "Surveillance, intervention d'urgence. Compétences acquises : travail d'équipe, haute responsabilité et gestion du stress.",
      en: "Monitoring, emergency intervention. Skills acquired: teamwork, high responsibility, and stress management."
    },
    skills: ["Leadership", "Sang-froid", "Travail d'équipe"],
    type: "job"
  }
];

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("manodinnatcreusier@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">
            MDC<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400 items-center">
            <button onClick={() => scrollTo('about')} className="hover:text-blue-400 transition-colors">{t.navAbout}</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-blue-400 transition-colors">{t.navProjects}</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-blue-400 transition-colors">{t.navExperience}</button>
            <button onClick={() => scrollTo('softskills')} className="hover:text-blue-400 transition-colors">{t.navSoftSkills}</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-blue-400 transition-colors">{t.navContact}</button>
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-blue-400 hover:bg-slate-700 transition-all font-bold"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang.toUpperCase()}
            </button>
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-500 hover:text-white transition-all"
          >
            {t.navBtn}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge color="blue">{t.heroBadge}</Badge>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6 tracking-tight leading-tight">
            {t.heroTitle}
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.heroDesc}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollTo('projects')} className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
              {t.heroProjects} <ChevronDown className="w-4 h-4" />
            </button>
            {/* Version dynamique du lien CV */}
            <a href={t.cvUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 transition-all flex items-center gap-2 justify-center">
              <Download className="w-4 h-4" /> {t.heroCV}
            </a>
          </motion.div>
        </div>
      </header>

      {/* Formation Section */}
      <Section id="about">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code className="w-64 h-64" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              {t.formationTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-blue-300">ENSEEIHT (N7)</h4>
                  <span className="text-sm font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">2023 - 2026</span>
                </div>
                <p className="text-white font-medium">{t.formationN7}</p>
                <p className="text-slate-400 text-sm">{t.formationN7Sub}</p>
              </div>
              
              <div className="md:border-l border-slate-700 md:pl-8 space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-slate-300">Université de Toulouse</h4>
                  <span className="text-sm font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">2020 - 2023</span>
                </div>
                <p className="text-slate-200 font-medium">{t.formationUni}</p>
                <p className="text-slate-400 text-sm">{t.formationUniSub}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-slate-900/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.projectsTitle}</h2>
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
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                <Card className="h-full flex flex-col justify-between group cursor-default">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                        {project.icon}
                      </div>
                      <span className="text-xs font-mono text-slate-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {typeof project.title === 'object' ? project.title[lang] : project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {project.desc[lang]}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-slate-800">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-colors">
                          <Github className="w-3.5 h-3.5" /> Code
                        </a>
                      )}
                      {project.pdf && (
                        <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 px-3 py-2 rounded-lg transition-all border border-blue-500/20 hover:border-blue-500">
                          <FileText className="w-3.5 h-3.5" /> {lang === 'fr' ? 'Rapport' : 'Report'}
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{t.expTitle}</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2" />
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-950 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 ${exp.type === 'tech' ? 'bg-blue-500' : 'bg-slate-500'}`}></div>
                <motion.div className="w-full md:w-1/2" initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <Card className={`transition-colors ${exp.type === 'tech' ? 'border-blue-500/20 hover:border-blue-500/50' : 'hover:border-slate-500/50'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{typeof exp.role === 'object' ? exp.role[lang] : exp.role}</h3>
                      <Badge color={exp.type === 'tech' ? "blue" : "red"}>{exp.period}</Badge>
                    </div>
                    <p className="text-slate-300 font-medium mb-3">{typeof exp.company === 'object' ? exp.company[lang] : exp.company}</p>
                    <p className="text-slate-400 text-sm mb-4">{exp.desc[lang]}</p>
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

      {/* Soft Skills Section */}
      <Section id="softskills" className="bg-slate-900/30">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t.softSkillsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sport & Activités */}
          <Card className="hover:bg-emerald-900/10 hover:border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Mountain className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white">{lang === 'fr' ? 'Sport & Activités' : 'Sports & Activities'}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              {lang === 'fr' ? 'Pratique intense et variée : Trail, Alpinisme, Musculation, Spéléologie.' : 'Intense and varied practice: Trail running, Mountaineering, Weightlifting, Caving.'}
            </p>
             <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm text-slate-300"><Waves className="w-4 h-4 text-emerald-400" /> Diplôme PADI OpenWater</li>
              <li className="flex items-center gap-2 text-sm text-slate-300"><Mountain className="w-4 h-4 text-emerald-400" /> GR20 en 4 jours</li>
              <li className="flex items-center gap-2 text-sm text-slate-300"><Activity className="w-4 h-4 text-emerald-400" /> Ultra Trail</li>
            </ul>
            <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-slate-300 font-medium flex items-center gap-2"><Trophy className="w-4 h-4 text-yellow-500" /> Index UTMB</span>
              <span className="text-emerald-400 font-bold text-xl">604</span>
            </div>
          </Card>

          {/* Engagement */}
          <Card className="hover:bg-red-900/10 hover:border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><HeartPulse className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white">Engagement</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              {lang === 'fr' ? 'Impliqué dans le secourisme et la solidarité.' : 'Involved in first aid and community solidarity.'}
            </p>
            <ul className="space-y-2">
               <li className="flex items-center gap-2 text-sm text-slate-300"><Users className="w-4 h-4 text-red-400" /> Diplômes PSE1 & BNSSA</li>
               <li className="flex items-center gap-2 text-sm text-slate-300"><HeartPulse className="w-4 h-4 text-red-400" /> + de 20 dons (sang/plasma)</li>
              <li className="flex items-center gap-2 text-sm text-slate-300"><Activity className="w-4 h-4 text-red-400" /> {lang === 'fr' ? 'Gestion de crise & Discipline' : 'Crisis Management & Discipline'}</li>
            </ul>
          </Card>

          {/* Ouverture */}
          <Card className="hover:bg-indigo-900/10 hover:border-indigo-500/30">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><Plane className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white">{lang === 'fr' ? 'Ouverture' : 'Mindset'}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              {lang === 'fr' ? 'Voyages en autonomie (Islande, Sri Lanka, Indonésie).' : 'Solo travels (Iceland, Sri Lanka, Indonesia).'}
            </p>
            <div className="space-y-3">
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <h4 className="text-white text-sm font-bold mb-1">{lang === 'fr' ? 'Anglais' : 'English'}</h4>
                <p className="text-xs text-slate-400">{lang === 'fr' ? 'Pratique courante en contexte international.' : 'Fluent in international contexts.'}</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                 <h4 className="text-white text-sm font-bold mb-1">{lang === 'fr' ? 'Adaptabilité' : 'Adaptability'}</h4>
                <p className="text-xs text-slate-400">{lang === 'fr' ? "Capacité à s'intégrer rapidement dans de nouveaux environnements." : 'Ability to quickly integrate into new environments.'}</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pb-32">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-16 border border-blue-500/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.contactTitle}</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{t.contactDesc}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <a href="mailto:manodinnatcreusier@gmail.com" className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://linkedin.com/in/mano-dinnat-7028662b2/" target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 border border-slate-700 transition-colors">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://github.com/mano-dinnatcreusier" target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 border border-slate-700 transition-colors">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
          <button onClick={copyToClipboard} className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mx-auto">
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? t.emailCopied : t.copyEmail}
          </button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>© 2025 Mano Dinnat Creusier. {t.footer}</p>
      </footer>
    </div>
  );
}