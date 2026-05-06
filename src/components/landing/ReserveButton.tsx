import { ArrowRight, Lock, Clock } from "lucide-react";

const PAYMENT_URL = "https://learn.coachshwetagupta.com/web/checkout/69fada87a74de9b6bef0bf77";

export function ReserveButton({ compact = false }: { compact?: boolean }) {
  const go = () => {
    try {
      // @ts-expect-error meta pixel
      if (typeof window.fbq === "function") window.fbq("track", "Lead");
      // @ts-expect-error gtag
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead");
    } catch {}
    window.location.href = PAYMENT_URL;
  };

  if (compact) {
    return (
      <button
        onClick={go}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-4 font-bold text-primary-foreground btn-glow transition hover:scale-[1.01] active:scale-[0.99]"
      >
        Reserve My Spot — ₹50
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    );
  }

  return (
    <div className="rounded-2xl bg-card p-6 sm:p-8 border border-border shadow-2xl text-center">
      <h3 className="text-xl sm:text-2xl font-bold">Join the Workshop</h3>
      <p className="mt-1 text-sm text-muted-foreground">Instant access · Secure payment</p>

      <button
        onClick={go}
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient px-6 py-5 text-lg font-bold text-primary-foreground btn-glow animate-pulse-ring transition hover:scale-[1.01] active:scale-[0.99]"
      >
        Reserve My Spot — ₹50
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" /> Secure & privacy assured · No spam
      </p>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-primary font-medium">
        <Clock className="h-3.5 w-3.5" /> Limited seats — Batch closing soon
      </p>
    </div>
  );
}
