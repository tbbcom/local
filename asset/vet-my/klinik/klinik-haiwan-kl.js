// klinik-haiwan-kl.js
(function() {
  // ✅ Data klinik haiwan & klinik veterinar Kuala Lumpur
  const ILMU_KLINIK_KL = [
    {
      name: "Jabatan Perkhidmatan Veterinar Wilayah Persekutuan",
      type: "kerajaan",
      area: "Cheras",
      address: "KM 4, Jalan Selar 4, Off Jalan Cheras, 56100 Cheras, Kuala Lumpur",
      phones: ["03-92001342","03-92002890","03-92879372"],
      tags: ["klinik haiwan kerajaan","veterinar kerajaan","klinik haiwan kuala lumpur"]
    },
    {
      name: "Hospital Veterinar Kuala Lumpur (HVKL)",
      type: "kerajaan",
      area: "Cheras",
      address: "KM 4, Jalan Selar 4, Off Jalan Cheras, 56100 Cheras, Kuala Lumpur",
      phones: ["03-92849716","03-92849718"],
      tags: ["hospital veterinar","rawatan pesakit luar","pembedahan","vaksin kucing","veterinar kuala lumpur"]
    },
    {
      name: "Animal Medical Centre",
      type: "swasta",
      area: "Jalan Tun Razak",
      address: "Wisma Medivet, No. 8, Jalan Tun Razak, 50400 Kuala Lumpur",
      phones: ["03-40426742"],
      tags: ["klinik haiwan kuala lumpur","veterinary clinic kuala lumpur"]
    },
    {
      name: "Animal Medical Clinic",
      type: "swasta",
      area: "Kepong",
      address: "53, Jalan Metro Perdana Timur 3, Taman Usahawan Kepong, 52100 Kuala Lumpur",
      phones: ["03-62586139","016-3557744"],
      tags: ["klinik haiwan kepong","klinik kucing kepong"]
    },
    {
      name: "Animal Polyclinic & Kennels",
      type: "swasta",
      area: "Jalan Kelang Lama",
      address: "147, Indah UPC, Batu 3 1/2, Jalan Kelang Lama, 58000 Kuala Lumpur",
      phones: ["03-79827432"],
      tags: ["klinik haiwan klang lama","pembedahan haiwan"]
    },
    {
      name: "Companion Animal Veterinary Clinic",
      type: "swasta",
      area: "OUG",
      address: "29, Jalan Hujan Rahmat 3, Taman Overseas Union, 58200 Kuala Lumpur",
      phones: ["03-77834778"],
      tags: ["klinik haiwan oug","klinik veterinar oug"]
    },
    {
      name: "Damansara Heights Veterinary Clinic",
      type: "swasta",
      area: "Damansara Heights",
      address: "79, Plaza Damansara, Jalan Medan Setia 1, 50490 Kuala Lumpur",
      phones: ["03-20956877"],
      tags: ["klinik haiwan damansara heights","vet damansara"]
    },
    {
      name: "Haemas Happy Paws",
      type: "swasta",
      area: "Segambut",
      address: "2/10, Jalan Udang Siar 2, Taman Sri Segambut, 52000 Kuala Lumpur",
      phones: ["012-3024450"],
      tags: ["klinik haiwan segambut","klinik kucing segambut"]
    },
    {
      name: "Hayward Veterinary Clinic",
      type: "swasta",
      area: "Ampang",
      address: "437, Jalan Ampang, 50450 Kuala Lumpur",
      phones: ["03-42563175"],
      tags: ["klinik veterinar ampang","klinik haiwan ampang"]
    },
    {
      name: "Hope Veterinary Clinic",
      type: "swasta",
      area: "Wangsa Maju",
      address: "90G, Jalan Wangsa Delima 6, Seksyen 5, Wangsa Maju, 53300 Kuala Lumpur",
      phones: ["03-41433273"],
      tags: ["klinik haiwan wangsa maju","vaksin kucing wangsa maju"]
    },
    {
      name: "Kanagasabai Veterinary Clinic & Surgery",
      type: "swasta",
      area: "Bangsar",
      address: "14A, Lorong Ara Kiri 3, Lucky Garden, 59000 Bangsar, Kuala Lumpur",
      phones: ["03-20943160"],
      tags: ["klinik haiwan bangsar","klinik veterinar bangsar"]
    },
    {
      name: "Karu's Animal Centre & Surgery",
      type: "swasta",
      area: "Jalan Loke Yew",
      address: "3, Jalan Jubilee, Off Jalan Loke Yew, 55200 Kuala Lumpur",
      phones: ["03-92229068"],
      tags: ["klinik haiwan loke yew","veterinar kl"]
    },
    {
      name: "Klinik Haiwan Dan Surgeri Sakthi",
      type: "swasta",
      area: "Taman Gembira",
      address: "64, Jalan Lazat 2, Taman Gembira, 58200 Kuala Lumpur",
      phones: ["03-79838861"],
      tags: ["klinik haiwan taman gembira"]
    },
    {
      name: "Klinik Haiwan Genting Kelang",
      type: "swasta",
      area: "Setapak",
      address: "133, Jalan Genting Kelang, Taman Ayer Panas, 53300 Kuala Lumpur",
      phones: ["03-40238272"],
      tags: ["klinik haiwan genting kelang","klinik haiwan setapak"]
    },
    {
      name: "Klinik Haiwan Yuan",
      type: "swasta",
      area: "Pandan Indah",
      address: "3, Jalan 1/22, Pandan Indah, 55100 Kuala Lumpur",
      phones: ["03-92743746"],
      tags: ["klinik haiwan pandan indah","klinik kucing pandan indah"]
    },
    {
      name: "Klinik Veterinar Ampang",
      type: "swasta",
      area: "Ampang",
      address: "37, Jalan Bunga Tanjung 8B, Taman Seraya, 56100 Kuala Lumpur",
      phones: ["03-42919390"],
      tags: ["klinik veterinar ampang","klinik haiwan ampang"]
    },
    {
      name: "Klinik Veterinar Goh",
      type: "swasta",
      area: "Pandan Indah",
      address: "68G, Jalan Pandan Indah 4/3A, Pandan Indah, 55100 Kuala Lumpur",
      phones: ["014-3228544"],
      tags: ["klinik veterinar pandan indah"]
    },
    {
      name: "Klinik Veterinar Muezza",
      type: "swasta",
      area: "Gombak",
      address: "G-3, Residensi Gombak 126, No. 133 Jalan Gombak, 53000 Kuala Lumpur",
      phones: ["03-40315082"],
      tags: ["klinik haiwan gombak","klinik kucing gombak"]
    },
    {
      name: "Lee Veterinary Clinic",
      type: "swasta",
      area: "Kuchai Lama",
      address: "35, Jalan Kuchai Maju 1, Kuchai Entrepreneurs Park, 58200 Kuala Lumpur",
      phones: ["03-79877991"],
      tags: ["klinik haiwan kuchai","veterinar kuchai lama"]
    },
    {
      name: "Melawati Urban Veterinary Clinic",
      type: "swasta",
      area: "Taman Melawati",
      address: "334, Melawati Urban 1, Lorong Sarawak, Taman Melawati, 53100 Kuala Lumpur",
      phones: ["03-41475239"],
      tags: ["klinik haiwan melawati"]
    },
    {
      name: "Mutiara Animal Clinic",
      type: "swasta",
      area: "Cheras",
      address: "No. 10, Jalan Mutiara Raya, Taman Mutiara Barat, 56000 Kuala Lumpur",
      phones: ["03-91317418"],
      tags: ["klinik haiwan cheras","veterinar cheras"]
    },
    {
      name: "One Sierra Veterinary Clinic",
      type: "swasta",
      area: "Batu Caves / Gombak",
      address: "No. 3A, Jalan OS1, Taman One Sierra, 68100 Batu Caves, Kuala Lumpur",
      phones: ["03-67341519"],
      tags: ["klinik haiwan batu caves","klinik veterinar gombak"]
    },
    {
      name: "Pet First Veterinary Centre",
      type: "swasta",
      area: "Kepong",
      address: "68, Jalan Metro Perdana Barat 12, Sri Edaran Industrial Park, 52100 Kepong, Kuala Lumpur",
      phones: ["03-62595499"],
      tags: ["klinik haiwan kepong","klinik kucing kepong"]
    },
    {
      name: "Petcare Veterinary Clinic",
      type: "swasta",
      area: "Taman Melawati",
      address: "9146, Jalan Bandar 4, Taman Melawati, 53100 Kuala Lumpur",
      phones: ["03-41067515"],
      tags: ["klinik haiwan melawati","vaksin kucing melawati"]
    },
    {
      name: "Petwel Veterinary Clinic",
      type: "swasta",
      area: "Cheras / Batu 9",
      address: "153, Jalan Lanchang, Taman Sri Bahtera, 56100 Batu 9 Cheras, Kuala Lumpur",
      phones: ["03-91303435"],
      tags: ["klinik haiwan batu 9","klinik haiwan cheras"]
    },
    {
      name: "Preventicare Veterinary Clinic",
      type: "swasta",
      area: "Kuchai",
      address: "15G, Jalan 1/114, Kuchai Business Centre, Jalan Kuchai Lama, 58100 Kuala Lumpur",
      phones: ["011-11328113"],
      tags: ["klinik haiwan kuchai lama","preventive vet clinic"]
    },
    {
      name: "See Veterinary Medical Centre",
      type: "swasta",
      area: "Sri Petaling",
      address: "9, Jalan 1/149J, Bandar Baru Sri Petaling, 57000 Kuala Lumpur",
      phones: ["03-90564435"],
      tags: ["klinik haiwan sri petaling","klinik veterinar sri petaling"]
    },
    {
      name: "Segar Veterinary Hospital",
      type: "swasta",
      area: "Cheras",
      address: "2, Jalan Manis 3, Taman Segar, 56100 Cheras, Kuala Lumpur",
      phones: ["03-91304641"],
      tags: ["hospital veterinar cheras","klinik haiwan cheras"]
    },
    {
      name: "Sri Petaling Veterinary Clinic",
      type: "swasta",
      area: "Sri Petaling",
      address: "123, Jalan Radin Bagus, Bandar Baru Sri Petaling, 57000 Kuala Lumpur",
      phones: ["03-90540215"],
      tags: ["klinik haiwan sri petaling","veterinar sri petaling"]
    },
    {
      name: "TTDI Veterinary Clinic Sdn Bhd",
      type: "swasta",
      area: "TTDI",
      address: "119, Jalan Aminuddin Baki, Taman Tun Dr. Ismail, 60000 Kuala Lumpur",
      phones: ["03-77294296"],
      tags: ["klinik haiwan ttdi","vet ttdi"]
    },
    {
      name: "Teoh Animal Clinic",
      type: "swasta",
      area: "Pandan Indah",
      address: "9, Jalan Perubatan 4, Pandan Indah, 55100 Kuala Lumpur",
      phones: ["03-42920610"],
      tags: ["klinik haiwan pandan indah"]
    },
    {
      name: "Vets For Pets Animal Clinic",
      type: "swasta",
      area: "Solaris Mont Kiara",
      address: "5, Jalan Solaris 4, Solaris Mont Kiara, 50480 Kuala Lumpur",
      phones: ["014-9194980"],
      tags: ["klinik haiwan mont kiara","veterinar mont kiara"]
    },
    {
      name: "Wilayah Animal Clinic",
      type: "swasta",
      area: "Kepong",
      address: "46, Jalan Development, Taman Kepong, 52100 Kuala Lumpur",
      phones: ["03-62740096"],
      tags: ["klinik haiwan kepong","vet kepong"]
    },
    {
      name: "Vetderm Animal Skin And Ear Specialist Clinic",
      type: "specialist",
      area: "Sri Hartamas",
      address: "9-1, Jalan 23/70A, Plaza Crystalville 1, Desa Sri Hartamas, 50480 Kuala Lumpur",
      phones: ["014-3931610"],
      tags: ["specialist kulit haiwan","ear specialist","klinik haiwan sri hartamas"]
    }
  ];

  function normalise(str) {
    return (str || "").toString().toLowerCase();
  }

  function buildMapsUrl(clinic) {
    const q = encodeURIComponent(clinic.name + ", " + clinic.address + ", Kuala Lumpur");
    return "https://www.google.com/maps/search/?api=1&query=" + q;
  }

  function initKlinikTool() {
    const root = document.getElementById("klinik-haiwan-kl-tool");
    if (!root) return;

    const searchInput = root.querySelector("#ilmu-kl-search");
    const typeSelect = root.querySelector("#ilmu-kl-type");
    const areaSelect = root.querySelector("#ilmu-kl-area");
    const nearMeBtn   = root.querySelector("#ilmu-kl-nearme");
    const resetBtn    = root.querySelector("#ilmu-kl-reset");
    const resultsWrap = root.querySelector("#ilmu-kl-results");
    const countLabel  = root.querySelector("#ilmu-kl-count");

    function renderClinics(list) {
      resultsWrap.innerHTML = "";
      if (!list.length) {
        resultsWrap.innerHTML = '<p style="font-size:0.9rem;color:#555;">Tiada klinik dijumpai. Cuba ubah kata kunci atau penapis.</p>';
        countLabel.textContent = "0 klinik haiwan ditemui di Kuala Lumpur.";
        return;
      }
      const frag = document.createDocumentFragment();
      list.forEach(function(c) {
        const card = document.createElement("article");
        card.className = "ilmu-kl-card";
        card.setAttribute("itemscope", "");
        card.setAttribute("itemtype", "https://schema.org/VeterinaryCare");

        const header = document.createElement("header");
        const nameEl = document.createElement("div");
        nameEl.className = "ilmu-kl-name";
        nameEl.textContent = c.name;
        nameEl.setAttribute("itemprop", "name");

        const tagEl = document.createElement("span");
        tagEl.className = "ilmu-kl-tag";
        tagEl.textContent =
          c.type === "kerajaan" ? "Kerajaan" :
          c.type === "specialist" ? "Specialist" : "Swasta";

        header.appendChild(nameEl);
        header.appendChild(tagEl);

        const areaEl = document.createElement("div");
        areaEl.className = "ilmu-kl-area";
        areaEl.textContent = "Kawasan: " + c.area;

        const addrEl = document.createElement("div");
        addrEl.className = "ilmu-kl-address";
        addrEl.innerHTML = "<strong>Alamat:</strong> <span itemprop=\"address\">" +
          c.address + "</span>";

        const phoneEl = document.createElement("div");
        phoneEl.className = "ilmu-kl-phone";
        if (c.phones && c.phones.length) {
          phoneEl.innerHTML = "<strong>Telefon:</strong> " +
            c.phones.map(function(p) {
              return '<span itemprop="telephone">' + p + "</span>";
            }).join(" / ");
        }

        const actionsRow = document.createElement("div");
        actionsRow.className = "ilmu-kl-actions-row";

        const mapsLink = document.createElement("a");
        mapsLink.href = buildMapsUrl(c);
        mapsLink.target = "_blank";
        mapsLink.rel = "noopener nofollow";
        mapsLink.textContent = "Buka di Google Maps";

        const callLink = document.createElement("a");
        if (c.phones && c.phones.length) {
          callLink.href = "tel:" + c.phones[0].replace(/[^0-9+]/g, "");
          callLink.textContent = "Call Klinik";
        } else {
          callLink.href = buildMapsUrl(c);
          callLink.textContent = "Info Klinik";
        }

        actionsRow.appendChild(mapsLink);
        actionsRow.appendChild(callLink);

        card.appendChild(header);
        card.appendChild(areaEl);
        card.appendChild(addrEl);
        if (c.phones && c.phones.length) card.appendChild(phoneEl);
        card.appendChild(actionsRow);
        frag.appendChild(card);
      });
      resultsWrap.appendChild(frag);
      countLabel.textContent =
        list.length + " klinik haiwan & klinik veterinar dijumpai di Kuala Lumpur.";
    }

    function applyFilters() {
      const q = normalise(searchInput.value);
      const type = typeSelect.value;
      const areaVal = areaSelect.value;

      const filtered = ILMU_KLINIK_KL.filter(function(c) {
        if (type && c.type !== type) return false;

        if (areaVal) {
          if (areaVal === "Lain") {
            const mainAreas = [
              "Cheras","Ampang","Bangsar","Kepong","Gombak","Setapak",
              "TTDI","Sri Petaling","Sri Hartamas","Melawati","Kuchai","Pandan Indah"
            ];
            if (mainAreas.some(function(a){ return c.area.indexOf(a) !== -1; })) {
              return false;
            }
          } else {
            if (c.area.indexOf(areaVal) === -1) return false;
          }
        }

        if (!q) return true;

        const haystack = normalise(
          c.name + " " + c.area + " " + c.address + " " + (c.tags || []).join(" ")
        );

        return haystack.indexOf(q) !== -1;
      }).sort(function(a,b) {
        return a.name.localeCompare(b.name);
      });

      renderClinics(filtered);
    }

    function setupListeners() {
      searchInput.addEventListener("input", applyFilters);
      typeSelect.addEventListener("change", applyFilters);
      areaSelect.addEventListener("change", applyFilters);

      if (resetBtn) {
        resetBtn.addEventListener("click", function() {
          searchInput.value = "";
          typeSelect.value = "";
          areaSelect.value = "";
          applyFilters();
        });
      }

      if (nearMeBtn) {
        nearMeBtn.addEventListener("click", function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
              const lat = pos.coords.latitude;
              const lng = pos.coords.longitude;
              const base = "https://www.google.com/maps/search/";
              const q = encodeURIComponent("klinik haiwan veterinar near me");
              const url = base + q + "/@" + lat + "," + lng + ",14z";
              window.open(url, "_blank", "noopener");
            }, function() {
              window.open(
                "https://www.google.com/maps/search/" +
                encodeURIComponent("klinik haiwan kuala lumpur near me"),
                "_blank",
                "noopener"
              );
            });
          } else {
            window.open(
              "https://www.google.com/maps/search/" +
              encodeURIComponent("klinik haiwan kuala lumpur near me"),
              "_blank",
              "noopener"
            );
          }
        });
      }
    }

    setupListeners();
    applyFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKlinikTool);
  } else {
    initKlinikTool();
  }
})();
