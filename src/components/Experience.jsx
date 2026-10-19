import { Briefcase, Award, GraduationCap } from 'lucide-react';
import { experience } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <Reveal className="journey" aria-labelledby="experience-title">
      <SectionHeading label="EXPERIENCE & ACHIEVEMENTS" id="experience-title">
        My <em>Journey</em>
      </SectionHeading>

      <div className="journey__group">
        <h3 className="journey__label">
          <Briefcase size={18} aria-hidden="true" /> Work Experience
        </h3>
        <h4>{experience.work.title}</h4>
        <p>{experience.work.text}</p>
      </div>

      <div className="journey__group">
        <h3 className="journey__label">
          <GraduationCap size={18} aria-hidden="true" /> Certification
        </h3>
        <h4>{experience.certification.title}</h4>
        <p>Institution: {experience.certification.institution}</p>
      </div>

      <div className="journey__group">
        <h3 className="journey__label">
          <Award size={18} aria-hidden="true" /> Additional Achievement
        </h3>
        <p>{experience.achievement}</p>
      </div>
    </Reveal>
  );
}
