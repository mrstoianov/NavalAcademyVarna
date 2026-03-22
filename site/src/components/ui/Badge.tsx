type BadgeVariant = 'nav' | 'eng' | 'cadet' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  nav: 'bg-teal/10 text-teal',
  eng: 'bg-navy-darker/10 text-navy-darker',
  cadet: 'bg-coral/[0.12] text-coral-muted',
  default: 'bg-teal/10 text-teal',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-[0.68rem] font-bold tracking-wide uppercase rounded-md ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
