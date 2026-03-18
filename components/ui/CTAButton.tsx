"use client";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href = "#pricing",
  children,
  size = "lg",
  variant = "primary",
  className = "",
  onClick,
}: CTAButtonProps) {
  const sizeClasses = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-brand-500 to-pink-500 hover:from-brand-400 hover:to-pink-400 text-white shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-block font-bold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
