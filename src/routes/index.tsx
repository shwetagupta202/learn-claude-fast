import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, Star, Rocket, ShieldCheck, Clock, Zap, Brain, Workflow,
  PenTool, TrendingUp, ChevronDown, Check, Gift, Users, Building2,
  Stethoscope, Home, GraduationCap, ShoppingCart, Briefcase, Utensils,
  Wrench, Plane, HardHat, Laptop, Globe, MessageSquare, Bot, Network,
  BarChart3, FileText, Target, Lightbulb, Layers, Cpu, Repeat, Send,
  CalendarClock, MapPin, Building, TrendingUpIcon, Megaphone, CheckCircle2,
} from "lucide-react";
import { CTAButton } from "@/components/landing/CTAButton";
import { ReserveButton, StickyReserveBar, useDynamicSocialProof } from "@/components/landing/ReserveButton";
import { Countdown } from "@/components/landing/Countdown";
import { ExitIntent } from "@/components/landing/ExitIntent";
import { SiteFooter } from "@/components/landing/SiteFooter";
import coachImg from "@/assets/coach-shweta.jpeg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "AI & Automation Masterclass for UAE Professionals & Businesses" },
      { name: "description", content: "Learn how to use AI, ChatGPT, n8n and automation to save time, reduce repetitive work and grow your business — 100% free UAE webinar." },
      { property: "og:title", content: "AI & Automation Masterclass for UAE Professionals & Businesses" },
      { property: "og:description", content: "Master AI, ChatGPT and n8n automation for your UAE business. Free webinar — limited seats." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const { joined, spotsLeft } = useDynamicSocialProof();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whyAttend = [
    { icon: Clock, t: "Save hours every day", d: "Stop drowning in manual, repetitive tasks. AI + automation can handle them for you — while you focus on growth." },
    { icon: TrendingUp, t: "Grow without extra headcount", d: "Automate the work that normally needs more staff. Scale your operations without scaling your payroll first." },
    { icon: Zap, t: "Work smarter, not harder", d: "From content creation to customer follow-ups, use AI to move faster without sacrificing quality." },
  ];

  const modules = [
    { n: "01", t: "AI for Everyday Work", d: "Discover how ChatGPT and Claude can help you write emails, create content, and prepare reports in minutes — no tech skills required." },
    { n: "02", t: "AI-Powered Business Automation", d: "See how repetitive business tasks can be automated end-to-end — from lead handling to daily operations." },
    { n: "03", t: "Learn n8n Automation", d: "Get a practical introduction to n8n — the powerful no-code/low-code tool to connect apps and automate workflows." },
    { n: "04", t: "AI for Marketing & Sales", d: "Learn how to generate leads, create marketing content, and follow up with prospects using AI tools." },
    { n: "05", t: "AI for Business Owners", d: "How business owners can use AI to make faster decisions, reduce costs, and improve customer experience." },
  ];

  const audience = [
    { icon: Briefcase, t: "Working Professionals", d: "Automate reports, emails, and daily tasks." },
    { icon: Building2, t: "Business Owners", d: "Reduce operational overload and grow faster." },
    { icon: Megaphone, t: "Digital Agency Owners", d: "Deliver more client work with less effort." },
    { icon: Stethoscope, t: "Healthcare Businesses", d: "Streamline appointments, follow-ups, and admin." },
    { icon: Home, t: "Real Estate Businesses", d: "Automate listings, leads, and client communication." },
    { icon: Rocket, t: "Entrepreneurs & Startups", d: "Build lean systems that scale from day one." },
    { icon: BarChart3, t: "Marketing & Sales Professionals", d: "Generate leads and content faster." },
  ];

  const industries = [
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Home, label: "Real Estate" },
    { icon: GraduationCap, label: "Education" },
    { icon: ShoppingCart, label: "E-commerce" },
    { icon: Utensils, label: "Restaurants" },
    { icon: Plane, label: "Travel & Tourism" },
    { icon: Wrench, label: "Automobile" },
    { icon: HardHat, label: "Construction" },
    { icon: Laptop, label: "IT Services" },
    { icon: Building, label: "Finance & Insurance" },
    { icon: Globe, label: "Consulting" },
    { icon: Briefcase, label: "B2B Services" },
  ];

  const businessExamples = [
    { before: "Manually replying to every customer inquiry", after: "AI auto-responds to common questions and routes hot leads to your team instantly." },
    { before: "Spending hours creating social media content", after: "AI generates weeks of posts, captions, and hashtags in minutes." },
    { before: "Forgetting to follow up with leads", after: "n8n automates lead follow-ups via email and WhatsApp — no missed opportunities." },
    { before: "Copying data between spreadsheets and apps", after: "Workflows sync data automatically between your CRM, sheets, and emails." },
  ];

  const differentiators = [
    { icon: CheckCircle2, t: "Practical, not theoretical", d: "Real business examples, live demos, and tools you can use immediately." },
    { icon: Users, t: "Built for non-technical users", d: "You don't need to know coding. We explain everything in plain, simple language." },
    { icon: Bot, t: "Tool-agnostic approach", d: "We cover ChatGPT, Claude, n8n, and other practical tools — not just one platform." },
    { icon: Target, t: "UAE-focused examples", d: "Use cases tailored to UAE markets, industries, and customer behavior." },
    { icon: Repeat, t: "Automation-first mindset", d: "Learn how to build systems that run in the background while you focus on growth." },
    { icon: ShieldCheck, t: "Free, no fluff", d: "No sales pitch. Just high-value strategies you can implement the same day." },
  ];

  const automations = [
    { icon: Megaphone, t: "Marketing", d: "Social media posts, ad copy, email campaigns, and content calendars." },
    { icon: MessageSquare, t: "Sales", d: "Lead qualification, follow-ups, proposals, and CRM updates." },
    { icon: Users, t: "Customer Support", d: "Auto-replies, chatbots, ticket routing, and FAQ handling." },
    { icon: Settings, t: "Operations", d: "Inventory alerts, order processing, and supplier communication." },
    { icon: Briefcase, t: "Management", d: "Reports, dashboards, reminders, and team coordination." },
    { icon: FileText, t: "HR & Admin", d: "Interview scheduling, document creation, and onboarding workflows." },
  ];

  const takeaways = [
    "A clear roadmap for using AI in your business",
    "Live demos of real automation workflows",
    "Understanding of ChatGPT, Claude, and n8n",
    "Practical ways to reduce manual work",
    "Faster lead generation and follow-up systems",
    "Confidence to start implementing AI immediately",
    "UAE-specific examples and use cases",
    "Bonus tools and templates to get started fast",
  ];

  const perfectFor = [
    { icon: Clock, t: "Save Time", d: "Reclaim hours lost to repetitive tasks." },
    { icon: Repeat, t: "Reduce Manual Processes", d: "Automate the work that slows your team down." },
    { icon: MessageSquare, t: "Improve Customer Response", d: "Reply faster and never miss a lead again." },
    { icon: TrendingUpIcon, t: "Generate More Opportunities", d: "Turn more leads into customers with less effort." },
    { icon: Zap, t: "Increase Productivity", d: "Do more with the same team and resources." },
    { icon: Rocket, t: "Scale Smarter", d: "Build systems that grow as your business grows." },
  ];

  const faqs = [
    { q: "Is this webinar really free?", a: "Yes, 100% free. The regular value is AED 9, but this special UAE session is available at AED 0 for a limited time." },
    { q: "Do I need technical or coding skills?", a: "Not at all. This webinar is designed for business owners, professionals, and beginners who want to use AI without becoming developers." },
    { q: "What tools will be covered?", a: "We cover practical tools like ChatGPT, Claude, and n8n automation — all explained in simple, easy-to-follow steps." },
    { q: "Who is this webinar for?", a: "Business owners, working professionals, digital agency owners, marketers, sales teams, and anyone in the UAE who wants to leverage AI and automation." },
    { q: "Will there be a replay?", a: "Yes, registered attendees will receive access to the replay along with bonus templates and resources." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExitIntent />

      {/* HERO */}
      <header className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 ai-network opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full ai-orb" />
        <div className="absolute top-1/3 -right-20 h-[300px] w-[300px] rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-10 sm:pt-14 sm:pb-16">
          <div id="reserve" className="grid gap-6 lg:gap-12 lg:grid-cols-2 items-start">
            {/* Reserve card — first on mobile (above the fold), right column on desktop */}
            <div className="order-2 lg:order-2 lg:sticky lg:top-6">
              <ReserveButton />
            </div>
            <div className="order-1 lg:order-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> UAE AI & Automation Webinar
              </span>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Turn AI Into Your{" "}
                <span className="text-accent-glow">Everyday Business Advantage</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground">
                Learn how to use AI, ChatGPT, n8n and automation to save time, reduce repetitive work and grow your business — without needing to be a technical expert.
              </p>

              {/* Special offer badge */}
              <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur px-5 py-3 shadow-lg">
                <span className="text-sm font-semibold text-muted-foreground">Special UAE Webinar Offer</span>
                <span className="text-lg text-muted-foreground line-through">AED 9</span>
                <span className="text-2xl font-black text-[#c96f3f]">AED 0 — FREE</span>
              </div>

              {/* Coach card */}
              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur p-3 sm:p-4 shadow-lg max-w-md mx-auto lg:mx-0">
                <img
                  src={coachImg}
                  alt="Coach Shweta Gupta — Best AI Agent Female Coach in India"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-primary/40"
                  loading="eager"
                />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Taught Live by</div>
                  <div className="font-bold text-base sm:text-lg">Coach Shweta Gupta</div>
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-primary">
                    <Star className="h-3 w-3 fill-current" />
                    Google Ranked · Best AI Agent Female Coach in India
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Users, t: "2,000+", d: "Learners trained" },
                  { icon: Star, t: "4.8 / 5", d: "Avg. rating" },
                  { icon: Rocket, t: "No coding", d: "Required at all" },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl bg-card/80 backdrop-blur border border-border px-4 py-3 flex items-center gap-3 justify-center lg:justify-start">
                    <b.icon className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-bold text-sm">{b.t}</div>
                      <div className="text-xs text-muted-foreground">{b.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHY ATTEND */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Why Attend" title="Why Attend This Webinar?" sub="AI is no longer just for tech companies. It's a practical business tool that anyone can use — if you know how." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whyAttend.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="What You Will Learn" title="What You Will Learn in This Masterclass" sub="5 practical modules designed to turn you into an AI-powered business operator." />
          <div className="mt-12 space-y-4">
            {modules.map((m) => (
              <div key={m.n} className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/50 transition">
                <div className="text-4xl font-black text-primary/40 group-hover:text-primary transition w-16 shrink-0">{m.n}</div>
                <div>
                  <h3 className="text-xl font-bold">{m.t}</h3>
                  <p className="mt-1.5 text-muted-foreground">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Who Should Attend" title="Who Should Attend This Webinar?" sub="This webinar is designed for ambitious professionals and business owners across the UAE." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((a) => (
              <div key={a.t} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
          {/* Industries */}
          <div className="mt-14 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
            <h3 className="text-center text-lg font-bold text-muted-foreground">Relevant for industries across the UAE</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div key={ind.label} className="flex items-center gap-2.5 rounded-xl bg-card border border-border px-3 py-2.5">
                  <ind.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REAL BUSINESS EXAMPLES */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Real Examples" title="Real Business Automation Examples" sub="See how everyday businesses transform the way they work with AI and automation." />
          <div className="mt-12 space-y-4">
            {businessExamples.map((ex, i) => (
              <div key={i} className="grid gap-4 md:grid-cols-2 rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">Before AI & Automation</div>
                  <p className="text-sm text-muted-foreground">{ex.before}</p>
                </div>
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">After AI + Automation</div>
                  <p className="text-sm text-foreground">{ex.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES DIFFERENT */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="What Makes This Different" title="What Makes This Webinar Different?" sub="Not another 'AI is the future' talk. This is a practical, step-by-step business automation workshop." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.t} className="rounded-2xl border border-border bg-card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{d.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN AUTOMATE */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="What You Can Automate" title="What You Can Potentially Automate" sub="From marketing to admin, here's where AI and automation can start working for your business." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {automations.map((a) => (
              <div key={a.t} className="rounded-2xl border border-primary/30 bg-card p-7">
                <a.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ADVANTAGE */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">The AI Advantage</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black">Don't Replace Your Team. Make Your Team 10x More Productive.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            AI is not here to take jobs. It's here to remove repetitive work, so your people can focus on strategy, creativity, and relationships.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: "80%", d: "of repetitive questions can be handled by AI" },
              { n: "70%", d: "reduction in content creation time" },
              { n: "3x", d: "faster lead follow-up and response" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-card border border-border p-6">
                <div className="text-4xl font-black text-accent-glow">{s.n}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL TAKE AWAY */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="What You Will Take Away" title="What You Will Take Away From This Webinar" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {takeaways.map((t, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR UAE BUSINESSES */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Perfect For UAE Businesses" title="Perfect For UAE Businesses That Want To" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perfectFor.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST STEP CTA */}
      <section className="relative overflow-hidden px-5 py-24 sm:py-32 bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -bottom-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Your First Step Into AI Automation Starts Here
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight">
            UAE AI & Automation Webinar
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-2xl sm:text-3xl font-black">
            <span className="text-muted-foreground line-through">AED 9</span>
            <span className="text-[#c96f3f]">AED 0 — FREE</span>
          </div>
          <p className="mt-4 text-muted-foreground">Limited-time access to this practical AI & Automation webinar.</p>
          <div className="mt-10 flex justify-center">
            <CTAButton>YES! I WANT MY FREE SEAT</CTAButton>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" /> Free · No spam · Secure registration
          </p>
        </div>
      </section>

      {/* LIMITED REGISTRATION + URGENCY */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-destructive/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive">
            Limited Seats
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black">Only {spotsLeft} seats left</h2>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">🔥 {joined}+ joined • {spotsLeft} of 50 seats remaining</p>
          <p className="mt-3 text-muted-foreground">Seats are limited for this live session. Reserve your spot before the timer hits zero.</p>
          <div className="mt-10"><Countdown /></div>
          <div className="mt-10 flex justify-center"><CTAButton>RESERVE MY FREE SEAT</CTAButton></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-5 open:border-primary/40 transition">
                <summary className="flex cursor-pointer items-center justify-between font-semibold list-none">
                  {f.q}
                  <ChevronDown className="h-5 w-5 text-primary transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-24 sm:py-32 bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Your Competitors Are Already Exploring AI. <span className="text-accent-glow">Don't Get Left Behind.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One webinar. Practical skills. Automation systems that work for your UAE business. Start now for free.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="text-2xl sm:text-3xl font-black">
              <span className="text-muted-foreground line-through">AED 9</span>
              <span className="ml-2 text-[#c96f3f]">AED 0 — FREE</span>
            </div>
            <CTAButton>RESERVE MY FREE SEAT</CTAButton>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" /> Free · No spam · Secure registration
          </p>
        </div>
      </section>

      <SiteFooter />

      {/* Sticky CTA + timer */}
      {scrolled && <StickyReserveBar />}
    </div>
  );
}
