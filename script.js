document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal animation to sections and cards
    document.querySelectorAll('.section-title, .exp-item, .project-card, #about p').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // Custom console message for fun
    console.log("%cHello there! 👋 %cThanks for checking out my source code.", "color: #121212; font-size: 20px; font-weight: bold;", "color: #666; font-size: 16px;");
});

// Dynamic navigation background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        nav.style.borderBottomColor = '#eeeeee';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        nav.style.borderBottomColor = 'transparent';
    }
});
