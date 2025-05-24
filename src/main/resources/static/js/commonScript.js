document.addEventListener('DOMContentLoaded', function () {
    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const profile = document.querySelector('.profile');
        const dropdown = document.getElementById('profileDropdown');
        if (profile && dropdown && !profile.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    if (mobileNav && overlay) {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}