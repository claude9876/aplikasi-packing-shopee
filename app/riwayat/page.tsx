import { History } from "lucide-react";

export default function RiwayatPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-ink">Riwayat</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Rekam jejak pesanan yang sudah selesai dipacking, per staff.
        </p>
      </header>

      <div className="flex flex-col items-start gap-3 border border-dashed border-line px-6 py-10">
        <History size={22} className="text-ink-muted" />
        <p className="text-sm text-ink">Halaman ini dibangun setelah ada database & login user.</p>
        <p className="text-sm text-ink-muted">
          Rencana: riwayat packing per staff dan riwayat pesanan selesai — sesuai bagian 7.6 di
          PRD.
        </p>
      </div>
    </div>
  );
}
