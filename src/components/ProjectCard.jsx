import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Reveal as="article" className="project-card" delay={index * 0.08}>
      <div className="project-card__media">
        <SafeImage
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          label={`${project.name} thumbnail to be added`}
          className="project-card__img"
        />
        {project.status && <span className="badge">{project.status}</span>}
      </div>
      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p className="project-card__role">{project.role}</p>
        <p className="project-card__text">{project.summary}</p>
        <ul className="chips" aria-label="Tools used">
          {project.tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.showCaseStudy !== false && (
          <Link to={`/projects/${project.slug}`} className="btn btn--dark">
            View Case Study <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
