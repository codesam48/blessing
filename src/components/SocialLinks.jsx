import Icon from './Icon.jsx';
import { socials } from '../data/site.js';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`} aria-label="Social media profiles">
      {socials.map((s) => (
        <li key={s.id}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
            <Icon name={s.id} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
