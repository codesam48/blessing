import { profile } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section section--cream" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__art" aria-hidden="true">
          <div className="about__orbit about__orbit--one" />
          <div className="about__orbit about__orbit--two" />
          <div className="about__pulse" />
          <div className="about__badge about__badge--top">Brand</div>
          <div className="about__badge about__badge--bottom">Growth</div>
        </div>

        <Reveal className="about__content" delay={0.08}>
          <SectionHeading label="ABOUT ME" id="about-title">
            A little <em>about</em> me
          </SectionHeading>
          <p className="lead">{profile.aboutBio}</p>
          <ul className="contact-row">
            <li>
              <Icon name="pin" size={18} />
              <span>{profile.location}</span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
