"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PackageCheck, Boxes, History } from "lucide-react";

const menu = [
  { href: "/", label: "Ringkasan", icon: LayoutDashboard },
  { href: "/pesanan", label: "Packing", icon: PackageCheck },
  { href: "/produk", label: "Produk & Stok", icon: Boxes },
  { href: "/riwayat", label: "Riwayat", icon: History },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-line bg-paper px-4 py-6">
      <div className="mb-8 px-2">
        <span className="font-mono text-lg font-semibold tracking-tight text-primary">
          Kemas
        </span>
        <p className="mt-0.5 text-xs text-ink-muted">Packing Shopee</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {menu.map(({ href, label, icon: Icon }) => {
          const aktif = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                aktif
                  ? "bg-primary text-white"
                  : "text-ink hover:bg-line/60"
              }`}
            >
              <Icon size={17} strokeWidth={2} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-line pt-4 px-2 text-xs text-ink-muted">
        Tahap 1 &middot; Data contoh
      </div>
    </aside>
  );
}
