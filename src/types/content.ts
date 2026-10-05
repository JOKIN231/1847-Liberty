export type ContentCategory = 
  | 'public-affairs'
  | 'economy'
  | 'culture'
  | 'diaspora'
  | 'opinion'
  | 'the-liberty-show';

export interface Category {
  id: ContentCategory;
  name: string;
  slug: string;
  description: string;
  count?: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: ContentCategory;
  categoryLabel: string;
  excerpt: string;
  contentLead?: string;
  author: {
    name: string;
    title: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  leadStory?: boolean;
}

export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  slug: string;
  showTitle: 'The Liberty Show';
  host: 'Thomas M. Sarko';
  guest?: {
    name: string;
    role: string;
  };
  duration: string;
  broadcastDate: string;
  description: string;
  topics: string[];
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  videoPlaceholderNotice?: string;
}

export interface CommunityPoll {
  id: string;
  question: string;
  category: string;
  description: string;
  totalVotes: number;
  closingDate: string;
  options: {
    id: string;
    label: string;
    votes: number;
    percentage: number;
  }[];
}

export interface NavigationItem {
  name: string;
  path: string;
  highlight?: boolean;
  description?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
}
