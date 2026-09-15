// Menu mobile
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});