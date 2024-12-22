// Немедленно выполняемая функция для прелоадера
(function() {
    const preloader = document.querySelector('.preloader');
    
    function hidePreloader() {
        preloader.classList.add('preloader-hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }

    // Скрыть прелоадер после загрузки всего контента
    window.addEventListener('load', hidePreloader);
    
    // Запасной вариант: скрыть прелоадер через 3 секунды, если что-то пошло не так
    setTimeout(hidePreloader, 3000);
})();

// Остальной код JavaScript... 