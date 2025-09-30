import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import heroIllustration from '@/assets/hero-illustration.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient leading-tight">
                Jaymeson Koh
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                Full Stack Developer & Computer Science Student
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about creating innovative, user-centric technology solutions. 
              Currently pursuing Computer Science at NUS, with experience in React Native, 
              Java, and TypeScript.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="professional-accent hover-lift font-semibold">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://github.com/blanklogic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-pantone transition-colors hover-lift"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/jaymesonkoh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-pantone transition-colors hover-lift"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:tellmindblank@gmail.com"
                className="text-muted-foreground hover:text-red-pantone transition-colors hover-lift"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-up">
            <div className="relative z-10">
              <img 
                src={heroIllustration} 
                alt="Hero illustration" 
                className="w-full h-auto rounded-2xl glass-card animate-float"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full gradient-hero rounded-2xl opacity-20 animate-float" 
                 style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full gradient-card rounded-2xl opacity-20 animate-float" 
                 style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-red-pantone transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;