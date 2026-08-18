import { Phone, LifeBuoy, MessageCircle } from "lucide-react";

export function SiteFooter() {
  const waHref =
    "https://wa.me/917738633354?text=I%20have%20registered%20for%20the%20UAE%20AI%20%26%20Automation%20Masterclass%20but%20need%20help%20joining%20the%20group";

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 shadow-lg text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <LifeBuoy className="h-3.5 w-3.5" /> Need Help?
          </div>
          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
            If you have completed your payment but are unable to join the WhatsApp group
            for the <span className="font-semibold">Claude AI Workshop</span>, please contact
            us on WhatsApp for quick assistance.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base sm:text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]"
              style={{ backgroundColor: "#25D366" }}
              aria-label="Chat on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.55 0 11.88-5.33 11.88-11.9 0-3.18-1.24-6.17-3.43-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Chat on WhatsApp
            </a>

            <a
              href="tel:+917738633354"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-base sm:text-lg font-bold text-primary-foreground btn-glow transition hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5" />
              +91 77386 33354
            </a>
          </div>

          <p className="mt-3 text-xs text-muted-foreground inline-flex items-center gap-1.5 justify-center">
            <MessageCircle className="h-3.5 w-3.5" />
            Tap WhatsApp for instant chat · Available during workshop hours
          </p>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Claude 101 Workshop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
