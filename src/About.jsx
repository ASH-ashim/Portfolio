import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiTailwindcss, SiNodedotjs, SiExpress, SiNestjs, SiNextdotjs,
  SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiWebrtc,
  SiReact as SiReactNative, SiElectron, SiLinux, SiDocker,
  SiRedux, SiSass, SiPostman, SiJest, SiThreedotjs, SiAmazonwebservices,
  SiWireshark, SiGo, SiKubernetes, SiGrafana, SiPrometheus,
  SiFirebase, SiVercel
} from 'react-icons/si';
import './About.css';
const About = () => {
  const techStacks = [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
    { name: "WebSockets", icon: <SiWebrtc />, color: "#333333" },
    { name: "React Native", icon: <SiReactNative />, color: "#61DAFB" },
    { name: "Electron", icon: <SiElectron />, color: "#47848F" },
    { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Redux.js", icon: <SiRedux />, color: "#764ABC" },
    { name: "Sass", icon: <SiSass />, color: "#CC6699" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
    { name: "Three.js", icon: <SiThreedotjs />, color: "#000000" },
    { name: "AWS", icon: <SiAmazonwebservices />, color: "#232F3E" },
    { name: "Wireshark", icon: <SiWireshark />, color: "#1679A7" },
    { name: "GoLang", icon: <SiGo />, color: "#00ADD8" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "Grafana", icon: <SiGrafana />, color: "#F46800" },
    { name: "Prometheus", icon: <SiPrometheus />, color: "#E6522C" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Vercel", icon: <SiVercel />, color: "#000000" }
  ];

  return (
    <section id="tech-stack" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          My <span className="gradient-text">Tech Stacks</span>
        </h2>
        <p className="about-subtitle">
          Technnologies I have worked with
        </p>

        <div className="tech-grid">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              style={{ '--tech-color': tech.color }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

</div>
    </section>
  );
};

export default About;