import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Center = {
  id: number;
  name: string;
  slug: string;
  city?: string | null;
};

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 26h48L32 12 8 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 28v22M24 28v22M40 28v22M50 28v22" stroke="currentColor" strokeWidth="2" />
      <path d="M10 52h44M6 58h52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default async function CentersPage() {
  const { data: centers, error } = await supabase
    .from("centers")
    .select("id, name, slug, city")
    .order("name", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-[#020b16] p-10 text-red-300">
        {error.message}
      </main>
    );
  }

  const centerCount = centers?.length ?? 0;
  const cityCount = new Set(centers?.map((c) => c.city).filter(Boolean)).size;

  return (
    <main className="min-h-screen bg-[#020b16] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(214,160,75,0.28),transparent_34%),radial-gradient(circle_at_18%_15%,rgba(20,88,150,0.32),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020b16_0%,rgba(2,11,22,0.95)_42%,rgba(2,11,22,0.58)_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d7a44d]/35 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#f4c875]">
              <span>✦</span>
              Azərbaycan üzrə vahid platforma
            </div>

            <h1 className="font-serif text-[62px] font-bold leading-[0.95] tracking-tight sm:text-[82px] lg:text-[92px]">
              Heydər Əliyev
              <span className="block bg-gradient-to-r from-[#f7d18a] via-[#e1a64b] to-[#b87922] bg-clip-text text-transparent">
                Mərkəzləri
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Respublika üzrə Heydər Əliyev Mərkəzləri haqqında məlumatlar,
              tədbirlər, rəhbərlik və gələcək idarəetmə panelləri üçün müasir
              rəqəmsal platforma.
            </p>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a44d]/15 text-[#f4c875]">
                  <BuildingIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{centerCount}</div>
                  <div className="text-sm text-slate-400">Aktiv mərkəz</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a44d]/15 text-[#f4c875]">
                  <LocationIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{cityCount}</div>
                  <div className="text-sm text-slate-400">Rayon və şəhər</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-[430px] w-full max-w-[560px] overflow-hidden rounded-[42px] border border-[#d7a44d]/25 bg-[#071525] shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_38%,rgba(247,198,112,0.26),transparent_38%)]" />
              <div className="absolute inset-8 rounded-[34px] border border-[#d7a44d]/20" />
              <div className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#07111f] text-[#d7a44d] shadow-2xl">
                <BuildingIcon className="h-28 w-28" />
              </div>
              <div className="absolute bottom-9 left-9 right-9 text-center">
                <div className="mb-5 h-px bg-gradient-to-r from-transparent via-[#d7a44d] to-transparent" />
                <p className="font-serif text-3xl text-[#f4c875]">
                  Milli irs. Müasir idarəetmə.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#d7a44d]">
              Mərkəzlər
            </p>
            <h2 className="mt-3 font-serif text-5xl font-bold tracking-tight">
              Bütün mərkəzlər
            </h2>
            <div className="mt-5 h-[2px] w-12 bg-[#d7a44d]" />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-slate-400 md:flex">
              <SearchIcon className="h-5 w-5" />
              <span className="text-sm">Mərkəz axtar...</span>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4c875] text-[#04101f]">
              <BuildingIcon className="h-6 w-6" />
            </div>
          </div>
        </div>

        {!centers || centers.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-slate-300">
            Hələ heç bir mərkəz əlavə edilməyib.
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {centers.map((center, index) => (
              <Link
                key={center.id}
                href={`/centers/${center.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#061221] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7a44d]/60"
              >
                <div className="relative min-h-[250px] p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,164,77,0.15),transparent_36%)]" />
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#d7a44d]/5" />

                  <div className="relative flex items-start justify-between">
                    <span className="rounded-full border border-[#d7a44d]/45 px-4 py-2 text-sm font-bold text-[#f4c875]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <BuildingIcon className="h-11 w-11 text-[#d7a44d]" />
                  </div>

                  <h3 className="relative mx-auto mt-12 max-w-[300px] text-center font-serif text-3xl font-bold leading-tight text-white">
                    {center.name}
                  </h3>

                  {center.city && (
                    <div className="relative mt-5 flex items-center justify-center gap-2 text-sm text-slate-300">
                      <LocationIcon className="h-4 w-4 text-[#f4c875]" />
                      <span>{center.city}</span>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-between border-t border-white/10 bg-white/[0.025] px-7 py-5">
                  <span className="text-sm font-bold text-[#f4c875]">
                    Ətraflı bax
                  </span>
                  <span className="text-2xl text-[#f4c875] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-[28px] border border-[#d7a44d]/25 bg-gradient-to-r from-white/[0.08] to-[#d7a44d]/15 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#d7a44d]/15 text-[#f4c875]">
                <BuildingIcon className="h-11 w-11" />
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                  Ölkəmizin hər bölgəsində Heydər Əliyev{" "}
                  <span className="text-[#f4c875]">ideyaları yaşayır</span>
                </h3>
                <p className="mt-2 text-slate-300">
                  Mərkəzlərimizə qoşulun, tədbirlərdən və yeniliklərdən xəbərdar olun.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#f7d18a] to-[#d99a3d] px-8 py-4 font-bold text-[#04101f] transition hover:scale-105"
            >
              Əlaqə saxla →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}