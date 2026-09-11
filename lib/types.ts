export type StatusPesanan = "belum" | "proses" | "selesai" | "bermasalah";

export interface ItemPesanan {
  id: string;
  namaProduk: string;
  varian: string;
  sku: string;
  qty: number;
  dicentang: boolean;
}

export interface Pesanan {
  id: string;
  noPesanan: string;
  pembeli: string;
  waktuMasuk: string;
  kurir: string;
  items: ItemPesanan[];
  status: StatusPesanan;
  catatan?: string;
}
