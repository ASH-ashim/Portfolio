import { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiNextdotjs, SiTypescript } from 'react-icons/si';
import ProjectImg from './assets/Project.png';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    
    {
      id: 1,
      title: "To-Do List App",
      description: "A responsive todo list application with task management features.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-to-do-list.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 2,
      title: "Quiz App",
      description: "Interactive quiz application with multiple categories and score tracking.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-quiz-app.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 3,
      title: "Modern Calculator",
      description: "Feature-rich calculator with scientific functions and responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-calculator-app.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 4,
      title: "Rock Paper Scissors Game",
      description: "Interactive game with computer opponent and score tracking.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-rock-paper-scissor.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 5,
      title: "Digital Drawing App",
      description: "Canvas-based drawing application with multiple tools and color options.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-drawing-app.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 6,
      title: "Budget Tracker App",
      description: "Expense tracking application with visualization and local storage.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-budget-tracker-app.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 7,
      title: "Memory Card Game",
      description: "Card matching game with timer and move counter.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-memory-card-game.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 8,
      title: "Notes App",
      description: "Note-taking application with CRUD operations and local storage.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-notes-taking-app.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },
    {
      id: 9,
      title: "E-commerce Landing Page",
      description: "Responsive landing page for an e-commerce product.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend-js",
      image: ProjectImg,
      live: "https://ash-ecom-landing-page.netlify.app/",
      techIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />]
    },

    // Frontend (React.js - JSX)
    {
      id: 10,
      title: "E-commerce Product Page",
      description: "Interactive product page with gallery and cart functionality.",
      tags: ["React", "JSX", "CSS"],
      category: "frontend-react",
      image: ProjectImg,
      live: "https://ash-ecom-product-page-jsx.vercel.app/",
      techIcons: [<SiReact />, <SiJavascript />]
    },
    {
      id: 11,
      title: "Movie Search App",
      description: "Application for searching movies with details from an API.",
      tags: ["React", "JSX", "API"],
      category: "frontend-react",
      image: ProjectImg,
      live: "https://frontend-movie-search-app-jsx.vercel.app/",
      techIcons: [<SiReact />, <SiJavascript />]
    },
    {
      id: 12,
      title: "AI Image Generator",
      description: "Generate images using AI based on text prompts.",
      tags: ["React", "AI", "API"],
      category: "frontend-react",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiJavascript />]
    },
    {
      id: 13,
      title: "Twitter Clone",
      description: "Microblogging platform with posting and feed features.",
      tags: ["React", "Firebase"],
      category: "frontend-react",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiJavascript />]
    },
    {
      id: 14,
      title: "Chat Application",
      description: "Real-time messaging application with rooms and user authentication.",
      tags: ["React", "WebSockets"],
      category: "frontend-react",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiJavascript />]
    },

    // Frontend (React - TSX)
    {
      id: 15,
      title: "Podcast Player",
      description: "Audio streaming application for podcasts with playlist features.",
      tags: ["React", "TypeScript"],
      category: "frontend-ts",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiTypescript />]
    },
    {
      id: 16,
      title: "Real-time Collaborative Whiteboard",
      description: "Multi-user whiteboard with drawing synchronization.",
      tags: ["React", "TypeScript", "WebSockets"],
      category: "frontend-ts",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiTypescript />]
    },
    {
      id: 17,
      title: "AI Powered Resume Builder",
      description: "Application to create professional resumes with AI suggestions.",
      tags: ["React", "TypeScript", "AI"],
      category: "frontend-ts",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiTypescript />]
    },
    {
      id: 18,
      title: "Stock Market Dashboard",
      description: "Real-time stock market data visualization and analysis tool.",
      tags: ["React", "TypeScript", "API"],
      category: "frontend-ts",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiTypescript />]
    },

    // Backend Projects
    {
      id: 19,
      title: "High Performance Proxy API",
      description: "Scalable proxy service for API requests with caching.",
      tags: ["Node.js", "Redis"],
      category: "backend",
      image: ProjectImg,
      live: null,
      techIcons: [<SiNodedotjs />]
    },
    {
      id: 20,
      title: "Webhook Processing Engine",
      description: "Service for receiving, processing, and routing webhooks.",
      tags: ["Node.js", "Kafka"],
      category: "backend",
      image: ProjectImg,
      live: null,
      techIcons: [<SiNodedotjs />]
    },

    // Full Stack Projects
    {
      id: 21,
      title: "AI Powered Legal Document Analyzer",
      description: "Application for analyzing legal documents with AI insights.",
      tags: ["React", "Node.js", "AI"],
      category: "fullstack",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />, <SiNodedotjs />]
    },

    // Full Stack (Next.js)
    {
      id: 22,
      title: "AI Powered Court Case Predictor",
      description: "Predict case outcomes based on historical data and AI analysis.",
      tags: ["Next.js", "TypeScript", "AI"],
      category: "fullstack-next",
      image: ProjectImg,
      live: null,
      techIcons: [<SiNextdotjs />, <SiTypescript />]
    },

    // React Native
    {
      id: 23,
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts and nutrition.",
      tags: ["React Native", "Firebase"],
      category: "mobile",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />]
    },

    // Electron
    {
      id: 24,
      title: "File Organizer App",
      description: "Desktop application for organizing and categorizing files.",
      tags: ["Electron", "React"],
      category: "desktop",
      image: ProjectImg,
      live: null,
      techIcons: [<SiReact />]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend-js', name: 'Frontend (JS)' },
    { id: 'frontend-react', name: 'Frontend (React)' },
    { id: 'frontend-ts', name: 'Frontend (TS)' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'fullstack-next', name: 'Full Stack (Next.js)' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'desktop', name: 'Desktop' }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title">
          My <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="portfolio-subtitle">
          A collection of my completed and ongoing projects
        </p>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.live ? (
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-link">
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  ) : (
                    <div className="coming-soon">
                      <FiCode /> Stay Tuned - Project Coming Up!
                    </div>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techIcons.map((icon, index) => (
                    <span key={index} className="tech-icon">{icon}</span>
                  ))}
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;