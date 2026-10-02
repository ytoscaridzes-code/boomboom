// Плавная прокрутка по якорным ссылкам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Кнопка контакта
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function () {
        alert('Спасибо за интерес! Напишите на elPatron@gmail.com');
    });
}

// Сообщение в консоль (для проверки в DevTools)
console.log('Сайт портфолио загружен успешно!');
console.log('DevOps инструменты: Git, GitHub, GitHub Pages, Chrome DevTools, Lighthouse');