# Blessing Chukwudi Ajah – Portfolio

React + Vite, vanilla CSS, Framer Motion, React Router (hash routing, so it works on any static host).

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```

## Images and media

Already included in `public/images/`:

- `profile.jpg`: portrait (hero and About).
- `bejewelry/post-01.webp` to `post-13.webp`: 13 real Bejewelry posts.
- `bejewelry/video-01.mp4`, `video-02.mp4` (with `-poster.jpg` stills): autoplay muted in the gallery grid.
- `bejewelry/thumbnail.webp`: project card image.

Still needed:

- `talentmesh/thumbnail.jpg`: TalentMesh project card image (a placeholder shows until it exists).
- TalentMesh screenshots and content samples for its case study.

Not used: the collage screenshot of eight product shots (it repeats other images).

## Adding more gallery designs

Put the file in `public/images/bejewelry/`, then add an entry to `bejewelry.gallery` in `src/data/projects.js`:

```js
{ type: 'image', src: './images/bejewelry/post-14.webp',
  alt: 'Describe the post', caption: 'Optional', width: 1080, height: 1350 }
```

Videos use `type: 'video'` with an optional `poster`. Setting `width` and `height` keeps each post's real aspect ratio. Visitors who prefer reduced motion see the poster still instead of autoplay.

## Information still to confirm with Blessing

- Bejewelry: which tasks she did (content planning, caption writing, publishing, engagement), which tools she actually used, and any verified outcomes or lessons.
- TalentMesh: confirmed responsibilities, work samples, engagement and market-validation activities, tools used.

Each of these shows a small "to be confirmed" note on the case-study page so nothing is invented. Fill in the matching fields in `src/data/projects.js`.

## Contact form

The site has no backend. Create a free endpoint (for example Formspree) and paste its URL into `formEndpoint` in `src/data/site.js`. Until then the form validates input and tells the visitor that nothing was sent, offering a pre-filled email and her direct email and phone links instead.

## Content notes

Only the three verified social links are used. No metrics, awards, dates or testimonials are included.
