import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/site.js';
import SafeImage from './SafeImage.jsx';
import SocialLinks from './SocialLinks.jsx';
import useSectionNav from '../hooks/useSectionNav.js';

const tags = ['Strategy', 'Content', 'Engagement', 'Growth'];

export default function Hero() {
  const goTo = useSectionNav();
  const reduce = useReducedMotion();

  const fade = reduce
    ? {}
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: 'easeOut' } };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <motion.div className="hero__text" {...fade}>
          <p className="hero__hello">Hello, I’m</p>
          <h1 id="hero-title" className="hero__name">
            Blessing <span className="gold">Chukwudi</span> Ajah
          </h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__bio">{profile.heroBio}</p>
          <div className="hero__actions">
            <button type="button" className="btn btn--gold" onClick={() => goTo('projects')}>
              View My Projects
            </button>
            <button type="button" className="btn btn--outline" onClick={() => goTo('contact')}>
              Contact Me
            </button>
          </div>
          <SocialLinks />
        </motion.div>

        <motion.div
          className="hero__visual"
          {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.1 } })}
        >
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__frame">
            <SafeImage
              src={profile.portrait}
              alt="Portrait of Blessing Chukwudi Ajah"
              label="Portrait to be added (public/images/profile.jpg)"
              className="hero__portrait"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <ul className="hero__tags" aria-hidden="true">
            {tags.map((t, i) => (
              <li key={t} className={`hero__tag hero__tag--${i + 1}`}>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
