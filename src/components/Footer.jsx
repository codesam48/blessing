import { ArrowUp } from 'lucide-react';
import { profile } from '../data/site.js';
import SocialLinks from './SocialLinks.jsx';
import { scrollToTop } from '../utils/scroll.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="monogram monogram--static" aria-hidden="true">
            {profile.monogram}
          </span>
          <span>{profile.name}</span>
        </div>
        <SocialLinks />
        <button type="button" className="footer__top" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
