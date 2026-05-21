const events = [
  {
    slug: "heyder-eliyev-konfransi",
    title: "Heydər Əliyev və müasir Azərbaycan",
    type: "Konfrans",
    date: "24 May 2026",
    location: "Bakı Heydər Əliyev Mərkəzi",
    description:
      "Müasir Azərbaycanın inkişaf modeli və dövlətçilik strategiyası mövzusunda konfrans.",
  },
  {
    slug: "zefer-sergisi",
    title: "Zəfərimiz əbədidir",
    type: "Sərgi",
    date: "25 May 2026",
    location: "Gəncə Heydər Əliyev Mərkəzi",
    description:
      "Qələbə tariximizi əks etdirən rəsm və multimedia sərgisi.",
  },
  {
    slug: "kino-gunleri",
    title: "Azərbaycan Kinosu Günləri",
    type: "Kino",
    date: "27 May 2026",
    location: "Naxçıvan Heydər Əliyev Mərkəzi",
    description:
      "Milli kino irsimizin nümayişi və rejissorlarla görüş proqramı.",
  },
  {
    slug: "digital-workshop",
    title: "Rəqəmsal Bacarıqlar Workshop",
    type: "Təlim",
    date: "28 May 2026",
    location: "Sumqayıt Heydər Əliyev Mərkəzi",
    description:
      "Gənclər üçün texnologiya və innovasiya yönümlü praktiki təlimlər.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-[#081324] px-6 py-6 text-white">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-lg font-extrabold leading-5">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>

            <div className="hidden gap-8 text-sm font-medium text-white/75 lg:flex">
              <a href="/">Ana səhifə</a>
              <a href="/centers">Mərkəzlər</a>
              <a className="text-white">Tədbirlər</a>
              <a href="/projects">Layihələr</a>
              <a href="/news">Xəbərlər</a>
              <a href="/media">Media</a>
            </div>

            <a
              href="/login"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold"
            >
              Daxil ol
            </a>
          </nav>

          <div className="py-20">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Regional tədbirlər platforması
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              Tədbirlər və proqramlar
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Heydər Əliyev Mərkəzlərində keçirilən konfrans, sərgi,
              təlim və mədəni tədbirlər.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.title}
                className="overflow-hidden rounded-[32px] bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="bg-[#081324] p-8 text-white">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold">
                      {event.type}
                    </span>

                    <span className="text-sm text-white/60">
                      {event.date}
                    </span>
                  </div>

                  <h2 className="mt-6 text-4xl font-extrabold leading-tight">
                    {event.title}
                  </h2>

                  <p className="mt-4 text-white/65">
                    {event.location}
                  </p>
                </div>

                <div className="p-8">
                  <p className="leading-8 text-slate-500">
                    {event.description}
                  </p>

                  <a
                    href={`/events/${event.slug}`}
                    className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-[#081324]"
                  >
                    Ətraflı bax
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}