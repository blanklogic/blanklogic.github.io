import { Code, Database, Smartphone, Globe, Terminal, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C#", "HTML/CSS", "Bash Scripting"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React", "Next.js", "TailwindCSS", "Bootstrap", "JavaFX"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Expo", "Cross-platform Development"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Firebase", "Firestore", "SQLancer", "Database Management"]
    },
    {
      icon: Terminal,
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Linux", "Vim", "JUnit", "Vercel"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Adobe XD", "UI/UX Design", "Information Architecture", "User Experience"]
    }
  ];

  const technologies = [
    { name: "React Native", level: 95, color: "red-pantone" },
    { name: "JavaScript/TypeScript", level: 90, color: "cerulean" },
    { name: "Java", level: 88, color: "non-photo-blue" },
    { name: "Python", level: 85, color: "berkeley-blue" },
    { name: "Next.js", level: 82, color: "red-pantone" },
    { name: "TailwindCSS", level: 90, color: "cerulean" }
  ];

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience in full-stack development, 
            mobile applications, and modern web technologies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover-lift hover-glow space-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 gradient-card rounded-lg flex items-center justify-center">
                  <category.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="glass-card p-8 hover-glow">
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
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-${tech.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${tech.level}%`,
                      background: `hsl(var(--${tech.color}))`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;