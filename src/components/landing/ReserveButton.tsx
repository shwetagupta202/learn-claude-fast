import { useEffect, useState } from "react";
import { ArrowRight, Lock, Zap, Users, Flame } from "lucide-react";

const PAYMENT_URL = "https://learn.coachshwetagupta.com/web/checkout/69fada87a74de9b6bef0bf77";
const TIMER_KEY = "reserve_timer_end";
const TIMER_DURATION_MS = 15 * 60 * 1000; // 15 minutes

function getEndTime() {
  if (typeof window === "undefined") return Date.now() + TIMER_DURATION_MS;
  const saved = sessionStorage.getItem(TIMER_KEY);
  if (saved) {
    const n = parseInt(saved, 10);
    if (!Number.isNaN(n) && n > Date.now()) return n;
  }
  const end = Date.now() + TIMER_DURATION_MS;
  sessionStorage.setItem(TIMER_KEY, String(end));
  return end;
}

function fmt(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return { h, m, s, total };
}

export function useOfferCountdown() {
  const [end, setEnd] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(TIMER_DURATION_MS);

  useEffect(() => {
    const e = getEndTime();
    setEnd(e);
    const tick = () => setRemaining(Math.max(0, e - Date.now()));
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return { remaining, expired: end !== null && remaining <= 0 };
}

function go() {
  try {
    // @ts-expect-error meta pixel
    if (typeof window.fbq === "function") window.fbq("track", "Lead");
    // @ts-expect-error gtag
    if (typeof window.gtag === "function") window.gtag("event", "generate_lead");
  } catch {}
  window.location.href = PAYMENT_URL;
}

function TimerDisplay({ remaining, expired }: { remaining: number; expired: boolean }) {
  const { h, m, s } = fmt(remaining);
  if (expired) {
    return (
      <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-center text-sm font-semibold text-destructive">
        ⚠️ Offer Expired — Refresh to Unlock Again
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 text-center">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-orange-500">
        ⏳ Offer Ends In
      </div>
      <div className="mt-1 flex items-center justify-center gap-1.5 font-mono text-2xl font-black text-orange-500 tabular-nums">
        <span>{h}</span><span className="opacity-60">:</span>
        <span>{m}</span><span className="opacity-60">:</span>
        <span>{s}</span>
      </div>
    </div>
  );
}

export function ReserveButton({ compact = false }: { compact?: boolean }) {
  const { remaining, expired } = useOfferCountdown();

  if (compact) {
    return (
      <button
        onClick={go}
        disabled={expired}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg shadow-[#25D366]/30 animate-pulse-ring transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
      >
        Reserve My Spot — ₹50
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    );
  }

  const spotsLeft = 12;
  const spotsTotal = 50;
  const pct = Math.round(((spotsTotal - spotsLeft) / spotsTotal) * 100);

  return (
    <div className="rounded-2xl bg-card p-6 sm:p-8 border-2 border-primary/30 shadow-2xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-500">
        <Flame className="h-3.5 w-3.5" /> Limited Time AI Workshop Access
      </span>
      <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-black">🚀 Reserve Your Seat</h3>

      {/* Price */}
      <div className="mt-5 flex items-baseline justify-center gap-3">
        <span className="text-xl font-medium text-muted-foreground line-through">₹1999</span>
        <span className="text-5xl font-black text-[#22c55e] drop-shadow-[0_0_20px_rgba(34,197,94,0.35)]">₹50</span>
      </div>
      <div className="mt-1 text-xs font-semibold text-[#22c55e]">SAVE 97% — TODAY ONLY</div>

      {/* Timer */}
      <div className="mt-5">
        <TimerDisplay remaining={remaining} expired={expired} />
      </div>

      {/* CTA */}
      <button
        onClick={go}
        disabled={expired}
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-5 text-lg font-bold text-white shadow-lg shadow-[#25D366]/40 animate-pulse-ring transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Reserve My Spot — ₹50
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Microcopy */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] sm:text-xs text-muted-foreground">
        <div className="flex flex-col items-center gap-1"><Lock className="h-4 w-4 text-primary" /><span>Secure Checkout</span></div>
        <div className="flex flex-col items-center gap-1"><Zap className="h-4 w-4 text-primary" /><span>Instant Access</span></div>
        <div className="flex flex-col items-center gap-1"><Users className="h-4 w-4 text-primary" /><span>Limited Seats</span></div>
      </div>

      {/* Social proof + progress */}
      <div className="mt-5 rounded-xl bg-secondary/60 p-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-foreground"><Flame className="h-3.5 w-3.5 text-orange-500" /> 237+ people already joined</span>
          <span className="text-destructive">Only {spotsLeft} spots left</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-background">
          <div className="h-full bg-gradient-to-r from-[#22c55e] to-orange-500 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}

/** Sticky bottom bar with timer + CTA, shown after scroll */
export function StickyReserveBar() {
  const { remaining, expired } = useOfferCountdown();
  const { h, m, s } = fmt(remaining);

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:px-5 sm:py-3">
        {!expired ? (
          <div className="flex items-center gap-2 rounded-lg bg-orange-500/15 px-2.5 py-1.5 text-orange-500">
            <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">Ends in</span>
            <span className="font-mono text-sm font-black tabular-nums">{h}:{m}:{s}</span>
          </div>
        ) : (
          <div className="text-xs font-semibold text-destructive">Offer expired</div>
        )}
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-[11px] text-muted-foreground line-through">₹1999</span>
          <span className="text-base font-black text-[#22c55e]">₹50 only</span>
        </div>
        <button
          onClick={go}
          disabled={expired}
          className="ml-auto flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-[1.02] active:scale-95 disabled:opacity-50"
        >
          Reserve My Spot — ₹50
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
