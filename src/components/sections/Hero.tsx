import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import portrait from '../../assets/heroPortrait.jpg';

export default function Hero() {
  return <section id="home" className="shell hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · NUS COMPUTER SCIENCE</p>
      <h1 id="hero-title">Curiosity in.<br /><span className="serif accent">Good software</span><br />out.</h1>
      <p className="hero-intro">Hi, I’m Jaymeson. I build full-stack products, mobile experiences, and AI tools that make everyday work a little easier.</p>
      <div className="hero-actions"><a href="#projects" className="button button-primary">Explore my work <ArrowDown size={17} /></a><a href="#contact" className="text-link">Let’s connect <ArrowUpRight size={17} /></a></div>
      <div className="hero-footnote"><span>From Singapore. Building with curiosity.</span><div className="social-links"><a href="https://github.com/blanklogic" target="_blank" rel="noreferrer" aria-label="Jaymeson on GitHub"><Github size={19} /></a><a href="https://www.linkedin.com/in/jaymesonkoh/" target="_blank" rel="noreferrer" aria-label="Jaymeson on LinkedIn"><Linkedin size={19} /></a></div></div>
    </div>
    <div className="hero-visual"><div className="portrait-frame"><img src={portrait} alt="Jaymeson by Niagara Falls" loading="eager" width="3024" height="4032" /></div><div className="availability-note"><span className="status-dot" /><div><strong>Ready for what’s next.</strong><span>Graduate SWE roles · May 2027</span></div><ArrowUpRight size={22} /></div><span className="photo-index">01 / ALWAYS EXPLORING</span></div>
    <div className="hero-strip"><span className="strip-label">A FEW PLACES I’VE BUILT & LEARNED</span><a href="https://www.nus.edu.sg"><span className="organisation-logo organisation-logo-nus"><img src="/nus.png" alt="National University of Singapore" /></span></a><a href="https://www.leadwithmonark.com"><span className="organisation-logo organisation-logo-monark"><img src="/monark.png" alt="Monark" /></span></a><a href="https://www.cme-pro.com"><span className="organisation-logo organisation-logo-cme"><img src="/cme.png" alt="CME-Pro" /></span></a></div>
  </section>;
}
