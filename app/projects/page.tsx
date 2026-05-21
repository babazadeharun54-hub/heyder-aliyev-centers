const projects = [
  {
    title: "Rəqəmsal Gənclik Proqramı",
    category: "Təhsil",
    description:
      "Regionlarda gənclərin rəqəmsal bacarıqlarını artırmaq üçün təlim və seminarlar.",
  },
  {
    title: "Mədəni İrs Məktəbi",
    category: "Mədəniyyət",
    description:
      "Məktəblilər üçün Azərbaycan tarixi, mədəniyyəti və irsi haqqında maarifləndirici proqram.",
  },
  {
    title: "Region Könüllüləri",
    category: "Gənclər",
    description:
      "Heydər Əliyev Mərkəzlərində könüllü fəaliyyətin təşviqi və koordinasiyası.",
  },
  {
    title: "Ulu Öndər İrsi",
    category: "Tarix",
    description:
      "Heydər Əliyevin dövlətçilik irsinin regionlarda təbliği üçün tədbirlər silsiləsi.",
  },
];

export default function ProjectsPage() {
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
              <a href="/events">Tədbirlər</a>
              <a className="text-white">Layihələr</a>
              <a>Xəbərlər</a>
              <a>Media</a>
            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold">
              Daxil ol
            </button>
          </nav>

          <div className="py-20">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Regional inkişaf proqramları
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              Layihələr və proqramlar
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Heydər Əliyev Mərkəzlərində həyata keçirilən təhsil, mədəniyyət,
              gənclər və innovasiya layihələri.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[28px] bg-white p-7 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                  {project.category}
                </p>

                <h2 className="text-2xl font-extrabold leading-tight">
                  {project.title}
                </h2>

                <p className="mt-5 leading-7 text-slate-500">
                  {project.description}
                </p>

                <button className="mt-8 rounded-2xl bg-[#081324] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-600">
                  Ətraflı bax
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}