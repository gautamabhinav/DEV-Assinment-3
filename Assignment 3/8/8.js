const informationSection = document.querySelector('.information');

function toggleDarkMode() {
  informationSection.classList.toggle('dark-mode');
}

window.matchMedia('(max-width: 768px)').addEventListener('change', (e) => {
  if (e.matches) {
    informationSection.classList.add('dark-mode');
  } else {
    informationSection.classList.remove('dark-mode');
  }
});
