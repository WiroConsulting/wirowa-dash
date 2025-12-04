"use client";

import { useState } from "react";
import { UserCircleIcon, ArrowRightOnRectangleIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const username = "username"; // Fake until backend is ready

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Page Title will be inside dashboard-shell */}

      <div />

      {/* Right section */}
      <div className="flex items-center gap-4">

        {/* Shop erstellen Button */}
        <button className="flex items-center gap-2 bg-[#12d2b2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
          <PlusIcon className="h-4 w-4" />
          Shopify Shop verbinden
        </button>

        {/* Username */}
        <div className="flex items-center gap-2 text-sm text-neutral-700">
          <UserCircleIcon className="h-6 w-6 text-neutral-500" />
          {username}
        </div>

        {/* Logout */}
        <button className="text-neutral-500 hover:text-black transition">
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
