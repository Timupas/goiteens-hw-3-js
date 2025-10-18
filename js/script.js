// Встановіть IntersectionObserver для кожного зображення з data-src атрибутом, яке потрібно завантажити.
// Для кожного зображення, яке стає видимим, змініть його src атрибут на data-src та перестаньте спостерігати його.
// Додайте додаткову функціональність, таку як анімацію завантаження або зображення-заповнювач, щоб покращити користувацький досвід.



const imagObserv = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '100px',
});

const imgEls = document.querySelectorAll("img[data-src]");
imgEls.forEach(img => imagObserv.observe(img));