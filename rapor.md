# Web Teknolojileri Dersi Proje Raporu

---

## Kapak Bilgileri

| Bilgi | Detay |
|-------|-------|
| **Ders Adı** | Web Teknolojileri |
| **Üniversite** | Sakarya Üniversitesi |
| **Fakülte** | Bilgisayar ve Bilişim Bilimleri Fakültesi |
| **Bölüm** | Bilgisayar Mühendisliği |
| **Öğrenci Adı** | Osman TEKSOY |
| **Öğrenci No** | (Öğrenci numaranızı buraya yazın) |
| **GitHub Linki** | [github.com/ottamina/osmanteksoy_Odevsite](https://github.com/ottamina/osmanteksoy_Odevsite) |
| **Canlı Site Linki** | (Canlı site URL'nizi buraya yazın) |
| **Tarih** | Mayıs 2026 |

---

## 1. Proje Tanımı

Bu proje, Web Teknolojileri dersi kapsamında HTML5, CSS3, JavaScript, Bootstrap 5 ve PHP teknolojileri kullanılarak geliştirilmiş kişisel bir portfolyo web sitesidir. Site, 7 ana sayfadan oluşmakta olup responsive (duyarlı) tasarım prensiplerine uygun şekilde kodlanmıştır.

### Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|-----------|---------------|
| **HTML5** | Sayfa yapısı ve semantik işaretleme |
| **CSS3** | Görsel tasarım, layout ve animasyonlar |
| **JavaScript** | Form doğrulama, slider, API entegrasyonu, login sistemi |
| **Bootstrap 5.3.3** | Responsive grid sistemi ve hazır bileşenler |
| **PHP** | Sunucu tarafı form işleme ve login doğrulama |
| **Font Awesome 6.5** | İkon kütüphanesi |
| **Google Fonts (Inter)** | Tipografi |
| **Validator.js** | İstemci tarafı form doğrulama framework'ü |
| **TMDB API** | Film verileri için harici API entegrasyonu |

---

## 2. Site Haritası ve Menü Yapısı

Site, sabit (fixed) bir navbar üzerinden aşağıdaki sayfalara erişim sağlamaktadır:

```
📁 Portfolyom (Navbar)
├── 🏠 Hakkımda (index.html)
├── 📄 Özgeçmiş (cv.html)
├── 🏙️ Şehir (sehir.html)
├── ⚽ Takım (miras.html)
├── 🎬 Filmler (api.html)
├── ✉️ İletişim (iletisim.html)
└── 🔐 Giriş Yap / Çıkış (login.html)
```

---

## 3. Sayfa Açıklamaları

### 3.1 Hakkımda Sayfası (index.html)

Ana sayfa, kişisel tanıtım amacıyla tasarlanmıştır.

**İçerik:**
- **Hero Section:** Kişisel fotoğraflar, ad-soyad, bölüm bilgisi ve kısa tanıtım metni
- **Hakkımda Bölümü:** Eğitim, hobiler ve hedefler olmak üzere 3 bilgi kartı
- **Bağlantılar Bölümü:** GitHub, LinkedIn ve Medium profil linkleri
- **Sosyal Medya İkonları:** GitHub, LinkedIn, Instagram bağlantıları

**Teknik Özellikler:**
- Intersection Observer API ile scroll animasyonları
- Bootstrap grid ile responsive iki kolonlu layout
- localStorage ile login durumu kontrolü

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

### 3.2 Özgeçmiş Sayfası (cv.html)

Akademik ve profesyonel bilgilerin sunulduğu detaylı CV sayfasıdır.

**İçerik:**
- **CV Başlığı:** Avatar, ad-soyad, unvan ve iletişim bilgileri
- **Eğitim:** Sakarya Üniversitesi Bilgisayar Mühendisliği (2025 - Devam), Lise bilgileri
- **Deneyim:** Teknofest İnsansız Su Altı Sistemleri, GlobalGameJam katılımları
- **Beceriler:** HTML/CSS, JavaScript, C#, C++, Python, Java/Kotlin yetkinlik düzeyleri
- **Yabancı Diller:** Türkçe (Ana Dil), İngilizce (B1), Almanca (A1), Arapça (A1) — görsel dot gösterimi
- **Sertifikalar:** Udemy sertifikaları (Unity, Unreal Engine)

**Teknik Özellikler:**
- Yapılandırılmış CV layout'u (cv-wrapper, cv-section, cv-item)
- Dil seviyesi dot göstergesi (language-dots, dot filled)

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

### 3.3 Şehir Sayfası (sehir.html)

Rize ili hakkında tanıtım bilgileri ve görsel galeri sunan sayfadır.

**İçerik:**
- **Şehir Bilgisi:** Rize hakkında tanıtım metni
- **İstatistik Kartları:** Nüfus (350.506), Yüzölçümü (3.920 km²), İlçe sayısı (12), Plaka kodu (53)
- **Görsel Slider:** Ayder Yaylası, Fırtına Vadisi, Rize Kalesi, Zilkale — otomatik geçişli ve tıklanabilir
- **Keşfet Kartları:** Çay Bahçeleri, Zilkale, Kaçkar Dağları, Çamlıhemşin

**Teknik Özellikler:**
- JavaScript ile özel slider (otomatik 5 saniye geçiş, ok butonları, dot navigasyon)
- Her resim ve kart Türkçe Wikipedia sayfasına target="_blank" ile yönlendirme
- Hover efektleri: resim zoom, buton renk değişimi, kart yükseltme

**Wikipedia Bağlantıları:**

| Öğe | Link |
|-----|------|
| Ayder Yaylası | tr.wikipedia.org/wiki/Ayder |
| Fırtına Vadisi | tr.wikipedia.org/wiki/Fırtına_Deresi |
| Rize Kalesi | tr.wikipedia.org/wiki/Rize_Kalesi |
| Zilkale | tr.wikipedia.org/wiki/Zilkale |
| Kaçkar Dağları | tr.wikipedia.org/wiki/Kaçkar_Dağları |
| Çamlıhemşin | tr.wikipedia.org/wiki/Çamlıhemşin |

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

### 3.4 Takım Sayfası (miras.html)

Favori spor takımı Çaykur Rizespor hakkında bilgi sunan sayfadır.

**İçerik:**
- **Takım Bilgisi:** Logo, kuruluş yılı, renkler, stadyum bilgileri, kulüp tarihi
- **Zaman Çizelgesi (Timeline):** 1953 Kuruluş → 1968 Çaykur Sponsoru → 1980'ler → 1990'lar → Bugün
- **Taraftar Kültürü:** Karadeniz Ruhu, Horon Tezahüratları, Yeşil-Mavi Aşk — 3 bilgi kartı

**Teknik Özellikler:**
- CSS ile timeline bileşeni (timeline, timeline-item::before)
- Detay tablosu (detail-item, detail-label, detail-value)
- Renk göstergesi (color-dot)

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

### 3.5 Filmler Sayfası (api.html)

TMDB (The Movie Database) API entegrasyonu ile film keşfetme sayfasıdır.

**İçerik:**
- **Arama Çubuğu:** Film adı ile arama, tür filtreleme (8 kategori), sıralama seçenekleri
- **Film Kartları:** Poster, başlık, yıl, puan gösterimi
- **Film Detay Modal:** Backdrop görseli, tür badge'leri, açıklama, oyuncu kadrosu, puan bilgisi
- **Daha Fazla Göster:** Sayfalama ile daha fazla film yükleme

**Teknik Özellikler:**
- TMDB API entegrasyonu (API Key ile fetch kullanımı)
- Arama, filtreleme ve sıralama işlevleri
- Bootstrap Modal ile film detay gösterimi
- Türkçe dil desteği (language=tr-TR)
- Sayfalama (pagination) desteği
- Hata yönetimi ve yükleme göstergesi (spinner)

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

### 3.6 İletişim Sayfası (iletisim.html)

Kapsamlı form elemanları ve çift doğrulama sistemi içeren iletişim sayfasıdır.

**İçerik:**
- **İletişim Bilgileri:** E-posta, adres, sosyal medya linkleri
- **İletişim Formu:** 16 farklı form elemanı içeren kapsamlı form

**Form Elemanları:**

| # | Eleman Tipi | Alan Adı | Zorunlu |
|---|-------------|----------|---------|
| 1 | text | Ad Soyad | Evet |
| 2 | email | E-posta | Evet |
| 3 | tel | Telefon | Evet |
| 4 | select | Konu | Evet |
| 5 | url | Web Sitesi | Hayır |
| 6 | date | Görüşme Tarihi | Hayır |
| 7 | number | Bütçe | Hayır |
| 8 | password | Form Şifresi | Hayır |
| 9 | range | Aciliyet Seviyesi | Hayır |
| 10 | color | Favori Renk | Hayır |
| 11 | radio | İletişim Tercihi | Evet |
| 12 | checkbox | İlgi Alanları | Hayır |
| 13 | textarea | Mesaj | Evet |
| 14 | file | Dosya Eki | Hayır |
| 15 | hidden | Form Kaynağı | — |
| 16 | checkbox | KVKK Onayı | Evet |

**Doğrulama Sistemi (İki Farklı Yöntem):**

1. **Saf JavaScript Doğrulama (validateWithJS):** Regex, format kontrolleri, dosya boyutu kontrolü
2. **Validator.js Framework Doğrulama (validateWithFramework):** validator.isEmail(), validator.isMobilePhone(), validator.isURL(), validator.isLength() vb.

**Sunucu Tarafı (PHP):**
- iletisim.php ile POST verilerinin sunucu tarafında doğrulanması
- JSON formatında yanıt döndürme
- htmlspecialchars ile XSS koruması

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

### 3.7 Giriş Sayfası (login.html)

Öğrenci numarası tabanlı kimlik doğrulama sayfasıdır.

**İçerik:**
- **Giriş Formu:** E-posta ve şifre alanları, "Beni Hatırla" seçeneği
- **Format Bilgisi:** b2412100001@ogr.sakarya.edu.tr formatında e-posta, şifre olarak öğrenci numarası

**Giriş Sistemi Akışı:**

```
Kullanıcı Girişi
    ↓
E-posta Format Kontrolü (Regex: /^b\d{10}@ogr\.sakarya\.edu\.tr$/)
    ↓
Şifre = Öğrenci Numarası Kontrolü
    ↓
localStorage'a Kaydet (isLoggedIn, studentNo)
    ↓
index.html'e Yönlendir
    ↓
Tüm Sayfalarda: Navbar'da "Giriş Yap" → "Öğrenci No + Çıkış" değişimi
```

**Teknik Özellikler:**
- localStorage ile kalıcı oturum yönetimi (tarayıcı kapatılsa bile giriş durumu korunur)
- Her sayfa yüklendiğinde checkLoginStatus() ile navbar güncelleme
- Şifre göster/gizle toggle butonu
- PHP backend (login.php) ile sunucu tarafı doğrulama
- Başarılı girişte navbar'da öğrenci numarası badge'i ve çıkış butonu

**Ekran Görüntüsü:**

*(Ekran görüntüsü eklenecek)*

---

## 4. Dosya Yapısı

```
osmanteksoy_Odevsite/
│
├── index.html          → Ana sayfa (Hakkımda)
├── cv.html             → Özgeçmiş sayfası
├── sehir.html          → Şehir tanıtım sayfası (Rize)
├── miras.html          → Takım sayfası (Çaykur Rizespor)
├── api.html            → Film keşfet sayfası (TMDB API)
├── iletisim.html       → İletişim formu sayfası
├── login.html          → Giriş sayfası
│
├── style.css           → Tüm sayfalar için ortak CSS dosyası
├── site.js             → Tüm sayfalar için ortak JavaScript dosyası
│
├── login.php           → Giriş işlemi sunucu tarafı (PHP)
├── iletisim.php        → İletişim formu sunucu tarafı (PHP)
│
└── assets/             → Görseller
    ├── fotom1.jpeg      → Kişisel fotoğraf 1
    ├── fotom2.jpeg      → Kişisel fotoğraf 2
    ├── rizelogo.png     → Çaykur Rizespor logosu
    ├── ayder.jpg        → Ayder Yaylası görseli
    ├── firtina.jpg      → Fırtına Vadisi görseli
    ├── kalemerkez.jpg   → Rize Kalesi görseli
    └── zilakle.jpg      → Zilkale görseli
```

---

## 5. Ortak Özellikler (Tüm Sayfalar)

- **Responsive Tasarım:** Tüm sayfalar mobil, tablet ve masaüstü cihazlarda uyumlu çalışır (Bootstrap 5 grid sistemi).
- **Sabit Navbar:** Tüm sayfalarda aynı navigasyon çubuğu kullanılmıştır; scroll durumunda görsel değişim uygulanır.
- **Login Durumu Kontrolü:** Her sayfa yüklendiğinde checkLoginStatus() fonksiyonu çağrılarak, giriş yapılmışsa navbar'daki "Giriş Yap" butonu öğrenci numarası ve "Çıkış" butonu ile değiştirilir.
- **Tutarlı Tasarım Dili:** Tüm sayfalarda aynı renk paleti (#0d6efd mavi, #f9fafb arka plan, #111 metin), tipografi (Inter font ailesi) ve kart tasarımı kullanılmıştır.
- **Footer:** Tüm sayfalarda telif hakkı ve ders bilgisi içeren ortak footer bulunmaktadır.
- **SEO:** Her sayfada uygun title, meta description ve semantik HTML etiketleri kullanılmıştır.

---

## 6. Sonuç

Bu proje kapsamında HTML5, CSS3, JavaScript, Bootstrap 5 ve PHP teknolojileri bir arada kullanılarak 7 sayfalık, responsive ve işlevsel bir kişisel portfolyo web sitesi geliştirilmiştir. Projede form doğrulama (hem saf JavaScript hem Validator.js framework), harici API entegrasyonu (TMDB), kalıcı oturum yönetimi (localStorage) ve sunucu tarafı işleme (PHP) gibi web teknolojilerinin temel kavramları uygulanmıştır.
