/*
  vet_my_tool.js
  Generic directory tool for all Malaysian vet datasets (DVS / AnimalPassport)
  Author: www.thebukitbesi.com
*/

(function(){
  // Hidden signature – anti-curi lembut
  const __tbb = "www." + "thebukitbesi.com";

  const container = document.getElementById("vet-my-tool");
  if (!container) return;

  const searchEl  = document.getElementById("vetMySearch");
  const filterEl  = document.getElementById("vetMyFilter");
  const resultsEl = document.getElementById("vetMyResults");
  const nearMeBtn = document.getElementById("vetMyNearMe");
  const resetBtn  = document.getElementById("vetMyReset");

  const dataVarName = container.getAttribute("data-vet-var") || "";
  const stateLabel  = container.getAttribute("data-vet-state") || "";

  // --- Resolve data source ---
  let DATA = [];

  // Option 1: standard global
  if (typeof window.ILMU_VET_DATA !== "undefined" && Array.isArray(window.ILMU_VET_DATA)) {
    DATA = window.ILMU_VET_DATA;
  } 
  // Option 2: eval nama const daripada data-vet-var (contoh: "ILMU_KLINIK_SELANGOR")
  else if (dataVarName) {
    try {
      // eslint-disable-next-line no-eval
      const tmp = eval(dataVarName);
      if (Array.isArray(tmp)) DATA = tmp;
    } catch (e) {
      console.warn("Tidak dapat eval dataVarName:", dataVarName, e);
    }
  }

  if (!Array.isArray(DATA)) DATA = [];

  // --- Util functions ---
  function normaliseType(item){
    const n = (item.name  || "").toLowerCase();
    const a = (item.area  || "").toLowerCase();
    const s = (item.state || "").toLowerCase();

    if (n.includes("hospital") || n.includes("hosp")) return "specialist";
    if (n.includes("universiti") || n.includes("upm")) return "specialist";
    if (n.includes("dvs") || n.includes("jabatan")) return "kerajaan";

    // state level DVS / pejabat
    if (a.includes("jabatan") || a.includes("dvs") || s.includes("jabatan")) return "kerajaan";

    // default: private practice
    return "swasta";
  }

  function buildMapsUrl(item){
    const q = encodeURIComponent(
      (item.name || "") + " " + (item.address || "") + " " + (stateLabel || item.state || "Malaysia")
    );
    return "https://www.google.com/maps/search/?api=1&query=" + q;
  }

  function cleanPhone(p){
    if (!p) return "";
    let s = String(p).trim();
    s = s.replace(/\.0$/,"");
    return s;
  }

  function getStateFromData(){
    if (stateLabel) return stateLabel;
    const first = DATA[0];
    if (first && first.state) return String(first.state).toUpperCase();
    return "Malaysia";
  }

  // --- Render ---
  function render(list){
    if (!resultsEl) return;

    resultsEl.innerHTML = "";

    if (!list.length){
      resultsEl.innerHTML = "<p>Tiada klinik ditemui untuk carian ini. Cuba tukar kata kunci atau penapis.</p>";
      return;
    }

    list.forEach(function(item){
      const name    = item.name    || "Klinik Haiwan";
      const address = item.address || (item.area ? item.area + ", " + getStateFromData() : getStateFromData());
      const area    = item.area    || "";
      const type    = normaliseType(item);
      const clinicPhone = cleanPhone(item.clinicPhone);
      const mobilePhone = cleanPhone(item.mobilePhone);
      const phone   = clinicPhone || mobilePhone || "";
      const email   = (item.email || "").trim();
      const mapsUrl = buildMapsUrl(item);

      const card = document.createElement("article");
      card.className = "ilmu-klinik-card";
      card.setAttribute("itemscope","");
      card.setAttribute("itemtype","https://schema.org/VeterinaryCare");

      card.innerHTML = `
        <h3 itemprop="name">
          ${name}
          <span class="ilmu-klinik-badge">${type}</span>
        </h3>
        <p itemprop="address">${address}</p>
        ${area ? `<p><b>Kawasan:</b> ${area}</p>` : ""}
        <p><a href="${mapsUrl}" target="_blank" rel="noopener">Lihat di Google Maps</a></p>
        ${phone ? `<p><b>Tel:</b> <a href="tel:${phone}" itemprop="telephone">${phone}</a></p>` : ""}
        ${email ? `<p><b>Email:</b> <a href="mailto:${email}" itemprop="email">${email}</a></p>` : ""}
      `;

      resultsEl.appendChild(card);
    });
  }

  // --- Filter logic ---
  function filterData(){
    const text = (searchEl && searchEl.value ? searchEl.value : "").toLowerCase();
    const f    = (filterEl && filterEl.value ? filterEl.value.toLowerCase() : "");

    const filtered = DATA.filter(function(x){
      const n   = (x.name || "").toLowerCase();
      const a   = (x.area || "").toLowerCase();
      const adr = (x.address || "").toLowerCase();
      const t   = normaliseType(x);

      const matchText = !text || n.includes(text) || a.includes(text) || adr.includes(text);
      const matchType = !f || t === f;

      return matchText && matchType;
    });

    render(filtered);
  }

  // --- Event bindings ---
  if (searchEl) searchEl.addEventListener("input", filterData);
  if (filterEl) filterEl.addEventListener("change", filterData);

  if (resetBtn){
    resetBtn.addEventListener("click", function(){
      if (searchEl) searchEl.value = "";
      if (filterEl) filterEl.value = "";
      render(DATA);
    });
  }

  if (nearMeBtn){
    nearMeBtn.addEventListener("click", function(){
      const state = encodeURIComponent("klinik haiwan " + getStateFromData());
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          window.open(
            `https://www.google.com/maps/search/${state}/@${lat},${lng},14z`,
            "_blank"
          );
        }, function(){
          window.open(`https://www.google.com/maps/search/${state}/`,"_blank");
        });
      } else {
        window.open(`https://www.google.com/maps/search/${state}/`,"_blank");
      }
    });
  }

  // --- First render ---
  render(DATA);
})();
