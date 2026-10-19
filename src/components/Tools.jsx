import { tools } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Tools() {
  return (
    <section id="tools" className="section section--black" aria-labelledby="tools-title">
      <div className="container">
        <Reveal>
          <SectionHeading label="TOOLS & TECHNOLOGIES" id="tools-title" align="center" onDark>
            Tools I <em>Use</em>
          </SectionHeading>
          <p className="section-intro">
            These are the tools and platforms I use to create, plan, publish, and manage social media content
            effectively.
          </p>
        </Reveal>

        <ul className="tools__grid">
          {tools.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.04} className="tool">
              <span className="tool__icon">
                <Icon name={t.icon} size={26} />
              </span>
              <span className="tool__name">{t.name}</span>
              <span className="tool__use">{t.use}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
