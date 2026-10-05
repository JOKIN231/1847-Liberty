import { CommunityPoll } from '../types/content';

export const mockPolls: CommunityPoll[] = [
  {
    id: 'poll-01',
    question: 'What sector should receive the highest allocation of Liberia’s domestic development expenditure over the next 5 fiscal years?',
    category: 'Public Finance & Infrastructure',
    description: '1847 Liberty Community Poll examining public priorities for national infrastructure, healthcare, energy, and digital transformation.',
    totalVotes: 1420,
    closingDate: 'October 15, 2026',
    options: [
      { id: 'opt-1', label: 'Primary Road Corridors & Leeward County Transit', votes: 610, percentage: 43 },
      { id: 'opt-2', label: 'Reliable Hydroelectric & Solar Energy Grid Expansion', votes: 440, percentage: 31 },
      { id: 'opt-3', label: 'Vocational, Technical & STEM Higher Education', votes: 242, percentage: 17 },
      { id: 'opt-4', label: 'Regional Agricultural Processing & Storage Facilities', votes: 128, percentage: 9 },
    ],
  },
  {
    id: 'poll-02',
    question: 'How should the Liberian diaspora participate in future national legislative elections?',
    category: 'Civic Participation & Voting',
    description: 'Assessing public sentiment regarding diplomatic mission voting vs. secure digital balloting mechanisms.',
    totalVotes: 980,
    closingDate: 'October 22, 2026',
    options: [
      { id: 'opt-2-1', label: 'Direct in-person voting at Liberian Embassies and Consulates', votes: 392, percentage: 40 },
      { id: 'opt-2-2', label: 'Dedicated Out-of-Country Electoral Constituencies (Diaspora MPs)', votes: 343, percentage: 35 },
      { id: 'opt-2-3', label: 'Secure Audited Digital/Postal Ballot System', votes: 245, percentage: 25 },
    ],
  },
];
