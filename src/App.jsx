import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  SquareStack,
  TimerReset,
  Workflow,
  X,
} from 'lucide-react'
import heroImage from './assets/developer-hero.png'
import goldScanImage from './assets/goldscan.png'
import tradingPlatformImage from './assets/trading-platform.png'
import './App.css'

const iconMap = {
  architecture: Layers3,
  branch: Workflow,
  database: Database,
  shield: ShieldCheck,
  code: Code2,
  server: Server,
  cpu: Cpu,
  stack: SquareStack,
  award: Award,
  timer: TimerReset,
}

const resume = {
  brand: 'YOOTTHANA',
  name: 'Yootthana Boonyamoon',
  role: 'Full Stack Developer',
  status: 'Senior Full-Stack .NET Developer',
  headline:
    'Senior Full-Stack .NET Developer with over 10 years of experience in ERP, CRM, financial trading platforms, cryptocurrency exchange systems, and LMS platforms.',
  summary:
    'Strong expertise in ASP.NET Core, C#, PostgreSQL, SQL Server, React, Next.js, Docker, and Linux environments. Experienced in system architecture design, business process analysis, database design, API development, cloud deployment, and real-time applications.',
  email: 'boonyamoon@gmail.com',
  phone: '061-926-4661',
  website: 'https://yootthana.com',
  version: 'V 1.0',
}

const navItems = [
  ['about', 'About'],
  ['overview', 'Expertise'],
  ['skills', 'Skills'],
  ['projects', 'Featured Work'],
  ['responsibilities', 'Responsibilities'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
]

const overviewCards = [
  {
    icon: 'architecture',
    title: 'Enterprise System Architecture',
    text: 'Designs scalable enterprise systems across ERP, CRM, LMS, trading platforms, crypto applications, APIs, databases, and deployment infrastructure.',
  },
  {
    icon: 'branch',
    title: 'Business Process Analysis',
    text: 'Works directly with clients and stakeholders to gather requirements, analyze workflows, define scope, and translate business needs into reliable software.',
  },
  {
    icon: 'database',
    title: 'Database Design & Optimization',
    text: 'Designs and optimizes PostgreSQL and SQL Server databases, stored procedures, complex queries, data processing flows, and reporting structures.',
  },
  {
    icon: 'code',
    title: 'Full-Stack Delivery',
    text: 'Builds backend services with ASP.NET Core and C#, frontend applications with React and Next.js, and complete RESTful API integrations.',
  },
  {
    icon: 'shield',
    title: 'Reliable Production Systems',
    text: 'Handles deployment, troubleshooting, production support, performance optimization, and technical consultation for enterprise applications.',
  },
  {
    icon: 'server',
    title: 'Docker & Linux Operations',
    text: 'Manages application deployment and server administration using Docker, Linux environments, Nginx, and production-ready infrastructure practices.',
  },
]

const skillGroups = [
  {
    title: 'Backend / .NET',
    skills: ['ASP.NET Core', 'C#', '.NET Framework', 'RESTful API', 'SignalR', 'WinForms', 'VB.NET'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'Web Applications', 'Real-time UI', 'Responsive Interfaces'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'SQL Server', 'Stored Procedures', 'Query Optimization', 'Database Design', 'Reporting'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Linux', 'Nginx', 'Redis', 'RabbitMQ', 'Deployment', 'Performance Optimization'],
  },
  {
    title: 'Business Domains',
    skills: ['ERP', 'CRM', 'LMS', 'E-Learning', 'Forex Trading', 'Copy Trading', 'Cryptocurrency'],
  },
]

const projects = [
  {
    id: 'lms',
    category: 'web',
    badge: 'LMS / E-Learning',
    title: 'Learning Management Systems',
    summary:
      'Designed and developed LMS and E-Learning platforms for educational institutions and corporate training organizations.',
    problem:
      'Organizations needed centralized training systems that could manage learning content, assessments, competency development, certificates, and reporting for large-scale users.',
    solution:
      'Built web-based learning platforms with content management, online training workflows, assessment modules, certification features, and reporting dashboards.',
    results: [
      'Supported structured online training and competency development',
      'Improved learning content management and progress visibility',
      'Enabled reporting for educational and corporate training teams',
    ],
  },
  {
    id: 'crm-loyalty',
    category: 'web',
    badge: 'CRM / Loyalty',
    title: 'CRM & Loyalty Program Solutions',
    summary:
      'Developed customer engagement and rewards management systems for CRM and loyalty program use cases.',
    problem:
      'Businesses needed better tools to manage customers, engagement flows, loyalty rewards, and customer-facing program data.',
    solution:
      'Designed CRM workflows, loyalty program modules, customer data structures, and scalable RESTful APIs for customer engagement platforms.',
    results: [
      'Improved customer engagement management',
      'Centralized loyalty and rewards operations',
      'Created extensible CRM structures for future business rules',
    ],
  },
  {
    id: 'crypto',
    category: 'trading',
    badge: 'Crypto Exchange',
    title: 'Cryptocurrency Exchange Platform',
    image: tradingPlatformImage,
    summary:
      'Designed and developed cryptocurrency exchange applications with market screens, order book, spot trading, wallet integration, and transaction management.',
    problem:
      'Crypto exchange products required real-time market screens, accurate order book displays, trading forms, wallet flows, and transaction tracking for sensitive financial operations.',
    solution:
      'Built exchange UI modules, wallet integrations, transaction management flows, API services, and database structures for crypto trading and account operations.',
    results: [
      'Delivered trading screens with chart, order book, and buy/sell workflows',
      'Supported wallet and transaction management capabilities',
      'Improved reliability for crypto financial operations',
    ],
  },
  {
    id: 'goldscan',
    category: 'trading',
    badge: 'Blockchain Explorer',
    title: 'Gold Scan Blockchain Explorer',
    image: goldScanImage,
    summary:
      'Developed a blockchain explorer for EGoldChain mainnet to inspect blocks, transactions, addresses, gas tracker, token transfers, and network statistics.',
    problem:
      'Blockchain users and operators needed a public explorer to search addresses, transaction hashes, blocks, tokens, and Gold ID records while monitoring network activity.',
    solution:
      'Implemented explorer screens with search, block and transaction lists, daily transaction charts, gas tracking, token transfer views, and EVM-style network inspection workflows.',
    results: [
      'Enabled transparent inspection of EGoldChain mainnet activity',
      'Provided block, transaction, token, and address visibility',
      'Improved operational monitoring for blockchain network usage',
    ],
  },
  {
    id: 'copy-trading',
    category: 'trading',
    badge: 'Copy Trading',
    title: 'Copy Trading Platform',
    summary:
      'Developed copy trading platforms with real-time trade synchronization, portfolio tracking, and investor management features.',
    problem:
      'Trading workflows needed real-time synchronization between strategy providers and investors, with accurate portfolio visibility and operational controls.',
    solution:
      'Implemented real-time trade synchronization, investor management modules, portfolio tracking, backend services, and scalable data processing flows.',
    results: [
      'Enabled real-time trade synchronization',
      'Improved investor portfolio tracking',
      'Supported scalable trading platform operations',
    ],
  },
  {
    id: 'forex',
    category: 'trading',
    badge: 'Forex Trading',
    title: 'Web-Based Forex Trading Platform',
    summary:
      'Led a team of 4-5 engineers to design, develop, and maintain a web-based Forex Trading Platform at Abacus Trading.',
    problem:
      'The platform required accurate trading workflows, reliable backend services, responsive frontend applications, optimized PostgreSQL data flows, and production stability.',
    solution:
      'Led architecture design, backend development with ASP.NET Core and C#, frontend development with React.js, database optimization, code reviews, mentoring, and production support.',
    results: [
      'Provided technical leadership across the software development lifecycle',
      'Improved trading workflow implementation and platform reliability',
      'Supported production troubleshooting, QA collaboration, and scalability',
    ],
  },
  {
    id: 'erp',
    category: 'enterprise',
    badge: 'ERP / Desktop',
    title: 'Enterprise Resource Planning Systems',
    summary:
      'Developed and maintained ERP systems for Windows Desktop Applications at Double Pine for purchasing, inventory, sales, customer management, accounting support, and reporting.',
    problem:
      'Enterprise customers needed customized business modules, reliable desktop applications, reporting tools, SQL Server optimization, user training, and long-term production support.',
    solution:
      'Built ERP modules using C#, VB.NET, WinForms, and .NET Framework; designed SQL Server databases, stored procedures, complex queries, reports, and business documents.',
    results: [
      'Delivered customized enterprise business solutions',
      'Supported deployment, installation, user training, and production support',
      'Improved reporting and operational workflows for enterprise customers',
    ],
  },
]

const filters = [
  ['all', 'All'],
  ['web', 'Web App'],
  ['trading', 'Trading'],
  ['enterprise', 'Enterprise'],
]

const responsibilities = [
  'Gather requirements, analyze workflows, and define project scope with clients and stakeholders',
  'Design system architecture, RESTful APIs, database structures, and business processes',
  'Develop backend services and business logic using ASP.NET Core and C#',
  'Build and maintain frontend applications using React.js, Next.js, and modern JavaScript',
  'Design and optimize PostgreSQL and SQL Server queries, stored procedures, and reports',
  'Manage deployment, server administration, troubleshooting, and performance optimization',
  'Lead code reviews, mentor junior developers, and provide technical guidance',
  'Prepare technical documentation, system flow diagrams, and development plans',
]

const experiences = [
  {
    year: 'May 2024 - Present',
    role: 'Freelance Senior Full Stack Developer',
    company: 'Freelance',
    detail:
      'Designed and developed LMS, E-Learning, CRM, Loyalty Program, Cryptocurrency, Blockchain, and Copy Trading solutions. Managed architecture, APIs, databases, Docker/Linux deployment, performance optimization, and direct client collaboration.',
  },
  {
    year: 'Dec 2023 - May 2024',
    role: 'Senior Full Stack Developer',
    company: 'Siamvayupak Software., Ltd.',
    detail:
      'Participated in planning and designing a forestry management system for an international forestry operation project. Gathered requirements, analyzed workflows, designed architecture and database structures, and prepared technical documentation.',
  },
  {
    year: 'May 2021 - May 2022',
    role: 'Senior Full Stack Developer',
    company: 'Abacus Trading Co., Ltd.',
    detail:
      'Led a team of 4-5 engineers developing a web-based Forex Trading Platform. Worked on ASP.NET Core, C#, React.js, PostgreSQL, architecture design, code reviews, mentoring, QA collaboration, deployment, and production support.',
  },
  {
    year: 'July 2011 - May 2021',
    role: 'Programmer',
    company: 'Double Pine Co., Ltd.',
    detail:
      'Developed and maintained ERP Windows Desktop Applications using C#, VB.NET, WinForms, .NET Framework, and SQL Server. Built modules for purchasing, inventory, sales, customer management, accounting support, reporting, deployment, user training, and support.',
  },
]

function getIcon(name) {
  return iconMap[name] || Sparkles
}

function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return
  const nav = document.querySelector('.nav')
  const offset = nav ? nav.offsetHeight - 1 : 0
  window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' })
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="section-rule" />
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function Navbar({ scrolled, menuOpen, setMenuOpen }) {
  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <button className="brand" type="button" onClick={() => scrollToSection('about')} aria-label="Back to top">
            <span>&lt;</span>
            {resume.brand}
            <span> /&gt;</span>
          </button>

          <nav className="nav__links" aria-label="Main navigation">
            {navItems.map(([id, label]) => (
              <button key={id} type="button" onClick={() => scrollToSection(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--primary nav-mail" href={`mailto:${resume.email}`}>
              <Mail size={16} />
              Contact by Email
            </a>
            <button
              className="icon-button nav-toggle"
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <button className="icon-button mobile-menu__close" type="button" aria-label="Close mobile menu" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>
        {navItems.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => {
              setMenuOpen(false)
              requestAnimationFrame(() => scrollToSection(id))
            }}
          >
            {label}
          </button>
        ))}
        <a className="btn btn--primary" href={`mailto:${resume.email}`}>
          <Mail size={18} />
          Contact by Email
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="status-pill">
            <span className="pulse-dot" />
            {resume.status}
          </div>
          <h1>{resume.name}</h1>
          <p className="role"><span>{resume.role}</span></p>
          <p className="hero-lead">{resume.headline}</p>
          <p className="hero-summary">{resume.summary}</p>
          <div className="hero-actions">
            <button className="btn btn--light" type="button" onClick={() => scrollToSection('overview')}>
              View Expertise
              <ArrowRight size={18} />
            </button>
            <button className="btn btn--ghost" type="button" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
            <a className="icon-link" href={resume.website} target="_blank" rel="noreferrer" aria-label="Website">
              <Globe size={26} />
            </a>
          </div>
        </div>

        <div className="portrait-wrap reveal reveal--delay">
          <div className="portrait-glow" />
          <div className="portrait">
            <img src={heroImage} alt="Yootthana full-stack developer workspace visual" />
            <div className="portrait-badge">
              <span />
              <div>
                <strong>Full-Stack Professional</strong>
                <small>ASP.NET Core / React / PostgreSQL / Docker</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section id="overview" className="section section--band">
      <div className="container">
        <SectionHeader
          eyebrow="Core Expertise"
          title="Architecture, Business Analysis, and Production Delivery"
          text="A full-stack developer profile focused on enterprise systems, trading platforms, databases, APIs, deployment, and real-time applications."
        />
        <div className="overview-grid">
          {overviewCards.map((card, index) => {
            const Icon = getIcon(card.icon)
            return (
              <article className="glass-card" key={card.title} style={{ '--delay': `${index * 45}ms` }}>
                <div className="card-icon"><Icon size={23} /></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technology Stack"
          text="Skills extracted from the CV and grouped by engineering area and business domain."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-panel" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeProject, setActiveProject] = useState(null)

  const shownProjects = useMemo(() => (
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)
  ), [activeFilter])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', Boolean(activeProject))
    return () => document.body.classList.remove('is-locked')
  }, [activeProject])

  return (
    <section id="projects" className="section section--band">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected Project Highlights"
          text="Representative work areas based on the CV, including LMS, CRM, blockchain, copy trading, forex trading, and ERP systems."
        />
        <div className="filter-bar" aria-label="Project filters">
          {filters.map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={activeFilter === value ? 'active' : ''}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {shownProjects.map((project) => (
            <article className={`project-card ${project.image ? 'project-card--with-image' : ''}`} key={project.id}>
              {project.image ? (
                <div className="project-shot">
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
              ) : null}
              <div className="project-card__top">
                <span>{project.badge}</span>
                <ExternalLink size={18} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <button className="text-button" type="button" onClick={() => setActiveProject(project)}>
                View technical details
                <ChevronRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={onClose}>
      <div className={`modal-card ${project.image ? 'modal-card--wide' : ''}`} onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal-card__head">
          <div>
            <span>{project.badge}</span>
            <h3 id="project-modal-title">{project.title}</h3>
          </div>
          <button className="icon-button" type="button" aria-label="Close modal" onClick={onClose}>
            <X size={22} />
          </button>
        </div>
        <div className="modal-card__body">
          {project.image ? (
            <div className="modal-shot">
              <img src={project.image} alt={`${project.title} screenshot`} />
              <a className="modal-shot__open" href={project.image} target="_blank" rel="noreferrer">
                Open full size
              </a>
            </div>
          ) : null}
          <ModalBlock title="Problem & Challenge" icon={Sparkles}>{project.problem}</ModalBlock>
          <ModalBlock title="Technical Solution" icon={Cpu}>{project.solution}</ModalBlock>
          <div className="modal-block">
            <h4><CheckCircle2 size={16} /> Measurable Results</h4>
            <ul>
              {project.results.map((result) => <li key={result}>{result}</li>)}
            </ul>
          </div>
        </div>
        <div className="modal-card__foot">
          <button className="btn btn--ghost" type="button" onClick={onClose}>Close</button>
          <button
            className="btn btn--primary"
            type="button"
            onClick={() => {
              onClose()
              requestAnimationFrame(() => scrollToSection('contact'))
            }}
          >
            Contact for similar work
          </button>
        </div>
      </div>
    </div>
  )
}

function ModalBlock({ children, icon: Icon, title }) {
  return (
    <div className="modal-block">
      <h4><Icon size={16} /> {title}</h4>
      <p>{children}</p>
    </div>
  )
}

function Responsibilities() {
  return (
    <section id="responsibilities" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Daily Ownership"
          title="Responsibilities"
          text="Scope of work summarized from the CV across requirements, architecture, development, database, deployment, and team leadership."
        />
        <div className="responsibility-grid">
          {responsibilities.map((item) => (
            <div className="responsibility-item" key={item}>
              <CheckCircle2 size={19} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section section--band">
      <div className="container">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Experience"
          text="Career timeline based on the provided CV."
        />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.role}`}>
              <div className="timeline-dot" />
              <span>{item.year}</span>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Available for enterprise software, trading, LMS, CRM, and full-stack development work</h2>
          <p>Contact details are taken from the provided CV.</p>
        </div>
        <div className="contact-card">
          <a href={`mailto:${resume.email}`}><Mail size={20} /> {resume.email}</a>
          <a href={`tel:${resume.phone.replace(/\D/g, '')}`}><Phone size={20} /> {resume.phone}</a>
          <a href={resume.website} target="_blank" rel="noreferrer"><Globe size={20} /> {resume.website}</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a href={resume.website} target="_blank" rel="noreferrer" aria-label="Website"><Globe size={22} /></a>
      <p>© 2026 {resume.brand}. {resume.version}</p>
    </footer>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', menuOpen)
    return () => document.body.classList.remove('is-locked')
  }, [menuOpen])

  return (
    <>
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Overview />
        <Skills />
        <Projects />
        <Responsibilities />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
