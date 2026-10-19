import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

// Responsive masonry-style gallery with an accessible lightbox.
// Items come from src/data/projects.js, so adding designs never needs code changes.
export default function ProjectGallery({ items = [], placeholderCount = 6, projectName }) {
  const [openIndex, setOpenIndex] = useState(null);
  const reduce = useReducedMotion();
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  const hasItems = items.length > 0;

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (dir) => setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  // Keyboard support and scroll lock while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        // Keep focus inside the dialog.
        const focusables = document.querySelectorAll('.lightbox button');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, step]);

  if (!hasItems) {
    return (
      <div>
        <p className="gallery__note" role="note">
          <strong>Placeholder gallery.</strong> Blessing’s real {projectName} post designs will appear here once the
          images are added.
        </p>
        <ul className="gallery gallery--placeholder">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <li key={i} className="gallery__item">
              <div className="placeholder placeholder--post" role="img" aria-label={`Placeholder for post ${i + 1}`}>
                <ImageOff size={22} aria-hidden="true" />
                <span>Post {i + 1}</span>
                <small>Design to be added</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <ul className="gallery">
        {items.map((item, i) => (
          <li key={item.src} className="gallery__item">
            <button
              type="button"
              className="gallery__button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpenIndex(i);
              }}
              aria-label={`View larger: ${item.alt}`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  width={item.width}
                  height={item.height}
                  muted
                  loop
                  playsInline
                  // Autoplay only when the visitor hasn't asked for reduced motion.
                  autoPlay={!reduce}
                  preload="metadata"
                  aria-label={item.alt}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </button>
            {item.caption && <p className="gallery__caption">{item.caption}</p>}
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} post ${openIndex + 1} of ${items.length}`}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button type="button" ref={closeRef} className="lightbox__close" onClick={close} aria-label="Close preview">
            <X size={24} />
          </button>
          {items.length > 1 && (
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous post">
              <ChevronLeft size={28} />
            </button>
          )}
          <figure className="lightbox__figure">
            {current.type === 'video' ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                muted
                loop
                autoPlay={!reduce}
                playsInline
                aria-label={current.alt}
              />
            ) : (
              <img src={current.src} alt={current.alt} />
            )}
            {current.caption && <figcaption>{current.caption}</figcaption>}
          </figure>
          {items.length > 1 && (
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next post">
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
