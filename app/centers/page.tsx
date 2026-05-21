const centers = [
  {
    name: "Bakı Heydər Əliyev Mərkəzi",
    slug: "baku",
    city: "Bakı",
    description:
      "Mədəniyyət, innovasiya və beynəlxalq tədbirlərin keçirildiyi əsas mərkəz.",
  },
  {
    name: "Gəncə Heydər Əliyev Mərkəzi",
    slug: "ganja",
    city: "Gəncə",
    description:
      "Regionun gənclər və təhsil layihələrinin əsas platformalarından biri.",
  },
  {
    name: "Sumqayıt Heydər Əliyev Mərkəzi",
    slug: "sumqayit",
    city: "Sumqayıt",
    description:
      "Texnologiya və rəqəmsal inkişaf istiqamətində tədbirlərin keçirildiyi mərkəz.",
  },
  {
    name: "Naxçıvan Heydər Əliyev Mərkəzi",
    slug: "nakhchivan",
    city: "Naxçıvan",
    description:
      "Tarix, mədəniyyət və dövlətçilik mövzusunda layihələrin keçirildiyi mərkəz.",
  },
  {
    name: "Şəki Heydər Əliyev Mərkəzi",
    slug: "shaki",
    city: "Şəki",
    description:
      "Regional mədəni tədbirlər və sərgilərin keçirildiyi əsas platforma.",
  },
  {
    name: "Lənkəran Heydər Əliyev Mərkəzi",
    slug: "lankaran",
    city: "Lənkəran",
    description:
      "Gənclər proqramları və ictimai fəaliyyətlərin koordinasiya mərkəzi.",
  },
];

export default function CentersPage() {
  return (
    <main className="min-h-screen bg-[#081324] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#2563eb55,transparent_34%)]" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-6">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-lg font-extrabold leading-5 tracking-wide">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
              <a href="/" className="transition hover:text-white">Ana səhifə</a>
              <a className="text-white">Mərkəzlər</a>
              <a className="transition hover:text-white">Tədbirlər</a>
              <a className="transition hover:text-white">Xəbərlər</a>
              <a className="transition hover:text-white">Media</a>
              <a className="transition hover:text-white">Əlaqə</a>
            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500">
              Daxil ol
            </button>
          </nav>

          <div className="py-20">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
              Azərbaycanın bütün regionları
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Heydər Əliyev Mərkəzləri
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Azərbaycanın müxtəlif bölgələrində fəaliyyət göstərən Heydər Əliyev
              Mərkəzlərini vahid rəqəmsal platformada kəşf edin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 text-slate-950">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl font-extrabold">Region mərkəzləri</h2>
              <p className="mt-3 text-slate-500">
                Regionlara görə bütün mərkəzləri araşdırın.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <input
                placeholder="Mərkəz axtar..."
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-blue-500"
              />

              <select className="rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-blue-500">
                <option>Bütün regionlar</option>
                <option>Bakı</option>
                <option>Gəncə</option>
                <option>Şəki</option>
                <option>Lənkəran</option>
              </select>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {centers.map((center) => (
              <div
                key={center.name}
                className="group overflow-hidden rounded-[28px] bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="relative h-64 overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.2)), url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    {center.city}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-3xl font-extrabold leading-tight">
                      {center.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-slate-500">{center.description}</p>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Aktiv fəaliyyət</p>
                      <p className="mt-1 text-xl font-extrabold">Davam edir</p>
                    </div>

                    <a
                      href={`/centers/${center.slug}`}
                      className="rounded-2xl bg-[#081324] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                    >
                      Mərkəzə bax
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 overflow-hidden rounded-[32px] bg-[#081324]">
            <div className="grid gap-10 px-10 py-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Vahid platforma
                </p>

                <h2 className="text-4xl font-extrabold leading-tight text-white">
                  Azərbaycanın hər bölgəsində fəaliyyət
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-white/60">
                  Mədəniyyət, təhsil və innovasiya sahəsində regionlararası
                  əlaqəni gücləndirən vahid rəqəmsal ekosistem.
                </p>
              </div>

              <div className="flex justify-start lg:justify-end">
                <button className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-500">
                  Xəritədə bax
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}