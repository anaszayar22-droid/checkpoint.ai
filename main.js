// Effet parallaxe léger sur les orbes au mouvement de la souris
document.addEventListener("mousemove", (e) => {
const orbs = document.querySelectorAll(".orb");
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

orbs.forEach((orb, i) => {
    const intensity = (i + 1) * 0.5;
    orb.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
});
});

// Apparition douce du contenu au chargement
window.addEventListener("DOMContentLoaded", () => {
const content = document.querySelector(".hero-content");
content.style.opacity = "0";
content.style.transform = "translateY(20px)";
content.style.transition = "opacity 1s ease-out, transform 1s ease-out";

requestAnimationFrame(() => {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
});
});
