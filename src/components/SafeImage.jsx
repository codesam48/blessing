import { useState } from 'react';
import { ImageOff } from 'lucide-react';

// Shows the image, or a clearly labelled placeholder if the file is missing.
export default function SafeImage({ src, alt, label = 'Image to be added', className, ...rest }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`placeholder ${className || ''}`} role="img" aria-label={`Placeholder: ${label}`}>
        <ImageOff size={22} aria-hidden="true" />
        <span>{label}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
