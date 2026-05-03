/* ========== LOGIN STATUS ========== */
function checkLoginStatus() {
    // Placeholder so pages that call this function do not fail.
}

/* ========== NAVBAR ========== */
function initNavbar() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('mainNav');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

/* ========== ANIMATIONS ========== */
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.info-card,.activity-card,.link-card,.fan-card,.place-card,.stat-card').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

/* ========== SKILL BARS ========== */
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const bar = e.target;
                bar.style.width = bar.dataset.width + '%';
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.skill-progress').forEach(b => observer.observe(b));
}

/* ========== SLIDER ========== */
function initSlider() {
    let current = 0;
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slides.length) return;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    document.getElementById('sliderPrev')?.addEventListener('click', () => showSlide(current - 1));
    document.getElementById('sliderNext')?.addEventListener('click', () => showSlide(current + 1));
    dots.forEach(d => d.addEventListener('click', () => showSlide(parseInt(d.dataset.index))));
    showSlide(0);
    setInterval(() => showSlide(current + 1), 5000);
}