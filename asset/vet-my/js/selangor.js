(function(){
    const DATA_ARRAY = [
        {
            name: "Klinik Veterinar Kerajaan Shah Alam",
            type: "Kerajaan",
            area: "Shah Alam",
            address: "Seksyen 15, Shah Alam",
            phone: "03-0000 0000",
            lat: 3.0733, lng: 101.5185
        },
        {
            name: "Happy Paws Animal Clinic",
            type: "Swasta",
            area: "Petaling Jaya",
            address: "SS2, Petaling Jaya",
            phone: "03-0000 0000",
            lat: 3.127, lng: 101.612
        },
        {
            name: "Vet 24 Jam Klang",
            type: "24 Jam",
            area: "Klang",
            address: "Bandar Baru Klang",
            phone: "03-0000 0000",
            lat: 3.051, lng: 101.449
        }
    ];

    const searchInput = document.getElementById("klinik-search");
    const filterArea = document.getElementById("klinik-daerah");
    const filterJenis = document.getElementById("klinik-jenis");
    const results = document.getElementById("klinik-results");

    function render(list){
        results.innerHTML = "";
        list.forEach(item=>{
            const card = document.createElement("article");
            card.className = "ilmu-klinik-card";
            card.innerHTML = `
                <h3 itemprop="name">${item.name}</h3>
                <p><strong>Jenis:</strong> ${item.type}</p>
                <p><strong>Kawasan:</strong> ${item.area}</p>
                <p><strong>Alamat:</strong> ${item.address}</p>
                <p><strong>Tel:</strong> ${item.phone}</p>
            `;
            results.appendChild(card);
        });
    }

    function filter(){
        const q = searchInput.value.toLowerCase();
        const a = filterArea.value;
        const j = filterJenis.value;

        const filtered = DATA_ARRAY.filter(x=>{
            return (
                (!a || x.area === a) &&
                (!j || x.type === j) &&
                (x.name.toLowerCase().includes(q) || x.address.toLowerCase().includes(q))
            );
        });

        render(filtered);
    }

    searchInput.addEventListener("input", filter);
    filterArea.addEventListener("change", filter);
    filterJenis.addEventListener("change", filter);

    document.getElementById("klinik-reset").onclick = ()=>{
        searchInput.value = "";
        filterArea.value = "";
        filterJenis.value = "";
        render(DATA_ARRAY);
    };

    document.getElementById("klinik-near-me").onclick = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(pos=>{
                const {latitude, longitude} = pos.coords;
                window.open(`https://www.google.com/maps/search/klinik+haiwan+selangor/@${latitude},${longitude},14z`);
            }, ()=>{
                window.open("https://www.google.com/maps/search/klinik+haiwan+selangor");
            });
        } else {
            window.open("https://www.google.com/maps/search/klinik+haiwan+selangor");
        }
    };

    // Initial load
    render(DATA_ARRAY);

    // Hidden domain injection
    console.log("Protected by www.thebukitbesi.com");
})();