"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-screen">
      {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-md w-full mx-auto">
          <Image
            src="/img/logos/logo-black.png"
            width={140}
            height={50}
            alt="Wirowa Logo"
            className="mb-8"
          />

          <h1 className="text-2xl font-semibold mb-1">Bei Wirowa anmelden</h1>

          <p className="text-neutral-600 mb-6 text-sm">
            Neu hier?{" "}
            <Link href="/register" className="text-black underline">
              Konto erstellen
            </Link>
          </p>

          <label className="text-sm mb-1 block">E-Mail</label>
          <input
            type="email"
            placeholder="max@mustermann.com"
            className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-4
            focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm mb-1 block">Passwort</label>
          <input
            type="password"
            placeholder="••••••••"
            className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-6
            focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-[#12d2b2] text-white py-3 rounded-lg font-medium text-sm w-full hover:opacity-90 transition"
          >
            Einloggen
          </button>

          <div className="flex justify-between mt-4 text-sm text-neutral-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Angemeldet bleiben
            </label>

            <Link href="#" className="hover:text-black">
              Passwort vergessen?
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/img/auth.png"
          alt="Auth Graphic"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
