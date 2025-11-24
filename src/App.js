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
      title: '75 Hard: Student Edition',
      status: 'IN DEVELOPMENT',
      description: 'A comprehensive student productivity application built with Flutter. Features task management, scheduling, points-based rewards system, and gamification elements to enhance student engagement.',
      techStack: ['Flutter', 'Dart', 'SQLite', 'Spring Boot (Java)'],
      features: [
        'Task and assignment tracking with categories',
        'Interactive scheduling system',
        'Points-based reward system with badges',
        'Cross-platform support (iOS, Android, Desktop)'
      ],
      githubLink: 'https://github.com/75-Hard-Student-Edition/75-Student',
      videoPlaceholder: '📚 75-Student Demo',
      deviceType: 'iphone',
      videoSrc: "/portfolio/75_Student.mp4",
      figmaDesignImage: '/portfolio/GUI.png',
      reversed: false,
      cardContent: {
        idea: {
          description: 'Inspired by the 75-Hard mental toughness program, I designed this app to solve a real problem I observed: students struggle with productivity not because they lack discipline, but because tracking progress feels like another chore. The solution? Apply gamification psychology-specifically, the same streak mechanics that keep people hooked on Snapchat.',
          problem: 'Students know what they need to do, but maintaining consistency is hard when there is no immediate feedback loop. Traditional productivity apps are either too clinical or too complex, creating friction instead of motivation.',
          solution: 'A gamified system built on behavioral psychology principles: streaks create commitment, badges provide milestones, leaderboards introduce friendly competition. The app transforms daily tasks into an engaging progression system-designed through extensive UX research, comparative analysis of habit-forming apps, and color theory for productivity optimization.'
        },
        build: {
          overview: 'Conducted full UI/UX research cycle-analyzing competitor apps (iOS Reminders, Todoist, Habitica), studying gamification frameworks, prototyping in Figma, then building a production-ready Flutter app with Spring Boot backend. The final implementation matches the Figma prototype with pixel-perfect fidelity.',
          highlights: [
            'Researched productivity psychology and gamification theory',
            'Created high-fidelity Figma prototypes with complete user flows',
            'Implemented offline-first architecture with SQLite',
            'Built Spring Boot REST API for cross-device sync',
            'Designed custom animations for badge unlocks and streak celebrations'
          ],
          challenge: 'Balancing game-like engagement with genuine productivity utility. The design had to feel rewarding without becoming a distraction-requiring careful UX decisions around notification timing, badge frequency, and visual feedback intensity.'
        },
        technologies: {
          description: 'Full-stack mobile development: Flutter/Dart for cross-platform UI, Spring Boot (Java) backend for data sync, and Figma for design. Currently being developed for App Store release.',
          stack: ['Flutter', 'Dart', 'SQLite', 'Spring Boot (Java)', 'REST API', 'Figma', 'UI/UX Research'],
          features: [
            'Cross-platform (iOS, Android, Desktop)',
            'Streak system with visual progress indicators',
            'Collectible badges based on achievement milestones',
            'Friend leaderboards for competitive motivation',
            'Offline-first with cloud sync'
          ]
        }
      }
    },
    {
      id: 'race-control',
      title: 'Race Control',
      description: 'A real-time race management system featuring live runner tracking, lap timing, and dynamic leaderboards. Built with Node.js and vanilla JavaScript for optimal performance. Used by race assistants on iPad for easy mobility and real-time updates.',
      techStack: ['JavaScript', 'Node.js', 'Express', 'HTML/CSS', 'Offline Sync'],
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
          description: 'This project exists to prove a point: you do not need React, Vue, or Angular to build a production-quality full-stack application. Built entirely in vanilla JavaScript with a Node.js/Express backend, this race management system prioritizes backend engineering and real-time performance over visual polish.',
          problem: 'Race assistants need to log lap times with sub-second accuracy during live events. Any latency or complexity in the UI means missed recordings. Traditional systems are overengineered for this simple but critical use case.',
          solution: 'A no-framework web app optimized for iPad use that handles runner registration, live lap recording, automatic leaderboard updates, offline sync, and persistent storage - all without a single npm package on the frontend.'
        },
        build: {
          overview: 'Built backend-first using pure JavaScript and Node.js/Express. The focus was on data persistence, offline fallback logic, real-time UI updates, and computational accuracy for timers and lap counts - not on design aesthetics.',
          highlights: [
            'Zero frontend frameworks - pure JavaScript for DOM manipulation',
            'Node.js/Express server with JSON-based data persistence',
            'Offline sync ensures no data loss during connectivity issues',
            'Auto-refresh leaderboard every 3 seconds without WebSockets',
            'Optimized event handling for sub-second lap recording accuracy'
          ],
          challenge: 'Maintaining real-time leaderboard accuracy while handling rapid lap inputs required careful attention to JavaScript event loops, DOM batching, and race conditions-all without the abstractions modern frameworks provide.'
        },
        technologies: {
          description: 'Deliberately built without frontend frameworks to demonstrate core JavaScript competency. Node.js/Express backend with JSON file storage for maximum portability.',
          stack: ['Vanilla JavaScript', 'Node.js', 'Express', 'HTML5', 'CSS3', 'JSON Storage', 'Offline Sync'],
          features: [
            'Real-time updates using polling (no WebSockets needed)',
            'Offline-first architecture with automatic sync',
            'iPad-optimized responsive design',
            'Instant lap time calculations with millisecond precision',
            'Persistent runner database across sessions'
          ]
        }
      }
    },
    {
      id: 'scheduled',
      title: 'Scheduled App',
      description: 'A clean and intuitive scheduling application for personal time management. Built with Flutter, featuring calendar views, task prioritization, and notification reminders.',
      techStack: ['Flutter', 'Dart', 'HIVE Database', 'CSV Import', 'Decision Tree Algorithm'],
      decisionMapImage: '/portfolio/Decision_Map.png',
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
          description: 'The core problem: I study best in structured blocks, but optimal scheduling depends on dozens of variables - urgency, energy level, task complexity, time of day, etc. Rather than manually deciding every time, I built a decision tree algorithm that asks the right questions and outputs a custom CPU scheduling algorithm tailored to my current state.',
          problem: 'Generic study schedules do not account for individual differences in focus patterns, energy levels, or task preferences. Most scheduling apps assume one-size-fits-all priority systems, forcing users to manually configure complex logic.',
          solution: 'A 41-node decision tree with 19 endpoints, each mapped to a specific CPU scheduling algorithm (Dynamic Weighted First-Come-First-Serve, Priority Override Round-Robin, etc.). The system asks targeted questions (green/yellow/red branching), processes responses through a HIVE database, and generates a personalized Gantt chart optimized for that study session.'
        },
        build: {
          overview: 'Designed the entire decision tree structure on paper first, translated it into a CSV format, then built a Flutter app that reads the CSV into a HIVE database and traverses the tree based on user input. Each endpoint triggers a different scheduling algorithm implementation.',
           highlights: [
             '41-node decision tree with recursive branching logic',
             '19 custom CPU scheduling algorithm variants',
             'Green/Yellow/Red choice system-each branch leads to different algorithm endpoints',
             'HIVE database stores decision state and allows session resume',
             'CSV-driven tree structure for easy algorithm modifications',
             'Custom Gantt chart widget with Flutter animations'
           ],
          challenge: 'The algorithmic complexity was high-ensuring each branch led to the correct endpoint, handling intersecting paths where different routes could yield the same algorithm, and building a state machine that could pause/resume mid-quiz required careful systems design and extensive testing.'
        },
         technologies: {
           description: 'Flutter for the UI, HIVE for local database persistence, CSV parsing for decision tree ingestion, and custom algorithm implementations for each scheduling variant. This project demonstrates algorithm design, data structures, and systems thinking.',
           stack: ['Flutter', 'Dart', 'HIVE Database', 'CSV Parser', 'Decision Tree Algorithms', 'State Machine Logic', 'Custom Widgets'],
           features: [
             'Cross-platform (iOS, Android, macOS, Windows)',
             '41-node decision tree with 19 algorithm endpoints',
             'HIVE database for decision state persistence',
             'CSV-driven tree structure (modifiable without code changes)',
             'Gantt chart visualization with custom Flutter rendering',
             'Interactive decision map overlay for algorithm transparency'
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
                <span className="role-duration">Aug 2025 - Present</span>
              </div>
              <p className="role-description">
                Currently completing a full-year industrial placement as part of my university program, working with AWS services across Big Data projects and CopyRight product development. Working in a team with experienced engineers as well as independently with supervisor code reviews, handling complex data engineering challenges for production use.
              </p>
            </div>

            <div className="industry-projects">
              <div className="industry-card">
                <div className="card-icon">📊</div>
                <h4>Inbound/Outbound Reporting Enhancement</h4>
                <IndustryCarousel
                  slides={[
                    <p key="1">Designed and built an end-to-end data reconciliation pipeline using PySpark on AWS Athena to validate data integrity across XML ingestion, Parquet transformation, and response processing stages. Architected a FileLoader orchestrator and modular S3-based parameter system that allows non-technical stakeholders to configure dates, environments, and sources without touching code.</p>,
                    <p key="2">Implemented the entire recon logic from scratch, validating millions of records daily across three pipeline stages. Developed performance optimizations that reduced query runtime by 75% through strategic use of partition pruning and broadcast joins. Built weekly CSV reporting system with detailed error diagnostics for data quality monitoring.</p>,
                    <p key="3">Successfully deployed to production via Jenkins CI/CD across test/UAT/prod environments. The system now processes hundreds of thousands of records daily, enabling stakeholders to run ad-hoc historical analyses and catch data quality issues within hours instead of weeks.</p>
                    
                  ]}
                />
                <div className="tech-tags-inline">
                  <span>PySpark</span>
                  <span>AWS Athena</span>
                  <span>S3</span>
                  <span>Jenkins CI/CD</span>
                  <span>Bitbucket</span>
                </div>
              </div>

              <div className="industry-card">
                <div className="card-icon">🔧</div>
                <h4>OpenSearch Index Repair </h4>
                <IndustryCarousel
                  slides={[
                    <p key="1">Developed the core Spark logic for a production-scale index repair system that automatically detects, repairs, and regenerates corrupted OpenSearch indexes. Built and tested the detection algorithms interactively using Jupyter notebooks on EMR clusters, then converted the solution into headless Python for automated execution. Worked within a secure VPC environment using bastion-based access.</p>,
                    <p key="2">Implemented complex multi-table joins across 10+ related datasets, comparing Parquet versions stored in DynamoDB against live OpenSearch indexes to identify discrepancies. Created JSON transformation logic to accurately reconstruct missing or corrupted index entries. The Spark jobs process millions of records while maintaining data consistency during rebuilds.</p>,
                    <p key="3">Contributed to a system that successfully repaired over 1 million outdated records across multiple production indexes. The solution is now integrated into automated workflows and can be triggered on-demand by stakeholders for safe, controlled index maintenance operations.</p>
                  ]}
                />
                <div className="tech-tags-inline">
                  <span>Apache Spark</span>
                  <span>OpenSearch</span>
                  <span>AWS EMR</span>
                  <span>VPC/Bastion</span>
                </div>
              </div>

              <div className="industry-card">
                <div className="card-icon">🔍</div>
                <h4>Conflict Reporting API</h4>
                <IndustryCarousel
                  slides={[
                    <p key="1">Contributed to a serverless conflict reporting API that automates the identification of rights disputes across multiple territories and data providers. Working alongside senior engineers, I focused on the data layer, designing the query logic that powers the reporting system. Developed and tested queries via bastion access to secure EMR notebooks within the VPC.</p>,
                    <p key="2">Designed and implemented a highly complex Athena SQL query comprising a dozen Common Table Expressions (CTEs) to efficiently process and join large Parquet datasets in S3. The query handles multi-territory filtering, conflicting party identification, and date-range analysis across millions of records. Optimized for asynchronous execution to support SFTP-based report delivery to clients.</p>,
                    <p key="3">The data logic I built now processes millions of records and reduces conflict report generation from days to hours, enabling enterprise clients to resolve rights disputes significantly faster. The API integrates with Salesforce authentication and supports configurable parameters for flexible reporting.</p>
                  ]}
                />
                <div className="tech-tags-inline">
                  <span>AWS Athena</span>
                  <span>SQL (CTEs)</span>
                  <span>AWS Lambda</span>
                  <span>S3/Parquet</span>
                  <span>VPC/Bastion</span>
                </div>
              </div>
            </div>

            <div className="industry-stack">
              <h4>Core Technologies</h4>
              <div className="stack-tags">
                <span className="stack-tag">AWS Services</span>
                <span className="stack-tag">PySpark</span>
                <span className="stack-tag">Apache Spark</span>
                <span className="stack-tag">Bitbucket</span>
                <span className="stack-tag">Jenkins</span>
                <span className="stack-tag">CDK Deployment</span>
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
