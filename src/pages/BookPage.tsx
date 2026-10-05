import React, { useState } from 'react';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { Mic2, Calendar, CheckCircle, MapPin, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const BookPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: '',
    contactName: '',
    email: '',
    eventType: 'Keynote Address',
    eventDate: '',
    location: '',
    details: '',
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
        kicker="Speaking & Engagements"
        title="Book Thomas M. Sarko & 1847 Liberty Keynotes"
        description="Engage the host of The Liberty Show and 1847 Liberty fellows for keynote addresses, policy panel moderation, academic lectures, and diaspora townhalls."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Column: Scope & Focus Areas */}
        <div className="md:col-span-5 space-y-6 font-sans">
          <div className="p-6 bg-white border border-[#DED8D2] rounded-2xl space-y-4">
            <h3 className="font-editorial-serif text-xl font-medium text-[#171313]">
              Areas of Focus
            </h3>
            <ul className="space-y-3 text-xs text-[#68615D]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#830000] mt-1.5 shrink-0" />
                <span><strong>Institutional Reform:</strong> Decentralization and governance architecture in Liberia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#830000] mt-1.5 shrink-0" />
                <span><strong>Media & Democracy:</strong> Building independent civic discourse in developing democracies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#830000] mt-1.5 shrink-0" />
                <span><strong>Diaspora Capital:</strong> Catalyzing high-impact investment and civic repatriation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#830000] mt-1.5 shrink-0" />
                <span><strong>Maritime & Trade:</strong> Liberia’s strategic position in the AfCFTA framework</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#EFEAE2] border border-[#DED8D2] rounded-2xl text-xs text-[#68615D] space-y-2">
            <h4 className="font-bold text-[#171313] uppercase tracking-wider text-[11px]">
              Institutional Inquiries
            </h4>
            <p>
              For university symposia, international development forums, and official summits, 1847 Liberty provides dedicated briefing materials and custom panel moderation frameworks.
            </p>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="md:col-span-7 bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-8">
          <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mb-2">
            Submit an Engagement Request
          </h3>
          <p className="text-xs text-[#68615D] mb-6 font-sans">
            Please provide details regarding your event date, organization, and audience profile.
          </p>

          {submitted ? (
            <div className="p-8 bg-[#F7F4EF] rounded-xl text-center space-y-3 animate-in fade-in">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-editorial-serif text-xl font-medium text-[#171313]">
                Inquiry Received
              </h4>
              <p className="text-xs text-[#68615D] font-sans leading-relaxed">
                Thank you. The 1847 Liberty executive coordination desk will review your request and respond within two business days.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmitted(false)}
                className="mt-4"
              >
                Submit another inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Host Organization / Institution
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. University of Liberia / Liberian Diaspora Council"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#171313] mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#171313] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@org.com"
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#171313] mb-1">
                    Engagement Format
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                  >
                    <option value="Keynote Address">Keynote Address</option>
                    <option value="Panel Moderation">Panel Moderation</option>
                    <option value="Academic Lecture">Academic Lecture / Seminar</option>
                    <option value="Civic Town Hall">Civic Town Hall</option>
                    <option value="Media Interview">Broadcast / Media Appearance</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-[#171313] mb-1">
                    Proposed Date / Timeframe
                  </label>
                  <input
                    type="text"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    placeholder="e.g. November 2026"
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Location (City / Virtual)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Monrovia / Washington, D.C. / Virtual"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Event Objectives & Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe the theme, expected audience, and speaking requirements..."
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="md"
              >
                Submit Booking Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
