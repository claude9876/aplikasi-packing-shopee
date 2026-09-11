import { Pesanan } from "./types";

// Data contoh (dummy) — dipakai untuk demo Tahap 1.
// Akan diganti dengan data asli dari Shopee Open API di Tahap 3.
export const pesananAwal: Pesanan[] = [
  {
    id: "1",
    noPesanan: "SP2609120001",
    pembeli: "Rina W.",
    waktuMasuk: "08:12",
    kurir: "J&T Reguler",
    status: "belum",
    items: [
      { id: "1-1", namaProduk: "Kaos Polos Combed 30s", varian: "Hitam / L", sku: "KPC-BLK-L", qty: 2, dicentang: false },
      { id: "1-2", namaProduk: "Totebag Kanvas", varian: "Krem", sku: "TBG-KRM", qty: 1, dicentang: false },
    ],
  },
  {
    id: "2",
    noPesanan: "SP2609120002",
    pembeli: "Ahmad F.",
    waktuMasuk: "08:20",
    kurir: "SPX Instant",
    status: "belum",
    items: [
      { id: "2-1", namaProduk: "Case HP Silikon", varian: "iPhone 13 / Navy", sku: "CHP-IP13-NVY", qty: 1, dicentang: false },
    ],
  },
  {
    id: "3",
    noPesanan: "SP2609120003",
    pembeli: "Sari M.",
    waktuMasuk: "08:35",
    kurir: "J&T Reguler",
    status: "proses",
    items: [
      { id: "3-1", namaProduk: "Tumbler Stainless 500ml", varian: "Putih", sku: "TML-500-WHT", qty: 1, dicentang: true },
      { id: "3-2", namaProduk: "Kaos Polos Combed 30s", varian: "Putih / M", sku: "KPC-WHT-M", qty: 3, dicentang: false },
    ],
  },
  {
    id: "4",
    noPesanan: "SP2609120004",
    pembeli: "Budi S.",
    waktuMasuk: "08:41",
    kurir: "AnterAja",
    status: "bermasalah",
    catatan: "Stok Tumbler 500ml varian Hijau kosong",
    items: [
      { id: "4-1", namaProduk: "Tumbler Stainless 500ml", varian: "Hijau", sku: "TML-500-GRN", qty: 1, dicentang: false },
    ],
  },
  {
    id: "5",
    noPesanan: "SP2609120005",
    pembeli: "Dewi P.",
    waktuMasuk: "09:02",
    kurir: "SPX Instant",
    status: "selesai",
    items: [
      { id: "5-1", namaProduk: "Totebag Kanvas", varian: "Hitam", sku: "TBG-BLK", qty: 2, dicentang: true },
    ],
  },
  {
    id: "6",
    noPesanan: "SP2609120006",
    pembeli: "Hendra K.",
    waktuMasuk: "09:10",
    kurir: "J&T Reguler",
    status: "belum",
    items: [
      { id: "6-1", namaProduk: "Case HP Silikon", varian: "Samsung S23 / Hitam", sku: "CHP-S23-BLK", qty: 1, dicentang: false },
      { id: "6-2", namaProduk: "Kaos Polos Combed 30s", varian: "Hitam / XL", sku: "KPC-BLK-XL", qty: 1, dicentang: false },
    ],
  },
];
