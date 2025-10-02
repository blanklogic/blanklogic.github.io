import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Brain,
  Users,
  ChevronRight,
  Star,
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "SQLancer Benchmarking Platform",
      description:
        "Led a team of 6 developers to build a comprehensive benchmarking platform for SQLancer database management system. Developed interactive dashboards and metrics visualization using modern web technologies.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Vercel",
        "Data Visualization",
        "Team Leadership",
      ],
      features: [
        "Interactive dashboard for benchmarking metrics",
        "Team leadership in agile development environment",
        "Sprint planning and project management",
        "Modern responsive web application architecture",
      ],
      icon: Globe,
      color: "uranian-blue",
      period: "Jan 2025 - Apr 2025",
      category: "web",
      featured: true,
      metrics: { team: "6 developers", methodology: "Agile" },
      github: "https://github.com/blanklogic",
      url: "https://github.com/blanklogic",
    },
    {
      id: 2,
      title: "InternBuddy - Application Management System",
      description:
        "Led a team of 5 developers to create a comprehensive internship application management system. Evolved from AddressBook-3 codebase using brownfield development methodology with Agile practices.",
      tech: ["Java", "JavaFX", "JUnit", "Git", "Gradle"],
      features: [
        "Complete job application lifecycle management",
        "Advanced filtering and search functionality",
        "Data persistence with JSON storage",
        "Comprehensive testing suite with high coverage",
      ],
      icon: Users,
      color: "thistle",
      period: "Aug 2024 - Nov 2024",
      category: "desktop",
      featured: true,
      metrics: { team: "5 developers", role: "Team Lead" },
      github: "https://github.com/AY2425S1-CS2103T-T09-1/tp",
      url: "https://ay2425s1-cs2103t-t09-1.github.io/tp",
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      description:
        "Developed a comprehensive personal finance tracking mobile application with real-time synchronization and intuitive expense management features using React Native and modern mobile development practices.",
      tech: ["React Native", "Expo", "Firebase", "JavaScript", "Mobile Dev"],
      features: [
        "Real-time expense tracking and categorization",
        "Cross-platform mobile application development",
        "Cloud data synchronization capabilities",
        "Intuitive user interface design",
      ],
      icon: Smartphone,
      color: "carnation-pink",
      period: "Independent Software Development Project - 2024",
      category: "mobile",
      featured: true,
      metrics: { platform: "iOS/Android", type: "Pair Project" },
      github: "https://github.com/blanklogic",
      url: "https://blanklogic.github.io/Finnovations",
    },
    {
      id: 4,
      title: "Ultimate Tic-Tac-Toe AI Agent",
      description:
        "Implemented an intelligent game-playing agent using Minimax algorithm with alpha-beta pruning and custom heuristic functions for competitive Ultimate Tic-Tac-Toe as part of coursework.",
      tech: ["Python", "Minimax Algorithm", "AI/ML", "Algorithm Design"],
      features: [
        "Minimax algorithm with alpha-beta pruning",
        "Custom heuristic evaluation functions",
        "Game state representation and analysis",
        "Performance optimization for competitive play",
      ],
      icon: Brain,
      color: "light-sky-blue",
      period: "Academic Project - 2024",
      category: "ai",
      featured: false,
      metrics: { performance: "High", course: "AI/ML" },
      github: "https://github.com/blanklogic",
      url: "https://github.com/blanklogic",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", color: "uranian-blue" },
    { id: "web", label: "Web Development", color: "carnation-pink" },
    { id: "mobile", label: "Mobile Apps", color: "thistle" },
    { id: "desktop", label: "Desktop Applications", color: "light-sky-blue" },
    { id: "ai", label: "AI/ML", color: "thistle" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getColorClass = (color) => {
    const colorMap = {
      "carnation-pink": "bg-[hsl(var(--carnation-pink))]",
      "uranian-blue": "bg-[hsl(var(--uranian-blue))]",
      thistle: "bg-[hsl(var(--thistle))]",
      "light-sky-blue": "bg-[hsl(var(--light-sky-blue))]",
    };
    return colorMap[color];
  };

  return (
    <section id="projects" className="py-20 scroll-mt-20 section-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Featured Projects
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of technical projects demonstrating full-stack
            development skills, team leadership, and experience with modern
            technologies across web, mobile, and AI domains.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 hover-lift ${
                  activeFilter === filter.id
                    ? `bg-[hsl(var(--${filter.color}))] text-foreground shadow-lg scale-105`
                    : "glass-card text-muted-foreground hover:scale-105"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-8 hover-lift hover-glow space-y-6 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 bg-[hsl(var(--thistle))] rounded-full text-xs font-semibold">
                  <Star size={12} className="fill-current" />
                  <span>Featured</span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 ${getColorClass(project.color)} rounded-xl flex items-center justify-center shine-effect`}
                  >
                    <project.icon size={28} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary-dark transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.period}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    className="p-2 glass-card rounded-lg text-muted-foreground hover:text-[hsl(var(--uranian-blue))] hover:scale-110 transition-all"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    className="p-2 glass-card rounded-lg text-muted-foreground hover:text-[hsl(var(--uranian-blue))] hover:scale-110 transition-all"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="flex flex-wrap gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--uranian-blue))]"></div>
                      <span className="text-muted-foreground capitalize">
                        {key}:
                      </span>
                      <span className="font-semibold text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center space-x-2">
                  <ChevronRight
                    size={16}
                    className="text-[hsl(var(--uranian-blue))]"
                  />
                  <span>Key Features</span>
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                      style={{
                        opacity: hoveredProject === project.id ? 1 : 0.7,
                        transform:
                          hoveredProject === project.id
                            ? "translateX(4px)"
                            : "translateX(0)",
                        transition: `all 0.3s ease ${featureIndex * 0.05}s`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--uranian-blue))] mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center space-x-2">
                  <ChevronRight
                    size={16}
                    className="text-[hsl(var(--thistle))]"
                  />
                  <span>Technologies</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 glass-card text-xs font-medium hover:bg-[hsl(var(--uranian-blue))] hover:scale-105 transition-all cursor-default"
                      style={{
                        transitionDelay:
                          hoveredProject === project.id
                            ? `${techIndex * 0.03}s`
                            : "0s",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/blanklogic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass-card rounded-lg hover-lift shine-effect flex items-center space-x-2 mx-auto font-semibold text-foreground transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
