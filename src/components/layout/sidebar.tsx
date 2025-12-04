"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  RectangleGroupIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Produkt Tools", href: "/dashboard/tools", icon: PuzzlePieceIcon },
  { name: "Conversion", href: "/dashboard/conversion", icon: RocketLaunchIcon },
  { name: "Templates", href: "/dashboard/templates", icon: RectangleGroupIcon },
  { name: "KnowHow", href: "/dashboard/knowhow", icon: BookOpenIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col justify-between w-64 bg-black text-white p-6 min-h-screen">

      {/* TOP */}
      <div>
        <div className="flex items-center mb-10">
          <Image
            src="/img/logos/logo-white.png"
            alt="Wirowa Logo"
            width={140}
            height={40}
          />
        </div>

        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
                ${
                  active
                    ? "bg-[#12d2b2] text-black font-medium"
                    : "text-neutral-300 hover:bg-neutral-900"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM CARD */}
      <div>
        <div className="bg-white p-4 rounded-xl text-black shadow-sm">
          <h3 className="font-semibold text-sm mb-1">Sie benötigen einen Experten?</h3>

          <p className="text-sm font-medium">Wiro Consulting</p>
          <p className="text-xs text-neutral-600 mb-4">Shopify Partner</p>

          <a
            href="tel:123456789"
            className="block w-full bg-[#12d2b2] text-white text-center py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Anrufen
          </a>
        </div>
      </div>
    </aside>
  );
}
