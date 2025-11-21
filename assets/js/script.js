// Auto year update
document.getElementById('year').textContent = new Date().getFullYear();

// animation when load
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("visible");
  });
});


const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;


// Theme changing logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggleBtn.innerHTML = sunSVG; // Show sun (light mode icon) in dark
} else {
  themeToggleBtn.innerHTML = moonSVG; // Show moon in light
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-theme');

  if (isDark) {
    themeToggleBtn.innerHTML = sunSVG;
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.innerHTML = moonSVG;
    localStorage.setItem('theme', 'light');
  }
});
