interface StatCardProps {
  label: string;
  value: number;
  accent: "ink" | "primary" | "green" | "rust" | "amber";
}

const accentMap: Record<StatCardProps["accent"], string> = {
  ink: "border-l-ink",
  primary: "border-l-primary",
  green: "border-l-green",
  rust: "border-l-rust",
  amber: "border-l-amber",
};

export default function StatCard({ label, value, accent }: StatCardProps) {
  return (
    <div className={`border-l-4 ${accentMap[accent]} bg-white/60 px-5 py-4`}>
      <p className="font-mono text-3xl font-semibold text-ink">{value}</p>
      <p className="mt-1 text-sm text-ink-muted">{label}</p>
    </div>
  );
}
