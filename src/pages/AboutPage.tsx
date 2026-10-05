import React from 'react';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { BrandLogo } from '../components/brand/BrandLogo';
import { ShieldCheck, Scale, Globe, BookOpen, Radio, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      
      {/* Brand Identity Lockup */}
      <div className="text-center pb-12 border-b border-[#DED8D2]">
        <div className="flex justify-center mb-6">
          <BrandLogo size="lg" />
        </div>
        <h1 className="font-editorial-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#171313] text-balance">
          Serious Conversations. Liberian Perspectives.
        </h1>
        <p className="text-base sm:text-lg text-[#68615D] mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
          1847 Liberty is an independent digital media organization dedicated to the people, ideas, culture, and structural questions shaping Liberia and Liberians worldwide.
        </p>
      </div>

      {/* Origin & Historical Meaning */}
      <section className="py-12 border-b border-[#DED8D2] space-y-6 text-[#171313] font-sans leading-relaxed text-base">
        <span className="text-xs uppercase font-bold tracking-widest text-[#830000]">
          The Name & Heritage
        </span>
        <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#171313]">
          Why 1847 Matters
        </h2>
        <p>
          On July 26, 1847, the Republic of Liberia proclaimed its Declaration of Independence in Monrovia, establishing Africa&rsquo;s first modern sovereign republic. The number <strong>1847</strong> is an enduring reminder of constitutional ambition, resilience, and the unfinished promise of genuine self-determination.
        </p>
        <p>
          Nearly two centuries later, <strong>1847 Liberty</strong> exists to provide a sophisticated, contemporary forum where the next generation of Liberians—in the fifteen counties and across the global diaspora—can examine public policy, celebrate indigenous cultural heritage, and hold power accountable without fear or partisan favor.
        </p>
      </section>

      {/* Institutional Architecture */}
      <section className="py-12 border-b border-[#DED8D2]">
        <span className="text-xs uppercase font-bold tracking-widest text-[#F4512D] font-sans">
          Institutional Hierarchy
        </span>
        <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#171313] mt-2 mb-6">
          Platform Architecture & Programs
        </h2>

        <div className="p-6 bg-white border border-[#DED8D2] rounded-2xl space-y-6 font-sans">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#830000] text-white flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#171313]">1847 Liberty (Parent Media Organization)</h3>
              <p className="text-xs sm:text-sm text-[#68615D] mt-1 leading-relaxed">
                The overarching civic media platform encompassing investigative reporting, written analysis, podcast dispatches, policy polling, and cultural documentation.
              </p>
            </div>
          </div>

          <div className="pl-6 sm:pl-14 border-l-2 border-[#DED8D2] space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#F4512D] text-white flex items-center justify-center shrink-0">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#171313]">The Liberty Show (Flagship Broadcast Program)</h4>
                <p className="text-xs text-[#68615D] mt-1 leading-relaxed">
                  The marquee video broadcast and dialogue series, produced by 1847 Liberty and hosted by <strong>Thomas M. Sarko</strong>, hosting deep, analytical conversations with policymakers, entrepreneurs, and thinkers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#EFEAE2] text-[#830000] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#171313]">The 1847 Review & Editorial Desks</h4>
                <p className="text-xs text-[#68615D] mt-1 leading-relaxed">
                  Specialized analytical desks covering Public Affairs, Economy & Trade, Culture & Heritage, and Diaspora Dialogue with academic rigor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards & Charter */}
      <section id="standards" className="py-12 border-b border-[#DED8D2]">
        <span className="text-xs uppercase font-bold tracking-widest text-[#830000] font-sans">
          Integrity & Accountability
        </span>
        <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#171313] mt-2 mb-6">
          Editorial Charter & Standards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
          <div className="p-5 bg-white border border-[#DED8D2] rounded-xl space-y-2">
            <div className="font-bold text-[#171313] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#830000]" />
              <span>Independence From Patronage</span>
            </div>
            <p className="text-[#68615D] leading-relaxed">
              We accept no funding from political campaign entities or political party organs. Our coverage decisions belong exclusively to our editorial desk.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#DED8D2] rounded-xl space-y-2">
            <div className="font-bold text-[#171313] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#830000]" />
              <span>Evidence & Rigorous Sourcing</span>
            </div>
            <p className="text-[#68615D] leading-relaxed">
              Claims, fiscal statistics, and policy assertions must be grounded in primary documents, audited accounts, and verifiable on-the-record testimony.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#DED8D2] rounded-xl space-y-2">
            <div className="font-bold text-[#171313] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#830000]" />
              <span>Public Corrections Policy</span>
            </div>
            <p className="text-[#68615D] leading-relaxed">
              When factual errors occur, they are transparently corrected at the head of the article or episode notes with an explicit editorial record.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#DED8D2] rounded-xl space-y-2">
            <div className="font-bold text-[#171313] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#830000]" />
              <span>Civic Decorum & Civil Debate</span>
            </div>
            <p className="text-[#68615D] leading-relaxed">
              We reject sensationalism, character defamation, and partisan outrage bait in favor of constructive, solution-oriented discourse.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-12 text-center">
        <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mb-3">
          Interested in Contributing or Collaborating?
        </h3>
        <p className="text-xs sm:text-sm text-[#68615D] max-w-xl mx-auto mb-6 font-sans">
          Whether you are an economic researcher, historian, cultural essayist, or institutional partner, 1847 Liberty welcomes serious contributions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="primary" size="md">
            Contact the Newsroom
          </Button>
          <Button to="/partner" variant="outline" size="md">
            Institutional Partnerships
          </Button>
        </div>
      </section>

    </div>
  );
};
