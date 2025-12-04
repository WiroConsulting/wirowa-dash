"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const industries = [
  "Fashion & Apparel",
  "Beauty & Kosmetik",
  "Food & Nutrition",
  "Elektronik",
  "Haushalt & Living",
  "Jewelry & Accessoires",
  "Fitness & Health",
  "Dienstleistungen",
  "Digital Products",
  "B2B / Großhandel",
];

const employees = [
  "1-5 Mitarbeiter",
  "6-15 Mitarbeiter",
  "16-50 Mitarbeiter",
  "51-200 Mitarbeiter",
  "200+ Mitarbeiter",
];

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // Step 2
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [domain, setDomain] = useState("");

  const handleStep1 = () => {
    if (!first || !last || !email || !pw)
      return alert("Bitte alle Felder ausfüllen.");
    setStep(2);
  };

  const finishRegistration = () => {
    if (!company || !industry || !employeeCount || !domain)
      return alert("Bitte alle Felder ausfüllen.");

    alert("Registration complete! Backend folgt.");
  };

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

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h1 className="text-2xl font-semibold mb-1">Konto erstellen</h1>

              <p className="text-neutral-600 mb-6 text-sm">
                Schon ein Konto?{" "}
                <Link href="/login" className="text-black underline">
                  Einloggen
                </Link>
              </p>

              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="text-sm mb-1 block">Vorname</label>
                  <input
                    type="text"
                    placeholder="Max"
                    className="border border-neutral-300 rounded-lg p-3 w-full text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm mb-1 block">Nachname</label>
                  <input
                    type="text"
                    placeholder="Mustermann"
                    className="border border-neutral-300 rounded-lg p-3 w-full text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </div>
              </div>

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
                placeholder="Mind. 8 Zeichen"
                className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-6
                focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />

              <button
                onClick={handleStep1}
                className="bg-[#12d2b2] text-white py-3 rounded-lg font-medium text-sm w-full hover:opacity-90 transition"
              >
                Nächster Schritt
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h1 className="text-2xl font-semibold mb-1">
                Unternehmensdetails
              </h1>

              <p className="text-neutral-600 mb-6 text-sm">
                Fast geschafft — erzähl uns ein wenig über dein Business.
              </p>

              <label className="text-sm mb-1 block">Unternehmen</label>
              <input
                type="text"
                placeholder="Firmenname"
                className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-4
                focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

              <label className="text-sm mb-1 block">Branche</label>
              <select
                className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-4
                focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="">Bitte auswählen</option>
                {industries.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>

              <label className="text-sm mb-1 block">Mitarbeiteranzahl</label>
              <select
                className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-4
                focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(e.target.value)}
              >
                <option value="">Bitte auswählen</option>
                {employees.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>

              <label className="text-sm mb-1 block">Domain / Website</label>
              <input
                type="text"
                placeholder="z. B. meinefirma.de"
                className="border border-neutral-300 rounded-lg p-3 w-full text-sm mb-6
                focus:outline-none focus:ring-2 focus:ring-[#12d2b2]"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />

              <button
                onClick={finishRegistration}
                className="bg-[#12d2b2] text-white py-3 rounded-lg font-medium text-sm w-full hover:opacity-90 transition"
              >
                Registrierung abschließen
              </button>
            </>
          )}
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
