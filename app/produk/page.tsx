import { Boxes } from "lucide-react";

export default function ProdukPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-ink">Produk & Stok</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Kelola data produk, varian, dan jumlah stok gudang.
        </p>
      </header>

      <div className="flex flex-col items-start gap-3 border border-dashed border-line px-6 py-10">
        <Boxes size={22} className="text-ink-muted" />
        <p className="text-sm text-ink">Halaman ini dibangun di Tahap 2.</p>
        <p className="text-sm text-ink-muted">
          Rencana: daftar produk & stok, pengurangan stok otomatis saat packing selesai,
          serta notifikasi stok menipis — sesuai bagian 7.3 di PRD.
        </p>
      </div>
    </div>
  );
}
