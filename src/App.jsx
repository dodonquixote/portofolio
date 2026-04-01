import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Mail, 
  ExternalLink, 
  Bot, 
  BrainCircuit, 
  Database, 
  Wrench,
  ChevronRight,
  Terminal,
  Code2,
  Briefcase
} from 'lucide-react';
import automationImage from './assets/auto.jpeg';

// Custom SVG components for brand icons to prevent export errors
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function App() {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const additionalProjects = [
    {
      id: 1,
      title: 'Skin Tone Classification for Outfit Recommendation',
      description: 'Mengembangkan sistem klasifikasi warna kulit untuk rekomendasi warna outfit menggunakan model MobileNetV2. Backend API dibangun dengan Flask dan frontend menggunakan React.js.',
      tech: ['MobileNetV2', 'Flask API', 'React.js'],
      link: '#'
    },
    {
      id: 2,
      title: 'Cleansound Backend & VPS Deployment',
      description: 'Membangun backend project Cleansound menggunakan Django dan Docker, serta menangani proses deployment ke VPS dengan konfigurasi Nginx.',
      tech: ['Django', 'Docker', 'VPS', 'Nginx'],
      link: '#'
    },
    {
      id: 3,
      title: 'ASABRI Data Automation with Selenium',
      description: 'Membangun automation menggunakan Selenium untuk input data website ASABRI, integrasi data melalui API, lalu melakukan verifikasi terhadap data pembanding di file Excel.',
      tech: ['Selenium', 'API Integration', 'Excel Validation'],
      link: '#'
    },
    {
      id: 4,
      title: 'Company Chatbot Integration',
      description: 'Membuat chatbot untuk kebutuhan perusahaan dengan Flask sebagai service utama dan n8n untuk orkestrasi workflow integrasi.',
      tech: ['Flask', 'n8n', 'Chatbot'],
      link: '#'
    },
    {
      id: 5,
      title: 'Banana Ripeness Classification',
      description: 'Mengembangkan sistem klasifikasi tingkat kematangan buah pisang menggunakan pendekatan computer vision untuk membantu proses identifikasi kualitas buah secara otomatis.',
      tech: ['Computer Vision', 'Python', 'Image Classification'],
      link: '#'
    },
    {
      id: 6,
      title: 'Spotify Queue Automation (Fun Project)',
      description: 'Membuat fun project dengan n8n agar orang lain dapat menambahkan lagu ke queue Spotify saya, dengan Flask sebagai backend service untuk endpoint integrasi.',
      tech: ['n8n', 'Flask', 'Spotify API'],
      link: '#'
    }
  ];

  return (
    <div className={`${isDark ? 'dark' : ''} font-sans`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 selection:bg-blue-500/30">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#home" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
              <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-500 group-hover:rotate-12 transition-transform" />
              <span>Dodon<span className="text-blue-600 dark:text-blue-500">.</span></span>
            </a>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === link.name.toLowerCase() ? 'text-blue-600 dark:text-blue-500' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-transform shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_14px_0_rgba(255,255,255,0.1)]"
              >
                Let's Talk
              </a>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-slate-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Salman Alfarizi Taha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-medium max-w-2xl mx-auto">
              Automation Engineer | AI Developer | Backend Developer
            </p>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              "Building intelligent automation systems that scale."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1"
              >
                View Projects <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-medium flex items-center justify-center transition-all hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-white dark:bg-slate-950/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">About Me.</h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Saya adalah seorang Software Engineer yang bersemangat dalam memecahkan masalah kompleks melalui kode. Dengan fokus utama pada <span className="text-slate-900 dark:text-white font-semibold">problem solving</span> dan membangun sistem nyata yang berdampak.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Pengalaman saya mencakup pembuatan <span className="text-slate-900 dark:text-white font-semibold">otomatisasi canggih</span> menggunakan n8n dan Selenium, mengembangkan model <span className="text-slate-900 dark:text-white font-semibold">Machine Learning & NLP</span>, serta membangun arsitektur <span className="text-slate-900 dark:text-white font-semibold">Backend yang solid</span> menggunakan Django.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105" />
                <div className="bg-slate-900 rounded-3xl p-8 relative border border-slate-800 shadow-2xl">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-sm md:text-base font-mono text-slate-300 overflow-x-auto">
                    <code>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = {'{'}{'\n'}
                      {'  '}name: <span className="text-green-400">'Salman Alfarizi Taha'</span>,{'\n'}
                      {'  '}roles: [<span className="text-green-400">'Automation'</span>, <span className="text-green-400">'AI'</span>, <span className="text-green-400">'Backend'</span>],{'\n'}
                      {'  '}passion: <span className="text-green-400">'Building scalable systems'</span>,{'\n'}
                      {'  '}isProblemSolver: <span className="text-orange-400">true</span>{'\n'}
                      {'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Alat dan teknologi yang saya gunakan untuk membangun sistem berkinerja tinggi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Skill 1 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Automation</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Merancang alur kerja otomatis dan scraping cerdas.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">n8n</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Selenium</span>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500/50 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI / ML</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Mengembangkan model prediktif dan pemrosesan bahasa alami.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Python</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">NLP</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Deep Learning</span>
                </div>
              </div>

              {/* Skill 3 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500/50 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Membangun API yang aman, cepat, dan terukur.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Django</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Flask</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">REST API</span>
                </div>
              </div>

              {/* Skill 4 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500/50 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tools</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Infrastruktur dan kontrol versi untuk kolaborasi yang mulus.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Docker</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Git</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-white dark:bg-slate-950/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <Code2 className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects.</h2>
            </div>

            <div className="space-y-12">
              {/* Featured Project 1 */}
              <div className="group relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                      Main Project
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">AI Article Automation Platform</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      Platform end-to-end untuk pembuatan konten otomatis untuk website Cleansound Studio. Melakukan scraping berita terkini, menulis ulang (rewrite) konten menggunakan API AI untuk menghindari plagiasi, dan langsung melakukan publikasi otomatis ke website.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['n8n', 'AI API', 'Python', 'Backend'].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <a href="https://cleansoundstudio.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all">
                     <img
                       src={automationImage}
                       alt="Foto Salman Alfarizi Taha"
                       className="h-full w-full object-cover object-center"
                     />
                     <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Grid Projects List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
                {additionalProjects.map((project) => (
                  <div key={project.id} className="group rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-6 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a href={project.link} className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        View Project <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <Briefcase className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-bold">Experience.</h2>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
              
              {/* Exp 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-blue-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">Past</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Assistant Laboratorium Informatika</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Universitas / Institusi (1 Tahun 6 Bulan)</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Membimbing mahasiswa dalam praktikum pemrograman, membantu debugging code, dan mengelola infrastruktur lab. Fokus pada fundamental programming dan problem-solving.
                  </p>
                </div>
              </div>

              {/* Exp 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">Past</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">DBS Coding Camp</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Machine Learning Projects</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Mengikuti bootcamp intensif berfokus pada Machine Learning. Mengembangkan model AI prediktif, melakukan data cleaning, exploratory data analysis (EDA), dan evaluasi model.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-blue-600 dark:bg-blue-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Great.</h2>
            <p className="text-blue-100 dark:text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
              Tertarik untuk kolaborasi atau memiliki sistem otomasi yang ingin dibangun? Mari berdiskusi.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:salmanalfarizita@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-600 font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl">
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a href="https://www.linkedin.com/in/salman-alfarizi-taha/" className="p-4 rounded-xl bg-blue-700 dark:bg-blue-800 text-white hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors shadow-xl">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="https://github.com/dodonquixote" className="p-4 rounded-xl bg-blue-700 dark:bg-blue-800 text-white hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors shadow-xl">
                  <GithubIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Salman Alfarizi Taha. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              Designed with <span className="text-blue-500">React</span> & Tailwind
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}