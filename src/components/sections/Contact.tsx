import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tellmindblank@gmail.com",
      href: "mailto:tellmindblank@gmail.com",
      color: "uranian-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toronto",
      href: null,
      color: "carnation-pink"
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
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Hi Jaymeson,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:tellmindblank@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  const getColorClass = (color) => {
    const colorMap = {
      'carnation-pink': 'bg-[hsl(var(--carnation-pink))]',
      'uranian-blue': 'bg-[hsl(var(--uranian-blue))]',
      'thistle': 'bg-[hsl(var(--thistle))]'
    };
    return colorMap[color];
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20 section-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-dark">
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
                  <div className={`w-12 h-12 ${getColorClass(contact.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <contact.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="font-medium text-foreground hover:text-primary-dark transition-colors"
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
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 glass-card hover-lift text-muted-foreground hover:text-primary-dark transition-colors"
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
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-[hsl(var(--uranian-blue))] rounded-lg flex items-start space-x-3">
                <CheckCircle className="text-foreground flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Message sent successfully!</p>
                  <p className="text-sm text-foreground/80">I'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-2 rounded-lg bg-[hsl(var(--muted))] border-2 transition-colors focus:outline-none focus:border-[hsl(var(--uranian-blue))] ${
                      errors.name ? 'border-red-400' : 'border-transparent'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2 rounded-lg bg-[hsl(var(--muted))] border-2 transition-colors focus:outline-none focus:border-[hsl(var(--uranian-blue))] ${
                      errors.email ? 'border-red-400' : 'border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2 rounded-lg bg-[hsl(var(--muted))] border-2 border-transparent transition-colors focus:outline-none focus:border-[hsl(var(--uranian-blue))]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  className={`w-full px-4 py-2 rounded-lg bg-[hsl(var(--muted))] border-2 transition-colors focus:outline-none focus:border-[hsl(var(--uranian-blue))] resize-none ${
                    errors.message ? 'border-red-400' : 'border-transparent'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                    <AlertCircle size={14} />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[hsl(var(--uranian-blue))] text-foreground font-semibold rounded-lg hover-lift shine-effect flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
