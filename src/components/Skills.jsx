import { skills } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section section--warm" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading label="MY SKILLS" id="skills-title" align="center">
            What I’m <em>good at</em>
          </SectionHeading>
          <p className="section-intro">
            I bring together creativity, strategy, and practical social media skills to help brands grow their online
            presence and stay connected with their audiences.
          </p>
        </Reveal>

        <ul className="skills__grid">
          {skills.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.05} className="skill-card">
              <span className="icon-circle">
                <Icon name={s.icon} />
              </span>
              <span className="skill-card__label">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
