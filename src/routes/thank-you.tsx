import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2, MessageCircle, Sparkles, ShieldCheck, Calendar, Clock, Users, Gift } from "lucide-react";
import { SiteFooter } from "@/components/landing/SiteFooter";

const WHATSAPP_URL = "https://chat.whatsapp.com/CA8jNwWwsGcKfdQ9dj7TMC";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () => ({
    meta: [
      { title: "You're In! — Claude 101 Workshop" },
      { name: "description", content: "You've successfully reserved your seat for the Claude 101 Workshop. Join the WhatsApp community for access details." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThankYou() {
  useEffect(() => {
    try {
      // @ts-expect-error meta pixel
      if (typeof window.fbq === "function") window.fbq("track", "CompleteRegistration");
      // @ts-expect-error gtm dataLayer
      if (typeof window.dataLayer !== "undefined") window.dataLayer.push({ event: "registration_complete" });
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-hero text-foreground flex flex-col">
      <div className="flex-1 flex items-center justify-center px-5 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-2xl">
          <div className="rounded-3xl border border-border bg-card/95 backdrop-blur p-7 sm:p-12 shadow-2xl text-center">
            <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 ring-4 ring-primary/10">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Seat Confirmed
            </span>

            <h1 className="mt-5 font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              You're In! Welcome to Your <span className="text-accent-glow">AI Journey</span> 🚀
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground">
              Thank you for reserving your spot. You're now part of a hands-on workshop where
              you'll build real AI workflows that save you 10+ hours every week.
            </p>

            {/* Workshop details */}
            <div className="mt-7 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Calendar className="h-4 w-4" /> Date
                </div>
                <div className="mt-1 text-lg font-bold">15 May</div>
              </div>
              <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Clock className="h-4 w-4" /> Time
                </div>
                <div className="mt-1 text-lg font-bold">8 PM IST</div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 rounded-2xl border-2 border-[#25D366]/30 bg-[#25D366]/5 p-5 sm:p-6 text-left">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Step 1 — Join the WhatsApp Community</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Workshop join link, schedule, bonuses & live updates are shared inside the group.
                    Don't miss out!
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  try {
                    // @ts-expect-error meta pixel
                    if (typeof window.fbq === "function") window.fbq("track", "Contact");
                    // @ts-expect-error gtm
                    if (typeof window.dataLayer !== "undefined") window.dataLayer.push({ event: "whatsapp_join_click" });
                  } catch {}
                }}
                className="mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg transition hover:scale-[1.01] active:scale-[0.99] hover:bg-[#1ebe5b] animate-pulse"
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp Community
              </a>

              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                <ShieldCheck className="inline h-3 w-3 text-primary" /> Safe & private group · No spam
              </p>
            </div>

            {/* What's next */}
            <div className="mt-7 grid sm:grid-cols-3 gap-3 text-left">
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <Users className="h-5 w-5 text-primary" />
                <div className="mt-2 text-sm font-semibold">Join the Group</div>
                <div className="text-xs text-muted-foreground mt-0.5">Tap the green button above</div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <Calendar className="h-5 w-5 text-primary" />
                <div className="mt-2 text-sm font-semibold">Mark 15 May, 8 PM</div>
                <div className="text-xs text-muted-foreground mt-0.5">Set a reminder now</div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <Gift className="h-5 w-5 text-primary" />
                <div className="mt-2 text-sm font-semibold">Get Bonuses</div>
                <div className="text-xs text-muted-foreground mt-0.5">Templates + prompts in group</div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/" className="text-sm text-primary hover:underline">← Back to home</Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
