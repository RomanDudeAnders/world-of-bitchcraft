function createDog() {
    // Name und Rasse des Hundes holen
    const breed = document.getElementById('breedSelect').value;
    const color = document.getElementById('colorPicker').value;
    const dogName = document.getElementById('dogName').value || "Dein Hund";

    // Kopf, Körper und Beine auswählen
    const head = document.getElementById('headSelect').value;
    const body = document.getElementById('bodySelect').value;
    const legs = document.getElementById('legsSelect').value;

    // Hund anzeigen
    const displayName = document.getElementById('displayDogName');
    displayName.textContent = `${dogName} der ${breed}`;

    const dogImage = document.getElementById('dogImage');
    dogImage.style.backgroundColor = color;

    // Zufällige Bewertung
    const rating = Math.floor(Math.random() * 10) + 1;
    const ratingDisplay = document.getElementById('ratingDisplay');
    ratingDisplay.textContent = `Bitchbaron69 gibt diesem Hund ${rating} von 10 Sternen!`;
}
