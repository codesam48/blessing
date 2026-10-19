import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Tools from '../components/Tools.jsx';
import Projects from '../components/Projects.jsx';
import Experience from '../components/Experience.jsx';
// import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Blessing Chukwudi Ajah | Digital Marketer & Social Media Manager';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <section id="experience" className="section section--cream section--split">
        <div className="container split__grid">
          <Experience />
        </div>
      </section>
      <Contact />
    </>
  );
}
