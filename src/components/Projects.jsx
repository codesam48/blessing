import { useRef, useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Mobile carousel: work out which card is centred, and let the dots jump to a card.
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0];
    if (!card) return;
    const step = card.getBoundingClientRect().width + 16;
    setActive(Math.min(projects.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const goTo = (i) => {
    const el = trackRef.current;
    const card = el?.children[i];
    if (!card) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id="projects" className="section section--cream" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading label="MY PROJECTS" id="projects-title" align="center">
            Featured <em>Projects</em>
          </SectionHeading>
        </Reveal>
        <div className="projects__grid" ref={trackRef} onScroll={onScroll}>
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="carousel-dots" role="group" aria-label="Choose a project">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              className={i === active ? 'is-active' : ''}
              aria-label={`Show ${p.name}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
