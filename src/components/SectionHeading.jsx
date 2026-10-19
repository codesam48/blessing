export default function SectionHeading({ label, children, id, align = 'left', onDark = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${onDark ? 'on-dark' : ''}`}>
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{children}</h2>
      <span className="rule" aria-hidden="true" />
    </div>
  );
}
