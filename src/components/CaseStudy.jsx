import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Info } from 'lucide-react';
import Reveal from './Reveal.jsx';
import ProjectGallery from './ProjectGallery.jsx';

// Shown wherever Blessing hasn't yet confirmed details, so nothing is invented.
function ToConfirm({ children }) {
  return (
    <p className="to-confirm">
      <Info size={16} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

function Block({ letter, title, children }) {
  return (
    <Reveal as="section" className="case__block" aria-label={title}>
      <h2>
        {letter && <span className="case__letter">{letter}</span>}
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

function BulletList({ items }) {
  return (
    <ul className="case__list">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function CaseStudy({ project }) {
  const isBejewelry = project.slug === 'bejewelry';

  return (
    <article className="case">
      <header className="case__hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
          </Link>
          <p className="eyebrow">CASE STUDY</p>
          <h1>
            {project.name}
            {project.status && <span className="badge badge--inline">{project.status}</span>}
          </h1>
          <p className="case__role">{project.role}</p>
          <p className="case__summary">{project.summary}</p>
        </div>
      </header>

      <div className="case__body">
        <div className="container case__container">
          <Block letter="A" title="Project Overview">
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Block>

          {!isBejewelry && (
            <Block letter="B" title="Project Objectives">
              <BulletList items={project.objectives} />
            </Block>
          )}

          {isBejewelry && (
            <Block letter="B" title="Social Media Post Gallery">
              <p>A selection of the social media post designs created for Bejewelry. Select any post to view it larger.</p>
              <ProjectGallery
                items={project.gallery}
                placeholderCount={project.placeholderCount}
                projectName={project.name}
              />
            </Block>
          )}

          <Block letter={isBejewelry ? 'C' : 'C'} title={isBejewelry ? 'Role and Contribution' : 'My Confirmed Responsibilities'}>
            {isBejewelry ? (
              <>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
                <ToConfirm>
                  Specific tasks (such as content planning, caption writing, publishing or audience engagement) will be
                  listed here once confirmed, so only work that was actually done is shown.
                </ToConfirm>
              </>
            ) : project.responsibilities.length ? (
              <BulletList items={project.responsibilities} />
            ) : (
              <>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
                <ToConfirm>Confirmed responsibilities will be added here.</ToConfirm>
              </>
            )}
          </Block>

          {!isBejewelry && (
            <>
              <Block letter="D" title="Content and Campaign Materials">
                {project.materials.length ? (
                  <BulletList items={project.materials} />
                ) : (
                  <ToConfirm>Real screenshots and content samples will be added here when supplied.</ToConfirm>
                )}
              </Block>
              <Block letter="E" title="Organic Marketing and Audience Engagement">
                {project.engagement.length ? (
                  <BulletList items={project.engagement} />
                ) : (
                  <ToConfirm>Documented activities will be added here. This work is ongoing.</ToConfirm>
                )}
              </Block>
              <Block letter="F" title="Market Validation">
                {project.validation.length ? (
                  <BulletList items={project.validation} />
                ) : (
                  <ToConfirm>Market-validation activities will be added here where documented.</ToConfirm>
                )}
              </Block>
            </>
          )}

          <Block letter={isBejewelry ? 'D' : 'G'} title="Tools Used">
            <ul className="chips chips--lg" aria-label="Tools used">
              {project.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {!project.toolsConfirmed && (
              <ToConfirm>The exact tools used on this project are still to be confirmed.</ToConfirm>
            )}
          </Block>

          <Block letter={isBejewelry ? 'E' : 'H'} title={isBejewelry ? 'Outcomes and Learning' : 'Lessons Learned and Outcomes'}>
            {project.outcomes.length ? (
              <BulletList items={project.outcomes} />
            ) : (
              <ToConfirm>
                Verified outcomes and lessons learned will be added here. No results are shown until they can be
                confirmed.
              </ToConfirm>
            )}
          </Block>

          {project.links.length > 0 && (
            <Block letter="F" title="Project Links">
              <ul className="case__links">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn--outline-dark">
                      {l.label} <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>
      </div>
    </article>
  );
}
