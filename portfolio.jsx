import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, MapPin, Download, 
  Code, Briefcase, GraduationCap, Award, Rocket, 
  ChevronRight, ExternalLink, Database, Cloud, 
  BarChart, Users, Zap, Terminal, Sun, Moon
} from 'lucide-react';

// Theme Context — shared across all components
const ThemeContext = React.createContext({ darkMode: true, toggleTheme: () => {} });

// Animated Background Component
const AnimatedBackground = () => {
  const { darkMode } = React.useContext(ThemeContext);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900'
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'
      }`} />
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-cyan-500/10' : 'bg-cyan-400/20'}`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-2000 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-400/15'}`} />
      <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-4000 ${darkMode ? 'bg-emerald-500/5' : 'bg-emerald-400/10'}`} />
    </div>
  );
};

// Section Wrapper with Scroll Animation
const Section = ({ children, id, className = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen py-20 px-6 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'];

  const handleNavClick = (item) => {
    setMenuOpen(false);
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled || menuOpen
    ? darkMode ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent cursor-pointer select-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            title="Go to Home"
          >
            YP
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors font-medium hover:text-cyan-500 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Dark / Light Toggle — desktop */}
            <motion.button
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                darkMode ? 'bg-slate-700 focus:ring-offset-slate-900' : 'bg-slate-200 focus:ring-offset-white'
              }`}
              whileTap={{ scale: 0.9 }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              <motion.div
                className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
                  darkMode ? 'bg-cyan-400' : 'bg-white'
                }`}
                animate={{ x: darkMode ? 0 : 28 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {darkMode
                  ? <Moon size={11} className="text-slate-900" />
                  : <Sun size={11} className="text-yellow-500" />
                }
              </motion.div>
            </motion.button>
          </div>

          {/* Right side — mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme toggle — mobile */}
            <motion.button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                darkMode
                  ? 'border-slate-700 bg-slate-800 text-cyan-400'
                  : 'border-slate-300 bg-slate-100 text-yellow-500'
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              className={`flex flex-col justify-center items-center w-10 h-10 rounded-lg border gap-1.5 focus:outline-none ${
                darkMode ? 'border-slate-700 bg-slate-800/80' : 'border-slate-300 bg-slate-100'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <motion.span className="block w-5 h-0.5 bg-cyan-500 rounded-full" animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
              <motion.span className="block w-5 h-0.5 bg-cyan-500 rounded-full" animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-cyan-500 rounded-full" animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <motion.div
          className={`md:hidden overflow-hidden border-t backdrop-blur-lg ${
            darkMode ? 'bg-slate-900/98 border-slate-800' : 'bg-white/98 border-slate-200'
          }`}
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-left transition-colors font-medium py-3 px-4 rounded-xl w-full hover:text-cyan-500 ${
                  darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: menuOpen ? index * 0.06 : 0, duration: 0.25 }}
              >
                <span className="text-cyan-500 mr-2 font-mono text-sm">0{index + 1}.</span>
                {item}
              </motion.button>
            ))}
            <div className={`flex gap-4 mt-4 pt-4 border-t px-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <a href="mailto:yashpatel9775@gmail.com" className={`hover:text-cyan-500 transition-colors text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email</a>
              <a href="https://www.linkedin.com/in/yash-patel-4014a7207/" target="_blank" rel="noreferrer" className={`hover:text-cyan-500 transition-colors text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>LinkedIn</a>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

// Hero Section
const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                YP
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          custom={0}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Yash Patel
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl text-slate-300 mb-8 font-light"
          custom={1}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-cyan-400">Full-Stack Developer</span> |{' '}
          <span className="text-blue-400">Cloud Architect</span> |{' '}
          <span className="text-purple-400">Sales Leader</span>
        </motion.div>

        <motion.p
          className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Bridging technology and business growth with expertise in MERN Stack, AWS, and team leadership.
          From architecting scalable web applications to driving high-performing sales teams.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          custom={3}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/50 flex items-center gap-2"
            whileHover={{ scale: 1.05, shadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch <ChevronRight size={20} />
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border-2 border-cyan-500/30 hover:border-cyan-500 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <Rocket size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center mt-12 mb-24"
          custom={4}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Github, href: 'https://github.com/patelyash9775', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/yash-patel-4014a7207/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:yashpatel9775@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator — sits clearly below all content */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <ChevronRight size={22} className="text-cyan-400 rotate-90" />
      </motion.div>
    </div>
  );
};

// About Section
const About = () => {
  return (
    <Section id="about" className="bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6 text-slate-300 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg">
              I'm a technology professional who bridges the gap between software development and business growth. 
              With a <span className="text-cyan-400 font-semibold">Bachelor's in Information & Communication Technology</span> from 
              PDPU and a <span className="text-cyan-400 font-semibold">Postgraduate Degree in Cloud Data Management</span> from 
              Conestoga College (completed August 2025), I bring both technical expertise and proven sales leadership.
            </p>
            <p className="text-lg">
              Currently serving as <span className="text-blue-400 font-semibold">Team Lead at Kognitive Sales Solutions</span> in 
              Truro, Nova Scotia, I manage the Atlantic regional team while consistently exceeding sales targets through 
              data-driven decision-making and strategic coaching.
            </p>
            <p className="text-lg">
              What sets me apart is my <span className="text-purple-400 font-semibold">rare combination of technical development skills 
              and sales/marketing leadership</span>. I've architected production web applications using cutting-edge technologies 
              while simultaneously managing high-performing teams and driving measurable business results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Code, label: 'Full-Stack Dev', color: 'cyan', hex: '#06b6d4' },
              { icon: Cloud, label: 'Cloud Architect', color: 'blue', hex: '#3b82f6' },
              { icon: Users, label: 'Team Leadership', color: 'purple', hex: '#a855f7' },
              { icon: BarChart, label: 'Sales Strategy', color: 'emerald', hex: '#10b981' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-slate-800/50 border border-${item.color}-500/30 rounded-2xl p-6 text-center backdrop-blur-sm`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 30px ${item.hex}4d`
                }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className={`w-12 h-12 mx-auto mb-3 text-${item.color}-400`} />
                <p className="text-slate-200 font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex gap-8 flex-wrap justify-center text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="text-cyan-400" size={20} />
              <span>Truro, Nova Scotia, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-cyan-400" size={20} />
              <span>3432614012</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-cyan-400" size={20} />
              <span>yashpatel9775@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: 'Team Lead',
      company: 'Kognitive Sales Solutions',
      location: 'Truro, Nova Scotia',
      period: 'February 2025 - Present',
      description: 'Leading Atlantic regional team of Field Marketing Representatives, driving performance through daily coaching, strategic planning, and data-driven decision-making.',
      highlights: [
        'Manage teams across Kitchener-Waterloo, Hamilton, Guelph, and Niagara',
        'Consistently exceed sales targets through strategic team management',
        'Implement daily huddles and motivational tracking systems',
        'Onboard and train new employees for seamless team integration'
      ],
      color: 'cyan'
    },
    {
      title: 'Sales Gas Manager',
      company: 'Kognitive Sales Solutions',
      location: 'Kitchener, Ontario',
      period: 'April 2025 - August 2025',
      description: 'Led field sales team for Canadian Tire Gas Program across Tri Region.',
      highlights: [
        'Drove customer engagement and maximized sales/activations',
        'Coached and mentored Field Marketing Representatives',
        'Executed in-field marketing promotions and sales strategies',
        'Managed daily reports and tracked team performance'
      ],
      color: 'blue'
    },
    {
      title: 'MERN Stack Developer',
      company: 'Ulticus India',
      location: 'Ahmedabad',
      period: 'January 2023 - January 2024',
      description: 'Architected production web applications using cutting-edge technologies.',
      highlights: [
        'Designed company website using Next.js, CSS3, and React-Bootstrap',
        'Built admin panel with React.js, Express.js, Node.js, and GraphQL APIs',
        'Implemented PWA technologies and Stripe payment integration',
        'Developed push and email notification systems for user engagement'
      ],
      color: 'purple'
    },
    {
      title: 'Technical Head',
      company: 'GeeksToPeaks - PDPU',
      location: 'Gandhinagar, Gujarat',
      period: 'May 2021 - June 2022',
      description: 'Led student chapter organizing workshops and coding contests.',
      highlights: [
        'Organized technical workshops and coding competitions',
        'Fostered collaborative learning environment',
        'Coordinated with team members for smooth event execution'
      ],
      color: 'emerald'
    }
  ];

  return (
    <Section id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex-1" />
              
              <motion.div
                className="relative flex-shrink-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 border-4 border-slate-900 z-10"
                whileHover={{ scale: 1.5 }}
              />

              <motion.div
                className={`flex-1 bg-slate-800/50 border border-${exp.color}-500/30 rounded-2xl p-8 backdrop-blur-sm`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold text-${exp.color}-400 mb-1`}>{exp.title}</h3>
                    <p className="text-xl text-slate-300 mb-1">{exp.company}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
                </div>
                
                <p className="text-slate-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400">
                      <ChevronRight className={`text-${exp.color}-400 mt-1 flex-shrink-0`} size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'Cloud Migration - Microsoft 365',
      category: 'Cloud Architecture',
      period: 'May 2025 - Aug 2025',
      description: 'Capstone project performing comprehensive Microsoft 365 migration for BTC Enterprise',
      tech: ['Azure AD', 'SharePoint', 'OneDrive', 'Teams', 'Power BI'],
      highlights: [
        'Set up Azure AD for SSO and security implementation',
        'Migrated data using SharePoint and OneDrive',
        'Created Teams for enhanced communication',
        'Developed Power BI dashboards for reporting',
        'Created employee training and administration manuals'
      ],
      icon: Cloud,
      color: 'cyan',
      link: '#'
    },
    {
      title: 'BAPS Temple Attendance System',
      category: 'Full-Stack Development',
      period: '2024',
      description: 'Volunteer project developing comprehensive attendance management system',
      tech: ['Next.js', 'React', 'Node.js', 'SQL', 'GraphQL', 'PWA'],
      highlights: [
        'Built backend admin portal with Node.js and Express.js',
        'Implemented GraphQL API for efficient data management',
        'Integrated soft delete method and permission management',
        'Developed frontend using Next.js and React',
        'Transformed website to Progressive Web App'
      ],
      icon: Users,
      color: 'blue',
      link: 'https://github.com/patelyash9775/KYM'
    },
    {
      title: 'Power Allocation in NOMA',
      category: 'Machine Learning',
      period: 'May 2023 - Aug 2023',
      description: 'Research project optimizing power allocation for base station communications',
      tech: ['Python', 'Matplotlib', 'SVM', 'Machine Learning'],
      highlights: [
        'Developed base station model with two users',
        'Calculated power distribution considering obstacles and distance',
        'Applied Support Vector Machine algorithm',
        'Achieved improved user fairness',
        'Reduced channel state information overhead'
      ],
      icon: BarChart,
      color: 'purple',
      link: 'https://github.com/patelyash9775/Power-Allocation-in-NOMA'
    },
    {
      title: 'Ulticus Company Website',
      category: 'Web Development',
      period: 'Jan 2023 - Jan 2024',
      description: 'Production website with admin panel and payment integration',
      tech: ['Next.js', 'React', 'Express.js', 'GraphQL', 'Stripe', 'PWA'],
      highlights: [
        'Designed responsive company website with Next.js',
        'Built comprehensive admin panel with GraphQL APIs',
        'Integrated Stripe payment processing',
        'Implemented push and email notifications',
        'Enhanced performance with PWA technologies'
      ],
      icon: Code,
      color: 'emerald',
      link: 'https://www.ulticus.com/'
    }
  ];

  return (
    <Section id="projects" className="bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-slate-800/50 border border-${project.color}-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-${project.color}-500 transition-all group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${project.color}-500/10 border border-${project.color}-500/30`}>
                  <project.icon className={`text-${project.color}-400`} size={32} />
                </div>
                <span className="text-sm text-slate-500">{project.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-cyan-400 mb-3">{project.category}</p>
              
              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full bg-${project.color}-500/10 text-${project.color}-400 border border-${project.color}-500/30`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <Zap className={`text-${project.color}-400 mt-1 flex-shrink-0`} size={14} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={project.link}
                className={`inline-flex items-center gap-2 text-${project.color}-400 hover:text-${project.color}-300 transition-colors font-semibold`}
                whileHover={{ x: 5 }}
              >
                View Details <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Full-Stack Development',
      icon: Code,
      color: 'cyan',
      skills: [
        { name: 'MERN Stack', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'React.js', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'GraphQL', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'Apollo GraphQL', level: 80 }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'blue',
      skills: [
        { name: 'AWS EC2', level: 85 },
        { name: 'AWS CloudWatch', level: 80 },
        { name: 'Azure AD', level: 85 },
        { name: 'Cloud Data Management', level: 90 },
        { name: 'SharePoint', level: 75 },
        { name: 'Power BI', level: 80 }
      ]
    },
    {
      title: 'Programming & Data Science',
      icon: Terminal,
      color: 'purple',
      skills: [
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Machine Learning', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Business & Leadership',
      icon: Users,
      color: 'emerald',
      skills: [
        { name: 'Team Leadership', level: 95 },
        { name: 'Sales Strategy', level: 90 },
        { name: 'Performance Analytics', level: 90 },
        { name: 'Client Relations', level: 95 },
        { name: 'KPI Tracking', level: 85 },
        { name: 'Project Management', level: 90 }
      ]
    }
  ];

  return (
    <Section id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className={`bg-slate-800/50 border border-${category.color}-500/30 rounded-2xl p-8 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}-500/10 border border-${category.color}-500/30`}>
                  <category.icon className={`text-${category.color}-400`} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className={`text-${category.color}-400 font-semibold`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-600`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-400 text-lg mb-4">Additional Technologies</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['REST APIs', 'Stripe', 'PWA', 'React-Bootstrap', 'Git', 'Agile', 'Scrum'].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300"
                whileHover={{ scale: 1.1, borderColor: 'rgb(6, 182, 212)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// Education Section
const Education = () => {
  const education = [
    {
      degree: 'Postgraduate Degree',
      field: 'Cloud Data Management',
      institution: 'Conestoga College',
      location: 'Ontario, Canada',
      period: 'May 2024 - August 2025',
      icon: Cloud,
      color: 'cyan',
      achievements: [
        'Specialized in cloud architecture and data management',
        'Completed comprehensive Microsoft 365 migration capstone',
        'Gained expertise in Azure, SharePoint, and Power BI'
      ]
    },
    {
      degree: 'Bachelor of Technology',
      field: 'Information and Communication Technology',
      institution: 'Pandit Deendayal Petroleum University (PDPU)',
      location: 'Gandhinagar, Gujarat, India',
      period: '2019 - 2023',
      icon: GraduationCap,
      color: 'blue',
      achievements: [
        'TFWS Seat recipient',
        'Led GeeksToPeaks technical chapter',
        'Completed multiple data science internships',
        'Conducted research on Power Allocation in NOMA'
      ]
    }
  ];

  return (
    <Section id="education" className="bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`bg-slate-800/50 border border-${edu.color}-500/30 rounded-2xl p-8 backdrop-blur-sm`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`p-4 rounded-2xl bg-${edu.color}-500/10 border border-${edu.color}-500/30 h-fit`}>
                  <edu.icon className={`text-${edu.color}-400`} size={48} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold text-${edu.color}-400 mb-1`}>{edu.degree}</h3>
                      <p className="text-xl text-slate-200 mb-2">{edu.field}</p>
                      <p className="text-lg text-slate-300">{edu.institution}</p>
                      <p className="text-slate-400">{edu.location}</p>
                    </div>
                    <span className="text-slate-500 mt-2 md:mt-0">{edu.period}</span>
                  </div>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <ChevronRight className={`text-${edu.color}-400 mt-1 flex-shrink-0`} size={16} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Certifications Section
const Certifications = () => {
  const certifications = [
    { name: 'Java Programming Certification', issuer: 'IIT Kharagpur · Coursera', color: 'cyan' },
    { name: 'React Basics', issuer: 'Meta · Coursera', color: 'blue' },
    { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', color: 'purple' },
    { name: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services · Coursera', color: 'emerald' },
    { name: 'Cloud Computing', issuer: 'IBM · Coursera', color: 'cyan' },
    { name: 'Foundations of Project Management', issuer: 'Google · Coursera', color: 'blue' },
    { name: 'Python Programming', issuer: 'Certified', color: 'purple' },
    { name: 'Python for Machine Learning', issuer: 'Certified', color: 'emerald' },
    { name: 'HTML, CSS, and JavaScript for Web Developers', issuer: 'Certified', color: 'cyan' },
    { name: 'The Joy of Computing using Python', issuer: 'Certified', color: 'blue' },
    { name: 'Intro to Deep Learning in TensorFlow 2.x & Python', issuer: 'Certified', color: 'purple' },
  ];

  return (
    <Section id="certifications">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`bg-slate-800/50 border border-${cert.color}-500/30 rounded-xl p-6 backdrop-blur-sm group`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)'
              }}
            >
              <Award className={`text-${cert.color}-400 mb-4 group-hover:scale-110 transition-transform`} size={32} />
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{cert.name}</h3>
              <p className={`text-sm text-${cert.color}-400`}>{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Whether you're looking for a full-stack developer, cloud architect, or sales leader, 
          I'm always interested in new opportunities and collaborations.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Mail, label: 'Email', value: 'yashpatel9775@gmail.com', link: 'mailto:yashpatel9775@gmail.com', color: 'cyan' },
            { icon: Phone, label: 'Phone', value: '3432614012', link: '3432614012', color: 'blue' },
            { icon: Linkedin, label: 'LinkedIn', value: 'Connect', link: 'https://www.linkedin.com/in/yash-patel-4014a7207/', color: 'purple' }
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              className={`bg-slate-800/50 border border-${contact.color}-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-${contact.color}-500 transition-all group`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
              }}
            >
              <contact.icon className={`text-${contact.color}-400 mb-3 mx-auto group-hover:scale-110 transition-transform`} size={32} />
              <p className="text-sm text-slate-400 mb-1">{contact.label}</p>
              <p className="text-slate-200 font-semibold">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="mailto:yashpatel9775@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/50 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email <Mail size={20} />
          </motion.a>
          <motion.a
            href='https://drive.google.com/file/d/1S6mO6oERX9nEecXkL-a9BWw0rIoJoyS5/view?usp=sharing'
            className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border-2 border-cyan-500/30 hover:border-cyan-500 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <Download size={20} />
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © 2026 Yash Patel. Built with Next.js, React, and Framer Motion.
        </p>
        <div className="flex gap-6 justify-center mt-4">
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/yash-patel-4014a7207/' },
            { icon: Mail, href: 'mailto:yashpatel9775@gmail.com' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  // Persist preference in localStorage (SSR-safe)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('yp-theme');
      if (saved) setDarkMode(saved === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('yp-theme', next ? 'dark' : 'light');
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${darkMode ? 'yp-dark' : 'yp-light'}`}>
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <Footer />

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Poppins', sans-serif; overflow-x: hidden; }
          html { scroll-behavior: smooth; }

          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }

          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

          /* ── DARK MODE (default) ── */
          .yp-dark { background-color: #0f172a; color: #f8fafc; }
          .yp-dark section { background: transparent; }

          /* ── LIGHT MODE overrides ── */
          .yp-light { background-color: #f1f5f9; color: #0f172a; }

          /* backgrounds */
          .yp-light section,
          .yp-light .bg-slate-900\/50 { background-color: #f8fafc !important; }
          .yp-light .bg-slate-900 { background-color: #e2e8f0 !important; }
          .yp-light .bg-slate-950 { background-color: #f1f5f9 !important; }
          .yp-light .bg-slate-800\/50,
          .yp-light .bg-slate-800 { background-color: #ffffff !important; box-shadow: 0 2px 16px rgba(0,0,0,0.07); }
          .yp-light .bg-slate-700 { background-color: #cbd5e1 !important; }

          /* text */
          .yp-light .text-white  { color: #0f172a !important; }
          .yp-light .text-slate-100 { color: #1e293b !important; }
          .yp-light .text-slate-200 { color: #334155 !important; }
          .yp-light .text-slate-300 { color: #475569 !important; }
          .yp-light .text-slate-400 { color: #64748b !important; }
          .yp-light .text-slate-500 { color: #94a3b8 !important; }

          /* borders */
          .yp-light .border-slate-700 { border-color: #cbd5e1 !important; }
          .yp-light .border-slate-800 { border-color: #e2e8f0 !important; }

          /* cards - add white background and shadow */
          .yp-light [class*="rounded-2xl"],
          .yp-light [class*="rounded-xl"] {
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }

          /* timeline line */
          .yp-light .from-cyan-500 { --tw-gradient-from: #06b6d4; }

          /* section alternating bg */
          .yp-light #about,
          .yp-light #projects,
          .yp-light #education,
          .yp-light #contact { background-color: #f1f5f9 !important; }
          .yp-light #experience,
          .yp-light #skills,
          .yp-light #certifications { background-color: #f8fafc !important; }

          /* animated bg blobs in light mode */
          .yp-light .fixed.-z-10 > div:first-child {
            background: linear-gradient(135deg, #e0f2fe, #f0f9ff, #e8f5e9) !important;
          }

          /* footer */
          .yp-light footer { background-color: #e2e8f0 !important; border-color: #cbd5e1 !important; }

          /* scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #1e293b; }
          ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 4px; }
          .yp-light ::-webkit-scrollbar-track { background: #e2e8f0; }
          .yp-light ::-webkit-scrollbar-thumb { background: #0891b2; }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
}