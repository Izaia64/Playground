// Menu mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Onglets activités (hiver / été / toute l'année)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabButtons.forEach((b) => b.classList.toggle('active', b === btn));
    tabPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === `tab-${target}`);
    });
  });
});

// Formulaire de contact (démo front-end uniquement, pas de backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Merci ! Ceci est une démo — branchez ce formulaire à votre service d\'emailing ou backend pour recevoir les demandes.';
});

// Année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();
