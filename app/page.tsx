const events = [
  {
    day: "24",
    month: "MAY",
    type: "Konfrans",
    title: "Heydər Əliyev və müasir Azərbaycan",
    center: "Bakı Heydər Əliyev Mərkəzi",
  },
  {
    day: "25",
    month: "MAY",
    type: "Sərgi",
    title: "Zəfərimiz əbədidir",
    center: "Gəncə Heydər Əliyev Mərkəzi",
  },
  {
    day: "27",
    month: "MAY",
    type: "Kino",
    title: "Azərbaycan kinosu günləri",
    center: "Naxçıvan Heydər Əliyev Mərkəzi",
  },
  {
    day: "28",
    month: "MAY",
    type: "Təlim",
    title: "Rəqəmsal bacarıqlar workshop",
    center: "Sumqayıt Heydər Əliyev Mərkəzi",
  },
];

const news = [
  {
    date: "20 MAY 2024",
    title: "Gəncə Heydər Əliyev Mərkəzində yeni sərgi açıldı",
  },
  {
    date: "18 MAY 2024",
    title: "Rəqəmsal dünyada təhlükəsizlik mövzusunda təlim keçirildi",
  },
  {
    date: "16 MAY 2024",
    title: "Ulu Öndərin xatirəsi anıldı",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-[#081324] px-6 py-7 text-white">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-lg font-extrabold leading-5">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
              <a href="/" className="text-white">
                Ana səhifə
              </a>

              <a href="/centers" className="transition hover:text-white">
                Mərkəzlər
              </a>

              <a href="/events" className="transition hover:text-white">
                Tədbirlər
              </a>

              <a href="/projects" className="transition hover:text-white">
                Layihələr
              </a>

              <a href="/news" className="transition hover:text-white">
                Xəbərlər
              </a>

              <a href="/media" className="transition hover:text-white">
                Media
              </a>

              <a href="/contact" className="transition hover:text-white">
                Əlaqə
              </a>
            </div>

            <a
  href="/admin/login"
  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
>
  Daxil ol
</a>
          </nav>

          <div className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                Birlikdə gələcəyi qururuq
              </p>

              <h1 className="max-w-3xl text-6xl font-extrabold leading-tight md:text-7xl">
                Mədəniyyət hamımızı birləşdirir
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Heydər Əliyev Mərkəzləri ölkəmizin hər bir bölgəsində təhsil,
                mədəniyyət və innovasiyanı vahid rəqəmsal platformada
                birləşdirir.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/events"
                  className="rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
                >
                  Tədbirləri kəşf et
                </a>

                <a
                  href="/centers"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Mərkəzlər xəritəsi
                </a>
              </div>
            </div>

            <div
              className="relative min-h-[420px] rounded-[36px] border border-white/10 bg-cover bg-center p-5 shadow-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(8,19,36,.95), rgba(8,19,36,.35)), url('/hero.jpg')",
              }}
            >
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-sm text-white/60">Platforma</p>

                <h2 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight">
                  61 mərkəz, vahid rəqəmsal ekosistem
                </h2>
              </div>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
            {[
              ["61", "Heydər Əliyev Mərkəzi"],
              ["500+", "Aylıq tədbirlər"],
              ["1000+", "Layihə və proqram"],
              ["1M+", "İştirakçı"],
            ].map(([number, label]) => (
              <div key={label} className="border-white/10 p-7 md:border-r">
                <p className="text-4xl font-extrabold">{number}</p>
                <p className="mt-2 text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-extrabold">Yaxınlaşan tədbirlər</h2>

            <a href="/events" className="text-sm font-bold text-blue-600">
              Hamısına bax →
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="overflow-hidden rounded-[28px] bg-[#081324] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="relative h-56 bg-cover bg-center p-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,.92), rgba(8,19,36,.35)), url('/hero.jpg')",
                  }}
                >
                  <div className="w-fit rounded-xl bg-white px-3 py-2 text-center text-[#081324] shadow-lg">
                    <p className="text-xl font-extrabold leading-5">
                      {event.day}
                    </p>
                    <p className="text-xs font-bold">{event.month}</p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm font-bold text-blue-300">
                      {event.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-[#101a30] p-5 text-white">
                  <p className="text-sm text-white/60">{event.center}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-white/55">+120 iştirakçı</span>

                    <a
                      href="/events"
                      className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold transition hover:bg-blue-600"
                    >
                      Ətraflı
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-4xl font-extrabold">Mərkəzlər xəritəsi</h2>

                <a href="/centers" className="text-sm font-bold text-blue-600">
                  Xəritədə bax →
                </a>
              </div>

              <div className="relative h-[360px] rounded-[32px] bg-blue-50 shadow-xl">
                {[
                  ["left-[18%] top-[28%]", "Bakı"],
                  ["left-[36%] top-[42%]", "Gəncə"],
                  ["left-[55%] top-[34%]", "Şəki"],
                  ["left-[72%] top-[25%]", "Quba"],
                  ["left-[24%] top-[65%]", "Lənkəran"],
                ].map(([pos, label]) => (
                  <div
                    key={label}
                    className={`absolute ${pos} group cursor-pointer`}
                  >
                    <div className="h-5 w-5 rounded-full bg-blue-600 shadow-lg shadow-blue-600/40 ring-4 ring-blue-200" />
                    <div className="pointer-events-none absolute left-6 top-0 hidden rounded-xl bg-white px-4 py-2 text-sm font-bold shadow-xl group-hover:block">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-4xl font-extrabold">Son xəbərlər</h2>

                <a href="/news" className="text-sm font-bold text-blue-600">
                  Hamısına bax →
                </a>
              </div>

              <div className="rounded-[32px] bg-white p-6 shadow-xl">
                {news.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 border-b border-slate-100 py-5 last:border-0"
                  >
                    <div className="h-20 w-20 shrink-0 rounded-2xl bg-blue-100" />

                    <div>
                      <p className="text-xs font-bold text-slate-400">
                        {item.date}
                      </p>

                      <h3 className="mt-2 text-lg font-extrabold leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <a href="/news" className="ml-auto text-blue-600">
                      →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[32px] bg-[#081324] p-10 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <h2 className="text-4xl font-extrabold">
                  Yeniliklərdən xəbərdar olun!
                </h2>

                <p className="mt-4 max-w-xl text-white/60">
                  Bülletenimizə abunə olun və ən son tədbir, layihə və
                  xəbərlərdən ilk siz xəbərdar olun.
                </p>
              </div>

              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
                <input
                  placeholder="E-poçt ünvanınızı daxil edin"
                  className="w-full bg-transparent px-4 outline-none placeholder:text-white/40"
                />

                <button className="rounded-xl bg-blue-600 px-6 py-3 font-bold">
                  Abunə ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}