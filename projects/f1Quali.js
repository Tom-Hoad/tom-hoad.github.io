let racesByYear = {
    "2024": [
        {value: "Bahrain", name: "Bahrain Grand Prix"},
        {value: "Saudi Arabian", name: "Saudi Arabian Grand Prix"},
        {value: "Australian", name: "Australian Grand Prix"},
        {value: "Japanese", name: "Japanese Grand Prix"},
        {value: "Chinese", name: "Chinese Grand Prix"},
        {value: "Miami", name: "Miami Grand Prix"},
        {value: "Emilia-Romagna", name: "Emilia-Romagna Grand Prix"},
        {value: "Monaco", name: "Monaco Grand Prix"},
        {value: "Canadian", name: "Canadian Grand Prix"},
        {value: "Spanish", name: "Spanish Grand Prix"},
        {value: "Austrian", name: "Austrian Grand Prix"},
        {value: "British", name: "British Grand Prix"},
        {value: "Hungarian", name: "Hungarian Grand Prix"},
        {value: "Beglium", name: "Beglium Grand Prix"},
        {value: "Dutch", name: "Dutch Grand Prix"},
        {value: "Italian", name: "Italian Grand Prix"},
        {value: "Azerbaijan", name: "Azerbaijan Grand Prix"},
        {value: "Singapore", name: "Singapore Grand Prix"},
        {value: "American", name: "American Grand Prix"},
        {value: "Mexican", name: "Mexican Grand Prix"},
        {value: "Brazilian", name: "Brazilian Grand Prix"},
        {value: "Las Vegas", name: "Las Vegas Grand Prix"},
        {value: "Qatar", name: "Qatar Grand Prix"},
        {value: "Abu Dhabi", name: "Abu Dhabi Grand Prix"}
    ],
    "2025": [
        {value: "Australian", name: "Australian Grand Prix"},
        {value: "Chinese", name: "Chinese Grand Prix"},
        {value: "Japanese", name: "Japanese Grand Prix"},
        {value: "Bahrain", name: "Bahrain Grand Prix"},
        {value: "Saudi Arabian", name: "Saudi Arabian Grand Prix"},
        {value: "Miami", name: "Miami Grand Prix"},
        {value: "Emilia-Romagna", name: "Emilia-Romagna Grand Prix"},
        {value: "Monaco", name: "Monaco Grand Prix"},
        {value: "Spanish", name: "Spanish Grand Prix"},
        {value: "Canadian", name: "Canadian Grand Prix"},
        {value: "Austrian", name: "Austrian Grand Prix"},
        {value: "British", name: "British Grand Prix"}
    ]
};

function update() {
    const yearSelect = document.getElementById('year');
    const raceSelect = document.getElementById('race');
    const selectedYear = yearSelect.value;
    
    // Clear existing options
    raceSelect.innerHTML = '';
    
    // Add new options
    racesByYear[selectedYear].forEach(race => {
        const option = document.createElement('option');
        option.value = race.value;
        option.textContent = race.name;
        raceSelect.appendChild(option);
    });
}

function showImage() {
    const year = document.getElementById('year').value;
    const race = document.getElementById('race').value;
    
    const imagePath = `../images/f1Quali/${year}/${race}.png`;
    document.getElementById('imageContainer').innerHTML = `<img src="${imagePath}" alt="${race}" style="width: 70vw; height: auto;">`;
}

// Initialize the race options when page loads
window.onload = update;