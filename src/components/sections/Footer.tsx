import { Heart, Coffee, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 border-t border-[hsl(var(--uranian-blue)/0.2)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left side - Profile */}
          <div className="text-center md:text-left space-y-4">
            <div className="text-2xl font-bold text-primary-dark mb-2">
              Jaymeson Koh
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer & Computer Science Student
            </p>
            <p className="text-sm text-muted-foreground">
              🇸🇬 Singapore → 🇨🇦 Toronto • NUS Overseas Colleges
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://github.com/blanklogic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-full text-muted-foreground hover:text-[hsl(var(--uranian-blue))] transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jaymesonkoh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-full text-muted-foreground hover:text-[hsl(var(--uranian-blue))] transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tellmindblank@gmail.com"
                className="p-2 glass-card rounded-full text-muted-foreground hover:text-[hsl(var(--uranian-blue))] transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="px-3 py-2 glass-card text-sm font-medium hover:bg-[hsl(var(--uranian-blue))] hover:scale-105 transition-all rounded-full"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground flex items-center justify-center md:justify-end space-x-2">
              <span>Made with</span>
              <Heart
                size={16}
                className="text-[hsl(var(--carnation-pink))]"
                fill="hsl(var(--carnation-pink))"
              />
              <span>and lots of matcha</span>
              <Coffee size={16} className="text-[hsl(var(--maple-green))]" />
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jaymeson Koh. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-[hsl(var(--uranian-blue)/0.1)] text-center">
          <p className="text-sm text-muted-foreground">
            Always excited to connect with fellow developers and innovators.
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
