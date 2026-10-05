import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../brand/BrandLogo';
import { footerNavigation, socialLinks } from '../../data/navigation';
import { PWAInstallButton } from '../ui/PWAInstallButton';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171313] text-[#F7F4EF] border-t border-[#302B29] mt-24">
      {/* Top Band: Brand Identity & Manifesto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[#302B29] pb-14">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" aria-label="1847 Liberty Home">
              <BrandLogo variant="light" size="lg" />
            </Link>
            
            <p className="font-editorial-serif text-xl sm:text-2xl text-[#E5E0D8] font-normal leading-snug max-w-md pt-2">
              Serious conversations. Liberian perspectives.
            </p>

            <p className="text-xs text-[#A8A19B] leading-relaxed max-w-md font-sans">
              1847 Liberty is an independent Liberian media and public-discourse platform covering the people, ideas, culture, and issues shaping Liberia at home and across the global diaspora.
            </p>

            <div className="pt-2">
              <PWAInstallButton className="bg-[#830000] hover:bg-[#9C1414] text-white" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Editorial Desks */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F4512D] mb-4 font-sans">
                Editorial Desks
              </h3>
              <ul className="space-y-2.5 text-xs text-[#C6BEB6]">
                {footerNavigation.editorial.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition-colors py-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Programs & Media */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F4512D] mb-4 font-sans">
                Flagship Broadcasts
              </h3>
              <ul className="space-y-2.5 text-xs text-[#C6BEB6]">
                {footerNavigation.programs.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition-colors py-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-[#302B29]">
                <div className="text-[11px] text-[#A8A19B]">Flagship Program</div>
                <div className="font-editorial-serif text-sm text-white font-medium">The Liberty Show</div>
                <div className="text-[11px] text-[#C6BEB6]">Hosted by Thomas M. Sarko</div>
              </div>
            </div>

            {/* Column 3: Platform & Partnership */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F4512D] mb-4 font-sans">
                Organization
              </h3>
              <ul className="space-y-2.5 text-xs text-[#C6BEB6]">
                {footerNavigation.organization.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition-colors py-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C837C] font-sans">
          <div>
            &copy; {currentYear} 1847 Liberty Media. All rights reserved. Monrovia, Liberia.
          </div>

          {/* Social Presence */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
