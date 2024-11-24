// Funktionen zur Navigation zwischen den Seiten
function showPage(pageId) {
  // Alle Seiten verstecken
  document.querySelectorAll("div").forEach(page => page.style.display = "none");
  // Gewünschte Seite anzeigen
  document.getElementById(pageId).style.display = "block";
}

// Buttons für die Willkommensseite
document.getElementById("btnAdult").addEventListener("click", () => showPage("adultPage"));
document.getElementById("btnChild").addEventListener("click", () => showPage("childPage"));

// Buttons für die Erwachsenen-/Kind-Seite
document.getElementById("btnCreateDogAdult").addEventListener("click", () => showPage("dogCreationPage"));
document.getElementById("btnCreateDogChild").addEventListener("click", () => showPage("dogCreationPage"));

// Button zum Hund erstellen
document.getElementById("btnCreateDog").addEventListener("click", () => {
  const breed = document.getElementById("dogBreed").value;
  const color = document.getElementById("dogColor").value;
  const character = document.getElementById("dogCharacter").value;
  const name = document.getElementById("dogName").value || "No-Name";

  // Zeige die Ergebnisse an
  showPage("resultPage");
  document.getElementById("dogDisplayName").innerText = name;

  // Zufällige Bewertung
  const stars = "⭐".repeat(Math.floor(Math.random() * 5) + 1);
  document.getElementById("dogRating").innerText = `Bewertung: ${stars}`;
});

// Button für Feedback
document.getElementById("btnWhyLowStars").addEventListener("click", () => {
  const feedbackTexts = [
    "Beginnen wir mit den Augen deines Hundes. Sie sind wirklich wunderschön!",
    "Das Fell sieht richtig schön flauschig aus.",
    "Netter Schwanz, aber ist der nicht vielleicht ein bisschen klein?"
  ];
  const randomFeedback = feedbackTexts[Math.floor(Math.random() * feedbackTexts.length)];
  document.getElementById("feedback").innerText = randomFeedback;
});

// Button zum Neustart
document.getElementById("btnRestart").addEventListener("click", () => showPage("dogCreationPage"));
