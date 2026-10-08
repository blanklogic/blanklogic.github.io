import { ArrowUp } from 'lucide-react';
export default function Footer() {
  return <footer className="shell site-footer"><a className="wordmark" href="#home" aria-label="Jaymeson Koh, back to top"><span className="logo-mark">jk<span>·</span></span></a><p>© {new Date().getFullYear()} Jaymeson Koh <span>·</span> Built with curiosity.</p><a className="back-to-top" href="#home">Back to top <ArrowUp size={15} /></a></footer>;
}
