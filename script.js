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