import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  isExternal = false,
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled,
  ...rest
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium font-sans transition-all duration-150 ease-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[36px] gap-1.5 rounded-md',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2 rounded-lg',
    lg: 'text-base px-6 py-3 min-h-[48px] gap-2.5 rounded-lg',
  }[size];

  const variantStyles = {
    // Maroon = authority, navigation, important actions
    primary: 'bg-[#830000] text-white hover:bg-[#5C0000] shadow-sm',
    // Secondary = subtle editorial surface
    secondary: 'bg-[#EFEAE2] text-[#171313] hover:bg-[#E3DDCF] border border-[#DED8D2]',
    // Outline = clean border with hover fill
    outline: 'border border-[#830000] text-[#830000] hover:bg-[#830000] hover:text-white',
    // Ghost = quiet text action
    ghost: 'text-[#171313] hover:bg-black/5 hover:text-[#830000]',
    // Accent = Orange for energy / active highlight
    accent: 'bg-[#F4512D] text-white hover:bg-[#E03E19] shadow-sm',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClass = `${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClass} 
        target={isExternal ? '_blank' : undefined} 
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={rest.type || 'button'} 
      disabled={disabled} 
      className={combinedClass} 
      {...rest}
    >
      {content}
    </button>
  );
};
