export const centers = [
  "Abşeron",
  "Sumqayıt",
  "Xızı",
  "Yasamal",
  "Qaradağ",
  "Suraxanı",
  "Gəncə",
  "Daşkəsən",
  "Göygöl",
  "Goranboy",
  "Samux",
  "Naftalan",
  "Lənkəran",
  "Lerik",
  "Masallı",
  "Cəlilabad",
  "Yardımlı",
  "Ağdaş",
  "Göyçay",
  "Ucar",
  "Kürdəmir",
  "Yevlax",
  "Mingəçevir",
  "Zərdab",
  "Sabirabad",
  "Beyləqan",
  "İmişli",
  "Saatlı",
  "Ağcabədi",
  "Ağdam",
  "Bərdə",
  "Füzuli",
  "Tərtər",
  "Gədəbəy",
  "Şəmkir",
  "Tovuz",
  "Ağstafa",
  "Qazax",
  "Quba",
  "Siyəzən",
  "Qusar",
  "Şabran",
  "Xaçmaz",
  "Xudat",
  "Yalama",
  "Zaqatala",
  "Qax",
  "Qəbələ",
  "Balakən",
  "Şəki",
  "Oğuz",
  "Biləsuvar",
  "Salyan",
  "Neftçala",
  "Hacıqabul",
  "Şirvan",
].map((city, index) => {
  const slug = city
    .toLowerCase()
    .replaceAll("ə", "e")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u")
    .replaceAll("ğ", "g")
    .replaceAll("ş", "s")
    .replaceAll("ç", "c")
    .replaceAll(" ", "-");

  return {
    id: index + 1,
    name: `${city} Heydər Əliyev Mərkəzi`,
    slug,
    city,
    founded: 2012,
    lastRenovation: 2022,
    events: Math.floor(Math.random() * 12) + 4,
    registrations: Math.floor(Math.random() * 800) + 150,
    projects: Math.floor(Math.random() * 8) + 2,
    activity: index % 3 === 0 ? "Yüksək" : index % 3 === 1 ? "Orta" : "Aktiv",
    description: `${city} Heydər Əliyev Mərkəzi regionda mədəniyyət, təhsil, gənclər və ictimai tədbirlərin keçirildiyi əsas mərkəzlərdən biridir.`,
  };
});