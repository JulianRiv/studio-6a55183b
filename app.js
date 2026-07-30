document.addEventListener('DOMContentLoaded', () => {
    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close mobile nav after clicking a link
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth scroll for in-page anchor links (fallback for browsers
    // that ignore CSS scroll-behavior, and to account for sticky header)
    const header = document.querySelector('.site-header');

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            const headerHeight = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
});
