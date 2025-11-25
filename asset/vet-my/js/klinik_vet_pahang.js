// Auto-generated from AnimalPassport DVS CSV
const ILMU_KLINIK_PAHANG = [
  {
    name: "DVS PAHANG",
    address: "JALAN SERI KEMUNTING 2, 25100 KUANTAN PAHANG",
    area: "JALAN SERI KEMUNTING 2",
    state: "PAHANG",
    clinicPhone: "95171090.0",
    mobilePhone: "",
    email: ""
  },
  {
    name: "JAWHARI CAT MEDICAL CENTER",
    address: "KUANTAN PAHANG",
    area: "PAHANG",
    state: "PAHANG",
    clinicPhone: "",
    mobilePhone: "",
    email: ""
  },
  {
    name: "KLINIK HAIWAN DAN SURGERI JERANTUT",
    address: "LOT 4265, TINGKAT BAWAH,JALAN KUANTAN, 27000, JERANTUT PAHANG",
    area: "27000",
    state: "PAHANG",
    clinicPhone: "",
    mobilePhone: "132622883.0",
    email: "nadianatashanordin@gmail.com"
  },
  {
    name: "KLINIK HAIWAN KUANTAN",
    address: "19A, JALAN HAJI AHMAD, 25300 KUANTAN PAHANG PAHANG",
    area: "JALAN HAJI AHMAD",
    state: "PAHANG",
    clinicPhone: "095172233",
    mobilePhone: "",
    email: "fong_kin@hotmail.com"
  },
  {
    name: "KLINIK VETERINAR DAN SURGERI JAWHARI",
    address: "B 54, TAMAN GURU KM 8, JALAN GAMBANG, 25150, KUANTAN PAHANG",
    area: "25150",
    state: "PAHANG",
    clinicPhone: "95143399.0",
    mobilePhone: "",
    email: ""
  },
  {
    name: "KLINIK VETERINAR VETCARE RP",
    address: "A243, JALAN DATO' WONG AH JANG, TAMAN JADE, 25100 KUANTAN, PAHANG 25100 KUANTAN PAHANG",
    area: "25100 KUANTAN",
    state: "PAHANG",
    clinicPhone: "95315842.0",
    mobilePhone: "0167842464",
    email: "aisahsupi@gmail.com"
  },
  {
    name: "PAWSOME ANIMAL MEDICAL CENTRE",
    address: "B24G,JALAN IM 7/18,BANDAR INDERA MAHKOTA,25200 KUANTAN,PAHANG 25200 KUANTAN PAHANG",
    area: "25200 KUANTAN",
    state: "PAHANG",
    clinicPhone: "01154138381",
    mobilePhone: "1154138381.0",
    email: ""
  },
];

(function initKlinikTool_PAHANG() {
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
      tagEl.textContent = "PAHANG";

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
    countLabel.textContent = list.length + " klinik haiwan & klinik veterinar dijumpai di PAHANG.";
  }

  function applyFilters() {
    const q = norm(searchInput ? searchInput.value : "");
    const areaVal = areaSelect ? areaSelect.value : "";

    const base = ILMU_KLINIK_PAHANG.slice();
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
            window.open("https://www.google.com/maps/search/" + encodeURIComponent("klinik haiwan PAHANG near me"), "_blank", "noopener");
          });
        } else {
          window.open("https://www.google.com/maps/search/" + encodeURIComponent("klinik haiwan PAHANG near me"), "_blank", "noopener");
        }
      });
    }
  }

  setupListeners();
  applyFilters();
})();
