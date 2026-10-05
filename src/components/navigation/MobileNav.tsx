import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Tv, BookOpen, Headphones, Users, Info, Briefcase, Mail } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { primaryNavigation, secondaryNavigation } from '../../data/navigation';
import { PWAInstallButton } from '../ui/PWAInstallButton';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close navigation drawer on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getSectionIcon = (path: string) => {
    switch (path) {
      case '/watch':
        return <Tv className="w-5 h-5 text-[#830000]" />;
      case '/read':
        return <BookOpen className="w-5 h-5 text-[#830000]" />;
      case '/listen':
        return <Headphones className="w-5 h-5 text-[#830000]" />;
      case '/community':
        return <Users className="w-5 h-5 text-[#830000]" />;
      case '/about':
        return <Info className="w-5 h-5 text-[#830000]" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden flex"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-sm bg-[#F7F4EF] text-[#171313] h-full overflow-y-auto flex flex-col border-r border-[#DED8D2] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DED8D2] bg-white">
          <Link to="/" onClick={onClose} aria-label="1847 Liberty Home">
            <BrandLogo size="sm" />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-[#171313] hover:text-[#830000] rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search quick bar */}
        <div className="p-4 border-b border-[#DED8D2] bg-white/50">
          <Link
            to="/search"
            onClick={onClose}
            className="flex items-center justify-between w-full px-3.5 py-2.5 text-xs text-[#68615D] bg-white rounded-lg border border-[#DED8D2]"
          >
            <span>Search essays, episodes & polls...</span>
            <span className="text-[10px] font-semibold text-[#830000]">GO</span>
          </Link>
        </div>

        {/* Primary Sections */}
        <div className="px-4 py-4 space-y-1">
          <div className="px-3 pb-2 text-[10px] uppercase font-bold tracking-widest text-[#68615D]">
            Editorial Sections
          </div>
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#830000]/10 text-[#830000] font-semibold'
                    : 'text-[#171313] hover:bg-black/5 hover:text-[#830000]'
                }`
              }
            >
              <div className="flex items-center gap-3">
                {getSectionIcon(item.path)}
                <div>
                  <div className="leading-tight">{item.name}</div>
                  <div className="text-[11px] text-[#68615D] font-normal">{item.description}</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#830000] opacity-60" />
            </NavLink>
          ))}
        </div>

        {/* Flagship Show callout */}
        <div className="mx-4 my-2 p-4 bg-white rounded-xl border border-[#DED8D2]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F4512D]">
            Flagship Broadcast
          </span>
          <h4 className="font-editorial-serif text-lg font-medium text-[#171313] mt-0.5">
            The Liberty Show
          </h4>
          <p className="text-xs text-[#68615D] mt-1 leading-relaxed">
            Hosted by Thomas M. Sarko. Critical conversations shaping modern Liberia.
          </p>
          <Link
            to="/watch"
            onClick={onClose}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#830000] hover:underline"
          >
            Explore episodes <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Secondary Links */}
        <div className="px-4 py-3 mt-auto border-t border-[#DED8D2] space-y-1 bg-white/40">
          <div className="px-3 pb-1 text-[10px] uppercase font-bold tracking-widest text-[#68615D]">
            Engagement & Inquiries
          </div>
          {secondaryNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2 text-xs text-[#171313] hover:text-[#830000] hover:bg-black/5 rounded-md"
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Footer & PWA install action */}
        <div className="p-4 border-t border-[#DED8D2] bg-white flex items-center justify-between">
          <span className="text-[11px] text-[#68615D]">1847 Liberty</span>
          <PWAInstallButton />
        </div>
      </div>
    </div>
  );
};
