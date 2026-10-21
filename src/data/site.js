// All site-wide content lives here so it is easy to update.

export const profile = {
  name: 'Blessing Chukwudi Ajah',
  monogram: 'BlessAjah',
  title: 'Digital Marketer / Social Media Manager',
  location: 'Port Harcourt, Rivers State, Nigeria',
  email: 'blessingsajahme@gmail.com',
  phone: '07019963931',
  // International format for tel: links (Nigeria +234)
  phoneHref: 'tel:+2347019963931',
  // Place the portrait at public/images/profile.jpg (or change this path).
  portrait: './images/profile.jpg',
  heroBio:
    'I am a digital marketer specializing in social media management. I am passionate about helping businesses build their online presence, connect with their target audience, and grow their brands through effective content planning and social media strategies.',
  aboutBio:
    'I am a digital marketer with a strong focus on social media management, content planning, and audience engagement. I enjoy developing content ideas and social media strategies that help businesses strengthen their online presence, communicate with their target audiences, and build their brands. I am committed to improving my skills, gaining practical experience, and helping businesses create meaningful connections with their audiences.',
};

// Only verified profile links. Do not add others.
export const socials = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/bejewelry01?vrfl=MXYwY2x1bXVwd3dkaA%3D%3D&utm_source=qr',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1FJUhB6S1C/?mibextid=wwXIfr',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/blessing-ajah-a93712364?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  // { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  { label: 'Digital Marketing', icon: 'megaphone' },
  { label: 'Social Media Management', icon: 'share' },
  { label: 'Content Planning', icon: 'calendar' },
  { label: 'Content Strategy', icon: 'compass' },
  { label: 'Social Media Caption Writing', icon: 'pen' },
  { label: 'Audience Engagement', icon: 'users' },
];

export const tools = [
  { name: 'ChatGPT', icon: 'sparkles', use: 'Content ideas, caption writing, and brainstorming' },
  { name: 'Canva', icon: 'palette', use: 'Graphic design and social media content creation' },
  { name: 'CapCut', icon: 'clapperboard', use: 'Video editing' },
  { name: 'Instagram', icon: 'instagram', use: 'Content publishing and audience engagement' },
  { name: 'Facebook', icon: 'facebook', use: 'Content publishing and business promotion' },
  { name: 'TikTok', icon: 'music', use: 'Short-form video content and promotion' },
  { name: 'WhatsApp Business', icon: 'message', use: 'Customer communication and business promotion' },
];

export const services = [
  {
    title: 'Social Media Management',
    text: 'Day-to-day management of your brand’s social media presence.',
    icon: 'share',
  },
  {
    title: 'Social Media Content Planning',
    text: 'Content ideas and themes planned around your brand and audience.',
    icon: 'lightbulb',
  },
  {
    title: 'Content Calendar Development',
    text: 'Clear posting schedules that keep your content consistent and organized.',
    icon: 'calendar',
  },
  {
    title: 'Social Media Caption Writing',
    text: 'Captions written to match your brand voice and speak to your audience.',
    icon: 'pen',
  },
  {
    title: 'Audience Engagement & Community Management',
    text: 'Responding to and connecting with your audience across platforms.',
    icon: 'users',
  },
];

export const experience = {
  work: {
    title: 'Practical Digital Marketing Experience',
    text: 'Practical digital marketing project experience through Bejewelry and ongoing internship work with TalentMesh.',
  },
  certification: {
    title: 'Digital Marketing Certificate',
    institution: 'Olotu Square Hub',
  },
  achievement: 'Completed digital marketing training at Olotu Square Hub.',
};

// Contact form delivery.
// The site has no backend. To make the form deliver messages, create a free
// form endpoint (for example at formspree.io) and paste its URL here.
// While this is empty the form validates input and then offers a pre-filled
// email draft instead of claiming the message was sent.
export const formEndpoint = '';
