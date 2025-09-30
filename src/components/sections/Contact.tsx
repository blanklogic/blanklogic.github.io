import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tellmindblank@gmail.com",
      href: "mailto:tellmindblank@gmail.com",
      gradient: "gradient-hero"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+65 9109 6991",
      href: "tel:+6591096991",
      gradient: "gradient-card"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Singapore",
      href: null,
      gradient: "gradient-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/blanklogic",
      username: "blanklogic"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jaymesonkoh",
      username: "jaymesonkoh"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://blanklogic.github.io",
      username: "blanklogic.github.io"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Jaymeson,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:tellmindblank@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply connect with fellow developers and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a passionate developer, have an exciting project in mind, 
                or want to discuss the latest in technology, I'd love to hear from you. Let's create 
                something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.label}
                  className="flex items-center space-x-4 p-4 glass-card hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${contact.gradient} rounded-lg flex items-center justify-center`}>
                    <contact.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="font-medium text-foreground hover:text-carnation-pink transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Find me on</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 glass-card hover-lift hover-glow text-muted-foreground hover:text-carnation-pink transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon size={20} />
                    <div>
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs opacity-75">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 hover-glow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-thistle/30 focus:border-carnation-pink"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-thistle/30 focus:border-carnation-pink"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-background/50 border-thistle/30 focus:border-carnation-pink"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  required
                  className="bg-background/50 border-thistle/30 focus:border-carnation-pink resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-accent text-foreground font-semibold hover-lift"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;