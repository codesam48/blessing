import { motion, useReducedMotion } from 'framer-motion';

// Subtle scroll-triggered entrance. Content is never hidden when the user
// prefers reduced motion, and the offset is small so nothing feels delayed.
export default function Reveal({ children, delay = 0, y = 16, as = 'div', className, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
