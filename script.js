/* ════════════════════════════════════════
   APPLE DENTAL CLINIC — Script
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Navbar Scroll Behavior ── */
    const navbar = document.getElementById('navbar');
    const floatingBtns = document.getElementById('floatingBtns');
    const heroSection = document.getElementById('hero');

    function handleScroll() {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        // Navbar background
        if (scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Floating buttons visibility
        if (scrollY > heroHeight * 0.6) {
            floatingBtns.classList.add('visible');
        } else {
            floatingBtns.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();


    /* ── Mobile Nav Toggle ── */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });


    /* ── Scroll Reveal Animations ── */
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ── Services Swipe-In Animation ── */
    const serviceCards = document.querySelectorAll('.service-card');

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('swiped-in');
                serviceObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
    });

    serviceCards.forEach(card => serviceObserver.observe(card));

    function selectService(card) {
        const selectedService = card.getAttribute('data-service');
        const serviceSelect = document.getElementById('serviceNeeded');
        const messageField = document.getElementById('patientMessage');

        if (serviceSelect) {
            const matchingOption = Array.from(serviceSelect.options).find(option =>
                option.value === selectedService || option.textContent.trim() === selectedService
            );

            if (matchingOption) {
                serviceSelect.value = matchingOption.value || matchingOption.textContent.trim();
            }
        }

        if (messageField && !messageField.value.trim()) {
            messageField.value = `Interested in ${selectedService}. Please suggest the best option for me.`;
        }

        serviceCards.forEach(item => item.classList.toggle('selected', item === card));

        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('patientName')?.focus();
    }

    serviceCards.forEach(card => {
        card.addEventListener('click', () => selectService(card));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectService(card);
            }
        });
    });

    const whatsappBtn = document.getElementById('whatsappBtn');

    function updateWhatsAppLink() {
        const serviceSelect = document.getElementById('serviceNeeded');
        const selectedService = serviceSelect?.value || 'general dental care';
        const encodedMessage = encodeURIComponent(
            `Hi Apple Dental Clinic, I would like to book an appointment. My preferred service is ${selectedService}. Please help me with the next available slot.`
        );

        if (whatsappBtn) {
            whatsappBtn.href = `https://wa.me/919876543210?text=${encodedMessage}`;
        }
    }

    const serviceSelect = document.getElementById('serviceNeeded');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', updateWhatsAppLink);
    }

    updateWhatsAppLink();

    /* ── Stat Counter Animation ── */
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const current = Math.floor(easedProgress * target);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }


    /* ── Services Carousel ── */
    const servicesTrack = document.getElementById('servicesTrack');
    const prevBtn = document.getElementById('servicesPrev');
    const nextBtn = document.getElementById('servicesNext');
    const dotsContainer = document.getElementById('servicesDots');
    const cards = servicesTrack.querySelectorAll('.service-card');

    // Determine number of visible cards
    function getVisibleCount() {
        if (window.innerWidth < 480) return 1;
        if (window.innerWidth < 768) return 1.5;
        if (window.innerWidth < 1024) return 2.5;
        return 3.5;
    }

    // Create dots
    function createDots() {
        dotsContainer.innerHTML = '';
        const visibleCount = Math.floor(getVisibleCount());
        const dotCount = Math.max(1, cards.length - visibleCount + 1);

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(i));
            dotsContainer.appendChild(dot);
        }
    }

    function scrollToCard(index) {
        const card = cards[index];
        if (!card) return;

        const trackRect = servicesTrack.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const scrollLeft = servicesTrack.scrollLeft + (cardRect.left - trackRect.left);

        servicesTrack.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }

    function updateDots() {
        const scrollLeft = servicesTrack.scrollLeft;
        const maxScroll = servicesTrack.scrollWidth - servicesTrack.clientWidth;
        const dots = dotsContainer.querySelectorAll('.dot');
        if (dots.length === 0) return;

        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        const activeIndex = Math.round(progress * (dots.length - 1));

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        servicesTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        servicesTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });

    servicesTrack.addEventListener('scroll', updateDots, { passive: true });

    // Touch/drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    servicesTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - servicesTrack.offsetLeft;
        scrollLeft = servicesTrack.scrollLeft;
        servicesTrack.style.cursor = 'grabbing';
    });

    servicesTrack.addEventListener('mouseleave', () => {
        isDown = false;
        servicesTrack.style.cursor = 'grab';
    });

    servicesTrack.addEventListener('mouseup', () => {
        isDown = false;
        servicesTrack.style.cursor = 'grab';
    });

    servicesTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - servicesTrack.offsetLeft;
        const walk = (x - startX) * 1.5;
        servicesTrack.scrollLeft = scrollLeft - walk;
    });

    createDots();
    window.addEventListener('resize', createDots);


    /* ── Booking Form ── */
    const bookingForm = document.getElementById('bookingForm');
    const successModal = document.getElementById('successModal');
    const modalClose = document.getElementById('modalClose');

    // Set min date to today
    const dateInput = document.getElementById('prefDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Simulate submission
        setTimeout(() => {
            successModal.classList.add('active');
            bookingForm.reset();
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Confirm Appointment
            `;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 1200);
    });

    modalClose.addEventListener('click', () => {
        successModal.classList.remove('active');
    });

    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });


    /* ── Smooth Anchor Scrolling (for Safari) ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });


    /* ── Subtle Parallax on Hero ── */
    const heroVideo = document.querySelector('.hero-video-wrap');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        if (scrollY < heroHeight) {
            const translateY = scrollY * 0.3;
            heroVideo.style.transform = `translateY(${translateY}px)`;
        }
    }, { passive: true });

});
