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
        "btn-3d group inline-flex items-center justify-center gap-2 rounded-full font-extrabold tracking-wide",
        size === "lg" ? "px-9 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}
