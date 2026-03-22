import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface BaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-coral text-white shadow-[0_4px_15px_rgba(224,122,95,0.4)] hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(224,122,95,0.5)]',
  secondary:
    'bg-transparent text-white border-2 border-white/40 hover:bg-white/[0.12] hover:border-white/70 hover:-translate-y-0.5',
  outline:
    'bg-transparent text-teal border-2 border-teal hover:bg-teal hover:text-white hover:-translate-y-0.5',
};

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const classes = `inline-flex items-center gap-2 px-8 py-3.5 rounded-full no-underline font-bold text-[0.95rem] tracking-wide transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
