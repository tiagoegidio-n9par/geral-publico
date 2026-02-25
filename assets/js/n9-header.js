/* ═══════════════════════════════════════════════════════════════════
   N9 Header Corporativo — JavaScript
   Hamburger menu (mobile) + Sections dropdown
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

    // ── Hamburger toggle ──────────────────────────────────────────
    var hamburger = document.querySelector('.n9-topbar__hamburger');
    var mobileMenu = document.querySelector('.n9-mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Fechar ao clicar em link do menu mobile
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Sections dropdown ─────────────────────────────────────────
    document.querySelectorAll('.n9-navbar__sections').forEach(function (dropdown) {
        var trigger = dropdown.querySelector('.n9-navbar__sections-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            // Fechar outros dropdowns abertos
            document.querySelectorAll('.n9-navbar__sections.open').forEach(function (other) {
                if (other !== dropdown) other.classList.remove('open');
            });
            dropdown.classList.toggle('open');
        });
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function () {
        document.querySelectorAll('.n9-navbar__sections.open').forEach(function (d) {
            d.classList.remove('open');
        });
    });

    // Fechar com Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.n9-navbar__sections.open').forEach(function (d) {
                d.classList.remove('open');
            });
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        }
    });

    // ── Scroll: reduzir topbar em scroll (efeito sutil) ──────────
    var topbar = document.querySelector('.n9-topbar');
    if (topbar) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 80) {
                topbar.style.boxShadow = '0 2px 8px rgba(26, 37, 47, 0.15)';
            } else {
                topbar.style.boxShadow = 'none';
            }
        });
    }
});
