// Toggle thème sombre / clair
const toggleBtn = document.getElementById('theme-toggle');

if (toggleBtn) {
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        toggleBtn.textContent = '🌙';
    } else {
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggleBtn.textContent = isLight ? '🌙' : '☀️';
    });
}

// Petite animation d’apparition déjà gérée par CSS (fade-in)
