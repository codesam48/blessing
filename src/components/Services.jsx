import { services } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import useSectionNav from '../hooks/useSectionNav.js';

export default function Services() {
  const goTo = useSectionNav();
  return (
    <Reveal id="services" className="services" delay={0.08} aria-labelledby="services-title">
      <SectionHeading label="MY SERVICES" id="services-title">
        What I <em>offer</em>
      </SectionHeading>
      <ul className="services__list">
        {services.map((s) => (
          <li key={s.title}>
            <span className="icon-circle icon-circle--sm">
              <Icon name={s.icon} size={18} />
            </span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn--dark" onClick={() => goTo('contact')}>
        Work With Me
      </button>
    </Reveal>
  );
}
