import React, { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { X, CheckCircle, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Layout: React.FC = () => {
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#171313] selection:bg-[#F4512D]/15 selection:text-[#830000]">
      <SiteHeader onOpenNewsletterModal={() => setNewsletterModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        <Outlet />
      </main>

      <SiteFooter />

      {/* Newsletter / Join Liberty Modal */}
      {newsletterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-liberty-title"
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 border border-[#DED8D2] shadow-2xl">
            <button
              onClick={() => {
                setNewsletterModalOpen(false);
                setSubscribed(false);
                setEmailInput('');
              }}
              className="absolute top-4 right-4 p-2 text-[#68615D] hover:text-[#171313] rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {subscribed ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-editorial-serif text-2xl font-medium text-[#171313]">
                  Welcome to the Discourse
                </h3>
                <p className="text-xs text-[#68615D] leading-relaxed max-w-sm mx-auto">
                  You are now subscribed to 1847 Liberty’s weekly briefings and broadcast dispatch alerts.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setNewsletterModalOpen(false);
                    setSubscribed(false);
                    setEmailInput('');
                  }}
                  className="mt-4"
                >
                  Return to Publication
                </Button>
              </div>
            ) : (
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#830000]/10 text-[#830000] flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 id="join-liberty-title" className="font-editorial-serif text-2xl font-medium text-[#171313] tracking-tight">
                  Join 1847 Liberty
                </h3>
                <p className="text-xs text-[#68615D] mt-2 leading-relaxed font-sans">
                  Receive curated editorial essays, policy breakdowns, and notifications when new episodes of <em>The Liberty Show</em> with Thomas M. Sarko air.
                </p>

                <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold text-[#171313] mb-1">
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF] border border-[#DED8D2] rounded-lg text-[#171313] placeholder:text-[#68615D]/60 focus:outline-none focus:ring-2 focus:ring-[#830000]"
                    />
                  </div>

                  <p className="text-[11px] text-[#68615D]">
                    Independent. Ad-free editorial cadence. Unsubscribe anytime.
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="md"
                    className="mt-2"
                  >
                    Subscribe to Dispatch
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
