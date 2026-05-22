import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Center = {
  id: string;
  name: string;
  slug: string;
  city: string;
  region: string | null;
  founded_year: number | null;
  last_renovation_year: number | null;
  description: string | null;
  status: string | null;
};

export default async function CentersPage() {
  const { data, error } = await supabase
    .from("centers")
    .select(
      "id,name,slug,city,region,founded_year,last_renovation_year,description,status"
    )
    .order("city", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-white p-10 text-black">
        <h1 className="text-3xl font-black text-red-600">Supabase xətası</h1>
        <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-slate-100 p-6">
          {JSON.stringify(error, null, 2)}
        </pre>
      </main>
    );
  }

  const centers = (data || []) as Center[];

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-950">
      <section className="bg-[#081324] px-6 py-14 text-white">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-bold"
          >
            ← Ana səhifə
          </Link>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Heydər Əliyev Mərkəzləri
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            Azərbaycanın müxtəlif bölgələrində fəaliyyət göstərən mərkəzlərin
            real məlumat bazası.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm text-white/55">Ümumi mərkəz</p>
              <h2 className="mt-3 text-4xl font-black">{centers.length}</h2>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm text-white/55">Aktiv status</p>
              <h2 className="mt-3 text-4xl font-black">
                {centers.filter((c) => c.status === "active").length}
              </h2>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm text-white/55">Region məlumatı</p>
              <h2 className="mt-3 text-4xl font-black">
                {centers.filter((c) => c.region).length}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {centers.map((center) => (
              <Link
                key={center.id}
                href={`/centers/${center.slug}`}
                className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                    {center.city}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
                    {center.status || "active"}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black leading-tight">
                  {center.name}
                </h2>

                <p className="mt-4 line-clamp-2 text-base leading-7 text-slate-500">
                  {center.description || "Mərkəz haqqında məlumat hazırlanır."}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-400">
                      Tikilmə ili
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {center.founded_year || "-"}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-400">
                      Son təmir
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {center.last_renovation_year || "-"}
                    </h3>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="font-bold text-blue-600">
                    Ətraflı məlumat
                  </span>

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-xl font-black text-white">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}