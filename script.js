// Dictionary data
var dictionary = [
    { term: "3D printing", definition: "Percetakan 3D" },
    { term: "4K resolution", definition: "Resolusi 4K" },
    // Add more terms here...
];

// Function to render the dictionary
function renderDictionary(terms) {
    var container = document.getElementById('dictionaryContainer');
    container.innerHTML = ''; // Clear previous content

    terms.forEach(function(term) {
        var termDiv = document.createElement('div');
        termDiv.classList.add('column');
        termDiv.innerHTML = `
            <table class="term-table">
                <tr>
                    <th class="blue">Term</th>
                    <th class="orange">Definition</th>
                </tr>
                <tr>
                    <td>${term.term}</td>
                    <td>${term.definition}</td>
                </tr>
            </table>
        `;
        container.appendChild(termDiv);
    });
}

// Initial rendering of the dictionary
renderDictionary(dictionary);

// Function to search for a term
function search() {
    var searchTerm = document.getElementById('searchTerm').value.toLowerCase();
    var searchResults = dictionary.filter(function(term) {
        return term.term.toLowerCase().includes(searchTerm);
    });
    renderDictionary(searchResults);
}
