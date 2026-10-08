import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
const email = 'tellmindblank@gmail.com';
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); setMessage('Email address copied.'); }
    catch { setCopied(false); setMessage('Please select and copy the email address above.'); }
  }
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="shell contact-inner"><div><p className="eyebrow">04 / LET’S MAKE SOMETHING GOOD</p><h2 id="contact-title">The next chapter<br />starts with <span className="serif">hello.</span></h2><p>I’m looking for graduate software engineering opportunities<br className="desktop-break" /> in Singapore, starting May 2027. Have something in mind?</p><div className="contact-email"><a href={`mailto:${email}`}>{email} <ArrowUpRight size={28} /></a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div><span className="copy-status" role="status">{message}</span></div><div className="contact-aside"><span className="contact-spark" aria-hidden="true">✳</span><span className="contact-availability"><span className="status-dot" /> OPEN TO 2027 OPPORTUNITIES</span><p>Singapore citizen<br />No sponsorship required</p><div className="contact-socials"><a href="https://www.linkedin.com/in/jaymesonkoh/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/blanklogic" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a></div></div></div></section>;
}
