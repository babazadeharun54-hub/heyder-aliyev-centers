const events = {
  "heyder-eliyev-konfransi": {
    title: "Heydər Əliyev və müasir Azərbaycan",
    type: "Konfrans",
    date: "24 May 2026",
    location: "Bakı Heydər Əliyev Mərkəzi",
    description:
      "Müasir Azərbaycanın inkişaf modeli və dövlətçilik strategiyası mövzusunda konfrans.",
    details:
      "Konfrans çərçivəsində dövlətçilik, milli inkişaf strategiyası və regional siyasət üzrə panel müzakirələri keçiriləcək.",
  },

  "zefer-sergisi": {
    title: "Zəfərimiz əbədidir",
    type: "Sərgi",
    date: "25 May 2026",
    location: "Gəncə Heydər Əliyev Mərkəzi",
    description:
      "Qələbə tariximizi əks etdirən rəsm və multimedia sərgisi.",
    details:
      "Sərgidə rəqəmsal instalyasiyalar, arxiv materialları və xüsusi multimedia təqdimatları nümayiş olunacaq.",
  },

  "kino-gunleri": {
    title: "Azərbaycan Kinosu Günləri",
    type: "Kino",
    date: "27 May 2026",
    location: "Naxçıvan Heydər Əliyev Mərkəzi",
    description:
      "Milli kino irsimizin nümayişi və rejissorlarla görüş proqramı.",
    details:
      "Tədbirdə klassik və müasir Azərbaycan filmlərinin nümayişi və açıq müzakirələr keçiriləcək.",
  },

  "digital-workshop": {
    title: "Rəqəmsal Bacarıqlar Workshop",
    type: "Təlim",
    date: "28 May 2026",
    location: "Sumqayıt Heydər Əliyev Mərkəzi",
    description:
      "Gənclər üçün texnologiya və innovasiya yönümlü praktiki təlimlər.",
    details:
      "Workshop proqramında UI/UX, proqramlaşdırma və AI alətləri üzrə praktiki sessiyalar olacaq.",
  },
};

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event =
    events[slug as keyof typeof events] ||
    events["heyder-eliyev-konfransi"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-[#081324] px-6 py-6 text-white">
        <div className="mx-auto max-w-[1200px]">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-lg font-extrabold leading-5">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>

            <a
              href="/events"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold"
            >
              Tədbirlərə qayıt
            </a>
          </nav>

          <div className="py-20">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              {event.type}
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              {event.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold">
              Tədbir haqqında
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              {event.details}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">Tarix</p>

                <h3 className="mt-2 text-xl font-extrabold">
                  {event.date}
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">Məkan</p>

                <h3 className="mt-2 text-xl font-extrabold">
                  {event.location}
                </h3>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[32px] bg-[#081324] p-7 text-white shadow-xl">
            <h3 className="text-2xl font-extrabold">
              Qeydiyyatdan keç
            </h3>

            <p className="mt-4 text-white/60">
              Tədbirdə iştirak etmək üçün qeydiyyatdan keçə bilərsiniz.
            </p>

            <button className="mt-8 w-full rounded-2xl bg-blue-600 px-5 py-4 font-bold transition hover:bg-blue-500">
              Qeydiyyat
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}