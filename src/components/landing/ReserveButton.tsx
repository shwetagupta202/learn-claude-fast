import { useEffect, useState } from "react";
import { ArrowRight, Lock, Zap, Users, Flame } from "lucide-react";

const PAYMENT_URL = "https://learn.coachshwetagupta.com/web/checkout/69fd9742118ce03dbe0a5d48";
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

const SOCIAL_KEY = "reserve_social_proof";
const SPOTS_TOTAL = 50;

export function useDynamicSocialProof() {
  const [state, setState] = useState({ joined: 289, spotsLeft: 12, spotsTotal: SPOTS_TOTAL });

  useEffect(() => {
    const load = () => {
      const saved = sessionStorage.getItem(SOCIAL_KEY);
      if (saved) {
        try {
          const p = JSON.parse(saved);
          if (typeof p.joined === "number" && typeof p.spotsLeft === "number") return p;
        } catch {}
      }
      // Seed: vary slightly each session for realism
      const joined = 289 + Math.floor(Math.random() * 24);
      const spotsLeft = 8 + Math.floor(Math.random() * 7); // 8–14
      const seed = { joined, spotsLeft, spotsTotal: SPOTS_TOTAL };
      sessionStorage.setItem(SOCIAL_KEY, JSON.stringify(seed));
      return seed;
    };
    setState(load());

    // Slowly increment joined / decrement spots over time
    const interval = setInterval(() => {
      setState((prev) => {
        const bumpJoined = Math.random() < 0.6 ? 1 : 0;
        const dropSpot = Math.random() < 0.18 && prev.spotsLeft > 3 ? 1 : 0;
        const next = {
          joined: prev.joined + bumpJoined,
          spotsLeft: Math.max(3, prev.spotsLeft - dropSpot),
          spotsTotal: SPOTS_TOTAL,
        };
        sessionStorage.setItem(SOCIAL_KEY, JSON.stringify(next));
        return next;
      });
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return state;
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
    <div className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-3 py-2 text-center">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-orange-500">
        ⏳ Offer Ends In
      </div>
      <div className="mt-0.5 flex items-center justify-center gap-1 font-mono text-xl font-black text-orange-500 tabular-nums">
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
        className="btn-3d group flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-extrabold disabled:opacity-50"
      >
        <span className="inline-flex items-center gap-2">
          RESERVE MY FREE SEAT
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </button>
    );
  }

  const { joined, spotsLeft, spotsTotal } = useDynamicSocialProof();
  const pct = Math.round(((spotsTotal - spotsLeft) / spotsTotal) * 100);

  return (
    <div className="rounded-2xl bg-card p-4 sm:p-5 border-2 border-primary/30 shadow-2xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-500">
        <Flame className="h-3 w-3" /> Limited Time UAE Webinar Access
      </span>
      <h3 className="mt-2 font-serif text-xl sm:text-2xl font-black">🚀 Reserve Your Free Seat</h3>

      {/* Price */}
      <div className="mt-2 flex items-baseline justify-center gap-2">
        <span className="text-base font-medium text-muted-foreground line-through">AED 9</span>
        <span className="text-4xl font-black text-[#c96f3f] drop-shadow-[0_0_20px_rgba(201,111,63,0.35)]">AED 0</span>
      </div>
      <div className="text-[10px] font-semibold text-[#c96f3f]">100% FREE — UAE WEBINAR</div>

      {/* Webinar Details */}
      <div className="mt-3 flex items-center justify-center gap-3 rounded-lg border border-primary/25 bg-primary/5 px-3 py-2 text-xs sm:text-sm font-semibold text-foreground">
        <span className="inline-flex items-center gap-1">📅 <span>15 May</span></span>
        <span className="text-primary/40">•</span>
        <span className="inline-flex items-center gap-1">🕗 <span>8 PM GST</span></span>
      </div>

      {/* Timer */}
      <div className="mt-3">
        <TimerDisplay remaining={remaining} expired={expired} />
      </div>

      {/* CTA */}
      <button
        onClick={go}
        disabled={expired}
        className="btn-3d group mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-base font-extrabold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="inline-flex items-center gap-2">
          RESERVE MY FREE SEAT
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </button>

      {/* Microcopy */}
      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] sm:text-xs text-muted-foreground">
        <div className="flex flex-col items-center gap-0.5"><Lock className="h-3.5 w-3.5 text-primary" /><span>Secure Checkout</span></div>
        <div className="flex flex-col items-center gap-0.5"><Zap className="h-3.5 w-3.5 text-primary" /><span>Instant Access</span></div>
        <div className="flex flex-col items-center gap-0.5"><Users className="h-3.5 w-3.5 text-primary" /><span>Limited Seats</span></div>
      </div>

      {/* Social proof + progress */}
      <div className="mt-3 rounded-lg bg-secondary/60 p-2.5">
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-semibold gap-2">
          <span className="flex items-center gap-1 text-foreground"><Flame className="h-3 w-3 text-orange-500" /> {joined.toLocaleString("en-IN")}+ joined</span>
          <span className="text-destructive">Only {spotsLeft} seats left</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background">
          <div className="h-full bg-gradient-to-r from-[#c96f3f] to-orange-500 transition-all" style={{ width: `${pct}%` }} />
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
          <span className="text-[11px] text-muted-foreground line-through">AED 9</span>
          <span className="text-base font-black text-[#c96f3f]">AED 0</span>
        </div>
        <button
          onClick={go}
          disabled={expired}
          className="btn-3d ml-auto flex items-center justify-center gap-1.5 rounded-full px-4 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-extrabold disabled:opacity-50"
        >
          <span className="inline-flex items-center gap-1.5">
            RESERVE MY FREE SEAT
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
