// Auto-generated from AnimalPassport DVS CSV
const ILMU_KLINIK_MELAKA = [
  {
    name: "COMPANION VETERINARY CLINIC",
    address: "203J (GROUND) JALAN KENANGA 3/29A, TAMAN KENANGA SEKSYEN 3, 75200 MELAKA. MELAKA",
    area: "TAMAN KENANGA SEKSYEN 3",
    state: "MELAKA",
    clinicPhone: "1156205520.0",
    mobilePhone: "126030523",
    email: "yeeheindvm@gmail.com"
  },
  {
    name: "DVS MELAKA",
    address: "JPV MELAKA, JALAN AYER KEROH, HANG TUAH JAYA, 75450 MELAKA",
    area: "HANG TUAH JAYA",
    state: "MELAKA",
    clinicPhone: "62325103.0",
    mobilePhone: "",
    email: ""
  },
  {
    name: "FA VETERINARY CLINIC",
    address: "NO.16, JALAN DI 2/1,TAMAN DUYONG INDAH 2,75460 MELAKA",
    area: "TAMAN DUYONG INDAH 2",
    state: "MELAKA",
    clinicPhone: "",
    mobilePhone: "012-878486",
    email: ""
  },
  {
    name: "I CARE VETERINARY",
    address: "26, JALAN IKS M/5, TAMAN IKS MERDEKA, 75350 MELAKA MELAKA",
    area: "TAMAN IKS MERDEKA",
    state: "MELAKA",
    clinicPhone: "62849918.0",
    mobilePhone: "123448137.0",
    email: "tanleelee20000@yahoo.com"
  },
  {
    name: "KIM VETERINARY CLINIC",
    address: "11, JALAN MAGENTA 2, TAMAN BERTAM MUTIARA CHENG, 75250 MELAKA",
    area: "TAMAN BERTAM MUTIARA CHENG",
    state: "MELAKA",
    clinicPhone: "63347366.0",
    mobilePhone: "124319468.0",
    email: "cheehongooi@gmail.com"
  },
  {
    name: "KLINIK HAIWAN BARAQAH",
    address: "JC554, JALAN BESTARI 5, BANDAR JASIN BESTARI, 77200 JASIN MELAKA",
    area: "BANDAR JASIN BESTARI",
    state: "MELAKA",
    clinicPhone: "65121003.0",
    mobilePhone: "13640402.0",
    email: "baroqahvet@gmail.com"
  },
  {
    name: "MAJU ANIMAL CLINIC",
    address: "25 JLN KANAN 1, TAMAN CERGAS, BT BERENDAM 75350 MELAKA",
    area: "TAMAN CERGAS",
    state: "MELAKA",
    clinicPhone: "",
    mobilePhone: "",
    email: ""
  },
  {
    name: "VALLY VETERINARY CLINIC AND SURGERY",
    address: "109, JALAN LAKSAMANA CHENG HO, 75000 MELAKA View location",
    area: "JALAN LAKSAMANA CHENG HO",
    state: "MELAKA",
    clinicPhone: "147277233.0",
    mobilePhone: "",
    email: ""
  },
];

(function initKlinikTool_MELAKA() {
  const root = document.getElementById("klinik-haiwan-kl-tool");
  if (!root) return;
  const searchInput = root.querySelector("#ilmu-kl-search");
  const typeSelect  = root.querySelector("#ilmu-kl-type");  // optional, not used here
  const areaSelect  = root.querySelector("#ilmu-kl-area");
  const nearMeBtn   = root.querySelector("#ilmu-kl-nearme");
  const resetBtn    = root.querySelector("#ilmu-kl-reset");
  const resultsWrap = root.querySelector("#ilmu-kl-results");
  const countLabel  = root.querySelector("#ilmu-kl-count");

  function norm(str) {
    return (str || "").toString().toLowerCase();
  }

  function buildMapsUrl(c) {
    const q = encodeURIComponent((c.name || "") + ", " + (c.address || ""));
    return "https://www.google.com/maps/search/?api=1&query=" + q;
  }

  function render(list) {
    resultsWrap.innerHTML = "";
    if (!list.length) {
      resultsWrap.innerHTML = '<p style="font-size:0.9rem;color:#555;">Tiada klinik dijumpai. Cuba ubah kata kunci atau penapis.</p>';
      countLabel.textContent = "0 klinik haiwan ditemui.";
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
      nameEl.textContent = c.name || "(Tanpa nama klinik)";
      nameEl.setAttribute("itemprop", "name");

      const tagEl = document.createElement("span");
      tagEl.className = "ilmu-kl-tag";
      tagEl.textContent = "MELAKA";

      header.appendChild(nameEl);
      header.appendChild(tagEl);

      const areaEl = document.createElement("div");
      areaEl.className = "ilmu-kl-area";
      areaEl.textContent = "Kawasan: " + (c.area || c.state || "");

      const addrEl = document.createElement("div");
      addrEl.className = "ilmu-kl-address";
      addrEl.innerHTML = "<strong>Alamat:</strong> <span itemprop=\"address\">" + (c.address || "") + "</span>";

      const phoneEl = document.createElement("div");
      phoneEl.className = "ilmu-kl-phone";
      if (c.clinicPhone || c.mobilePhone) {
        const phones = [];
        if (c.clinicPhone) phones.push(c.clinicPhone);
        if (c.mobilePhone) phones.push(c.mobilePhone);
        phoneEl.innerHTML = "<strong>Telefon:</strong> " + phones.map(function(p){ return '<span itemprop=\"telephone\">' + p + "</span>"; }).join(" / ");
      }

      const actionsRow = document.createElement("div");
      actionsRow.className = "ilmu-kl-actions-row";

      const mapsLink = document.createElement("a");
      mapsLink.href = buildMapsUrl(c);
      mapsLink.target = "_blank";
      mapsLink.rel = "noopener nofollow";
      mapsLink.textContent = "Buka di Google Maps";

      const callLink = document.createElement("a");
      const phoneRaw = (c.clinicPhone || c.mobilePhone || "");
      if (phoneRaw) {
        callLink.href = "tel:" + phoneRaw.replace(/[^0-9+]/g, "");
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
      if (c.clinicPhone || c.mobilePhone) card.appendChild(phoneEl);
      card.appendChild(actionsRow);
      frag.appendChild(card);
    });
    resultsWrap.appendChild(frag);
    countLabel.textContent = list.length + " klinik haiwan & klinik veterinar dijumpai di MELAKA.";
  }

  function applyFilters() {
    const q = norm(searchInput ? searchInput.value : "");
    const areaVal = areaSelect ? areaSelect.value : "";

    const base = ILMU_KLINIK_MELAKA.slice();
    const filtered = base.filter(function(c) {
      if (areaVal) {
        if (!c.area || c.area.indexOf(areaVal) === -1) return false;
      }
      if (!q) return true;
      const haystack = norm((c.name || "") + " " + (c.address || "") + " " + (c.area || "") + " " + (c.state || ""));
      return haystack.indexOf(q) !== -1;
    }).sort(function(a,b){ return (a.name || "").localeCompare(b.name || ""); });

    render(filtered);
  }

  function setupListeners() {
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (areaSelect) areaSelect.addEventListener('change', applyFilters);
    if (resetBtn) {
      resetBtn.addEventListener('click', function(){
        if (searchInput) searchInput.value = "";
        if (areaSelect) areaSelect.value = "";
        applyFilters();
      });
    }
    if (nearMeBtn) {
      nearMeBtn.addEventListener('click', function(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(pos){
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const base = "https://www.google.com/maps/search/";
            const q = encodeURIComponent("klinik haiwan veterinar near me");
            const url = base + q + "/@" + lat + "," + lng + ",14z";
            window.open(url, "_blank", "noopener");
          }, function(){
            window.open("https://www.google.com/maps/search/" + encodeURIComponent("klinik haiwan MELAKA near me"), "_blank", "noopener");
          });
        } else {
          window.open("https://www.google.com/maps/search/" + encodeURIComponent("klinik haiwan MELAKA near me"), "_blank", "noopener");
        }
      });
    }
  }

  setupListeners();
  applyFilters();
})();
