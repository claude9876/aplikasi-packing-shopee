"use client";

import { useState } from "react";
import { AlertTriangle, Printer } from "lucide-react";
import { pesananAwal } from "@/lib/mock-data";
import { Pesanan, StatusPesanan } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import { warnaStatus } from "@/lib/status";

export default function PesananPage() {
  const [daftar, setDaftar] = useState<Pesanan[]>(pesananAwal);

  function toggleItem(pesananId: string, itemId: string) {
    setDaftar((prev) =>
      prev.map((p) => {
        if (p.id !== pesananId) return p;
        const items = p.items.map((it) =>
          it.id === itemId ? { ...it, dicentang: !it.dicentang } : it
        );
        const semuaDicentang = items.every((it) => it.dicentang);
        const adaDicentang = items.some((it) => it.dicentang);
        const status: StatusPesanan =
          p.status === "bermasalah"
            ? "bermasalah"
            : semuaDicentang
            ? "selesai"
            : adaDicentang
            ? "proses"
            : "belum";
        return { ...p, items, status };
      })
    );
  }

  function tandaiBermasalah(pesananId: string) {
    setDaftar((prev) =>
      prev.map((p) => {
        if (p.id !== pesananId) return p;
        const status: StatusPesanan = p.status === "bermasalah" ? "belum" : "bermasalah";
        return { ...p, status };
      })
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-ink">Packing</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Centang tiap barang saat sudah dimasukkan ke paket.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {daftar.map((p) => (
          <div
            key={p.id}
            className={`border-l-4 ${warnaStatus[p.status].border} border border-line bg-white/60`}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <div>
                <p className="font-mono text-sm text-ink">{p.noPesanan}</p>
                <p className="text-xs text-ink-muted">
                  {p.pembeli} &middot; {p.kurir} &middot; masuk {p.waktuMasuk}
                </p>
              </div>
              <StatusBadge status={p.status} />
            </div>

            {p.catatan && (
              <div className="flex items-center gap-2 border-b border-line bg-rust/5 px-5 py-2 text-sm text-rust">
                <AlertTriangle size={15} />
                {p.catatan}
              </div>
            )}

            <ul className="divide-y divide-line">
              {p.items.map((item) => (
                <li key={item.id} className="flex items-center gap-3 px-5 py-3">
                  <input
                    type="checkbox"
                    checked={item.dicentang}
                    onChange={() => toggleItem(p.id, item.id)}
                    className="h-5 w-5 shrink-0 accent-primary"
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm ${
                        item.dicentang ? "text-ink-muted line-through" : "text-ink"
                      }`}
                    >
                      {item.namaProduk} — {item.varian}
                    </p>
                    <p className="font-mono text-xs text-ink-muted">{item.sku}</p>
                  </div>
                  <span className="font-mono text-sm text-ink-muted">x{item.qty}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between px-5 py-3">
              <button
                onClick={() => tandaiBermasalah(p.id)}
                className="text-sm text-ink-muted hover:text-rust"
              >
                {p.status === "bermasalah" ? "Batalkan tanda bermasalah" : "Tandai bermasalah"}
              </button>
              <button
                disabled={p.status !== "selesai"}
                className="flex items-center gap-2 bg-primary px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-muted"
              >
                <Printer size={15} />
                Cetak label
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-ink-muted">
        Data pada halaman ini masih data contoh dan tersimpan sementara di browser — akan
        tersambung ke pesanan Shopee sungguhan setelah Tahap 3 (integrasi API) selesai.
      </p>
    </div>
  );
}
