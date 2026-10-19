import {
  Megaphone,
  Share2,
  CalendarDays,
  Compass,
  PenLine,
  Users,
  Sparkles,
  Palette,
  Clapperboard,
  Instagram,
  Facebook,
  Linkedin,
  Music2,
  MessageCircle,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const icons = {
  megaphone: Megaphone,
  share: Share2,
  calendar: CalendarDays,
  compass: Compass,
  pen: PenLine,
  users: Users,
  sparkles: Sparkles,
  palette: Palette,
  clapperboard: Clapperboard,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  music: Music2,
  message: MessageCircle,
  lightbulb: Lightbulb,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
};

export default function Icon({ name, size = 22, ...rest }) {
  const Cmp = icons[name] || Sparkles;
  return <Cmp size={size} strokeWidth={1.6} aria-hidden="true" {...rest} />;
}
