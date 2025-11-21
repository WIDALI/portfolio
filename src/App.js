import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectSection from './components/ProjectSection';
import IndustryCarousel from './components/IndustryCarousel';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / (windowHeight * 1.2), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const projects = [
    {
      id: 'student-75',
      title: '75-Hard: Student Edition',
      description: 'A comprehensive student productivity application built with Flutter. Features task management, scheduling, points-based rewards system, and gamification elements to enhance student engagement.',
      techStack: ['Flutter', 'Dart', 'SQLite', 'Java Backend', 'Spring Boot'],
      features: [
        'Task and assignment tracking with categories',
        'Interactive scheduling system',
        'Points-based reward system with badges',
        'Local database with SQLite',
        'Cross-platform support (iOS, Android, Desktop)'
      ],
      githubLink: 'https://github.com/75-Hard-Student-Edition/75-Student',
      videoPlaceholder: '📚 75-Student Demo',
      deviceType: 'iphone',
      videoSrc: "/portfolio/75_Student.mp4",
      reversed: false,
      cardContent: {
        idea: {
          description: 'Inspired by the 75-Hard mental toughness program, this app gamifies student productivity to build lasting academic habits.',
          problem: 'Students struggle to maintain consistent study habits and track their academic progress effectively, leading to last-minute cramming and burnout.',
          solution: 'A gamified productivity app that rewards daily consistency with points and badges, transforming mundane tasks into an engaging journey of self-improvement.'
        },
        build: {
          overview: 'Built over 3 months as a full-stack mobile application with a Flutter frontend and Spring Boot backend, featuring local and remote database synchronization.',
          highlights: [
            'Implemented SQLite for offline-first functionality',
            'Designed custom UI components with Material Design',
            'Created a RESTful API with Spring Boot for data sync',
            'Built comprehensive test suite with >80% coverage'
          ],
          challenge: 'Synchronizing local SQLite data with the remote database while maintaining app performance required implementing a robust queue system and conflict resolution strategy.'
        },
        technologies: {
          description: 'A hybrid architecture combining Flutter for cross-platform UI with a Java Spring Boot backend for scalability.',
          stack: ['Flutter', 'Dart', 'SQLite', 'Spring Boot', 'Java', 'REST API', 'Material Design', 'JUnit'],
          features: [
            'Cross-platform deployment (iOS, Android, Desktop)',
            'Local-first architecture with cloud sync',
            'Real-time badge animations and rewards',
            'Comprehensive task categorization system'
          ]
        }
      }
    },
    {
      id: 'race-control',
      title: 'Race Control Dashboard',
      description: 'A real-time race management system featuring live runner tracking, lap timing, and dynamic leaderboards. Built with Node.js and vanilla JavaScript for optimal performance. Used by race assistants on iPad for easy mobility and real-time updates.',
      techStack: ['JavaScript', 'Node.js', 'Express', 'HTML/CSS', 'Real-time Updates'],
      features: [
        'Live race tracking with automatic lap detection',
        'Real-time leaderboard updates',
        'Runner management and registration system',
        'Responsive dashboard interface',
        'JSON-based data persistence'
      ],
      githubLink: 'https://github.com/WIDALI/race-control',
      videoPlaceholder: '🏃 Race Control Demo',
      deviceType: 'ipad',
      videoSrc: "/portfolio/JS_Runner.mp4",
      reversed: true,
      cardContent: {
        idea: {
          description: 'A lightweight, iPad-optimized race management system for assistants to track runners in real-time during events.',
          problem: 'Traditional race timing systems are expensive, complex, and require dedicated hardware. Race assistants needed a simple, mobile solution.',
          solution: 'A web-based dashboard that turns any iPad into a professional race control station, with instant updates and intuitive controls.'
        },
        build: {
          overview: 'Built in 2 weeks using vanilla JavaScript and Node.js, prioritizing simplicity and real-time performance without heavy frameworks.',
          highlights: [
            'Zero-framework frontend for maximum speed',
            'JSON file-based persistence for portability',
            'Auto-refresh leaderboard every 3 seconds',
            'One-tap lap recording interface'
          ],
          challenge: 'Ensuring sub-second lap recording accuracy while maintaining real-time leaderboard updates required careful event handling and optimized DOM manipulation.'
        },
        technologies: {
          description: 'Pure JavaScript for the frontend with Node.js/Express backend, chosen for minimal setup and maximum portability.',
          stack: ['JavaScript', 'Node.js', 'Express', 'HTML5', 'CSS3', 'JSON Storage'],
          features: [
            'Real-time updates without WebSockets',
            'Responsive design optimized for iPad',
            'Instant lap time calculations',
            'Persistent runner database'
          ]
        }
      }
    },
    {
      id: 'scheduled',
      title: 'Scheduled App',
      description: 'A clean and intuitive scheduling application for personal time management. Built with Flutter, featuring calendar views, task prioritization, and notification reminders.',
      techStack: ['Flutter', 'Dart', 'Provider', 'Local Notifications', 'Material Design'],
      features: [
        'Interactive calendar interface',
        'Task creation and management',
        'Priority levels and categories',
        'Push notifications for reminders',
        'Clean, minimal UI design'
      ],
      githubLink: 'https://github.com/WIDALI/scheduled_app',
      videoPlaceholder: '📅 Scheduled Demo',
      deviceType: 'macbook',
      videoSrc: "/portfolio/Scheduled.mp4",
      reversed: false,
      cardContent: {
        idea: {
          description: 'A minimalist scheduling app focused on clarity and ease of use, perfect for individuals who want to manage their time without complexity.',
          problem: 'Most scheduling apps are bloated with features users never use, creating a cluttered experience that defeats the purpose of simplicity.',
          solution: 'A streamlined interface that focuses on the essentials: creating tasks, setting priorities, and receiving timely reminders—nothing more, nothing less.'
        },
        build: {
          overview: 'Developed as a personal productivity tool, later expanded with community feedback to include priority levels and enhanced calendar views.',
          highlights: [
            'Provider state management for reactive UI',
            'Custom calendar widget with gesture controls',
            'Local notification system with snooze',
            'Material Design 3 theming'
          ],
          challenge: 'Creating a custom calendar widget that felt native while supporting complex gesture interactions required deep Flutter animation knowledge and custom render objects.'
        },
        technologies: {
          description: 'Flutter with Provider for state management, prioritizing native performance and smooth animations.',
          stack: ['Flutter', 'Dart', 'Provider', 'Local Notifications', 'Material Design 3', 'Shared Preferences'],
          features: [
            'Cross-platform (iOS, Android, macOS, Windows)',
            'Offline-first with local storage',
            'Custom gesture-based calendar',
            'Smart notification scheduling'
          ]
        }
      }
    }
  ];

  return (
    <div className="App">
      <Navigation />
      <div 
        className={`hero-wrapper ${scrollProgress > 0.01 ? 'zooming' : ''}`}
        style={{
          transform: `scale(${1 + scrollProgress * 0.5})`,
          opacity: Math.max(0, 1 - scrollProgress * 1.2),
          pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto',
          visibility: scrollProgress > 0.9 ? 'hidden' : 'visible',
          zIndex: scrollProgress > 0.5 ? 0 : 10
        }}
      >
        <Hero />
      </div>
      <div className="content-wrapper">
        <AboutMe />
        
        {/* Industry Section */}
        <section id="industry" className="industry-section">
          <div className="industry-content">
            <h2 className="section-title">Industry Experience</h2>
            <p className="section-subtitle">Full-Year Industrial Placement • London, UK</p>
            
            <div className="industry-role">
              <div className="role-header">
                <h3>Software Engineering Placement</h3>
                <span className="role-duration">2025 - Present</span>
              </div>
              <p className="role-description">
                Currently completing a full-year industrial placement as part of my university program, working on AWS infrastructure and Big Data solutions. 
                Working primarily independently with supervisor code reviews, handling complex data engineering challenges in a production environment.
              </p>
            </div>

            <div className="industry-projects">
              <div className="industry-card">
                <div className="card-icon">📊</div>
                <h4>Inbound/Outbound Reporting Enhancement</h4>
                <IndustryCarousel
                  slides={[
                    <p key="1">Engineered an automated data reconciliation system using PySpark on AWS Athena to validate data integrity across a pipeline. Evolved from interactive Athena notebooks to a production solution with modular S3-based scripts, enabling non-technical stakeholders to configure parameters (dates, environments) without code changes.</p>,
                    <p key="2">The system validates millions of records across three stages: XML declaration ingestion, Parquet transformation, and successful processing responses. Implemented performance optimizations that reduced runtime by 75%, with cost optimised Spark compute. Deployed via Jenkins CI/CD with multi-environment support (test/UAT/prod).</p>,
                    <p key="3">Successfully deployed to production, processing hundreds of thousands of daily records and generating partitioned CSV reports that track pipeline success rates and provide detailed error diagnostics for troubleshooting data quality issues, run weekly by stakeholders.</p>
                    
                  ]}
                />
                <div className="tech-tags-inline">
                  <span>PySpark</span>
                  <span>AWS S3</span>
                  <span>DynamoDB</span>
                  <span>Jenkins</span>
                  <span>Bitbucket</span>
                </div>
              </div>

              <div className="industry-card">
                <div className="card-icon">🔧</div>
                <h4>OpenSearch Index Repair </h4>
                <IndustryCarousel
                  slides={[
                    <p key="1">Architected and developed a production-scale Apache Spark application on AWS EMR Serverless to automatically detect, repair, and regenerate corrupted OpenSearch indexes. Initially tested using Jupyter notebooks attached to EMR clusters for interactive development and exploration, then transformed into a headless production solution orchestrated via AWS Step Functions.</p>,
                    <p key="2">The solution processes millions of records across multiple indexes by comparing Parquet versions in DynamoDB with live index versions in OpenSearch, performing complex multi-table joins across 10+ related datasets, and creating accurate JSON transformations to handle large-scale rebuilds without impacting production systems. Deployed with blue/green patterns in secure VPC environments.</p>,
                    <p key="3">After initial testing and iteration, the solution was deployed, successfully repairing over 1 million outdated records across multiple production indexes, and can now be run on demand by stakeholders.</p>
                  ]}
                />
                <div className="tech-tags-inline">
                  <span>Apache Spark</span>
                  <span>OpenSearch</span>
                  <span>AWS EMR</span>
                  <span>AWS Step Functions</span>
                </div>
              </div>

              <div className="industry-card">
                <div className="card-icon">🔍</div>
                <h4>Conflict Reporting API</h4>
                <IndustryCarousel
                  slides={[
                    <p key="1">Developed a serverless conflict reporting API for a client to automate the identification of rights disputes across multiple territories and data providers, with Salesforce-integrated user authentication and authorization.</p>,
                    <p key="2">The solution was built using AWS Lambda to process client API requests with configurable parameters (territories, date ranges, conflicting parties). Designed and implemented a complex Athena SQL query comprising a dozen CTEs to efficiently process and join large Parquet datasets in S3, with asynchronous processing via SFTP delivery and sophisticated territory-based filtering logic.</p>,
                    <p key="3">Delivered a scalable system that processes millions of records and reduces conflict report generation from days to hours, enabling faster resolution of rights disputes for enterprise clients.</p>
                  ]}
                />
                <div className="tech-tags-inline">
                  <span>AWS Lambda</span>
                  <span>AWS Athena</span>
                  <span>SQL</span>
                  <span>API Gateway</span>
                  <span>Salesforce Authorisation</span>
                </div>
              </div>
            </div>

            <div className="industry-stack">
              <h4>Core Technologies</h4>
              <div className="stack-tags">
                <span className="stack-tag">AWS</span>
                <span className="stack-tag">PySpark</span>
                <span className="stack-tag">Apache Spark</span>
                <span className="stack-tag">Bitbucket</span>
                <span className="stack-tag">Jenkins</span>
                <span className="stack-tag">Elasticsearch</span>
                <span className="stack-tag">Lambda</span>
                <span className="stack-tag">Athena</span>
                <span className="stack-tag">S3</span>
                <span className="stack-tag">EMR</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-container">
          <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Explore my latest work</p>
          </div>
          {projects.map((project) => (
            <ProjectSection key={project.id} {...project} />
          ))}
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's connect and collaborate</p>
            <div className="contact-links">
              <a href="https://github.com/WIDALI" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">💻</span>
                <h3>GitHub</h3>
                <p>Check out my repositories</p>
              </a>
              <a href="https://www.linkedin.com/in/widad-alli-1b381331a/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-icon">💼</span>
                <h3>LinkedIn</h3>
                <p>Connect professionally</p>
              </a>
              <a href="mailto:widadoalli@gmail.com" className="contact-card">
                <span className="contact-icon">📧</span>
                <h3>Email</h3>
                <p>Send me a message</p>
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Widad Alli.</p>
          <p>Built with CI/CD: caffeine in, code deployed.</p>
          <div className="footer-links">
            <a href="https://github.com/WIDALI" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/widad-alli-1b381331a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:widadoalli@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
