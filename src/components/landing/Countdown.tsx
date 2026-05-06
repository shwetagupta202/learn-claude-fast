import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  return { h, m, s };
}

export function Countdown() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 23 + 1000 * 60 * 47);
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const i = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(i);
  }, [target]);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[72px] rounded-xl bg-card border border-primary/30 px-4 py-3 text-3xl sm:text-4xl font-black tabular-nums text-accent-glow">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <Box value={t.h} label="Hours" />
      <span className="text-2xl text-primary">:</span>
      <Box value={t.m} label="Minutes" />
      <span className="text-2xl text-primary">:</span>
      <Box value={t.s} label="Seconds" />
    </div>
  );
}
