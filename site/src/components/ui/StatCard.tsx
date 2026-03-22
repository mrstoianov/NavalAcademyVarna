interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-5xl font-extrabold text-white leading-none mb-1">
        {value}
        {suffix && <span className="text-2xl opacity-70">{suffix}</span>}
      </div>
      <div className="text-white/75 text-[0.9rem] font-medium tracking-wide">
        {label}
      </div>
      <div className="w-10 h-[3px] bg-sand/40 mx-auto mt-2.5 rounded-sm" />
    </div>
  );
}
