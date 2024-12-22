document.addEventListener('DOMContentLoaded', function() {
    // Инициализация AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Загрузчик
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // Мобильное меню
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Анимация статистики
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const count = +stat.innerText;
            const increment = target / 200;

            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 1);
            } else {
                stat.innerText = target;
            }
        });
    }

    // Запуск анимации статистики при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    });

    document.querySelectorAll('.stats-container').forEach(container => {
        observer.observe(container);
    });

    // Галерея
    const galleryContainer = document.querySelector('.gallery-container');
    const images = [
        'dragon1.jpg', 'dragon2.jpg', 'dragon3.jpg',
        'dragon4.jpg', 'dragon5.jpg', 'dragon6.jpg'
    ];

    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="static/images/gallery/${image}" alt="Dragon Gallery">`;
        galleryContainer.appendChild(item);
    });

    // Кнопка прокрутки вверх
    const scrollTop = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTop.style.opacity = '1';
        } else {
            scrollTop.style.opacity = '0';
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Параллакс эффект для фона героя
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        hero.style.backgroundPosition = `${mouseX * 50}% ${mouseY * 50}%`;
    });

    // Форма обратной связи
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь можно добавить логику отправки формы
        const formData = new FormData(contactForm);
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Анимация успешной отправки
        contactForm.classList.add('submitted');
        setTimeout(() => {
            contactForm.reset();
            contactForm.classList.remove('submitted');
        }, 2000);
    });

    // Анимация летающих драконов
    function createFloatingDragon() {
        const dragon = document.createElement('img');
        dragon.src = 'static/images/dragon-silhouette.png';
        dragon.className = 'floating-dragon';
        dragon.style.top = `${Math.random() * 80}%`;
        dragon.style.animationDuration = `${15 + Math.random() * 10}s`;
        
        document.querySelector('.floating-dragons').appendChild(dragon);
        
        dragon.addEventListener('animationend', () => {
            dragon.remove();
        });
    }

    setInterval(createFloatingDragon, 3000);
}); 