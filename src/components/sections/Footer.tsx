import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-non-photo-blue/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">
              Jaymeson Koh
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer & Computer Science Student
            </p>
          </div>

          {/* Right side */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-pantone fill-red-pantone" />
              <span>and</span>
              <Coffee size={16} className="text-berkeley-blue" />
              <span>lots of matcha</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jaymeson Koh. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-8 border-t border-non-photo-blue/10 text-center">
          <p className="text-sm text-muted-foreground">
            Always excited to connect with fellow developers and innovators. 
            Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;