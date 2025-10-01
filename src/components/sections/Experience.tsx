import { Building, GraduationCap, Award, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Junior Full Stack Developer",
      company: "Monark",
      location: "Toronto, Ontario, Canada & Calgary, Alberta, Canada",
      period: "Aug 2025 - Present",
      description:
        "Currently working as a Junior Full Stack Developer through the NUS Overseas Colleges program. Building mobile applications from ground up using React Native, Expo, and JavaScript while collaborating with product teams to maximize user experience.",
      highlights: [
        "Full-stack mobile development with React Native",
        "Collaboration with product teams for UX optimization",
        "Git version control and development best practices",
        "International work experience through NUS program",
      ],
      icon: Building,
      color: "uranian-blue",
    },
    {
      type: "education",
      title: "NUS Overseas Colleges Programme",
      company: "University of Toronto",
      location: "Toronto, Ontario, Canada",
      period: "Aug 2025 - Aug 2026",
      description:
        "Currently pursuing a 1-year exchange program at University of Toronto through NUS Overseas Colleges, focusing on entrepreneurship and advanced computer science coursework in an international setting.",
      highlights: [
        "International exchange program with entrepreneurship focus",
        "Advanced computer science coursework",
        "Cross-cultural academic experience in Canada",
      ],
      icon: GraduationCap,
      color: "thistle",
    },
    {
      type: "leadership",
      title: "Deputy Director, Technologies Directorate",
      company: "NUS Students' NUS College Club",
      location: "Singapore",
      period: "Sep 2024 - Sep 2025",
      description:
        "Leading the refresh of club's website and building community products. Planning system architecture designs and guiding operations for technology initiatives to enhance member experience.",
      highlights: [
        "Spearheading website redesign and community product development",
        "System architecture design and technical planning",
        "Leading technology initiatives for student community",
        "Project management and team coordination",
      ],
      icon: Building,
      color: "carnation-pink",
    },
    {
      type: "education",
      title: "Bachelor of Computing in Computer Science",
      company: "National University of Singapore",
      location: "Singapore",
      period: "Aug 2023 - May 2027",
      description:
        "Pursuing Computer Science degree with focus on software engineering, algorithms, and full-stack development. Currently maintaining strong academic performance while gaining practical industry experience.",
      highlights: [
        "Core subjects: Data Structures, Algorithms, Software Engineering",
        "Programming languages: Java, Python, JavaScript, TypeScript",
        "Practical project experience with modern frameworks",
      ],
      icon: GraduationCap,
      color: "light-sky-blue",
    },
    {
      type: "education",
      title: "NUS College / University Scholars Programme",
      company: "National University of Singapore",
      location: "Singapore",
      period: "Aug 2023 - May 2027",
      description:
        "NUS College is an interdisciplinary honours college at the National University of Singapore (NUS) that offers a holistic four-year residential program to high-potential students, integrating a rigorous common curriculum, experiential learning, and a rich residential life. Its curriculum aims to foster critical thinking and interdisciplinary problem-solving skills for the 21st century, complementing the students' chosen NUS major with a broader, global perspective and smaller class sizes",
      highlights: [
        "Formerly known as University Scholars Programme, 2nd batch of NUS College",
        "Core subjects: Philosophy, Sociology, Science, Arts, Humanities",
        "Curious, Critical, Courageous, Engaged",
      ],
      icon: GraduationCap,
      color: "light-sky-blue",
    },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      "carnation-pink": "bg-[hsl(var(--carnation-pink))]",
      "uranian-blue": "bg-[hsl(var(--uranian-blue))]",
      thistle: "bg-[hsl(var(--thistle))]",
      "light-sky-blue": "bg-[hsl(var(--light-sky-blue))]",
    };
    return colorMap[color];
  };

  const getDotColor = (type) => {
    const colorMap = {
      work: "bg-[hsl(var(--carnation-pink))]",
      leadership: "bg-[hsl(var(--uranian-blue))]",
      education: "bg-[hsl(var(--thistle))]",
    };
    return colorMap[type] || "bg-[hsl(var(--light-sky-blue))]";
  };

  return (
    <section id="experience" className="py-20 scroll-mt-20 section-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            International experience across Singapore and Canada, combining
            academic excellence with practical software engineering skills
            gained through hands-on industry experience and leadership roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[hsl(var(--uranian-blue))] opacity-20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${exp.company}`}
                className="relative flex items-start space-x-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 w-16 h-16 ${getColorClass(exp.color)} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <exp.icon size={24} className="text-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 hover-lift hover-glow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${getDotColor(exp.type)} mt-2 flex-shrink-0`}
                          ></div>
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

        {/* Skills & Technologies */}
        <div className="mt-16 glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Languages",
                skills: "Java, TypeScript, Python",
                color: "carnation-pink",
              },
              {
                category: "Frontend",
                skills: "React, Next.js, React Native",
                color: "uranian-blue",
              },
              {
                category: "Backend",
                skills: "PostgreSQL, Firebase, APIs",
                color: "thistle",
              },
              {
                category: "Tools",
                skills: "Git, Docker, Vercel, Expo",
                color: "light-sky-blue",
              },
            ].map((skillSet, index) => (
              <div
                key={skillSet.category}
                className="text-center space-y-2 p-4 rounded-lg bg-[hsl(var(--muted))]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 bg-[hsl(var(--${skillSet.color}))] rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <Award size={24} className="text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">
                  {skillSet.category}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {skillSet.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
