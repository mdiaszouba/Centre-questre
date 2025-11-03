// Message de bienvenue animé sur la page d'accueil
document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("welcome-message");
  if (message) {
    let text = "Bienvenue au Centre Équestre des Collines !";
    let i = 0;
    const interval = setInterval(() => {
      message.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
  }

  // Bouton "Voir plus" sur la page tarifs
  const button = document.getElementById("more-info");
  const extra = document.getElementById("extra-info");
  if (button && extra) {
    button.addEventListener("click", () => {
      extra.classList.toggle("hidden");
    });
  }
});
