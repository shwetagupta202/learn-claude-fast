import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
});

const PAYMENT_URL = "https://learn.coachshwetagupta.com/web/checkout/69fada87a74de9b6bef0bf77";

export function MultiStepForm() {
  const [data, setData] = useState({ name: "", phone: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setError(null);
    const r = schema.safeParse(data);
    if (!r.success) return setError(r.error.issues[0].message);

    try {
      const lead = { ...r.data, ts: new Date().toISOString() };
      localStorage.setItem("claude101_lead", JSON.stringify(lead));
      sessionStorage.setItem("claude101_lead", JSON.stringify(lead));
    } catch {}

    // Fire conversion events if pixels are present
    try {
      // @ts-expect-error meta pixel
      if (typeof window.fbq === "function") window.fbq("track", "Lead");
      // @ts-expect-error gtag
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead");
    } catch {}

    setLoading(true);
    window.location.href = PAYMENT_URL;
  };

  return (
    <div className="rounded-2xl bg-card p-6 sm:p-8 border border-border shadow-2xl">
      <h3 className="text-xl sm:text-2xl font-bold">Reserve your seat — ₹50</h3>
      <p className="mt-1 text-sm text-muted-foreground">Limited seats · Instant access after payment</p>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          autoComplete="name"
          placeholder="Full name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full rounded-xl bg-background border border-border px-4 py-3.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
        <input
          type="tel"
          autoComplete="tel"
          placeholder="Phone number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className="w-full rounded-xl bg-background border border-border px-4 py-3.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          onClick={submit}
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient px-6 py-4 font-bold text-primary-foreground btn-glow transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
        >
          {loading ? "Redirecting to payment…" : "Reserve My Spot — ₹50"}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" /> Secure & privacy assured · No spam
        </p>
      </div>
    </div>
  );
}
