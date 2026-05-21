const events = [
  {
    date: "24",
    month: "MAY",
    type: "Konfrans",
    title: "Heydər Əliyev və müasir Azərbaycan",
    center: "Bakı, Heydər Əliyev Mərkəzi",
  },
  {
    date: "25",
    month: "MAY",
    type: "Sərgi",
    title: "Zəfərimiz əbədidir",
    center: "Gəncə Heydər Əliyev Mərkəzi",
  },
  {
    date: "27",
    month: "MAY",
    type: "Kino",
    title: "Azərbaycan kinosu günləri",
    center: "Naxçıvan Heydər Əliyev Mərkəzi",
  },
  {
    date: "28",
    month: "MAY",
    type: "Təlim",
    title: "Rəqəmsal bacarıqlar workshop",
    center: "Sumqayıt Heydər Əliyev Mərkəzi",
  },
];

const stats = [
  ["61", "Heydər Əliyev Mərkəzi"],
  ["500+", "Aylıq tədbirlər"],
  ["1000+", "Layihə və proqram"],
  ["1M+", "İştirakçı"],
];

const news = [
  "Gəncə Heydər Əliyev Mərkəzində yeni sərgi açıldı",
  "Rəqəmsal dünyada təhlükəsizlik mövzusunda təlim keçirildi",
  "Ulu Öndərin xatirəsi anıldı",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-white">
      <section className="relative overflow-hidden bg-[#081324] pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#2563eb66,transparent_34%)]" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-extrabold leading-5 tracking-wide">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </div>

            <div className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
              <a className="text-white">Ana səhifə</a>
              <a className="transition hover:text-white">Mərkəzlər</a>
              <a className="transition hover:text-white">Tədbirlər</a>
              <a className="transition hover:text-white">Layihələr</a>
              <a className="transition hover:text-white">Xəbərlər</a>
              <a className="transition hover:text-white">Media</a>
              <a className="transition hover:text-white">Əlaqə</a>
            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition hover:bg-blue-500">
              Daxil ol
            </button>
          </nav>

          <div className="grid min-h-[520px] items-center gap-12 pt-16 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
                Birlikdə gələcəyi qururuq
              </p>

              <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                Mədəniyyət hamımızı birləşdirir
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Heydər Əliyev Mərkəzləri ölkəmizin hər bir bölgəsində təhsil,
                mədəniyyət və innovasiyanı vahid rəqəmsal platformada birləşdirir.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Tədbirləri kəşf et
                </button>

                <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
                  Mərkəzlər xəritəsi
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div
                className="relative h-[370px] overflow-hidden rounded-[1.5rem] bg-cover bg-center p-8"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(8,19,36,.92), rgba(8,19,36,.35)), url('/hero.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#081324] via-transparent to-transparent" />

                <div className="relative flex h-full items-end">
                  <div>
                    <p className="text-sm text-white/70">Platforma</p>

                    <h2 className="mt-2 max-w-md text-4xl font-extrabold leading-tight">
                      61 mərkəz, vahid rəqəmsal ekosistem
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-4 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item[0]}
                className="border-white/10 px-2 md:border-r last:border-0"
              >
                <p className="text-4xl font-extrabold">{item[0]}</p>
                <p className="mt-2 text-sm text-white/65">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 text-slate-950">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold">Yaxınlaşan tədbirlər</h2>
            <a className="text-sm font-bold text-blue-600">Hamısına bax →</a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event, index) => (
              <div
                key={event.title}
                className="group overflow-hidden rounded-3xl bg-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-52 bg-gradient-to-br from-slate-700 to-black p-5 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,#2563eb55,transparent_35%)]" />
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="relative w-fit rounded-xl bg-white px-3 py-2 text-center text-slate-950 shadow-lg">
                    <p className="text-xl font-extrabold">{event.date}</p>
                    <p className="text-xs font-semibold">{event.month}</p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="mb-2 text-sm font-semibold text-blue-300">
                      {event.type}
                    </p>
                    <h3 className="text-xl font-extrabold leading-snug">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 text-white">
                  <p className="text-sm text-white/60">{event.center}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      +{120 - index * 18} iştirakçı
                    </span>
                    <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition group-hover:bg-blue-600">
                      Ətraflı
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-3xl font-extrabold">Mərkəzlər xəritəsi</h2>
                <a className="text-sm font-bold text-blue-600">Xəritədə bax →</a>
              </div>

              <div className="relative h-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#dbeafe,transparent_30%),linear-gradient(135deg,#eff6ff,#ffffff)]" />

                {[
                  "left-[18%] top-[24%]",
                  "left-[35%] top-[35%]",
                  "left-[52%] top-[28%]",
                  "left-[68%] top-[42%]",
                  "left-[42%] top-[58%]",
                  "left-[75%] top-[20%]",
                  "left-[25%] top-[68%]",
                ].map((pos) => (
                  <div
                    key={pos}
                    className={`absolute ${pos} h-5 w-5 rounded-full bg-blue-600 shadow-lg shadow-blue-600/40 ring-4 ring-blue-100`}
                  />
                ))}

                <div className="absolute left-[42%] top-[42%] rounded-2xl bg-white p-5 shadow-2xl">
                  <p className="font-bold">Gəncə Heydər Əliyev Mərkəzi</p>
                  <p className="mt-1 text-sm text-slate-500">Daha ətraflı →</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-3xl font-extrabold">Son xəbərlər</h2>
                <a className="text-sm font-bold text-blue-600">Hamısına bax →</a>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-xl">
                {news.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-slate-100 py-5 last:border-0"
                  >
                    <div className="h-16 w-20 rounded-2xl bg-gradient-to-br from-blue-100 to-slate-200" />

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-400">
                        {20 - index * 2} MAY 2024
                      </p>
                      <h3 className="mt-1 font-bold leading-snug">{item}</h3>
                    </div>

                    <span className="text-blue-600">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-[#081324] p-8 text-white shadow-xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Yeniliklərdən xəbərdar olun!
                </h2>
                <p className="mt-2 max-w-xl text-white/60">
                  Bülletenimizə abunə olun və ən son tədbir, layihə və
                  xəbərlərdən ilk siz xəbərdar olun.
                </p>
              </div>

              <div className="flex w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-2">
                <input
                  className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/40"
                  placeholder="E-poçt ünvanınızı daxil edin"
                />
                <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold">
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