import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!shown && e.clientY <= 0) {
        setOpen(true);
        setShown(true);
      }
    };
    document.addEventListener("mouseout", handler);
    return () => document.removeEventListener("mouseout", handler);
  }, [shown]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-card border border-primary/40 p-8 shadow-2xl">
        <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">WAIT! Don't leave</span>
          <h3 className="mt-3 text-2xl font-bold">Grab your free seat before it's gone</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You're 1 click away from learning AI in 3 hours — at zero cost.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton onClick={() => { setOpen(false); document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" }); }}>
              Claim Free Spot
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
