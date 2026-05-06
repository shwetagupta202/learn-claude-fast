import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/GIwpt5p7sa574HbXleVRi2";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () => ({
    meta: [
      { title: "You're In! — Claude 101 Workshop" },
      { name: "description", content: "Thank you for joining the Claude 101 Workshop. Join our WhatsApp community for updates and access." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThankYou() {
  useEffect(() => {
    try {
      // @ts-expect-error meta pixel
      if (typeof window.fbq === "function") window.fbq("track", "Purchase", { value: 50, currency: "INR" });
      // @ts-expect-error gtag
      if (typeof window.gtag === "function") window.gtag("event", "purchase", { value: 50, currency: "INR" });
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-hero text-foreground flex items-center justify-center px-5 py-16">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative w-full max-w-2xl">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-2xl text-center">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Payment Confirmed
          </span>

          <h1 className="mt-5 font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            You're In! Welcome to Your <span className="text-accent-glow">AI Journey</span> 🚀
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Thank you for taking the first step into your AI journey. You're now part of a powerful
            learning experience where you'll build real-world AI skills that can transform your
            career and productivity.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5 text-left">
            <h2 className="font-bold text-lg">Next step — Join the WhatsApp Community</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              All workshop access links, schedules, bonuses & live updates are shared inside the group.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg transition hover:scale-[1.01] active:scale-[0.99] hover:bg-[#1ebe5b]"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp Community
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Secure & privacy assured · No spam
          </p>

          <div className="mt-6">
            <Link to="/" className="text-sm text-primary hover:underline">← Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
