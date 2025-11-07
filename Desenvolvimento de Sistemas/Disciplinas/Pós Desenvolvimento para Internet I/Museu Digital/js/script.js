// Zoom
let zoomLevel = 1;
const minZoom = 0.8;
const maxZoom = 2.0;
const zoomStep = 0.1;

function applyZoom() {
    document.body.style.zoom = zoomLevel;
}

document.getElementById('zoomIn').addEventListener('click', () => {
    if (zoomLevel < maxZoom) {
        zoomLevel = Math.round((zoomLevel + zoomStep) * 100) / 100;
        applyZoom();
    }
});

document.getElementById('zoomOut').addEventListener('click', () => {
    if (zoomLevel > minZoom) {
        zoomLevel = Math.round((zoomLevel - zoomStep) * 100) / 100;
        applyZoom();
    }
});

// Tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Verifica preferência salva
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('bi-moon', 'bi-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    icon.classList.toggle('bi-moon');
    icon.classList.toggle('bi-sun');
});







// Inicializa todos os popovers
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'click' // Ativa ao clicar (não hover)
    });
});

// Fecha todos os popovers ao clicar fora deles
document.addEventListener('click', function (e) {
    const popovers = document.querySelectorAll('.popover');
    const targets = document.querySelectorAll('[data-bs-toggle="popover"]');

    // Verifica se o clique foi fora de qualquer popover e seu botão
    if (!e.target.closest('.popover') && !e.target.closest('[data-bs-toggle="popover"]')) {
        targets.forEach(function (trigger) {
            const popover = bootstrap.Popover.getInstance(trigger);
            if (popover && popover._isShown) {
                popover.hide();
            }
        });
    }
});