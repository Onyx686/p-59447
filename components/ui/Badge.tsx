interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 ${className}`}
    >
      {children}
    </span>
  );
}
