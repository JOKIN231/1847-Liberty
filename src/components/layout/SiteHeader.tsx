import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { DesktopNav } from '../navigation/DesktopNav';
import { MobileNav } from '../navigation/MobileNav';
import { SearchTrigger } from '../ui/SearchTrigger';
import { Button } from '../ui/Button';

interface SiteHeaderProps {
  onOpenNewsletterModal?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenNewsletterModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EF]/95 backdrop-blur-md border-b border-[#DED8D2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Mobile Top Bar Contract: 3 Zones */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Mobile Zone 1: Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[#171313] hover:text-[#830000] hover:bg-black/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000]"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>

          {/* Zone 1 (Desktop) / Center (Mobile): Brand Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] rounded-sm py-1"
              aria-label="1847 Liberty - Homepage"
            >
              <BrandLogo size="md" />
            </Link>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <DesktopNav />

          {/* Zone 3: Primary Actions (Search & Join Liberty) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <SearchTrigger />

            <div className="hidden sm:block">
              {onOpenNewsletterModal ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenNewsletterModal}
                >
                  Join Liberty
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  to="/community#newsletter"
                >
                  Join Liberty
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
