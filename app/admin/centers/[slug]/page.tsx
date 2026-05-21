const centers = {
  baku: {
    name: "Bakı Heydər Əliyev Mərkəzi",
    city: "Bakı",
    director: "Mərkəz rəhbəri",
    events: 18,
    registrations: 1248,
    projects: 12,
    visitors: "32,400",
    activity: "Yüksək",
  },
  ganja: {
    name: "Gəncə Heydər Əliyev Mərkəzi",
    city: "Gəncə",
    director: "Mərkəz rəhbəri",
    events: 14,
    registrations: 980,
    projects: 9,
    visitors: "24,100",
    activity: "Yüksək",
  },
  sumqayit: {
    name: "Sumqayıt Heydər Əliyev Mərkəzi",
    city: "Sumqayıt",
    director: "Mərkəz rəhbəri",
    events: 9,
    registrations: 610,
    projects: 6,
    visitors: "15,800",
    activity: "Orta",
  },
  naxcivan: {
    name: "Naxçıvan Heydər Əliyev Mərkəzi",
    city: "Naxçıvan",
    director: "Mərkəz rəhbəri",
    events: 6,
    registrations: 420,
    projects: 4,
    visitors: "9,600",
    activity: "Orta",
  },
};

export default async function CenterAdminDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const center = centers[slug as keyof typeof centers] || centers.baku;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <section className="bg-[#081324] px-6 py-8 text-white">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex items-center justify-between">
            <a href="/admin" className="rounded-2xl bg-white/10 px-5 py-3 font-bold">
              ← Super admin
            </a>

            <a href="/" className="text-lg font-extrabold leading-5">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>
          </nav>

          <div className="py-16">
            <p className="inline-flex rounded-full bg-blue-600/20 px-5 py-2 text-sm font-bold text-blue-200">
              Mərkəz admin paneli
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
              {center.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              {center.city} üzrə tədbirlər, qeydiyyatlar, layihələr və ümumi
              fəaliyyət göstəriciləri.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Tədbirlər", center.events],
              ["Qeydiyyatlar", center.registrations],
              ["Layihələr", center.projects],
              ["Ziyarətçi", center.visitors],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-base font-bold text-white/60">{label}</p>
                <h2 className="mt-8 text-5xl font-extrabold leading-none">
                  {value}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <div className="rounded-[34px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-3xl font-extrabold">Mərkəz məlumatları</h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-bold text-slate-400">Şəhər</p>
                  <h3 className="mt-2 text-2xl font-extrabold">{center.city}</h3>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-bold text-slate-400">Rəhbər</p>
                  <h3 className="mt-2 text-2xl font-extrabold">
                    {center.director}
                  </h3>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-bold text-slate-400">Aktivlik</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-blue-600">
                    {center.activity}
                  </h3>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-bold text-slate-400">Status</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-green-600">
                    Aktiv
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-3xl font-extrabold">Son tədbirlər</h2>

              <div className="mt-8 grid gap-5">
                {[
                  "Heydər Əliyev və müasir Azərbaycan",
                  "Zəfərimiz əbədidir",
                  "Rəqəmsal Bacarıqlar Workshop",
                ].map((event, index) => (
                  <div
                    key={event}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-slate-50 p-6"
                  >
                    <div>
                      <p className="text-sm font-bold text-blue-600">
                        Tədbir #{index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold">{event}</h3>
                    </div>

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                      Aktiv
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[34px] bg-[#081324] p-8 text-white">
              <h2 className="text-3xl font-extrabold">Performans</h2>

              <div className="mt-8 space-y-6">
                {[
                  ["Tədbir aktivliyi", center.events * 5],
                  ["Qeydiyyat göstəricisi", 82],
                  ["Layihə icrası", center.projects * 7],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-3 flex justify-between">
                      <span className="text-white/70">{label}</span>
                      <span className="font-bold">{value}%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${Math.min(Number(value), 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-3xl font-extrabold">Əməliyyatlar</h2>

              <div className="mt-8 space-y-4">
                <a
                  href="/admin/events/new"
                  className="block rounded-2xl bg-blue-600 px-5 py-4 text-center font-bold text-white"
                >
                  Tədbir əlavə et
                </a>

                <a
                  href="/admin/registrations"
                  className="block rounded-2xl bg-slate-100 px-5 py-4 text-center font-bold"
                >
                  Qeydiyyatlara bax
                </a>

                <a
                  href="/admin/reports"
                  className="block rounded-2xl bg-slate-100 px-5 py-4 text-center font-bold"
                >
                  Hesabat çıxart
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}