
// Auto year update
document.getElementById('year').textContent = new Date().getFullYear();

// animation when load
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("visible");
  });
});
