// ========== STATE ==========
let currentPage = 'home';
let currentAccent = 'amber';

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  setupScrollListener();
});

// ========== NAVIGATION ==========
function navigateTo(page) {
  document.querySelectorAll('[data-page]').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.remove('hidden');

  currentPage = page;
  const isHome = page === 'home';
  const accent = page === 'climatizacion' ? 'sky' : 'amber';

  // Back button
  const backBtn = document.getElementById('nav-back-btn');
  if (backBtn) backBtn.classList.toggle('hidden', isHome);
  // Nav links
  document.getElementById('nav-home-links').classList.toggle('hidden', !isHome);
  document.getElementById('nav-subpage-links').classList.toggle('hidden', isHome);
  // CTA button (only on home)
  const ctaBtn = document.getElementById('nav-cta-btn');
  if (ctaBtn) ctaBtn.classList.toggle('hidden', !isHome);
  // WhatsApp
  // document.getElementById('whatsapp-float').classList.toggle('hidden', isHome);
  // Mobile menu close
  closeMobileMenu();
  // Accent colors
  updateAccent(accent);
  // Scroll top
  window.scrollTo(0, 0);
  // Reset gallery filters
  const gallerySection = target ? target.querySelector('.gallery-section') : null;
  if (gallerySection) filterGallery(gallerySection, 'all');
  // Recreate icons for newly visible elements
  lucide.createIcons();
}

// ========== ACCENT COLOR SWAPPING ==========
function updateAccent(newAccent) {
  const old = currentAccent;
  if (old === newAccent) return;
  document.querySelectorAll('[data-accent]').forEach(el => {
    const classes = [...el.classList];
    classes.forEach(cls => {
      if (cls.includes(old)) {
        el.classList.remove(cls);
        el.classList.add(cls.replace(new RegExp(old, 'g'), newAccent));
      }
    });
  });
  currentAccent = newAccent;
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const isOpen = menu.classList.contains('max-h-[500px]');
  if (isOpen) {
    closeMobileMenu();
  } else {
    menu.classList.remove('max-h-0', 'opacity-0');
    menu.classList.add('max-h-[500px]', 'opacity-100');
  }
  // Toggle icon
  document.getElementById('menu-icon-open').classList.toggle('hidden', !isOpen);
  document.getElementById('menu-icon-close').classList.toggle('hidden', isOpen);
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.remove('max-h-[500px]', 'opacity-100');
  menu.classList.add('max-h-0', 'opacity-0');
  document.getElementById('menu-icon-open').classList.remove('hidden');
  document.getElementById('menu-icon-close').classList.add('hidden');
}

// ========== SCROLL ==========
function setupScrollListener() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    // Scroll spy
    if (currentPage === 'home') return;
    const prefix = currentPage === 'electricidad' ? 'elec' : 'clim';
    const sections = ['inicio', 'servicios', 'sobre-mi', 'galeria', 'contacto'];
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const el = document.getElementById(prefix + '-' + section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const link = document.querySelector('[data-nav-section="' + section + '"]');
        if (link) {
          if (scrollPos >= top && scrollPos < top + height) {
            link.classList.add('text-amber-500');
            link.classList.remove('text-gray-300');
            link.querySelector('.nav-underline')?.classList.add('scale-x-100');
            link.querySelector('.nav-underline')?.classList.remove('scale-x-0');
          } else {
            link.classList.remove('text-amber-500', 'text-sky-500');
            link.classList.add('text-gray-300');
            link.querySelector('.nav-underline')?.classList.remove('scale-x-100');
            link.querySelector('.nav-underline')?.classList.add('scale-x-0');
          }
        }
      }
    });
  }, { passive: true });
}

function scrollToSection(sectionName, e) {
  if (e) e.preventDefault();
  const prefix = currentPage === 'electricidad' ? 'elec' : 'clim';
  const el = document.getElementById(prefix + '-' + sectionName);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  }
}

// ========== GALLERY FILTER ==========
function filterGallery(gallerySection, category) {
  // Update active button
  gallerySection.querySelectorAll('.filter-btn').forEach(btn => {
    const btnCat = btn.getAttribute('data-filter');
    const accent = gallerySection.getAttribute('data-gallery-accent') || 'amber';
    const activeClasses = accent === 'amber'
      ? ['bg-amber-500', 'border-amber-500', 'text-slate-900', 'shadow-xl', 'shadow-amber-500/20']
      : ['bg-sky-500', 'border-sky-500', 'text-slate-900', 'shadow-xl', 'shadow-sky-500/20'];
    const inactiveClasses = ['bg-slate-900/50', 'border-slate-700', 'text-slate-400'];

    if (btnCat === category) {
      inactiveClasses.forEach(c => btn.classList.remove(c));
      activeClasses.forEach(c => btn.classList.add(c));
    } else {
      activeClasses.forEach(c => btn.classList.remove(c));
      inactiveClasses.forEach(c => btn.classList.add(c));
    }
  });

  // Show/hide cards
  gallerySection.querySelectorAll('.gallery-card').forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.classList.remove('filtered-out');
      card.classList.add('animate-in');
    } else {
      card.classList.add('filtered-out');
      card.classList.remove('animate-in');
    }
  });
}

// ========== GALLERY CARD CAROUSEL ==========
function galleryCardNav(btn, direction) {
  const card = btn.closest('.gallery-card');
  const images = JSON.parse(card.getAttribute('data-images'));
  let idx = parseInt(card.getAttribute('data-current-index') || '0');
  idx = (idx + direction + images.length) % images.length;
  card.setAttribute('data-current-index', idx);

  const img = card.querySelector('.gallery-card-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = images[idx];
    img.style.opacity = '1';
  }, 150);

  // Update dots
  card.querySelectorAll('.card-dot').forEach((dot, i) => {
    const accent = card.closest('.gallery-section')?.getAttribute('data-gallery-accent') || 'amber';
    dot.className = 'card-dot w-1 h-1 rounded-full transition-all duration-300 ' +
      (i === idx ? ('bg-' + accent + '-500') : 'bg-slate-600');
  });

  // Update counter
  const counter = card.querySelector('.card-counter');
  if (counter) counter.textContent = (idx + 1) + '/' + images.length;
}

// ========== LIGHTBOX ==========
let lightboxData = null;

function openLightbox(btn) {
  const card = btn.closest('.gallery-card');
  const images = JSON.parse(card.getAttribute('data-images'));
  const idx = parseInt(card.getAttribute('data-current-index') || '0');
  lightboxData = { images, index: idx };
  showLightboxImage();
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
  lightboxData = null;
}

function lightboxNav(direction) {
  if (!lightboxData) return;
  lightboxData.index = (lightboxData.index + direction + lightboxData.images.length) % lightboxData.images.length;
  showLightboxImage();
}

function showLightboxImage() {
  if (!lightboxData) return;
  const img = document.getElementById('lightbox-img');
  const dotsContainer = document.getElementById('lightbox-dots');
  const navBtns = document.getElementById('lightbox-nav');

  img.src = lightboxData.images[lightboxData.index];

  // Dots
  dotsContainer.innerHTML = '';
  if (lightboxData.images.length > 1) {
    navBtns.classList.remove('hidden');
    lightboxData.images.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'w-2 h-2 rounded-full transition-all ' +
        (i === lightboxData.index ? 'bg-amber-500' : 'bg-slate-600');
      dotsContainer.appendChild(dot);
    });
  } else {
    navBtns.classList.add('hidden');
  }
}

// Close lightbox on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
});
