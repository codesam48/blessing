// Project content and gallery references.
//
// HOW TO ADD GALLERY DESIGNS
// 1. Put image files in public/images/bejewelry/ (e.g. post-14.webp).
// 2. Add an entry to `gallery` below:
//      { type: 'image', src: './images/bejewelry/post-01.webp',
//        alt: 'Describe the post', caption: 'Optional short caption',
//        width: 1080, height: 1350 }
//    For videos use type: 'video' and (optionally) a poster image.
//    width/height keep the correct aspect ratio and prevent layout jumps.
// 3. Remove nothing else. Once real items exist, the placeholder tiles vanish.

export const bejewelry = {
  slug: 'bejewelry',
  name: 'Bejewelry',
  role: 'Digital Marketing',
  status: null,
  summary:
    'Bejewelry is a jewelry business project where I applied digital marketing knowledge and social media management skills to support an online business.',
  tools: ['Canva', 'ChatGPT', 'Instagram', 'Facebook', 'TikTok', 'WhatsApp Business'],
  // Thumbnail shown on the project card. Falls back to a placeholder if missing.
  thumbnail: './images/bejewelry/thumbnail.webp',
  thumbnailAlt: 'Gold clover necklace, bracelet and earrings set from the Bejewelry gallery',
  overview: [
    'Bejewelry is an online jewelry business. This project is where I applied what I learned in digital marketing to a real brand, with a focus on how a jewelry business shows up and communicates on social media.',
    'The purpose of the project was to put social media management skills into practice: creating post designs and presenting the brand consistently across its social platforms.',
  ],
  // Replace/confirm these with what she actually did on the project.
  contribution: {
    confirmed: ['Digital marketing'],
    toConfirm: [
      'Content planning',
      'Caption writing',
      'Social media publishing',
      'Audience engagement',
    ],
  },
  // Tools "where applicable" per the brief. Confirm each one.
  toolsConfirmed: false,
  outcomes: [],
  links: [
    {
      label: 'Bejewelry on Instagram',
      href: 'https://www.instagram.com/bejewelry01?vrfl=MXYwY2x1bXVwd3dkaA%3D%3D&utm_source=qr',
    },
    {
      label: 'Bejewelry on Facebook',
      href: 'https://www.facebook.com/share/1FJUhB6S1C/?mibextid=wwXIfr',
    },
  ],
  gallery: [
    {
      type: 'image',
      src: './images/bejewelry/post-01.webp',
      alt: 'Gold chunky bangle and swirl earrings on a glass dish, with a black bust wearing a clover necklace',
      caption: 'Jewelries under 5k',
      width: 615,
      height: 893,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-02.webp',
      alt: 'Four teardrop-shaped quartz watches in rose gold and silver on a white cushion',
      width: 597,
      height: 791,
    },
    {
      type: 'video',
      src: './images/bejewelry/video-01.mp4',
      poster: './images/bejewelry/video-01-poster.jpg',
      alt: 'Short Bejewelry video showcasing jewelry and watch sets',
      width: 576,
      height: 1024,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-03.webp',
      alt: 'Silver watch gift set with a pink dial, clover bracelet and bangles in a blue box',
      width: 615,
      height: 820,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-04.webp',
      alt: 'Two gold watch and bangle gift sets in purple and pink boxes',
      width: 618,
      height: 733,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-05.webp',
      alt: 'Two gold watch sets with clover and butterfly bracelets in green and pink gift boxes',
      width: 610,
      height: 863,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-06.webp',
      alt: 'Five oval Roman-numeral watches in gold and silver with different coloured dials',
      width: 617,
      height: 860,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-07.webp',
      alt: 'Five rectangular watches in gold and silver held on white cushions',
      width: 615,
      height: 865,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-08.webp',
      alt: 'Long pearl necklace with gold and crystal logo charms on a white bust',
      width: 592,
      height: 1012,
    },
    {
      type: 'video',
      src: './images/bejewelry/video-02.mp4',
      poster: './images/bejewelry/video-02-poster.jpg',
      alt: 'Short Bejewelry video showcasing jewelry',
      width: 576,
      height: 1032,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-09.webp',
      alt: 'Two polished gold wide bangles held in one hand',
      width: 571,
      height: 785,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-10.webp',
      alt: 'Open box of gold stainless steel rings in heart, leaf and band designs',
      width: 620,
      height: 932,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-11.webp',
      alt: 'Two rectangular watches with gold cases and two-tone bands on a white cushion',
      width: 591,
      height: 839,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-12.webp',
      alt: 'Gold stainless steel charm necklace on a black bust with a price overlay',
      caption: 'Stainless steel necklaces',
      width: 704,
      height: 1022,
    },
    {
      type: 'image',
      src: './images/bejewelry/post-13.webp',
      alt: 'Gold clover necklace, bracelet and earrings with mother-of-pearl in a presentation box',
      width: 736,
      height: 1308,
    },
  ],
  placeholderCount: 6,
};

export const talentmesh = {
  slug: 'talentmesh',
  name: 'TalentMesh',
  role: 'Digital Marketing / Social Media Management Intern',
  status: 'In Progress',
  showCaseStudy: false,
  summary:
    'this platform is designed to connect businesses with emerging technology talent. My work involves organic digital marketing and market validation to build awareness, engage potential users, and assess demand for the platform ahead of its app launch.',
  tools: ['ChatGPT', 'Canva', 'CapCut', 'Social media platforms'],
  thumbnail: './images/talentmesh/thumbnail.jpg',
  thumbnailAlt: 'TalentMesh campaign material created by Blessing',
  overview: [
    'TalentMesh is a platform designed to connect small and medium-sized businesses with emerging technology talent.',
    'I am working on the project as a Digital Marketing / Social Media Management Intern.',
  ],
  objectives: [
    'Build awareness of the platform ahead of its app launch.',
    'Engage potential users through organic digital marketing.',
    'Assess demand for the platform through market validation.',
  ],
  // Only list responsibilities she confirms. Placeholder until then.
  responsibilities: [],
  materials: [],
  engagement: [],
  validation: [],
  toolsConfirmed: false,
  outcomes: [],
  links: [],
};

export const projects = [bejewelry, talentmesh];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
