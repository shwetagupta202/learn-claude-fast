import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTAButton({
  children,
  onClick,
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <button
      onClick={onClick ?? (() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" }))}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient font-bold text-primary-foreground btn-glow animate-pulse-ring transition-transform hover:scale-[1.03] active:scale-95",
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}
