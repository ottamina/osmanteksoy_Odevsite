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

/* ========== CONTACT FORM ========== */
function initContactForm() {
    const msg = document.getElementById('contactMessage');
    const counter = document.getElementById('charCount');
    if (msg && counter) {
        msg.addEventListener('input', () => { counter.textContent = msg.value.length; });
    }
    const range = document.getElementById('contactUrgency');
    const val = document.getElementById('urgencyValue');
    if (range && val) {
        range.addEventListener('input', () => { val.textContent = range.value; });
    }
    // Enter key search on movie page
    const searchInput = document.getElementById('movieSearch');
    if (searchInput) searchInput.addEventListener('keypress', e => { if (e.key === 'Enter') searchMovies(); });
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(e => e.textContent = '');
    document.querySelectorAll('.form-control,.form-select,.form-check-input').forEach(e => e.classList.remove('is-invalid', 'is-valid'));
}

function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function setInvalid(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('is-invalid'); el.classList.remove('is-valid'); }
}
function setValid(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('is-valid'); el.classList.remove('is-invalid'); }
}

/* Native JavaScript Validation */
function validateWithJS() {
    clearErrors();
    let valid = true;
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();
    const preference = document.querySelector('input[name="contactPreference"]:checked');
    const kvkk = document.getElementById('kvkkConsent').checked;

    if (!name || name.length < 3) { showError('nameError', 'Ad Soyad en az 3 karakter olmalıdır.'); setInvalid('contactName'); valid = false; }
    else setValid('contactName');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { showError('contactEmailError', 'E-posta boş bırakılamaz.'); setInvalid('contactEmail'); valid = false; }
    else if (!emailRegex.test(email)) { showError('contactEmailError', 'Geçerli bir e-posta giriniz.'); setInvalid('contactEmail'); valid = false; }
    else setValid('contactEmail');

    const phoneRegex = /^(05\d{9}|\+90\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2})$/;
    if (!phone) { showError('phoneError', 'Telefon boş bırakılamaz.'); setInvalid('contactPhone'); valid = false; }
    else if (!phoneRegex.test(phone.replace(/\s/g, ''))) { showError('phoneError', 'Format: 05XX XXX XX XX'); setInvalid('contactPhone'); valid = false; }
    else setValid('contactPhone');

    if (!subject) { showError('subjectError', 'Konu seçiniz.'); setInvalid('contactSubject'); valid = false; }
    else setValid('contactSubject');

    if (!preference) { showError('preferenceError', 'İletişim tercihi seçiniz.'); valid = false; }

    if (!message || message.length < 10) { showError('messageError', 'Mesaj en az 10 karakter olmalıdır.'); setInvalid('contactMessage'); valid = false; }
    else if (message.length > 500) { showError('messageError', 'Mesaj en fazla 500 karakter olabilir.'); setInvalid('contactMessage'); valid = false; }
    else setValid('contactMessage');

    if (!kvkk) { showError('kvkkError', 'KVKK onayı gereklidir.'); valid = false; }

    const budget = document.getElementById('contactBudget').value;
    if (budget && (isNaN(budget) || Number(budget) < 0)) { showError('budgetError', 'Geçerli bir bütçe giriniz.'); setInvalid('contactBudget'); valid = false; }

    const resultDiv = document.getElementById('validationResult');
    if (valid) {
        resultDiv.className = 'validation-result success';
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<h4 style="color:var(--success)"><i class="fas fa-check-circle"></i> JavaScript Doğrulama Başarılı!</h4><p>Form verileri geçerli. Sunucuya gönderiliyor...</p>';
        submitToServer();
    } else {
        resultDiv.className = 'validation-result error';
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<h4 style="color:var(--danger)"><i class="fas fa-times-circle"></i> JavaScript Doğrulama Hatası</h4><p>Lütfen işaretli alanları düzeltiniz.</p>';
    }
}

/* Validator.js Framework Validation */
function validateWithFramework() {
    clearErrors();
    if (typeof validator === 'undefined') {
        alert('Validator.js kütüphanesi yüklenemedi!');
        return;
    }
    let valid = true;
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();
    const preference = document.querySelector('input[name="contactPreference"]:checked');
    const kvkk = document.getElementById('kvkkConsent').checked;

    if (validator.isEmpty(name) || !validator.isLength(name, { min: 3 })) {
        showError('nameError', 'Ad Soyad en az 3 karakter olmalıdır.'); setInvalid('contactName'); valid = false;
    } else setValid('contactName');

    if (validator.isEmpty(email) || !validator.isEmail(email)) {
        showError('contactEmailError', 'Geçerli bir e-posta giriniz.'); setInvalid('contactEmail'); valid = false;
    } else setValid('contactEmail');

    if (validator.isEmpty(phone) || !validator.isMobilePhone(phone, 'tr-TR')) {
        showError('phoneError', 'Geçerli bir TR telefon numarası giriniz.'); setInvalid('contactPhone'); valid = false;
    } else setValid('contactPhone');

    if (validator.isEmpty(subject)) {
        showError('subjectError', 'Konu seçiniz.'); setInvalid('contactSubject'); valid = false;
    } else setValid('contactSubject');

    if (!preference) { showError('preferenceError', 'İletişim tercihi seçiniz.'); valid = false; }

    if (validator.isEmpty(message) || !validator.isLength(message, { min: 10, max: 500 })) {
        showError('messageError', 'Mesaj 10-500 karakter arasında olmalıdır.'); setInvalid('contactMessage'); valid = false;
    } else setValid('contactMessage');

    if (!kvkk) { showError('kvkkError', 'KVKK onayı gereklidir.'); valid = false; }

    const budget = document.getElementById('contactBudget').value;
    if (budget && !validator.isNumeric(budget)) {
        showError('budgetError', 'Geçerli bir sayı giriniz.'); setInvalid('contactBudget'); valid = false;
    }

    const resultDiv = document.getElementById('validationResult');
    if (valid) {
        resultDiv.className = 'validation-result success';
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<h4 style="color:var(--success)"><i class="fas fa-check-circle"></i> Validator.js Doğrulama Başarılı!</h4><p>Form verileri geçerli. Sunucuya gönderiliyor...</p>';
        submitToServer();
    } else {
        resultDiv.className = 'validation-result error';
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<h4 style="color:var(--danger)"><i class="fas fa-times-circle"></i> Validator.js Doğrulama Hatası</h4><p>Lütfen işaretli alanları düzeltiniz.</p>';
    }
}

function submitToServer() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const resultDiv = document.getElementById('validationResult');

    fetch('iletisim.php', { method: 'POST', body: formData })
        .then(r => r.json())
        .then(data => {
            if (data.success && data.data) {
                let table = '<div class="php-response"><h5 style="margin-bottom:10px;color:var(--success)"><i class="fas fa-server"></i> Sunucu Yanıtı (PHP)</h5><table>';
                for (const [key, val] of Object.entries(data.data)) {
                    table += '<tr><td>' + key + '</td><td>' + val + '</td></tr>';
                }
                table += '</table></div>';
                resultDiv.innerHTML += table;
            } else {
                resultDiv.innerHTML += '<p style="margin-top:10px;color:var(--warning)"><i class="fas fa-info-circle"></i> PHP sunucusu aktif değil. Form verileri yerel olarak doğrulandı.</p>';
            }
        })
        .catch(() => {
            resultDiv.innerHTML += '<p style="margin-top:10px;color:var(--warning)"><i class="fas fa-info-circle"></i> PHP sunucusu aktif değil. Verileri görmek için projeyi bir PHP sunucusunda çalıştırın.</p>';
        });
}

function resetForm() {
    clearErrors();
    const resultDiv = document.getElementById('validationResult');
    if (resultDiv) { resultDiv.style.display = 'none'; resultDiv.innerHTML = ''; }
    const counter = document.getElementById('charCount');
    if (counter) counter.textContent = '0';
    const urgency = document.getElementById('urgencyValue');
    if (urgency) urgency.textContent = '5';
}

/* ========== MOVIES API ========== */
const TMDB_KEY = 'b0e261c6b9a1da399e07e03a75e06e64';
const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';
let moviePage = 1;
let currentQuery = '';

function loadPopularMovies() {
    moviePage = 1;
    currentQuery = '';
    fetchMovies(TMDB_BASE + '/movie/popular?api_key=' + TMDB_KEY + '&language=tr-TR&page=1');
}

function searchMovies() {
    const q = document.getElementById('movieSearch')?.value.trim();
    const genre = document.getElementById('genreFilter')?.value;
    const sort = document.getElementById('sortFilter')?.value;
    moviePage = 1;
    document.getElementById('moviesGrid').innerHTML = '';

    if (q) {
        currentQuery = q;
        fetchMovies(TMDB_BASE + '/search/movie?api_key=' + TMDB_KEY + '&language=tr-TR&query=' + encodeURIComponent(q) + '&page=1');
    } else {
        currentQuery = '';
        let url = TMDB_BASE + '/discover/movie?api_key=' + TMDB_KEY + '&language=tr-TR&sort_by=' + sort + '&page=1';
        if (genre) url += '&with_genres=' + genre;
        fetchMovies(url);
    }
}

function loadMoreMovies() {
    moviePage++;
    let url;
    if (currentQuery) {
        url = TMDB_BASE + '/search/movie?api_key=' + TMDB_KEY + '&language=tr-TR&query=' + encodeURIComponent(currentQuery) + '&page=' + moviePage;
    } else {
        const genre = document.getElementById('genreFilter')?.value;
        const sort = document.getElementById('sortFilter')?.value || 'popularity.desc';
        url = TMDB_BASE + '/discover/movie?api_key=' + TMDB_KEY + '&language=tr-TR&sort_by=' + sort + '&page=' + moviePage;
        if (genre) url += '&with_genres=' + genre;
    }
    fetchMovies(url, true);
}

function fetchMovies(url, append = false) {
    const grid = document.getElementById('moviesGrid');
    const spinner = document.getElementById('loadingSpinner');
    const loadMore = document.getElementById('loadMoreContainer');
    if (!append) grid.innerHTML = '';
    spinner.style.display = 'block';

    fetch(url)
        .then(r => r.json())
        .then(data => {
            spinner.style.display = 'none';
            if (data.results && data.results.length) {
                data.results.forEach(m => {
                    const col = document.createElement('div');
                    col.className = 'col-6 col-md-4 col-lg-3';
                    const poster = m.poster_path ? TMDB_IMG + m.poster_path : '';
                    const posterBg = poster ? 'background-image:url(' + poster + ');background-size:cover;background-position:center;' : 'background:var(--bg-card2);display:flex;align-items:center;justify-content:center;';
                    col.innerHTML =
                        '<div class="movie-card" onclick="showMovieDetail(' + m.id + ')">' +
                        '<div class="movie-poster" style="' + posterBg + '">' +
                        (!poster ? '<i class="fas fa-film" style="font-size:3rem;color:var(--text-muted)"></i>' : '') +
                        '</div>' +
                        '<div class="movie-info">' +
                        '<div class="movie-title">' + (m.title || 'Bilinmiyor') + '</div>' +
                        '<div class="movie-meta">' +
                        '<span>' + (m.release_date ? m.release_date.substring(0, 4) : '-') + '</span>' +
                        '<span class="movie-rating"><i class="fas fa-star"></i> ' + (m.vote_average ? m.vote_average.toFixed(1) : '-') + '</span>' +
                        '</div></div></div>';
                    grid.appendChild(col);
                });
                loadMore.style.display = data.page < data.total_pages ? 'block' : 'none';
            } else if (!append) {
                grid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">Film bulunamadı.</p></div>';
                loadMore.style.display = 'none';
            }
        })
        .catch(() => {
            spinner.style.display = 'none';
            if (!append) grid.innerHTML = '<div class="col-12 text-center py-5"><p style="color:var(--danger)">API bağlantı hatası.</p></div>';
        });
}

function showMovieDetail(id) {
    fetch(TMDB_BASE + '/movie/' + id + '?api_key=' + TMDB_KEY + '&language=tr-TR&append_to_response=credits')
        .then(r => r.json())
        .then(m => {
            const body = document.getElementById('movieModalBody');
            const backdrop = m.backdrop_path ? TMDB_IMG + m.backdrop_path : '';
            const genres = m.genres ? m.genres.map(g => '<span class="badge bg-secondary me-1">' + g.name + '</span>').join('') : '';
            const cast = m.credits && m.credits.cast ? m.credits.cast.slice(0, 6).map(c => c.name).join(', ') : 'Bilinmiyor';
            body.innerHTML =
                (backdrop ? '<div style="height:250px;background:url(' + backdrop + ') center/cover;border-radius:16px 16px 0 0;position:relative;"><div style="position:absolute;inset:0;background:linear-gradient(transparent,var(--bg-card));border-radius:16px 16px 0 0;"></div></div>' : '') +
                '<div style="padding:24px;">' +
                '<h3 style="font-weight:800;">' + (m.title || '') + '</h3>' +
                '<p style="color:var(--text-muted);font-size:.85rem;">' + (m.release_date || '') + ' | ' + (m.runtime || '?') + ' dk</p>' +
                '<div class="mb-3">' + genres + '</div>' +
                '<p style="color:var(--text-muted);font-size:.9rem;">' + (m.overview || 'Açıklama yok.') + '</p>' +
                '<p style="font-size:.85rem;"><strong>Oyuncular:</strong> <span style="color:var(--text-muted)">' + cast + '</span></p>' +
                '<p style="font-size:.85rem;"><strong>Puan:</strong> <span style="color:var(--warning)"><i class="fas fa-star"></i> ' + (m.vote_average ? m.vote_average.toFixed(1) : '-') + '</span> (' + (m.vote_count || 0) + ' oy)</p>' +
                '</div>';
            new bootstrap.Modal(document.getElementById('movieModal')).show();
        });
}