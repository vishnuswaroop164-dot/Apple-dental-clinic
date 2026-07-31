/* ════════════════════════════════════════
   APPLE DENTAL CLINIC — Script
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════
       DOCTOR DATA
       ══════════════════════════════════════ */
    const doctorsData = {
        ananya: {
            name: 'Dr. Ananya Sharma',
            img: 'images/doctor_ananya.png',
            specialty: 'Endodontist · Root Canal Specialist',
            exp: '12',
            patients: '3,200+',
            rating: '4.9 ★',
            qualifications: [
                { icon: '🎓', title: 'BDS — Rajiv Gandhi University of Health Sciences', desc: 'Bachelor of Dental Surgery, 2010' },
                { icon: '🏅', title: 'MDS — Conservative Dentistry & Endodontics', desc: 'Specialization in root canal therapy, 2013' },
                { icon: '📜', title: 'Fellow — Indian Endodontic Society', desc: 'Advanced endodontic techniques & microscopic dentistry' },
                { icon: '🔬', title: 'Certified in Laser Dentistry', desc: 'Painless, minimally invasive treatment approach' }
            ],
            specializations: ['Root Canal Therapy', 'Re-Treatment of Failed Root Canals', 'Microscopic Endodontics', 'Tooth Preservation', 'Laser Dentistry', 'Post & Core Restorations'],
            treatments: ['Single Visit Root Canal', 'Multi-Root Canal', 'Root Canal Re-treatment', 'Apicoectomy', 'Pulp Capping', 'Dental Crowns', 'Tooth-Colored Fillings', 'Inlays & Onlays'],
            testimonials: [
                { stars: 5, text: '"I was dreading my root canal for weeks, but Dr. Sharma made the entire process painless. She explained every step and I didn\'t feel a thing. Truly the best endodontist in Bengaluru!"', author: 'Priya M.', treatment: 'Root Canal Treatment' },
                { stars: 5, text: '"Had a failed root canal from another clinic. Dr. Sharma re-treated it with a microscope and saved my tooth. Her attention to detail is remarkable."', author: 'Karthik S.', treatment: 'Root Canal Re-treatment' },
                { stars: 5, text: '"My tooth was in bad shape and other dentists wanted to extract it. Dr. Sharma saved it with her expertise. I\'m so grateful — it\'s been 3 years and no issues!"', author: 'Neha R.', treatment: 'Tooth Preservation' }
            ]
        },
        rajesh: {
            name: 'Dr. Rajesh Menon',
            img: 'images/doctor_rajesh.png',
            specialty: 'Oral & Maxillofacial Surgeon',
            exp: '18',
            patients: '5,500+',
            rating: '4.9 ★',
            qualifications: [
                { icon: '🎓', title: 'BDS — Manipal College of Dental Sciences', desc: 'Bachelor of Dental Surgery, 2004' },
                { icon: '🏅', title: 'MDS — Oral & Maxillofacial Surgery', desc: 'Advanced surgical training, 2008' },
                { icon: '🌍', title: 'FICS — Fellow, International College of Surgeons', desc: 'International fellowship in advanced surgical techniques' },
                { icon: '📜', title: 'Diplomate — National Board of Examinations', desc: 'Board-certified oral surgeon' }
            ],
            specializations: ['Wisdom Tooth Extraction', 'Dental Implant Surgery', 'Jaw Surgery', 'Facial Trauma', 'Oral Pathology', 'Bone Grafting'],
            treatments: ['Surgical Tooth Extraction', 'Wisdom Tooth Removal', 'Dental Implant Placement', 'Sinus Lift Surgery', 'Bone Grafting', 'Biopsy & Oral Lesions', 'TMJ Disorder Treatment', 'Facial Injury Management'],
            testimonials: [
                { stars: 5, text: '"Had all four wisdom teeth removed by Dr. Menon. Was terrified, but he was so calm and professional. Recovery was faster than expected. Highly recommend!"', author: 'Raghav K.', treatment: 'Wisdom Tooth Removal' },
                { stars: 5, text: '"Dr. Menon placed my dental implants with incredible precision. The whole procedure was smooth and the implants feel completely natural. World-class surgeon!"', author: 'Suresh P.', treatment: 'Dental Implant Surgery' },
                { stars: 5, text: '"After a sports injury damaged my jaw, Dr. Menon\'s surgical expertise saved my smile. The follow-up care was exceptional. Forever grateful."', author: 'Arun V.', treatment: 'Facial Trauma Repair' }
            ]
        },
        priya: {
            name: 'Dr. Priya Iyer',
            img: 'images/doctor_priya.png',
            specialty: 'Orthodontist · Braces & Aligners Specialist',
            exp: '10',
            patients: '2,800+',
            rating: '4.8 ★',
            qualifications: [
                { icon: '🎓', title: 'BDS — SDM College of Dental Sciences', desc: 'Bachelor of Dental Surgery, 2012' },
                { icon: '🏅', title: 'MDS — Orthodontics & Dentofacial Orthopedics', desc: 'Specialization in teeth alignment, 2015' },
                { icon: '📜', title: 'Invisalign Certified Provider', desc: 'Advanced certification in clear aligner therapy' },
                { icon: '🔬', title: 'Certified in Lingual Braces', desc: 'Hidden braces placed behind the teeth' }
            ],
            specializations: ['Metal Braces', 'Ceramic Braces', 'Invisalign Clear Aligners', 'Lingual Braces', 'Early Orthodontic Intervention', 'Smile Design'],
            treatments: ['Traditional Metal Braces', 'Clear/Ceramic Braces', 'Invisalign Aligners', 'Lingual (Hidden) Braces', 'Retainers', 'Space Maintainers', 'Jaw Growth Modification', 'Surgical Orthodontics Coordination'],
            testimonials: [
                { stars: 5, text: '"Dr. Priya transformed my smile with Invisalign in just 10 months! Nobody even noticed I was wearing aligners. She\'s incredibly skilled and approachable."', author: 'Ananya S.', treatment: 'Invisalign Aligners' },
                { stars: 5, text: '"My teenage daughter was nervous about braces, but Dr. Priya made her feel so comfortable. The results are stunning — perfectly aligned teeth!"', author: 'Lakshmi D.', treatment: 'Ceramic Braces' },
                { stars: 5, text: '"At 35, I finally got braces and Dr. Priya recommended lingual ones so they\'re completely hidden. Best investment in myself ever!"', author: 'Deepa K.', treatment: 'Lingual Braces' }
            ]
        },
        vikram: {
            name: 'Dr. Vikram Desai',
            img: 'images/doctor_vikram.png',
            specialty: 'Prosthodontist · Implants & Cosmetic Dentistry',
            exp: '15',
            patients: '4,100+',
            rating: '4.9 ★',
            qualifications: [
                { icon: '🎓', title: 'BDS — KLE Dental College, Belgaum', desc: 'Bachelor of Dental Surgery, 2007' },
                { icon: '🏅', title: 'MDS — Prosthodontics, Crown & Bridge', desc: 'Specialization in dental prosthetics, 2010' },
                { icon: '🌍', title: 'FICOI — Fellow, Intl. Congress of Oral Implantologists', desc: 'Advanced implant dentistry fellowship' },
                { icon: '📜', title: 'Digital Smile Design Certified', desc: 'Computer-aided cosmetic smile makeovers' }
            ],
            specializations: ['Dental Implants', 'Full Mouth Rehabilitation', 'Smile Makeovers', 'Veneers', 'Dental Crowns & Bridges', 'Dentures'],
            treatments: ['Single Tooth Implants', 'All-on-4 Implants', 'Porcelain Veneers', 'Zirconia Crowns', 'Dental Bridges', 'Complete Dentures', 'Flexible Partial Dentures', 'Full Mouth Reconstruction'],
            testimonials: [
                { stars: 5, text: '"Dr. Vikram gave me a complete smile makeover with veneers. I can\'t stop smiling now! His artistic eye combined with technical skill is unmatched."', author: 'Megha T.', treatment: 'Porcelain Veneers' },
                { stars: 5, text: '"Lost three teeth in an accident. Dr. Vikram\'s implants are indistinguishable from real teeth. The process was smooth and the results are perfect."', author: 'Rahul J.', treatment: 'Dental Implants' },
                { stars: 5, text: '"My mother needed full mouth rehabilitation. Dr. Vikram\'s patience and expertise transformed her dental health. She can eat and smile confidently again."', author: 'Venkatesh R.', treatment: 'Full Mouth Rehabilitation' }
            ]
        },
        meera: {
            name: 'Dr. Meera Kulkarni',
            img: 'images/doctor_meera.png',
            specialty: 'Pediatric Dentist · Kids Specialist',
            exp: '8',
            patients: '2,200+',
            rating: '4.9 ★',
            qualifications: [
                { icon: '🎓', title: 'BDS — MS Ramaiah Dental College, Bengaluru', desc: 'Bachelor of Dental Surgery, 2014' },
                { icon: '🏅', title: 'MDS — Pedodontics & Preventive Dentistry', desc: 'Specialization in children\'s dentistry, 2017' },
                { icon: '📜', title: 'Certified in Conscious Sedation for Kids', desc: 'Anxiety-free dental care for children' },
                { icon: '🎨', title: 'Behavior Management Training', desc: 'Advanced techniques for anxious young patients' }
            ],
            specializations: ['Children\'s Dentistry', 'Baby Tooth Care', 'Preventive Sealants', 'Fluoride Treatments', 'Space Maintainers', 'Habit Breaking Appliances'],
            treatments: ['Kids Dental Check-up', 'Cavity Fillings (Tooth-Colored)', 'Pulpotomy/Pulpectomy', 'Stainless Steel Crowns', 'Dental Sealants', 'Fluoride Application', 'Space Maintainers', 'Thumb-Sucking Appliances'],
            testimonials: [
                { stars: 5, text: '"My 5-year-old was scared of dentists until we met Dr. Meera. She turned the visit into a fun experience! Now my daughter actually asks to go to the dentist."', author: 'Sneha B.', treatment: 'Kids Dental Check-up' },
                { stars: 5, text: '"Dr. Meera handled my son\'s cavity filling with such care. He didn\'t cry once! She has a magical way with children. We\'re patients for life."', author: 'Pooja N.', treatment: 'Cavity Filling' },
                { stars: 5, text: '"Both my kids love Dr. Meera. She explains everything in a child-friendly way and never rushes. The clinic even has a play area — it\'s perfect for families."', author: 'Divya M.', treatment: 'Preventive Care' }
            ]
        }
    };


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


    /* ── Urgency Bar ── */
    const urgencyBar = document.getElementById('urgencyBar');
    const urgencyBarClose = document.getElementById('urgencyBarClose');

    urgencyBarClose.addEventListener('click', () => {
        urgencyBar.classList.add('hidden');
        // Adjust navbar position
        navbar.style.top = '0';
    });


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


    /* ══════════════════════════════════════
       SERVICES CAROUSEL
       ══════════════════════════════════════ */
    const servicesTrack = document.getElementById('servicesTrack');
    const prevBtn = document.getElementById('servicesPrev');
    const nextBtn = document.getElementById('servicesNext');
    const dotsContainer = document.getElementById('servicesDots');
    const cards = servicesTrack.querySelectorAll('.service-card');

    function getVisibleCount() {
        if (window.innerWidth < 480) return 1;
        if (window.innerWidth < 768) return 1.5;
        if (window.innerWidth < 1024) return 2.5;
        return 3.5;
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        const visibleCount = Math.floor(getVisibleCount());
        const dotCount = Math.max(1, cards.length - visibleCount + 1);

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(servicesTrack, cards, i));
            dotsContainer.appendChild(dot);
        }
    }

    function scrollToCard(track, cardsArr, index) {
        const card = cardsArr[index];
        if (!card) return;

        const trackRect = track.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const scrollLeft = track.scrollLeft + (cardRect.left - trackRect.left);

        track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
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

    // Touch/drag scrolling for services
    setupDragScroll(servicesTrack);

    createDots();
    window.addEventListener('resize', createDots);


    /* ══════════════════════════════════════
       DOCTORS CAROUSEL
       ══════════════════════════════════════ */
    const doctorsTrack = document.getElementById('doctorsTrack');
    const docPrevBtn = document.getElementById('doctorsPrev');
    const docNextBtn = document.getElementById('doctorsNext');
    const docDotsContainer = document.getElementById('doctorsDots');
    const doctorCards = doctorsTrack.querySelectorAll('.doctor-card');

    // Swipe-in animation for doctor cards
    const doctorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('swiped-in');
                doctorObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
    });

    doctorCards.forEach(card => doctorObserver.observe(card));

    function getDocVisibleCount() {
        if (window.innerWidth < 480) return 1;
        if (window.innerWidth < 768) return 1.5;
        if (window.innerWidth < 1024) return 2.5;
        return 3.5;
    }

    function createDocDots() {
        docDotsContainer.innerHTML = '';
        const visibleCount = Math.floor(getDocVisibleCount());
        const dotCount = Math.max(1, doctorCards.length - visibleCount + 1);

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(doctorsTrack, doctorCards, i));
            docDotsContainer.appendChild(dot);
        }
    }

    function updateDocDots() {
        const scrollLeft = doctorsTrack.scrollLeft;
        const maxScroll = doctorsTrack.scrollWidth - doctorsTrack.clientWidth;
        const dots = docDotsContainer.querySelectorAll('.dot');
        if (dots.length === 0) return;

        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        const activeIndex = Math.round(progress * (dots.length - 1));

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    }

    docPrevBtn.addEventListener('click', () => {
        doctorsTrack.scrollBy({ left: -280, behavior: 'smooth' });
    });

    docNextBtn.addEventListener('click', () => {
        doctorsTrack.scrollBy({ left: 280, behavior: 'smooth' });
    });

    doctorsTrack.addEventListener('scroll', updateDocDots, { passive: true });

    setupDragScroll(doctorsTrack);
    createDocDots();
    window.addEventListener('resize', createDocDots);

    // Doctor card clicks
    doctorCards.forEach(card => {
        card.addEventListener('click', () => {
            const doctorKey = card.getAttribute('data-doctor');
            openDoctorProfile(doctorKey);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const doctorKey = card.getAttribute('data-doctor');
                openDoctorProfile(doctorKey);
            }
        });
    });


    /* ══════════════════════════════════════
       DOCTOR PROFILE OVERLAY
       ══════════════════════════════════════ */
    const doctorOverlay = document.getElementById('doctorOverlay');
    const doctorOverlayClose = document.getElementById('doctorOverlayClose');

    function openDoctorProfile(key) {
        const doc = doctorsData[key];
        if (!doc) return;

        // Fill profile data
        document.getElementById('docProfileImg').src = doc.img;
        document.getElementById('docProfileImg').alt = doc.name;
        document.getElementById('docProfileName').textContent = doc.name;
        document.getElementById('docProfileSpecialty').textContent = doc.specialty;
        document.getElementById('docProfileExp').textContent = doc.exp;
        document.getElementById('docProfilePatients').textContent = doc.patients;
        document.getElementById('docProfileRating').textContent = doc.rating;
        document.getElementById('docBookingName').textContent = doc.name;

        // Qualifications
        const qualList = document.getElementById('docQualList');
        qualList.innerHTML = doc.qualifications.map(q => `
            <div class="doc-qual-item">
                <div class="doc-qual-icon">${q.icon}</div>
                <div>
                    <strong>${q.title}</strong>
                    <span>${q.desc}</span>
                </div>
            </div>
        `).join('');

        // Specializations
        const specTags = document.getElementById('docSpecTags');
        specTags.innerHTML = doc.specializations.map(s => `
            <span class="doc-spec-tag">${s}</span>
        `).join('');

        // Treatments
        const treatments = document.getElementById('docTreatments');
        treatments.innerHTML = doc.treatments.map(t => `
            <div class="doc-treatment-item">${t}</div>
        `).join('');

        // Testimonials
        const testimonials = document.getElementById('docTestimonials');
        testimonials.innerHTML = doc.testimonials.map(t => `
            <div class="doc-testimonial-card">
                <div class="doc-testimonial-stars">${'★'.repeat(t.stars)}</div>
                <p class="doc-testimonial-text">${t.text}</p>
                <span class="doc-testimonial-author">${t.author}</span>
                <span class="doc-testimonial-treatment"> · ${t.treatment}</span>
            </div>
        `).join('');

        // Set min date for doctor booking form
        const docDateInput = document.getElementById('docPrefDate');
        const today = new Date().toISOString().split('T')[0];
        docDateInput.setAttribute('min', today);

        // Pre-select service if applicable
        const docServiceSelect = document.getElementById('docServiceNeeded');
        const mainSpecialty = doc.specialty.toLowerCase();
        if (mainSpecialty.includes('root canal') || mainSpecialty.includes('endodont')) {
            setSelectValue(docServiceSelect, 'Root Canal Treatment');
        } else if (mainSpecialty.includes('implant') || mainSpecialty.includes('prosthodont') || mainSpecialty.includes('cosmetic')) {
            setSelectValue(docServiceSelect, 'Dental Implants');
        } else if (mainSpecialty.includes('orthodont') || mainSpecialty.includes('braces') || mainSpecialty.includes('aligner')) {
            setSelectValue(docServiceSelect, 'Braces / Aligners');
        } else if (mainSpecialty.includes('pediatric') || mainSpecialty.includes('kids')) {
            setSelectValue(docServiceSelect, 'Kids Dentistry');
        }

        // Pre-fill message
        const docMessage = document.getElementById('docPatientMessage');
        docMessage.value = `I would like to book an appointment with ${doc.name}.`;

        // Show overlay
        doctorOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        doctorOverlay.scrollTop = 0;
    }

    function setSelectValue(selectEl, value) {
        const option = Array.from(selectEl.options).find(opt =>
            opt.textContent.trim() === value || opt.value === value
        );
        if (option) {
            selectEl.value = option.value || option.textContent.trim();
        }
    }

    function closeDoctorProfile() {
        doctorOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    doctorOverlayClose.addEventListener('click', closeDoctorProfile);

    doctorOverlay.addEventListener('click', (e) => {
        if (e.target === doctorOverlay) {
            closeDoctorProfile();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && doctorOverlay.classList.contains('active')) {
            closeDoctorProfile();
        }
    });

    // "Book with this Doctor" button — scroll to booking inside overlay
    document.getElementById('docBookBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const bookingSection = document.querySelector('.doc-booking-section');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Doctor booking form
    const docBookingForm = document.getElementById('docBookingForm');
    docBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('docSubmitBtn');
        btn.textContent = 'Submitting...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        setTimeout(() => {
            closeDoctorProfile();
            const successModal = document.getElementById('successModal');
            successModal.classList.add('active');
            docBookingForm.reset();
            btn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Confirm Appointment
            `;
            btn.disabled = false;
            btn.style.opacity = '1';
        }, 1200);
    });


    /* ══════════════════════════════════════
       BOOKING FORM
       ══════════════════════════════════════ */
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


    /* ══════════════════════════════════════
       SOCIAL PROOF TICKER
       ══════════════════════════════════════ */
    const tickerTrack = document.getElementById('tickerTrack');
    const tickerMessages = [
        { name: 'Priya M.', action: 'booked a Root Canal appointment', time: 'Just now', hint: 'Same-day slots are filling up fast.' },
        { name: 'Raghav K.', action: 'booked a Dental Implant consultation', time: '15 min ago', hint: 'Only a few premium times remain this week.' },
        { name: 'Ananya S.', action: 'booked Teeth Whitening', time: '30 min ago', hint: 'Evening slots are nearly full.' },
        { name: 'Venkatesh R.', action: 'booked a Family Check-up', time: '45 min ago', hint: 'Quick confirmation available today.' },
        { name: 'Sneha B.', action: 'scheduled Kids Dentistry', time: 'Just now', hint: 'Child-friendly appointments are limited.' },
        { name: 'Karthik S.', action: 'booked a Braces consultation', time: '20 min ago', hint: 'Popular appointment times are selling out.' },
        { name: 'Megha T.', action: 'booked a Smile Makeover review', time: '1 hour ago', hint: 'High demand for cosmetic slot openings.' },
        { name: 'Arun V.', action: 'secured an Emergency appointment', time: '10 min ago', hint: 'Emergency slots are very limited today.' },
        { name: 'Deepa K.', action: 'booked an Invisalign consult', time: '35 min ago', hint: 'Weekend slots filling quickly.' },
        { name: 'Suresh P.', action: 'booked Wisdom Tooth removal', time: 'Just now', hint: 'Latest appointment booked — secure yours now.' },
    ];

    function populateTicker() {
        // Duplicate items for seamless loop
        const allItems = [...tickerMessages, ...tickerMessages];
        tickerTrack.innerHTML = allItems.map(item => `
            <span class="ticker-item">
                <span class="ticker-dot"></span>
                <strong>${item.name}</strong> ${item.action} · <em>${item.time}</em>
            </span>
        `).join('');
    }

    populateTicker();


    /* ══════════════════════════════════════
       SOCIAL PROOF TOAST (Pop-up)
       ══════════════════════════════════════ */
    const toast = document.getElementById('socialProofToast');
    const toastName = document.getElementById('toastName');
    const toastAction = document.getElementById('toastAction');
    const toastTime = document.getElementById('toastTime');
    const toastHint = document.getElementById('toastHint');
    let toastIndex = 0;

    function showToast() {
        const item = tickerMessages[toastIndex % tickerMessages.length];
        toastName.textContent = item.name;
        toastAction.textContent = item.action;
        toastTime.textContent = item.time;
        toastHint.textContent = item.hint || 'High demand right now — book your slot before availability closes.';

        toast.classList.add('visible');

        setTimeout(() => {
            toast.classList.remove('visible');
        }, 4500);

        toastIndex++;
    }

    // Show first toast immediately, then every 15-25 seconds
    showToast();
    setInterval(() => {
        showToast();
    }, 15000 + Math.random() * 10000);


    /* ══════════════════════════════════════
       URGENCY: COUNTDOWN TIMER
       ══════════════════════════════════════ */
    let totalSeconds = 2 * 3600 + 14 * 60 + 37; // 2h 14m 37s

    function updateCountdown() {
        if (totalSeconds <= 0) {
            totalSeconds = 1 * 3600 + 45 * 60 + 22; // Reset to ~1h 45m
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById('countHours').textContent = hours.toString().padStart(1, '0');
        document.getElementById('countMinutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countSeconds').textContent = seconds.toString().padStart(2, '0');

        totalSeconds--;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();


    /* ══════════════════════════════════════
       URGENCY: VIEWER COUNT
       ══════════════════════════════════════ */
    const viewerCount = document.getElementById('viewerCount');
    let currentViewers = 14;

    function updateViewerCount() {
        // Fluctuate between 8-22
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        currentViewers = Math.max(8, Math.min(22, currentViewers + change));
        viewerCount.textContent = currentViewers;
    }

    setInterval(updateViewerCount, 4000 + Math.random() * 3000);


    /* ══════════════════════════════════════
       URGENCY: SLOTS COUNT
       ══════════════════════════════════════ */
    const slotsCount = document.getElementById('slotsCount');
    const todaySlots = document.getElementById('todaySlots');
    const bookingUrgencyMessage = document.getElementById('bookingUrgencyMessage');
    let currentSlots = 3;

    function updateSlots() {
        // Slowly decrease from 3 to 1, then reset
        if (Math.random() > 0.65 && currentSlots > 1) {
            currentSlots--;
        } else if (currentSlots <= 1) {
            currentSlots = Math.floor(Math.random() * 2) + 2; // 2-3
        }

        const urgencyText = currentSlots <= 2 ? 'Hurry — only a couple of slots left today.' : 'Good news: a few slots are still available.';

        if (slotsCount) slotsCount.textContent = currentSlots;
        if (todaySlots) todaySlots.textContent = currentSlots;
        if (bookingUrgencyMessage) bookingUrgencyMessage.textContent = urgencyText;
    }

    updateSlots();
    setInterval(updateSlots, 25000);


    /* ══════════════════════════════════════
       DRAG SCROLL UTILITY
       ══════════════════════════════════════ */
    function setupDragScroll(track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            track.style.cursor = 'grabbing';
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5;
            track.scrollLeft = scrollLeft - walk;
        });
    }


    /* ── Smooth Anchor Scrolling (for Safari) ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const urgencyHeight = urgencyBar.classList.contains('hidden') ? 0 : urgencyBar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - urgencyHeight;

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
