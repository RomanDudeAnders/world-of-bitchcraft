// Initialisierung des Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Grundfunktionen für Zeichnen
function drawText(text, x, y, font = "20px Arial", color = "black") {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Erste Seite
function drawWelcomeScreen() {
  clearCanvas();
  drawText("Willkommen bei", canvas.width / 2, 100, "30px Arial", "black");
  drawText("WORLD OF BITCHCRAFT", canvas.width / 2, 150, "bold 40px Arial", "darkred");
  drawText("Hallo lieber Hundefreund. Hier kannst du deinen", canvas.width / 2, 220);
  drawText("eigenen digitalen Hund erstellen! Worauf wartest du noch?", canvas.width / 2, 250);

  // Buttons
  drawText("JA, ICH BIN ÜBER 18", canvas.width / 2, 350, "bold 20px Arial", "green");
  drawText("NEIN, ICH BIN NOCH EIN KIND", canvas.width / 2, 400, "bold 20px Arial", "red");
}

// Interaktive Klicks
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (y > 330 && y < 370) {
    console.log("Button 'Ja' geklickt");
    drawAdultScreen();
  } else if (y > 380 && y < 420) {
    console.log("Button 'Nein' geklickt");
    drawChildScreen();
  }
});

// Weitere Seiten
function drawAdultScreen() {
  clearCanvas();
  drawText("Wirklich? So siehst du gar nicht aus!", canvas.width / 2, 150);
  drawText("Schön, dass du schon so alt und auch geistig gereift bist.", canvas.width / 2, 200);
  drawText("Dann darfst du ja auch schon ein Nussschnäpschen trinken.", canvas.width / 2, 250);
  drawText("Nimm hin! Prost!", canvas.width / 2, 300);
  drawText("JETZT HUND ERSTELLEN", canvas.width / 2, 400, "bold 20px Arial", "blue");
}

function drawChildScreen() {
  clearCanvas();
  drawText("Achso, du bist noch gar nicht erwachsen?", canvas.width / 2, 150);
  drawText("Macht nix, dieses Spiel ist komplett jugendfrei!", canvas.width / 2, 200);
  drawText("Na los, ein kleiner, digitaler Wuffi wartet nur darauf, von dir gebastelt zu werden!", canvas.width / 2, 250);
  drawText("JETZT HUND ERSTELLEN", canvas.width / 2, 400, "bold 20px Arial", "blue");
}

// Startseite zeichnen
drawWelcomeScreen();
