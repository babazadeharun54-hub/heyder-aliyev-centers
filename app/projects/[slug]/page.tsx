const projects = {
  "reqemsal-genclik": {
    title: "Rəqəmsal Gənclik Proqramı",
    category: "Təhsil",
    description:
      "Regionlarda gənclərin rəqəmsal bacarıqlarını artırmaq üçün təlim və seminarlar.",
    goal: "Gənclərin texnologiya, təhlükəsizlik və rəqəmsal bacarıqlar üzrə inkişafını təmin etmək.",
  },
  "medeni-irs": {
    title: "Mədəni İrs Məktəbi",
    category: "Mədəniyyət",
    description:
      "Məktəblilər üçün Azərbaycan tarixi, mədəniyyəti və irsi haqqında maarifləndirici proqram.",
    goal: "Gənc nəslin milli-mədəni irsə marağını artırmaq.",
  },
  "region-konulluleri": {
    title: "Region Könüllüləri",
    category: "Gənclər",
    description:
      "Heydər Əliyev Mərkəzlərində könüllü fəaliyyətin təşviqi və koordinasiyası.",
    goal: "Regionlarda aktiv gənclər şəbəkəsi formalaşdırmaq.",
  },
  "ulu-onder-irsi": {
    title: "Ulu Öndər İrsi",
    category: "Tarix",
    description:
      "Heydər Əliyevin dövlətçilik irsinin regionlarda təbliği üçün tədbirlər silsiləsi.",
    goal: "Ulu Öndərin dövlətçilik irsini sistemli şəkildə təbliğ etmək.",
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project =
    projects[slug as keyof typeof projects] || projects["reqemsal-genclik"];

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
              href="/projects"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold"
            >
              Layihələrə qayıt
            </a>
          </nav>

          <div className="py-20">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              {project.category}
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold">Layihə haqqında</h2>

            <p className="mt-5 leading-8 text-slate-500">
              {project.description}
            </p>

            <h3 className="mt-10 text-2xl font-extrabold">Məqsəd</h3>

            <p className="mt-4 leading-8 text-slate-500">{project.goal}</p>
          </div>

          <aside className="h-fit rounded-[32px] bg-[#081324] p-7 text-white shadow-xl">
            <h3 className="text-2xl font-extrabold">Layihəyə qoşul</h3>

            <p className="mt-4 text-white/60">
              Bu layihə üzrə iştirak və əməkdaşlıq üçün qeydiyyatdan keçə
              bilərsiniz.
            </p>

            <button className="mt-8 w-full rounded-2xl bg-blue-600 px-5 py-4 font-bold transition hover:bg-blue-500">
              Müraciət et
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}