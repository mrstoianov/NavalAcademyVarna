interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[14px] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-border-light transition-all duration-300 relative overflow-hidden ${
        hover ? 'hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-teal' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
