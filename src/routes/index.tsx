import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, Star, Rocket, ShieldCheck, Clock, Zap, Brain, Workflow,
  PenTool, TrendingUp, ChevronDown, Check, Gift, Users,
} from "lucide-react";
import { CTAButton } from "@/components/landing/CTAButton";
import { MultiStepForm } from "@/components/landing/MultiStepForm";
import { Countdown } from "@/components/landing/Countdown";
import { ExitIntent } from "@/components/landing/ExitIntent";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Claude 101 Workshop — Learn AI Like a Pro in 3 Hours (₹50 Only)" },
      { name: "description", content: "3-hour live workshop on Claude AI for marketers, founders & beginners. Build real workflows, automate work, save 10+ hours/week. Just ₹50." },
      { property: "og:title", content: "Claude 101 Workshop — Learn AI Like a Pro in 3 Hours" },
      { property: "og:description", content: "Build real AI workflows for marketing, automation & productivity. Just ₹50 — limited seats." },
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const problems = [
    { icon: Clock, t: "Wasting hours on manual work?", d: "Repetitive tasks eat up your day while competitors move 10x faster." },
    { icon: Brain, t: "AI tools not giving real results?", d: "You've tried ChatGPT but the outputs feel generic and unusable." },
    { icon: Workflow, t: "Confused where to even start?", d: "Too many tools, tutorials, hype. Zero clarity on what actually works." },
  ];

  const solutions = [
    { icon: Zap, t: "Automate daily work", d: "Replace 10+ hours/week of busywork with smart AI workflows." },
    { icon: PenTool, t: "Write content that converts", d: "Generate ads, emails, posts in minutes — not hours." },
    { icon: Workflow, t: "Build real AI workflows", d: "Stack prompts + tools into systems that run on autopilot." },
    { icon: TrendingUp, t: "10x your output", d: "Ship more, faster — with the same effort you put in today." },
  ];

  const modules = [
    { n: "01", t: "AI Foundations", d: "How Claude actually thinks — and why that matters for your prompts." },
    { n: "02", t: "Prompt Engineering", d: "The 6 prompt frameworks top 1% professionals use daily." },
    { n: "03", t: "Real-World Use Cases", d: "Marketing, sales, research, content — live demos you can copy." },
    { n: "04", t: "Automation Workflows", d: "Chain Claude with your tools. Build your first AI assistant live." },
  ];

  const testimonials = [
    { n: "Priya S.", r: "Marketing Lead", q: "I cut content creation time by 70% in the first week. Worth 10x the price — and it was free!" },
    { n: "Rahul M.", r: "Founder, SaaS", q: "Finally an AI workshop that's not fluff. The automation module alone saved me 15 hrs/week." },
    { n: "Anjali K.", r: "Final-year student", q: "I went from zero AI knowledge to building real workflows. Landed an internship using these skills." },
  ];

  const stack = [
    { t: "3-Hour Live Workshop", v: "₹1,999" },
    { t: "Templates Pack (50+)", v: "₹999" },
    { t: "Prompt Library (200+)", v: "₹1,499" },
    { t: "Bonus Tools & Resources", v: "₹999" },
  ];
  const total = stack.reduce((s, x) => s + parseInt(x.v.replace(/\D/g, "")), 0);

  const faqs = [
    { q: "Is this beginner friendly?", a: "Absolutely. We start from zero — no prior AI or coding experience needed." },
    { q: "What tools do I need?", a: "Just a laptop/phone with internet. We'll show you free Claude AI access." },
    { q: "Will I get a recording?", a: "Yes — all registered attendees get the replay + bonus templates by email." },
    { q: "How long is the workshop?", a: "3 focused hours, live. Including a Q&A so you leave with zero confusion." },
    { q: "Is there really no cost?", a: "Yes, 100% free for the limited seats in this batch. No hidden fees." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExitIntent />

      {/* HERO with embedded lead form */}
      <header className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-14 sm:pt-16 sm:pb-20">
          <div id="reserve" className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Claude 101 — Live Workshop
              </span>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Learn AI Like a Pro in Just{" "}
                <span className="text-accent-glow">3 Hours</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-foreground/80">
                For just <span className="text-primary">₹50</span> — even if you're a complete beginner.
              </p>
              <p className="mx-auto lg:mx-0 mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
                Build real workflows for marketing, automation & productivity using Claude AI —
                taught live by industry experts.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Users, t: "2,00,000+", d: "Learners trained" },
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

            <div className="lg:sticky lg:top-6">
              <MultiStepForm />
              <p className="mt-3 text-center text-sm text-primary font-medium inline-flex items-center gap-2 w-full justify-center">
                <Clock className="h-4 w-4" /> Limited seats — Batch closing soon
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="The Problem" title="Sound familiar?" sub="Most people are stuck in the same AI trap. Here's what's holding you back." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
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

      {/* SOLUTION */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="The Outcome" title="What You'll Achieve in 3 Hours" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Curriculum" title="What's inside the workshop" sub="4 power-packed modules designed to take you from zero to AI-fluent." />
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

      {/* SOCIAL PROOF */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Loved by 2,00,000+" title="Real results from real learners" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.n} className="rounded-2xl border border-border bg-card p-7 shadow-lg">
                <div className="flex gap-1 text-primary">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground/90">"{t.q}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-gradient flex items-center justify-center font-bold text-primary-foreground">
                    {t.n[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="The Offer" title="Here's everything you get — FREE" />
          <div className="mt-12 rounded-3xl border-2 border-primary/40 bg-card p-6 sm:p-10 shadow-2xl">
            <ul className="space-y-4">
              {stack.map((s) => (
                <li key={s.t} className="flex items-center justify-between border-b border-border pb-4 last:border-0">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">{s.t}</span>
                  </div>
                  <span className="text-muted-foreground line-through">{s.v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between rounded-2xl bg-secondary px-5 py-4">
              <span className="font-bold">Total Value</span>
              <span className="text-xl font-bold line-through text-muted-foreground">₹{total.toLocaleString("en-IN")}</span>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-accent-gradient px-5 py-5 text-primary-foreground">
              <span className="text-lg font-black">Today's Price</span>
              <span className="text-3xl font-black">₹50 only</span>
            </div>
            <div className="mt-8 flex justify-center">
              <CTAButton>Claim My Seat for ₹50</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="px-5 py-20 sm:py-24 bg-card/40">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Bonuses" title="Plus, free bonuses worth ₹3,497" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "200+ AI Prompt Templates", d: "Copy-paste prompts for marketing, sales, content & ops." },
              { t: "10 Automation Workflows", d: "Plug-and-play AI systems used by 7-figure founders." },
              { t: "Curated AI Tools List", d: "The exact stack we use — categorized by use case." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-primary/30 bg-card p-7">
                <Gift className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-destructive/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive">
            Hurry
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black">Only 50 seats left</h2>
          <p className="mt-3 text-muted-foreground">Doors close when the timer hits zero.</p>
          <div className="mt-10"><Countdown /></div>
          <div className="mt-10 flex justify-center"><CTAButton>Reserve My Free Spot</CTAButton></div>
        </div>
      </section>

      {/* SECONDARY FORM */}
      <section className="px-5 py-20 sm:py-24 bg-hero">
        <div className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black">Save your seat for ₹50</h2>
            <p className="mt-2 text-muted-foreground">Takes 20 seconds. Instant confirmation.</p>
          </div>
          <MultiStepForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Questions, answered" />
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
        <div className="absolute -bottom-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Start Using AI Like the <span className="text-accent-glow">Top 1%</span> of Professionals
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One workshop. 3 hours. A skill that pays you back forever.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton>Join Workshop for ₹50</CTAButton>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" /> Just ₹50 · No spam · Secure payment
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Claude 101 Workshop. All rights reserved.
      </footer>

      {/* Sticky CTA (mobile) */}
      {scrolled && (
        <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur p-3 sm:hidden">
          <CTAButton className="w-full">Reserve Seat — ₹50</CTAButton>
        </div>
      )}
    </div>
  );
}
