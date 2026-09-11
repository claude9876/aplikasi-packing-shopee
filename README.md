# Kemas — Aplikasi Packing Orderan Shopee

Tahap 1: fondasi aplikasi + fitur checklist packing (dengan data contoh).

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Deploy ke Vercel

1. Push folder ini ke repository GitHub (baru atau yang sudah ada)
2. Di [vercel.com](https://vercel.com), pilih **Add New Project** → import repo tersebut
3. Vercel otomatis mendeteksi Next.js — tidak perlu ubah konfigurasi apa pun
4. Klik **Deploy**

Setelah ini live, setiap `git push` ke branch utama akan otomatis deploy ulang.

## Apa yang sudah jadi di Tahap 1

- Struktur navigasi: Ringkasan, Packing, Produk & Stok, Riwayat
- Halaman **Ringkasan**: statistik pesanan hari ini
- Halaman **Packing**: checklist interaktif per pesanan (centang barang, tandai bermasalah)
- Data masih **data contoh**, tersimpan sementara di browser (reset saat refresh) — belum ada database maupun login

## Rencana tahap berikutnya

| Tahap | Isi | Yang perlu disiapkan dari sisi kamu |
|---|---|---|
| 2 | Database sungguhan (pesanan & stok tersimpan permanen) + halaman Produk & Stok berfungsi penuh | Pilih penyedia database (rekomendasi: Vercel Postgres atau Supabase, keduanya ada paket gratis) |
| 3 | Integrasi Shopee Open API (tarik pesanan otomatis, bukan data contoh lagi) | Daftar sebagai Shopee Open Platform Partner untuk dapat App ID & Secret |
| 4 | Login & role (Admin vs Staff Packing) | — |
| 5 | Cetak label & resi pengiriman sungguhan | Info printer/format label yang dipakai di gudang |

Beri tahu saya kapan mau lanjut ke tahap berikutnya.
