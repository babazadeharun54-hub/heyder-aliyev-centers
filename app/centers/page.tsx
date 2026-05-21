"use client";

import { Suspense, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const centers = {
  baku: {
    id: "baku",
    name: "Bakı Heydər Əliyev Mərkəzi",
    city: "Bakı",
    address: "Bakı şəhəri",
    about:
      "Bakı Heydər Əliyev Mərkəzi mədəniyyət, təhsil, sərgi və beynəlxalq tədbirlərin keçirildiyi əsas platformalardan biridir.",
  },
  ganja: {
    id: "ganja",
    name: "Gəncə Heydər Əliyev Mərkəzi",
    city: "Gəncə",
    address: "Gəncə şəhəri",
    about:
      "Gəncə Heydər Əliyev Mərkəzi regionun gənclər, təhsil və mədəniyyət layihələrinin əsas mərkəzlərindən biridir.",
  },
  sumqayit: {
    id: "sumqayit",
    name: "Sumqayıt Heydər Əliyev Mərkəzi",
    city: "Sumqayıt",
    address: "Sumqayıt şəhəri",
    about:
      "Sumqayıt Heydər Əliyev Mərkəzi texnologiya, rəqəmsal inkişaf və maarifləndirici tədbirlərin keçirildiyi mərkəzdir.",
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

function CenterPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = params.slug as keyof typeof centers;
  const center = centers[slug] || centers.baku;

  const eventFromUrl = searchParams.get("event");

  const defaultEvent =
    events.find((event) => event.title === eventFromUrl) || events[0];

  const [selectedEvent, setSelectedEvent] = useState(defaultEvent);

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
          center_slug: center.id,
          center_name: center.name,
          event_title: selectedEvent.title,
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
      {/* BURDA QALAN JSX EYNİ SAXLANILIR */}
    </main>
  );
}

export default function CenterDetailPage() {
  return (
    <Suspense fallback={<div className="p-10">Yüklənir...</div>}>
      <CenterPageContent />
    </Suspense>
  );
}