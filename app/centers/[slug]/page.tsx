"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const centers = {
  baku: {
    id: "baku",
    name: "Bakı Heydər Əliyev Mərkəzi",
    city: "Bakı",
    address: "Bakı şəhəri",
    about:
      "Mədəniyyət, təhsil, sərgi və ictimai tədbirlərin keçirildiyi əsas mərkəzlərdən biri.",
  },
  ganja: {
    id: "ganja",
    name: "Gəncə Heydər Əliyev Mərkəzi",
    city: "Gəncə",
    address: "Gəncə şəhəri",
    about:
      "Regionda gənclər, təhsil və mədəniyyət layihələrinin həyata keçirildiyi mühüm mərkəz.",
  },
  sumqayit: {
    id: "sumqayit",
    name: "Sumqayıt Heydər Əliyev Mərkəzi",
    city: "Sumqayıt",
    address: "Sumqayıt şəhəri",
    about:
      "Rəqəmsal inkişaf, təlim və ictimai tədbirlərin təşkil edildiyi regional platforma.",
  },
};

const events = [
  {
    id: "event-1",
    day: "24",
    month: "MAY",
    title: "Heydər Əliyev və müasir Azərbaycan",
    type: "Konfrans",
    participants: "+120 iştirakçı",
  },
  {
    id: "event-2",
    day: "25",
    month: "MAY",
    title: "Zəfərimiz əbədidir",
    type: "Sərgi",
    participants: "+102 iştirakçı",
  },
  {
    id: "event-3",
    day: "27",
    month: "MAY",
    title: "Azərbaycan kinosu günləri",
    type: "Kino",
    participants: "+84 iştirakçı",
  },
];

export default function CenterDetailPage() {
  const params = useParams();
  const slug = params.slug as keyof typeof centers;
  const center = centers[slug] || centers.baku;

  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [participantType, setParticipantType] = useState("");
  const [loading, setLoading] = useState(false);

  function selectEvent(event: (typeof events)[0]) {
    setSelectedEvent(event);

    document.getElementById("registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  async function handleRegistration() {
    if (!firstName || !lastName || !participantType) {
      alert("Ad, soyad və iştirakçı tipi mütləq doldurulmalıdır.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.from("registrations").insert([
        {
          event_id: selectedEvent.id,
          center_id: center.id,
          first_name: firstName,
          last_name: lastName,
          organization,
          phone,
          participant_type: participantType,
        },
      ]);

      if (error) {
        console.error(error);
        alert(`Xəta: ${error.message}`);
        return;
      }

      alert("Qeydiyyat uğurla tamamlandı!");

      setFirstName("");
      setLastName("");
      setOrganization("");
      setPhone("");
      setParticipantType("");
    } finally {
      setLoading(false);
    }
  }

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
              href="/centers"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold"
            >
              Mərkəzlərə qayıt
            </a>
          </nav>

          <div className="grid gap-10 py-16 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                {center.city}
              </p>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
                {center.name}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                {center.about}
              </p>

              <p className="mt-4 text-white/50">{center.address}</p>
            </div>

            <div
              className="h-[300px] rounded-[28px] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.1)), url('/hero.jpg')",
              }}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-extrabold">Yaxınlaşan tədbirlər</h2>
            <a className="text-sm font-bold text-blue-600">Hamısına bax →</a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden rounded-[28px] bg-[#081324] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="relative h-56 bg-cover bg-center p-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,.9), rgba(8,19,36,.35)), url('/hero.jpg')",
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
                  <p className="text-sm text-white/60">{center.name}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-white/55">
                      {event.participants}
                    </span>

                    <button
                      onClick={() => selectEvent(event)}
                      className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold transition hover:bg-blue-600"
                    >
                      Qeydiyyat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            id="registration"
            className="mt-16 rounded-[28px] bg-white p-8 shadow-xl ring-1 ring-slate-100"
          >
            <h2 className="text-3xl font-extrabold">Tədbirə qeydiyyat</h2>

            <div className="mt-5 rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-600">
                Seçilmiş tədbir
              </p>
              <p className="mt-1 text-xl font-extrabold">
                {selectedEvent.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {selectedEvent.day} {selectedEvent.month} • {selectedEvent.type}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
                placeholder="Ad"
              />

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
                placeholder="Soyad"
              />

              <input
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
                placeholder="Məktəb / Universitet"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
                placeholder="Telefon"
              />

              <select
                value={participantType}
                onChange={(e) => setParticipantType(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500 md:col-span-2"
              >
                <option value="">İştirakçı tipi</option>
                <option value="Məktəbli">Məktəbli</option>
                <option value="Gənc">Gənc</option>
                <option value="Müəllim">Müəllim</option>
              </select>

              <button
                onClick={handleRegistration}
                disabled={loading}
                className="rounded-2xl bg-[#081324] px-5 py-4 font-bold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
              >
                {loading ? "Göndərilir..." : "Qeydiyyatı tamamla"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}