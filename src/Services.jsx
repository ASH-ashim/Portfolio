import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiTailwindcss, SiRedux, SiNextdotjs, SiThreedotjs,
  SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiMongodb,
  SiRedis, SiGraphql, SiFirebase, SiReact as SiReactNative,
  SiElectron, SiDocker, SiKubernetes, SiAmazonwebservices,
  SiGrafana, SiPrometheus, SiLinux
} from 'react-icons/si';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible, and performant user interfaces with modern frameworks and best practices.",
      techStack: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Three.js", icon: <SiThreedotjs />, color: "#000000" }
      ]
    },
    {
      title: "Backend Development",
      description: "Developing scalable server-side applications, APIs, and microservices with robust architecture.",
      techStack: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" }
      ]
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with native-like performance and smooth UX.",
      techStack: [
        { name: "React Native", icon: <SiReactNative />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" }
      ]
    },
    {
      title: "Desktop App Development",
      description: "Building secure, high-performance desktop applications for Windows, macOS and Linux.",
      techStack: [
        { name: "Electron", icon: <SiElectron />, color: "#47848F" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }
      ]
    },
    {
      title: "DevOps Engineering",
      description: "Implementing CI/CD pipelines, infrastructure as code, monitoring and cloud solutions.",
      techStack: [
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
        { name: "AWS", icon: <SiAmazonwebservices />, color: "#232F3E" },
        { name: "Grafana", icon: <SiGrafana />, color: "#F46800" },
        { name: "Prometheus", icon: <SiPrometheus />, color: "#E6522C" },
        { name: "Linux", icon: <SiLinux />, color: "#FCC624" }
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="services-subtitle">
          Comprehensive solutions tailored to your business needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="tech-stack-container">
                  <h4 className="tech-stack-title">Tech Stack:</h4>
                  <div className="tech-stack-grid">
                    {service.techStack.map((tech, techIndex) => (
                      <div 
                        key={techIndex} 
                        className="tech-icon-wrapper"
                        style={{ '--tech-color': tech.color }}
                        data-tooltip={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;