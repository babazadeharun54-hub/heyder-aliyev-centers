export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#081324] px-6 py-10 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-[1200px] items-center justify-center">
        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <a href="/" className="block text-lg font-extrabold leading-5">
            HEYDƏR ƏLİYEV
            <br />
            MƏRKƏZLƏRİ
          </a>

          <h1 className="mt-12 text-4xl font-extrabold">Admin giriş</h1>

          <p className="mt-3 text-white/60">
            Mərkəz rəhbərləri üçün idarəetmə paneli.
          </p>

          <div className="mt-8 space-y-4">
            <input
              placeholder="E-poçt"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40 focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="Şifrə"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40 focus:border-blue-500"
            />

            <a
              href="/admin"
              className="block w-full rounded-2xl bg-blue-600 px-5 py-4 text-center font-bold transition hover:bg-blue-500"
            >
              Panelə daxil ol
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-white/40">
            Test mərhələsi: giriş düyməsi birbaşa panelə aparır.
          </p>
        </div>
      </div>
    </main>
  );
}