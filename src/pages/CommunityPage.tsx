import React, { useState } from 'react';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { CommunityPollCard } from '../components/community/CommunityPollCard';
import { mockPolls } from '../data/communityPolls';
import { MessageSquare, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CommunityPage: React.FC = () => {
  const [letterSubmitted, setLetterSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    topic: 'Governance',
    body: '',
  });

  const handleLetterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.body) {
      setLetterSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SectionHeader
        kicker="Civic Forum"
        title="Public Discourse & Citizen Inquiries"
        description="A platform for verified dialogue, citizen polling, and open debate among Liberians across the globe."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Active Polls */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mb-4">
              Active Community Polls
            </h3>
            <div className="space-y-6">
              {mockPolls.map((poll) => (
                <CommunityPollCard key={poll.id} poll={poll} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Letters to the Editor */}
        <div className="lg:col-span-5 bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#830000] mb-2 font-sans">
            <MessageSquare className="w-4 h-4" />
            <span>Letters to 1847 Liberty</span>
          </div>

          <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mb-2">
            Submit a Perspective
          </h3>

          <p className="text-xs sm:text-sm text-[#68615D] mb-6 leading-relaxed font-sans">
            We welcome analytical letters and counter-perspectives from citizens in Liberia and the diaspora. Selected letters are published weekly in our Friday review.
          </p>

          {letterSubmitted ? (
            <div className="p-6 bg-[#F7F4EF] rounded-xl text-center space-y-3 animate-in fade-in">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-editorial-serif text-lg font-medium text-[#171313]">
                Perspective Received
              </h4>
              <p className="text-xs text-[#68615D] font-sans">
                Thank you, {formData.name}. Our editorial team reviews submissions for factual integrity and civil discourse before publication.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLetterSubmitted(false);
                  setFormData({ name: '', location: '', topic: 'Governance', body: '' });
                }}
              >
                Submit another letter
              </Button>
            </div>
          ) : (
            <form onSubmit={handleLetterSubmit} className="space-y-4 font-sans text-xs">
              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sando Browne"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  County or Diaspora Location
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Nimba County, Liberia / Minneapolis, USA"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Topic Area
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                >
                  <option value="Governance">Public Affairs & Governance</option>
                  <option value="Economy">Economy & Infrastructure</option>
                  <option value="Culture">Culture & Heritage</option>
                  <option value="Diaspora">Diaspora Engagement</option>
                  <option value="LibertyShow">The Liberty Show Feedback</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Your Letter / Commentary (Max 400 words)
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.body}
                  onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                  placeholder="Articulate your perspective with evidence and respectful discourse..."
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#68615D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#830000] shrink-0" />
                <span>We respect pseudonyms upon editorial verification if personal security demands it.</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="md"
                icon={<Send className="w-3.5 h-3.5" />}
              >
                Send to Editorial Board
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
