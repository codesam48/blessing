import { useEffect, useState } from 'react';
import { Folder, House, Mail, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { navLinks, profile } from '../data/site.js';
import useSectionNav from '../hooks/useSectionNav.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const goTo = useSectionNav();
  const { pathname } = useLocation();

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== '/') {
      setActive('');
      return undefined;
    }
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Close the menu with Escape and lock scroll while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const handle = (e, id) => {
    e.preventDefault();
    setOpen(false);
    goTo(id);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="monogram" aria-label={`${profile.name} – home`} onClick={(e) => handle(e, 'home')}>
          <span>{profile.monogram}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={(e) => handle(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--outline navbar__cta" onClick={(e) => handle(e, 'contact')}>
          Let’s Connect
        </a>

        {/* Quick icons for small screens, as in the mobile wireframe */}
        <div className="navbar__quick">
          <a href="#home" aria-label="Home" onClick={(e) => handle(e, 'home')}>
            <House size={20} aria-hidden="true" />
          </a>
          <a href="#projects" aria-label="Projects" onClick={(e) => handle(e, 'projects')}>
            <Folder size={20} aria-hidden="true" />
          </a>
          <a href="#contact" aria-label="Contact" onClick={(e) => handle(e, 'contact')}>
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => handle(e, l.id)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold" onClick={(e) => handle(e, 'contact')}>
            Let’s Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
