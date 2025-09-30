import { ExternalLink, Github, Smartphone, Globe, Brain, Users } from 'lucide-react';
import { Button } from '../ui/button';

const Projects = () => {
  const projects = [
    {
      title: "FinTrack by Finnovations",
      description: "A comprehensive finance tracking mobile application that simplifies expense management with intuitive navigation and real-time synchronization.",
      tech: ["React Native", "TailwindCSS", "Expo", "Firebase", "Firestore"],
      features: [
        "Real-time expense tracking and categorization",
        "Intuitive UI/UX design following modern best practices",
        "Firebase integration for data synchronization",
        "Comprehensive spending analysis and trends"
      ],
      icon: Smartphone,
      gradient: "gradient-hero",
      period: "May 2024 - Aug 2024"
    },
    {
      title: "InternBuddy",
      description: "Led a team of 5 to develop an internship application management system, evolving AddressBook Level 3 in a brownfield manner.",
      tech: ["Java", "JavaFX", "Git", "JUnit", "Agile Methodology"],
      features: [
        "Complete application tracking system",
        "Team leadership and sprint management",
        "Code quality assurance and testing",
        "Brownfield development approach"
      ],
      icon: Users,
      gradient: "gradient-card",
      period: "Aug 2024 - Nov 2024"
    },
    {
      title: "SQLancer Benchmarking Platform",
      description: "Headed a team of 6 in building a comprehensive benchmarking platform for SQLancer database management system bug tracker.",
      tech: ["Next.js", "React", "TypeScript", "Vercel", "ScrumBan"],
      features: [
        "Interactive dashboard for benchmarking metrics",
        "Team leadership in agile environment",
        "Sprint planning and retrospectives",
        "Modern web frontend architecture"
      ],
      icon: Globe,
      gradient: "gradient-accent",
      period: "Jan 2025 - Apr 2025"
    },
    {
      title: "Ultimate Tic-Tac-Toe AI Agent",
      description: "Developed an intelligent playing agent using advanced AI & ML techniques with Minimax algorithm constraints.",
      tech: ["Python", "AI/ML", "Minimax Algorithm", "Heuristic Functions"],
      features: [
        "Advanced AI decision-making algorithms",
        "Heuristic function optimization",
        "Competitive agent performance",
        "Machine learning implementation"
      ],
      icon: Brain,
      gradient: "gradient-hero",
      period: "Mar 2025 - Apr 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions built with modern technologies, 
            demonstrating technical expertise and leadership in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card p-8 hover-lift hover-glow space-y-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <project.icon size={28} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="hover:text-red-pantone">
                    <Github size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-red-pantone">
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-pantone mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
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
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;