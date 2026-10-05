import React, { useState } from 'react';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { Building2, Handshake, ShieldCheck, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const PartnerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    partnershipType: 'Institutional Research & Syndication',
    proposal: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.organization && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <SectionHeader
        kicker="Collaborative Impact"
        title="Partner With 1847 Liberty"
        description="We collaborate with academic institutions, philanthropic foundations, ethical businesses, and civic organizations committed to elevating public discourse across Liberia."
      />

      {/* Partnership Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 font-sans">
        <div className="p-6 bg-white border border-[#DED8D2] rounded-xl space-y-2">
          <div className="w-9 h-9 rounded-lg bg-[#830000]/10 text-[#830000] flex items-center justify-center mb-3">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#171313]">Institutional Syndication</h3>
          <p className="text-xs text-[#68615D] leading-relaxed">
            Co-publishing policy research, university working papers, and economic surveys with full editorial independence.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#DED8D2] rounded-xl space-y-2">
          <div className="w-9 h-9 rounded-lg bg-[#830000]/10 text-[#830000] flex items-center justify-center mb-3">
            <Handshake className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#171313]">Broadcast Underwriting</h3>
          <p className="text-xs text-[#68615D] leading-relaxed">
            Supporting episodes of <em>The Liberty Show</em> and documentary special series with transparent corporate stewardship.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#DED8D2] rounded-xl space-y-2">
          <div className="w-9 h-9 rounded-lg bg-[#830000]/10 text-[#830000] flex items-center justify-center mb-3">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#171313]">Diaspora Civic Exchange</h3>
          <p className="text-xs text-[#68615D] leading-relaxed">
            Connecting diaspora business chambers, alumni associations, and professional syndicates with opportunities in Liberia.
          </p>
        </div>
      </div>

      {/* Strict Independence Policy */}
      <div className="mb-12 p-6 bg-[#EFEAE2] border border-[#DED8D2] rounded-2xl flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-[#830000] shrink-0 mt-0.5" />
        <div className="text-xs text-[#68615D] font-sans space-y-1">
          <h4 className="font-bold text-[#171313] uppercase tracking-wider text-[11px]">
            Editorial Firewall Commitment
          </h4>
          <p>
            1847 Liberty maintains an uncompromising boundary between commercial/sponsorship partnerships and newsroom coverage. Sponsors hold no right of review, approval, or veto over our journalistic investigations, guest invitations, or editorial stances.
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-10">
        <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mb-2">
          Initiate a Partnership Conversation
        </h3>
        <p className="text-xs text-[#68615D] mb-6 font-sans">
          Tell us about your organization and how we can work together to advance Liberian public discourse.
        </p>

        {submitted ? (
          <div className="p-8 bg-[#F7F4EF] rounded-xl text-center space-y-3 animate-in fade-in">
            <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-editorial-serif text-xl font-medium text-[#171313]">
              Proposal Received
            </h4>
            <p className="text-xs text-[#68615D] font-sans">
              Thank you for reaching out to 1847 Liberty. Our partnership team will review your proposal and get in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Organization / Entity
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. West African Policy Institute"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="Full name & title"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#171313] mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="partnership@organization.org"
                className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#171313] mb-1">
                Partnership Scope
              </label>
              <select
                value={formData.partnershipType}
                onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
              >
                <option value="Institutional Research & Syndication">Institutional Research & Syndication</option>
                <option value="The Liberty Show Broadcast Underwriting">The Liberty Show Broadcast Underwriting</option>
                <option value="Civic Town Hall Co-Hosting">Civic Town Hall Co-Hosting</option>
                <option value="Academic Fellowship & Student Internships">Academic Fellowship & Student Mentorship</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#171313] mb-1">
                Collaboration Summary
              </label>
              <textarea
                rows={4}
                required
                value={formData.proposal}
                onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                placeholder="Outline proposed activities, timelines, and anticipated civic impact..."
                className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="md"
            >
              Submit Partnership Inquiry
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
