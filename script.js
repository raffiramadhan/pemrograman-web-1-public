document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');

    toggleBtn.addEventListener('click', () => {
        navBar.classList.toggle('show');
        toggleBtn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!toggleBtn.contains(e.target) && !navBar.contains(e.target)) {
            navBar.classList.remove('show');
            toggleBtn.classList.remove('active');
        }
    });
});

// --- Accordion sub-menu Latihan ---
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.latihan-list');
    if (!list) return;

  // event delegation: klik di tombol mana pun akan toggle parent .lesson
    list.addEventListener('click', (e) => {
        const btn = e.target.closest('.lesson-toggle');
        if (!btn) return;

        const item = btn.closest('.lesson');

        // Opsi: tutup item lain (accordion eksklusif). Hapus blok ini jika ingin multi-buka.
        document.querySelectorAll('.lesson.open').forEach(openItem => {
            if (openItem !== item) openItem.classList.remove('open');
        });

        // toggle item yang diklik
        item.classList.toggle('open');
    });
});
