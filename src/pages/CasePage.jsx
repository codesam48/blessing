import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CaseStudy from '../components/CaseStudy.jsx';
import { getProject } from '../data/projects.js';

export default function CasePage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? `${project.name} Case Study | Blessing Chukwudi Ajah`
      : 'Project not found | Blessing Chukwudi Ajah';
  }, [project]);

  if (!project) {
    return (
      <section className="section section--cream">
        <div className="container not-found">
          <h1>Project not found</h1>
          <p>We couldn’t find that project.</p>
          <Link to="/" className="btn btn--dark">
            Back to portfolio
          </Link>
        </div>
      </section>
    );
  }

  return <CaseStudy project={project} />;
}
