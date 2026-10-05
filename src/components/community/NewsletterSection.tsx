import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-[#EFEAE2] border-y border-[#DED8D2] py-16 my-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#830000] mb-3 font-sans">
          <Mail className="w-3.5 h-3.5" />
          <span>The 1847 Liberty Dispatch</span>
        </div>

        <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171313] max-w-2xl mx-auto leading-tight">
          Rigorous thinking on Liberia delivered to your desk every Friday.
        </h2>

        <p className="text-xs sm:text-sm text-[#68615D] mt-3 max-w-xl mx-auto leading-relaxed font-sans">
          Join thousands of policymakers, professionals, diaspora leaders, and civic entrepreneurs who rely on 1847 Liberty for independent insight and discussion.
        </p>

        {subscribed ? (
          <div className="mt-8 p-6 bg-white border border-[#DED8D2] rounded-xl max-w-md mx-auto flex items-center justify-center gap-3 text-emerald-800 text-sm font-medium animate-in fade-in">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Thank you for subscribing. You will receive our next Friday dispatch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2 font-sans">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-sm bg-white border border-[#DED8D2] rounded-lg text-[#171313] placeholder:text-[#68615D]/60 focus:outline-none focus:ring-2 focus:ring-[#830000]"
              aria-label="Email address for dispatch"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
        )}

        <div className="mt-3 text-[11px] text-[#8C837C] font-sans">
          Strictly editorial content. Zero spam. Unsubscribe with one click anytime.
        </div>
      </div>
    </section>
  );
};
