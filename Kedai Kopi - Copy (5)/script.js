// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('.container-1');

hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
    hamburgerMenu.classList.toggle('change');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

searchButton.onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Menangani klik di luar elemen untuk menutup menu yang aktif
document.addEventListener('click', (e) => {
    if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbarNav.classList.remove('active');
        hamburgerMenu.classList.remove('change');
    }

    if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!shoppingCart.contains(e.target) && !shoppingCartButton.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// Initialize Swiper untuk Menu
const menuSwiper = new Swiper('.menu .swiper-container', {
    loop: false, // Nonaktifkan loop
    effect: 'coverflow', // Gunakan efek coverflow
    grabCursor: true, // Tampilkan cursor grab
    centeredSlides: true, // Slide aktif di tengah
    slidesPerView: 'auto', // Sesuaikan jumlah slide yang ditampilkan
    spaceBetween: 20, // Jarak antar card
    speed: 500, // Kecepatan animasi (ms)
    coverflowEffect: {
        rotate: 20, // Rotasi card
        stretch: 0, // Peregangan card
        depth: 200, // Kedalaman efek 3D
        modifier: 1, // Modifier untuk efek
        slideShadows: true, // Tampilkan shadow pada card
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        // Event saat slide berubah
        slideChange: function () {
            // Nonaktifkan tombol icon pada slide yang tidak aktif
            disableIconsOnInactiveSlides(this);
        },
        // Event saat Swiper diinisialisasi
        init: function () {
            // Nonaktifkan tombol icon pada slide yang tidak aktif saat pertama kali load
            disableIconsOnInactiveSlides(this);
        },
    },
});

// Initialize Swiper untuk Produk
const productSwiper = new Swiper('.products .swiper-container', {
    loop: false, // Nonaktifkan loop
    effect: 'coverflow', // Gunakan efek coverflow
    grabCursor: true, // Tampilkan cursor grab
    centeredSlides: true, // Slide aktif di tengah
    slidesPerView: 'auto', // Sesuaikan jumlah slide yang ditampilkan
    spaceBetween: 20, // Jarak antar card
    speed: 500, // Kecepatan animasi (ms)
    coverflowEffect: {
        rotate: 20, // Rotasi card
        stretch: 0, // Peregangan card
        depth: 200, // Kedalaman efek 3D
        modifier: 1, // Modifier untuk efek
        slideShadows: true, // Tampilkan shadow pada card
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        // Event saat slide berubah
        slideChange: function () {
            // Nonaktifkan tombol icon pada slide yang tidak aktif
            disableIconsOnInactiveSlides(this);
        },
        // Event saat Swiper diinisialisasi
        init: function () {
            // Nonaktifkan tombol icon pada slide yang tidak aktif saat pertama kali load
            disableIconsOnInactiveSlides(this);
        },
    },
});

// Fungsi untuk menonaktifkan tombol icon pada slide yang tidak aktif
function disableIconsOnInactiveSlides(swiper) {
    // Ambil semua slide
    const slides = swiper.slides;

    // Loop melalui semua slide
    slides.forEach((slide, index) => {
        // Ambil tombol icon di dalam slide
        const icons = slide.querySelectorAll('.card-icons a');

        // Jika slide tidak aktif, nonaktifkan tombol icon
        if (index !== swiper.activeIndex) {
            icons.forEach(icon => {
                icon.style.pointerEvents = 'none'; // Nonaktifkan klik
                icon.style.opacity = '0.5'; // Kurangi opacity
            });
        } else {
            // Jika slide aktif, aktifkan kembali tombol icon
            icons.forEach(icon => {
                icon.style.pointerEvents = 'auto'; // Aktifkan klik
                icon.style.opacity = '1'; // Kembalikan opacity
            });
        }
    });
}

// Fungsi untuk menonaktifkan tombol icon pada slide yang tidak aktif
function disableIconsOnInactiveSlides(swiper) {
    // Ambil semua slide
    const slides = swiper.slides;

    // Loop melalui semua slide
    slides.forEach((slide, index) => {
        // Ambil tombol icon di dalam slide
        const icons = slide.querySelectorAll('.product-icons a');

        // Jika slide tidak aktif, nonaktifkan tombol icon
        if (index !== swiper.activeIndex) {
            icons.forEach(icon => {
                icon.style.pointerEvents = 'none'; // Nonaktifkan klik
                icon.style.opacity = '0.5'; // Kurangi opacity
            });
        } else {
            // Jika slide aktif, aktifkan kembali tombol icon
            icons.forEach(icon => {
                icon.style.pointerEvents = 'auto'; // Aktifkan klik
                icon.style.opacity = '1'; // Kembalikan opacity
            });
        }
    });
}

new Swiper('.menu .swiper-container', swiperConfig);
new Swiper('.products .swiper-container', swiperConfig);