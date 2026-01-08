// Pequeña utilidad: poner el año en el footer
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Código específico de Index aquí
  console.log("Index loaded");
});
