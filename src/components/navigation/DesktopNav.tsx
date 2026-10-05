import React from 'react';
import { NavLink } from 'react-router-dom';
import { primaryNavigation } from '../../data/navigation';

export const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider font-sans">
      {primaryNavigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `transition-colors duration-150 py-1 border-b-2 ${
              isActive
                ? 'border-[#830000] text-[#830000]'
                : 'border-transparent text-[#171313]/80 hover:text-[#830000] hover:border-[#830000]/40'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
