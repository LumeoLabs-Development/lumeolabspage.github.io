document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация появления карточек драконов
    const cards = document.querySelectorAll('.dragon-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Анимация кнопки CTA
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}); 