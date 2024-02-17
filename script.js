document.addEventListener("DOMContentLoaded", function() {
    const dictionary = [
        { term: "3D printing", definition: "Percetakan 3D" },
        { term: "4K resolution", definition: "Resolusi 4K" },
        { term: "Access control", definition: "Kontrol akses" },
        { term: "Adaptive software", definition: "Perangkat lunak adaptif" },
        { term: "Adware", definition: "Perangkat lunak iklan" },
        { term: "Algorithm", definition: "Algoritma" },
        { term: "Algorithmic trading", definition: "Perdagangan algoritmik" },
        { term: "Ambient computing", definition: "Komputasi ambiens" },
        { term: "Analog", definition: "Analog" },
        { term: "Animation", definition: "Animasi" },
        { term: "Anonymizer", definition: "Anonimiser" },
        { term: "Antivirus", definition: "Antivirus" },
        { term: "API (Application Programming Interface)", definition: "API (Antarmuka Pemrograman Aplikasi)" },
        { term: "App", definition: "Aplikasi" },
        { term: "Application", definition: "Aplikasi" },
        { term: "Archiving", definition: "Pengarsipan" },
        { term: "ARP (Address Resolution Protocol)", definition: "ARP (Protokol Resolusi Alamat)" },
        { term: "Artificial Intelligence (AI)", definition: "Kecerdasan Buatan (AI)" },
        { term: "Augmented Reality (AR)", definition: "Realitas Tertambah (AR)" },
        { term: "Authentication", definition: "Otentikasi" },
        { term: "Authentication token", definition: "Token otentikasi" },
        { term: "Autoresponder", definition: "Autoresponder" },
        { term: "Avatar", definition: "Avatar" },
        { term: "Backend", definition: "Backend" },
        { term: "Bandwidth", definition: "Lebar pita" },
        { term: "Bandwidth throttling", definition: "Penyesuaian lebar b..." },
        { term: "Base64", definition: "Basis64" },
        { term: "Benchmark", definition: "Tolak ukur" },
        { term: "Big Data", definition: "Data besar" },
        { term: "Binary", definition: "Biner" },
        { term: "Binary tree", definition: "Pohon biner" },
        { term: "BIOS", definition: "BIOS" },
        { term: "BIOS update", definition: "Pembaruan BIOS" },
        // Add more terms and definitions here...
    ];

    const list = document.getElementById("dictionaryList");
    const searchInput = document.getElementById("searchInput");

    function displayDictionary(terms) {
        list.innerHTML = "";
        terms.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.term}:</strong> ${item.definition}`;
            list.appendChild(li);
        });
    }

    function filterDictionary(searchTerm) {
        const filteredTerms = dictionary.filter(item =>
            item.term.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayDictionary(filteredTerms);
    }

    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.trim();
        filterDictionary(searchTerm);
    });

    // Display all terms when the page loads
    displayDictionary(dictionary);
});
