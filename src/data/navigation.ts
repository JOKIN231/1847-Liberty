import { NavigationItem, SocialLink } from '../types/content';

export const primaryNavigation: NavigationItem[] = [
  { name: 'Watch', path: '/watch', description: 'The Liberty Show & video broadcasts' },
  { name: 'Read', path: '/read', description: 'In-depth essays, analysis & reportage' },
  { name: 'Listen', path: '/listen', description: 'Podcasts & audio dispatches' },
  { name: 'Community', path: '/community', description: 'Public discourse, townhalls & civic polls' },
  { name: 'About', path: '/about', description: 'Mission, masthead & editorial charter' },
];

export const secondaryNavigation: NavigationItem[] = [
  { name: 'Book Thomas M. Sarko', path: '/book', description: 'Speaking engagements & keynote moderation' },
  { name: 'Partner With Us', path: '/partner', description: 'Sponsorships, syndication & institutional partnerships' },
  { name: 'Contact', path: '/contact', description: 'Newsroom inquiries & letters to the editor' },
  { name: 'Search Archive', path: '/search', description: 'Explore articles, interviews & transcripts' },
];

export const footerNavigation = {
  editorial: [
    { name: 'Public Affairs', path: '/read?cat=public-affairs' },
    { name: 'Economy & Trade', path: '/read?cat=economy' },
    { name: 'Culture & Heritage', path: '/read?cat=culture' },
    { name: 'Diaspora Dialogue', path: '/read?cat=diaspora' },
    { name: 'Opinion & Analysis', path: '/read?cat=opinion' },
  ],
  programs: [
    { name: 'The Liberty Show', path: '/watch' },
    { name: 'Audio Dispatches', path: '/listen' },
    { name: 'Civic Polls', path: '/community' },
    { name: 'Archive & Index', path: '/search' },
  ],
  organization: [
    { name: 'About 1847 Liberty', path: '/about' },
    { name: 'Editorial Charter & Standards', path: '/about#standards' },
    { name: 'Masthead & Contributors', path: '/about#masthead' },
    { name: 'Partner & Advertise', path: '/partner' },
    { name: 'Book Dialogue / Keynotes', path: '/book' },
    { name: 'Contact Newsroom', path: '/contact' },
  ],
};

export const socialLinks: SocialLink[] = [
  { platform: 'YouTube', label: '1847 Liberty Broadcast', url: 'https://youtube.com', handle: '@1847Liberty' },
  { platform: 'LinkedIn', label: '1847 Liberty Discourse', url: 'https://linkedin.com', handle: '1847 Liberty' },
  { platform: 'X', label: '1847 Liberty', url: 'https://x.com', handle: '@1847Liberty' },
];
