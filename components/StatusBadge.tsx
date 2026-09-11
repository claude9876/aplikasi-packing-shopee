import { StatusPesanan } from "@/lib/types";
import { labelStatus, warnaStatus } from "@/lib/status";

export default function StatusBadge({ status }: { status: StatusPesanan }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm ${warnaStatus[status].teks}`}>
      <span className={`h-2 w-2 rounded-full ${warnaStatus[status].titik}`} />
      {labelStatus[status]}
    </span>
  );
}
