import { Heart, Code, Lightbulb, Target } from 'lucide-react';
import aboutIllustration from '@/assets/about-illustration.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "Driven by curiosity about how things work and how they can be enhanced, from childhood video games to modern software solutions."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in Java, TypeScript, Python, and React Native, focusing on creating user-centric solutions that make a real impact."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Thrive in fast-paced environments, tackling complex challenges with composure, adaptability, and rapid problem-solving skills."
    },
    {
      icon: Target,
      title: "Continuous Growth",
      description: "Committed to lifelong learning, constantly refining skills and staying current with technological breakthroughs."
    }
  ];

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Growing up in a modest family of four, I learned the values of hard work, 
            adaptability, and lifelong learning. These principles continue to shape my journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutIllustration} 
                alt="About illustration" 
                className="w-full h-auto rounded-2xl glass-card hover-lift"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full gradient-card rounded-2xl opacity-30"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My fascination with technology stems from my curiosity about how things work and 
                how they can be enhanced. Whether deciphering the code of childhood video games 
                like MapleStory or designing software solutions, I've always been drawn to 
                problem-solving and innovation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing Computer Science at NUS with a focus on creating impactful, 
                user-centric solutions. When I'm not coding, you'll find me playing harmonica, 
                practicing Taekwondo, or enjoying a cup of matcha while keeping up with the 
                latest tech trends.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="glass-card p-6 hover-lift hover-glow space-y-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                    <value.icon size={24} className="text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;