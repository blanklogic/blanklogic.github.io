import { useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const links = [['projects', 'Work'], ['experience', 'Experience'], ['about', 'About'], ['contact', 'Contact']];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } }}>
    <div className="shell nav-bar">
      <a href="#home" className="wordmark" aria-label="Jaymeson Koh, home" onClick={() => setOpen(false)}><span className="logo-mark">jk<span>·</span></span><span>Jaymeson Koh</span></a>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">{links.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}</nav>
      <div className="nav-actions"><ThemeToggle /><a className="resume-link" href="/JaymesonKohResume.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={16} /></a><button ref={menuButton} className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation">{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    </div>
  </header>;
}
