const events = {
  "heyder-eliyev-konfransi": {
    title: "Heydər Əliyev və müasir Azərbaycan",
    type: "Konfrans",
    date: "24 May 2026",
    time: "11:00",
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
    time: "14:00",
    location: "Gəncə Heydər Əliyev Mərkəzi",
    description: "Qələbə tariximizi əks etdirən rəsm və multimedia sərgisi.",
    details:
      "Sərgidə rəqəmsal instalyasiyalar, arxiv materialları və xüsusi multimedia təqdimatları nümayiş olunacaq.",
  },
  "kino-gunleri": {
    title: "Azərbaycan Kinosu Günləri",
    type: "Kino",
    date: "27 May 2026",
    time: "17:00",
    location: "Naxçıvan Heydər Əliyev Mərkəzi",
    description: "Milli kino irsimizin nümayişi və rejissorlarla görüş proqramı.",
    details:
      "Tədbirdə klassik və müasir Azərbaycan filmlərinin nümayişi və açıq müzakirələr keçiriləcək.",
  },
  "digital-workshop": {
    title: "Rəqəmsal Bacarıqlar Workshop",
    type: "Təlim",
    date: "28 May 2026",
    time: "10:00",
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
    events[slug as keyof typeof events] || events["heyder-eliyev-konfransi"];

  const registrationUrl = `/centers/baku#registration?event=${encodeURIComponent(
    event.title
  )}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-[#081324] px-6 py-6 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#2563eb55,transparent_35%)]" />

        <div className="relative mx-auto max-w-[1200px]">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-lg font-extrabold leading-5">
              HEYDƏR ƏLİYEV
              <br />
              MƏRKƏZLƏRİ
            </a>

            <a
              href="/events"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              Tədbirlərə qayıt
            </a>
          </nav>

          <div className="grid gap-10 py-20 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
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

            <div
              className="min-h-[320px] rounded-[36px] border border-white/10 bg-cover bg-center p-6 shadow-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(8,19,36,.96), rgba(8,19,36,.25)), url('/hero.jpg')",
              }}
            >
              <div className="flex h-full min-h-[270px] flex-col justify-between">
                <div className="w-fit rounded-2xl bg-white px-5 py-4 text-[#081324] shadow-xl">
                  <p className="text-3xl font-extrabold">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="text-sm font-bold">
                    {event.date.split(" ")[1]}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/60">Tədbir afişası</p>
                  <h2 className="mt-2 text-3xl font-extrabold leading-tight">
                    {event.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_380px]">
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold">Tədbir haqqında</h2>

            <p className="mt-5 leading-8 text-slate-500">{event.details}</p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">Tarix</p>
                <h3 className="mt-2 text-xl font-extrabold">{event.date}</h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">Saat</p>
                <h3 className="mt-2 text-xl font-extrabold">{event.time}</h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">Format</p>
                <h3 className="mt-2 text-xl font-extrabold">Canlı iştirak</h3>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-bold text-blue-600">Məkan</p>
              <h3 className="mt-2 text-2xl font-extrabold">
                {event.location}
              </h3>
            </div>
          </div>

          <aside className="h-fit overflow-hidden rounded-[32px] bg-[#081324] text-white shadow-2xl lg:sticky lg:top-6">
            <div
              className="h-44 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(8,19,36,.9), rgba(8,19,36,.2)), url('/hero.jpg')",
              }}
            />

            <div className="p-7">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                Qeydiyyat
              </p>

              <h3 className="mt-3 text-3xl font-extrabold leading-tight">
                Tədbirdə iştirak edin
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Qeydiyyat zamanı seçilmiş tədbir sistemdə avtomatik qeyd
                olunacaq.
              </p>

              <a
                href={registrationUrl}
                className="mt-8 block w-full rounded-2xl bg-blue-600 px-5 py-4 text-center font-bold transition hover:bg-blue-500"
              >
                Qeydiyyatdan keç
              </a>

              <a
                href="/events"
                className="mt-3 block w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center font-bold transition hover:bg-white/10"
              >
                Digər tədbirlər
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}