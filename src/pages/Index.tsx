import Navigation from '../components/ui/navigation';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Index() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main"><Hero /><Projects /><Experience /><About /><Skills /><Contact /></main><Footer /></>;
}
