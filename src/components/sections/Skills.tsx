import {
  Code,
  Database,
  Smartphone,
  Globe,
  Terminal,
  Palette,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "C",
        "C#",
        "HTML/CSS",
        "SQL",
      ],
      color: "uranian-blue",
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React", "Next.js", "TailwindCSS", "Node.js", "RESTful APIs"],
      color: "light-sky-blue",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        "React Native",
        "Expo",
        "Cross-platform Development",
        "Nativewind",
        "shadcn/ui"
      ],
      color: "thistle",
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        "PostgreSQL",
        "Firebase",
        "Firestore",
        "MySQL",
      ],
      color: "carnation-pink",
    },
    {
      icon: Terminal,
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "Vercel", "JUnit", "Linux"],
      color: "uranian-blue",
    },
  ];

  const technologies = [
    { name: "JavaScript/TypeScript", level: 92, color: "uranian-blue" },
    { name: "React/React Native", level: 90, color: "carnation-pink" },
    { name: "Java", level: 88, color: "thistle" },
    { name: "Python", level: 85, color: "light-sky-blue" },
    { name: "PostgreSQL/Firebase", level: 82, color: "carnation-pink" },
    { name: "Next.js/Node.js", level: 85, color: "uranian-blue" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBars(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const getColorClass = (color) => {
    const colorMap = {
      "carnation-pink": "bg-[hsl(var(--carnation-pink))]",
      "uranian-blue": "bg-[hsl(var(--uranian-blue))]",
      thistle: "bg-[hsl(var(--thistle))]",
      "light-sky-blue": "bg-[hsl(var(--light-sky-blue))]",
      "fairy-tale": "bg-[hsl(var(--fairy-tale))]",
    };
    return colorMap[color] || colorMap["uranian-blue"];
  };

  return (
    <section id="skills" className="py-20 scroll-mt-20 section-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise gained through academic
            coursework, industry internships, and hands-on project development
            across full-stack web development, mobile applications, and modern
            technologies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift hover-glow space-y-4 section-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`w-12 h-12 ${getColorClass(category.color)} rounded-lg flex items-center justify-center`}
                >
                  <category.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium rounded-full transition-all hover:scale-105 bg-[hsl(var(--muted))] text-foreground hover:bg-[hsl(var(--uranian-blue))]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div
          className="glass-card p-8 hover-glow section-reveal"
          ref={sectionRef}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="space-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-semibold">
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-[hsl(var(--muted))] rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${getColorClass(tech.color)} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: visibleBars ? `${tech.level}%` : "0%",
                      transitionDelay: `${index * 0.15}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-8 pt-8 border-t border-[hsl(var(--uranian-blue)/0.2)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-dark">7+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-dark">10+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-dark">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-dark">5+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
