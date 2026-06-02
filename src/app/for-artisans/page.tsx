import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  MapPinned,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";

import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "For Artisans | Artisyn",
  description:
    "See how Artisyn helps artisans get discovered, build trust, and get paid with fewer platform barriers.",
};

const BENEFITS = [
  {
    description:
      "Show your craft, location, and portfolio in a profile clients can browse with confidence.",
    icon: MapPinned,
    title: "Get discovered locally",
  },
  {
    description:
      "Keep more of what you earn with direct client relationships and faster payout expectations.",
    icon: Wallet,
    title: "Earn with more clarity",
  },
  {
    description:
      "Collect reviews that strengthen your reputation and help serious clients choose you faster.",
    icon: Star,
    title: "Build visible credibility",
  },
];

const TRUST_SIGNALS = [
  {
    description:
      "Clients can see stronger signals before they reach out, which helps reduce low-intent leads.",
    icon: BadgeCheck,
    title: "Trust-first discovery",
  },
  {
    description:
      "Escrow-backed flows are designed to make the work relationship feel safer for both sides.",
    icon: ShieldCheck,
    title: "Protected transactions",
  },
  {
    description:
      "Your reviews and completed work help create a reputation that compounds over time.",
    icon: BriefcaseBusiness,
    title: "Long-term reputation",
  },
];

const APPLY_STEPS = [
  {
    step: "01",
    title: "Create your artisan profile",
    description:
      "Tell clients what you do, where you work, and why they should trust your craft.",
  },
  {
    step: "02",
    title: "Show proof of your quality",
    description:
      "Add portfolio details, experience, and the information that helps strong clients choose faster.",
  },
  {
    step: "03",
    title: "Start receiving better opportunities",
    description:
      "Once your profile is ready, you can position yourself for discovery, trust, and repeat work.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#605DEC]">
      {children}
    </p>
  );
}

export default function ForArtisansPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="h-20" />

      <section className="px-6 pb-8 pt-8 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:items-stretch">
          <div className="rounded-[2rem] border border-[#E2E8F0] bg-white p-8 md:p-10">
            <SectionEyebrow>For Artisans</SectionEyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-6xl">
              More visibility, more trust, and a clearer path to paid work.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B] md:text-lg">
              Artisyn helps skilled artisans present their work professionally,
              build stronger credibility, and connect with clients who are ready
              to hire with more confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#605DEC] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F46E5]"
                href="/profile-setup"
              >
                Apply as an Artisan
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl border border-[#D7DEEA] bg-white px-6 py-3 text-sm font-medium text-[#334155] transition-colors hover:bg-[#F8FAFC]"
                href="/how-it-works"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(160deg,#0F172A_0%,#1E293B_52%,#605DEC_100%)] p-8 text-white">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/70">
              Why join now
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-4xl font-semibold">Better first impressions</p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Present your service with a clearer profile, stronger trust
                  signals, and a story clients can understand quickly.
                </p>
              </div>
              <div className="h-px bg-white/15" />
              <div>
                <p className="text-4xl font-semibold">Faster trust building</p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Verified-looking presence, reputation signals, and clearer
                  value help reduce hesitation during discovery.
                </p>
              </div>
              <div className="h-px bg-white/15" />
              <div>
                <p className="text-4xl font-semibold">More professional positioning</p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Artisyn is designed to help skilled workers look credible,
                  organized, and ready for serious opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Benefits</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-4xl">
              What artisans get from the platform
            </h2>
            <p className="mt-3 text-base leading-7 text-[#64748B]">
              The goal is simple: help quality artisans look trustworthy,
              communicate value better, and move toward better-fit client work.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {BENEFITS.map(({ description, icon: Icon, title }) => (
              <article
                className="rounded-3xl border border-[#E2E8F0] bg-white p-6"
                key={title}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#605DEC]">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-[#E2E8F0] bg-white p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-10">
          <div>
            <SectionEyebrow>Trust</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-4xl">
              Trust signals that help clients say yes
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              People hire faster when they feel confident in what they are
              seeing. Artisyn is meant to make your experience, reputation, and
              professionalism easier to understand at a glance.
            </p>
          </div>

          <div className="grid gap-4">
            {TRUST_SIGNALS.map(({ description, icon: Icon, title }) => (
              <div
                className="flex gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                key={title}
              >
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#605DEC]">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#64748B]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Apply</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-4xl">
              Joining should feel straightforward
            </h2>
            <p className="mt-3 text-base leading-7 text-[#64748B]">
              We want the path from interest to application to feel clear and
              practical, especially for artisans who just want to get started.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {APPLY_STEPS.map(({ description, step, title }) => (
              <article
                className="rounded-3xl border border-[#E2E8F0] bg-white p-6"
                key={step}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.18em] text-[#94A3B8]">
                    {step}
                  </span>
                  <Clock3 className="size-4 text-[#CBD5E1]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0F172A] px-8 py-10 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Start now</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Ready to put your work in front of the right clients?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Set up your artisan onboarding profile and start building a
                stronger presence on Artisyn.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#605DEC] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F46E5]"
                href="/profile-setup"
              >
                Apply as an Artisan
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                href="/contact"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
