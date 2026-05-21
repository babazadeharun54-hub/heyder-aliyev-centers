const centers = [
  {
    slug: "baku",
    name: "Bakı Heydər Əliyev Mərkəzi",
    city: "Bakı",
    events: 18,
    registrations: 1248,
    projects: 12,
    activity: "Yüksək",
  },
  {
    slug: "ganja",
    name: "Gəncə Heydər Əliyev Mərkəzi",
    city: "Gəncə",
    events: 14,
    registrations: 980,
    projects: 9,
    activity: "Yüksək",
  },
  {
    slug: "sumqayit",
    name: "Sumqayıt Heydər Əliyev Mərkəzi",
    city: "Sumqayıt",
    events: 9,
    registrations: 610,
    projects: 6,
    activity: "Orta",
  },
  {
    slug: "naxcivan",
    name: "Naxçıvan Heydər Əliyev Mərkəzi",
    city: "Naxçıvan",
    events: 6,
    registrations: 420,
    projects: 4,
    activity: "Orta",
  },
];

const stats = [
  { label: "Ümumi mərkəz", value: "61" },
  { label: "Bu ay tədbir", value: "127" },
  { label: "Ümumi qeydiyyat", value: "4,830" },
  { label: "Aktiv layihə", value: "84" },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <section className="bg-[#081324] px-6 py-10 text-white">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-lg font-extrabold leading-5">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>

            <a
              href="/admin/login"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold"
            >
              Çıxış
            </a>
          </nav>

          <div className="py-16">
            <p className="inline-flex rounded-full bg-blue-600/20 px-5 py-2 text-sm font-bold text-blue-200">
              Super Admin Panel
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
              Mərkəzlərin ümumi idarəetmə paneli
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Bütün mərkəzlərin tədbir, qeydiyyat, layihə və aktivlik
              göstəricilərinin analitik idarəetmə sistemi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-base font-bold text-white/60">
                  {item.label}
                </p>

                <h2 className="mt-8 text-5xl font-extrabold leading-none">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[34px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <h2 className="text-4xl font-extrabold">
                  Mərkəzlərin siyahısı
                </h2>
                <p className="mt-3 text-lg text-slate-500">
                  Hər mərkəzin aylıq performans göstəriciləri.
                </p>
              </div>

              <a
                href="/admin/centers"
                className="rounded-2xl bg-[#081324] px-6 py-4 font-bold text-white"
              >
                Bütün mərkəzlər
              </a>
            </div>

            <div className="mt-10 grid gap-5">
              {centers.map((center) => (
                <div
                  key={center.slug}
                  className="grid gap-5 rounded-[26px] border border-slate-200 bg-slate-50 p-6 lg:grid-cols-[1.5fr_0.7fr_0.6fr_0.7fr_0.6fr_0.7fr_0.7fr] lg:items-center"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-400">Mərkəz</p>
                    <h3 className="mt-2 text-xl font-extrabold">
                      {center.name}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-400">Şəhər</p>
                    <p className="mt-2 font-bold text-slate-600">
                      {center.city}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-400">Tədbir</p>
                    <p className="mt-2 text-2xl font-extrabold">
                      {center.events}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-400">
                      Qeydiyyat
                    </p>
                    <p className="mt-2 text-2xl font-extrabold">
                      {center.registrations}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-400">Layihə</p>
                    <p className="mt-2 text-2xl font-extrabold">
                      {center.projects}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-400">
                      Aktivlik
                    </p>
                    <span className="mt-2 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-600">
                      {center.activity}
                    </span>
                  </div>

                  <a
                    href={`/admin/centers/${center.slug}`}
                    className="rounded-2xl bg-blue-600 px-5 py-4 text-center font-bold text-white transition hover:bg-blue-700"
                  >
                    Admin bax
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="rounded-[34px] bg-[#081324] p-8 text-white">
              <h2 className="text-3xl font-extrabold">Aylıq analiz</h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {centers.map((center) => (
                  <div key={center.slug} className="rounded-3xl bg-white/5 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold">{center.city}</h3>
                      <span className="font-bold text-blue-300">
                        {center.events} tədbir
                      </span>
                    </div>

                    <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{
                          width: `${Math.min(center.events * 5, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-3xl font-extrabold">Sürətli əməliyyatlar</h2>

              <div className="mt-8 space-y-4">
                <a
                  href="/admin/events/new"
                  className="block rounded-2xl bg-blue-600 px-5 py-4 text-center font-bold text-white"
                >
                  Yeni tədbir əlavə et
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
                  Hesabatlar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}