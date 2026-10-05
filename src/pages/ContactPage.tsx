import React, { useState } from 'react';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { Mail, MapPin, Phone, ShieldCheck, CheckCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Editorial Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSent(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <SectionHeader
        kicker="Direct Channel"
        title="Contact 1847 Liberty"
        description="Reach our newsroom editors, show production team, or general correspondence desk."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-6 font-sans">
          <div className="p-6 bg-white border border-[#DED8D2] rounded-2xl space-y-4">
            <h3 className="font-editorial-serif text-xl font-medium text-[#171313]">
              Newsroom Desks
            </h3>

            <div className="space-y-4 text-xs text-[#68615D]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#830000] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#171313]">Monrovia Bureau</div>
                  <p>Broad Street &amp; Randall, Monrovia, Republic of Liberia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#830000] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#171313]">General Editorial Inquiries</div>
                  <p>editorial@1847liberty.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#830000] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#171313]">The Liberty Show Production</div>
                  <p>broadcast@1847liberty.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#EFEAE2] border border-[#DED8D2] rounded-xl text-xs text-[#68615D] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#171313] text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#830000]" />
              <span>Confidential Sources & Tips</span>
            </div>
            <p>
              For sensitive public interest investigations, our editors accept encrypted documents and confidential communiqu&eacute;s under complete journalistic source protection.
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7 bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-8">
          <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mb-2">
            Send a Message
          </h3>
          <p className="text-xs text-[#68615D] mb-6 font-sans">
            Whether inquiring about an article, suggesting a guest for The Liberty Show, or requesting platform information, please write to us below.
          </p>

          {sent ? (
            <div className="p-8 bg-[#F7F4EF] rounded-xl text-center space-y-3 animate-in fade-in">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-editorial-serif text-xl font-medium text-[#171313]">
                Message Delivered
              </h4>
              <p className="text-xs text-[#68615D] font-sans">
                Thank you for contacting 1847 Liberty. An editorial desk representative will review your message.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSent(false);
                  setFormData({ name: '', email: '', subject: 'Editorial Inquiry', message: '' });
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
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
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Department
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                >
                  <option value="Editorial Inquiry">General Editorial Inquiry</option>
                  <option value="The Liberty Show Guest Pitch">The Liberty Show — Guest / Topic Suggestion</option>
                  <option value="Correction Request">Factual Correction Request</option>
                  <option value="Diaspora Desk">Diaspora Desk Engagement</option>
                  <option value="Confidential Tip">Confidential Tip to Investigators</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#171313] mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state your message with clarity..."
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#830000]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="md"
                icon={<Send className="w-3.5 h-3.5" />}
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
