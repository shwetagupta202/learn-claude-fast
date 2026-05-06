import { Phone, LifeBuoy } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 shadow-lg text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <LifeBuoy className="h-3.5 w-3.5" /> Need Help?
          </div>
          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
            If you have completed your payment but are unable to join the WhatsApp group
            for the <span className="font-semibold">Claude AI Workshop</span>, please contact us
            immediately for assistance.
          </p>
          <a
            href="tel:+917738633354"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-base sm:text-lg font-bold text-primary-foreground btn-glow transition hover:scale-[1.02]"
          >
            <Phone className="h-5 w-5" />
            +91 77386 33354
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Tap to call · Available during workshop hours
          </p>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Claude 101 Workshop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
