import { StatusPesanan } from "./types";

export const labelStatus: Record<StatusPesanan, string> = {
  belum: "Belum dipacking",
  proses: "Sedang dipacking",
  selesai: "Selesai",
  bermasalah: "Bermasalah",
};

export const warnaStatus: Record<StatusPesanan, { teks: string; titik: string; border: string }> = {
  belum: { teks: "text-ink-muted", titik: "bg-ink-muted", border: "border-l-ink-muted" },
  proses: { teks: "text-primary", titik: "bg-primary", border: "border-l-primary" },
  selesai: { teks: "text-green", titik: "bg-green", border: "border-l-green" },
  bermasalah: { teks: "text-rust", titik: "bg-rust", border: "border-l-rust" },
};
