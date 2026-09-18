document.addEventListener('DOMContentLoaded', () => {

    // 1. Back to Top Button Control
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 2. Mobile Menu Auto-Close on Link Click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const offcanvasElement = document.getElementById('offcanvasNavbar');

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        });
    });

    // 3. Highlight Nav Link on Scroll (ScrollSpy)
    const sections = document.querySelectorAll('section[id]');
    const pillItems = document.querySelectorAll('.pill-item');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        pillItems.forEach(pill => {
            pill.classList.remove('active');
            if (pill.getAttribute('href') === `#${currentSectionId}`) {
                pill.classList.add('active');
            }
        });
    });

    // 4. Contact Form Submit Simulation & Validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple Feedback
            alert('¡Gracias por comunicarte, Sergio Stuardo ha recibido tu mensaje!');
            contactForm.reset();
        });
    }

});