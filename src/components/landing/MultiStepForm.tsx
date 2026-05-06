import { useState } from "react";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const step1Schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
});
const step2Schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
});

export function MultiStepForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState({ email: "", name: "", phone: "" });
  const [error, setError] = useState<string | null>(null);

  const next = () => {
    setError(null);
    if (step === 1) {
      const r = step1Schema.safeParse({ email: data.email });
      if (!r.success) return setError(r.error.issues[0].message);
      setStep(2);
    } else if (step === 2) {
      const r = step2Schema.safeParse({ name: data.name, phone: data.phone });
      if (!r.success) return setError(r.error.issues[0].message);
      setStep(3);
    }
  };

  if (step === 3) {
    return (
      <div className="rounded-2xl bg-card p-8 text-center border border-border">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h3 className="mt-4 text-2xl font-bold">You're In! 🎉</h3>
        <p className="mt-2 text-muted-foreground">
          Check your inbox for the workshop access link & calendar invite.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card p-6 sm:p-8 border border-border shadow-2xl">
      <div className="mb-6 flex items-center gap-2">
        <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
        <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold">
        {step === 1 ? "Reserve your free seat" : "Almost done — last step"}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Step {step} of 2 · Limited seats left
      </p>

      <div className="mt-6 space-y-4">
        {step === 1 && (
          <input
            type="email"
            placeholder="your@email.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full rounded-xl bg-background border border-border px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        )}
        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Your full name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full rounded-xl bg-background border border-border px-4 py-3.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full rounded-xl bg-background border border-border px-4 py-3.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </>
        )}

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          onClick={next}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient px-6 py-4 font-bold text-primary-foreground btn-glow transition hover:scale-[1.01] active:scale-[0.99]"
        >
          {step === 1 ? "Continue" : "Reserve My Free Spot"}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" /> Secure & privacy assured · No spam
        </p>
      </div>
    </div>
  );
}
