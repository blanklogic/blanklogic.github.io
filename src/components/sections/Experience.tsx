import { Building, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Junior Full Stack Developer",
      company: "Monark",
      location: "Toronto, Ontario, CA",
      period: "Aug 2025 - Present",
      description: "Building mobile applications from ground up using React Native, Expo, and JavaScript. Working closely with product team to maximize User Experience in Leadership Relationship Management.",
      highlights: [
        "Full-stack mobile development with React Native",
        "Collaboration with product teams for UX optimization",
        "Git version control and development best practices"
      ],
      icon: Building,
      gradient: "gradient-hero"
    },
    {
      type: "leadership",
      title: "Deputy Director, Technologies Directorate",
      company: "NUS Students' NUS College Club",
      location: "Singapore",
      period: "Sep 2024 - Sep 2025",
      description: "Spearheading refresh of club's website and building community products. Planning system architecture designs and guiding operations for a team of 27.",
      highlights: [
        "Led team of 27 in building community products",
        "System architecture design and planning",
        "Community engagement tool development (LaundroBot, QueueBot)"
      ],
      icon: Award,
      gradient: "gradient-card"
    },
    {
      type: "education",
      title: "Bachelor of Computing in Computer Science (Honours)",
      company: "National University of Singapore",
      location: "Singapore",
      period: "Aug 2023 - Dec 2026",
      description: "Pursuing Computer Science with NUS College (USP). Relevant coursework includes Programming Methodology, Data Structures & Algorithms, and Software Engineering.",
      highlights: [
        "Programming Methodology (JavaScript)",
        "Data Structures & Algorithms",
        "Software Engineering (Java)"
      ],
      icon: GraduationCap,
      gradient: "gradient-accent"
    },
    {
      type: "education",
      title: "Diploma with Merit in Aerospace Electronics",
      company: "Ngee Ann Polytechnic",
      location: "Singapore",
      period: "Apr 2018 - May 2021",
      description: "Graduated with Merit (GPA: 3.99/4.0). Awarded Rotary Switchgear Silver Medal & Prize (Salutatorian), Lien Ying Chow Scholarship.",
      highlights: [
        "GPA: 3.99/4.0 - Salutatorian",
        "Computer Programming (C) and Applications Programming (C#)",
        "Lien Ying Chow Scholarship recipient"
      ],
      icon: GraduationCap,
      gradient: "gradient-hero"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'red-pantone';
      case 'leadership': return 'cerulean';
      case 'education': return 'berkeley-blue';
      default: return 'non-photo-blue';
    }
  };

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous growth through hands-on experience, leadership roles, 
            and academic excellence in computer science and technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-berkeley-blue via-red-pantone to-cerulean opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.title}-${exp.company}`}
                className="relative flex items-start space-x-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 ${exp.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <exp.icon size={24} className="text-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 hover-lift hover-glow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-lg font-semibold text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${getTypeColor(exp.type)} mt-2 flex-shrink-0`}></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16 glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { award: "Rotary Switchgear Silver Medal & Prize", detail: "Salutatorian - Ngee Ann Polytechnic" },
              { award: "Lien Ying Chow Scholarship", detail: "Academic Excellence Recognition" },
              { award: "Director's List", detail: "Consistent Academic Performance" }
            ].map((award, index) => (
              <div 
                key={award.award}
                className="text-center space-y-2 p-4 rounded-lg bg-secondary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={24} className="text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">{award.award}</h4>
                <p className="text-sm text-muted-foreground">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;