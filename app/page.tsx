import Link from "next/link";
import StatCard from "@/components/StatCard";
import { pesananAwal } from "@/lib/mock-data";
import { labelStatus, warnaStatus } from "@/lib/status";

export default function DashboardPage() {
  const total = pesananAwal.length;
  const selesai = pesananAwal.filter((p) => p.status === "selesai").length;
  const belum = pesananAwal.filter((p) => p.status === "belum" || p.status === "proses").length;
  const bermasalah = pesananAwal.filter((p) => p.status === "bermasalah").length;

  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-ink">Ringkasan hari ini</h1>
        <p className="mt-1 text-sm text-ink-muted">Jumat, 12 September 2026</p>
      </header>

      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Total pesanan" value={total} accent="ink" />
        <StatCard label="Belum selesai" value={belum} accent="primary" />
        <StatCard label="Sudah dipacking" value={selesai} accent="green" />
        <StatCard label="Bermasalah" value={bermasalah} accent="rust" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-ink">Pesanan terbaru</h2>
        <Link href="/pesanan" className="text-sm text-primary hover:underline">
          Lihat semua pesanan
        </Link>
      </div>

      <div className="divide-y divide-line border-t border-b border-line">
        {pesananAwal.map((p) => (
          <div key={p.id} className="flex items-center justify-between py-3">
            <div>
              <p className="font-mono text-sm text-ink">{p.noPesanan}</p>
              <p className="text-xs text-ink-muted">
                {p.pembeli} &middot; {p.kurir} &middot; masuk {p.waktuMasuk}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${warnaStatus[p.status].titik}`} />
              <span className={`text-sm ${warnaStatus[p.status].teks}`}>
                {labelStatus[p.status]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-ink-muted">
        Angka di atas dihitung dari data contoh dan belum tersambung dengan aksi checklist di
        halaman Packing pada tahap ini — akan digabung setelah database sungguhan dipasang.
      </p>
    </div>
  );
}
