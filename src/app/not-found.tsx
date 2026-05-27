import Image from "next/image";
import Link from "next/link";
import { Home, LayoutDashboard, Search } from "lucide-react";

const quickLinks = [
  {
    href: "/",
    label: "Home",
    description: "Return to the Artisyn landing page.",
  },
  {
    href: "/artisan/dashboard",
    label: "Artisan dashboard",
    description: "Open your artisan workspace.",
  },
  {
    href: "/connect-wallet",
    label: "Connect wallet",
    description: "Continue onboarding with a wallet.",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <div className="h-2 bg-[#605DEC]" />

      <section className="mx-auto flex min-h-[calc(100vh-0.5rem)] max-w-6xl flex-col px-6 py-8 lg:px-8">
        <Link href="/" className="inline-flex w-fit items-center">
          <Image
            src="/Logo.png"
            alt="Artisyn.io"
            width={132}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#605DEC]">
              404
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-[#100F0F] sm:text-5xl lg:text-6xl">
              We could not find that page.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#5F5D66] sm:text-lg">
              The link may be outdated, moved, or no longer available. Head back
              to a working route and keep moving.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#605DEC] px-5 text-sm font-bold text-white shadow-lg shadow-[#605DEC]/20 transition-opacity hover:opacity-90"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/artisan/dashboard"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-[#D9D6E8] bg-white px-5 text-sm font-bold text-[#605DEC] transition-colors hover:bg-[#EFEEFF]"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#E5E1EF] bg-white p-6 shadow-xl shadow-[#100F0F]/5">
            <div className="flex items-center gap-3 border-b border-[#ECE9F4] pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#EFEEFF] text-[#605DEC]">
                <Search className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#100F0F]">
                  Useful routes
                </h2>
                <p className="text-sm text-[#6B6878]">
                  Choose a destination that exists today.
                </p>
              </div>
            </div>

            <div className="mt-4 divide-y divide-[#F0EDF6]">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 transition-colors hover:text-[#605DEC]"
                >
                  <span className="font-bold">{link.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-[#6B6878]">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
