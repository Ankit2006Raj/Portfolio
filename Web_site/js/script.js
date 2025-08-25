/* Mobile and Laptop Compatibility Enhancements */
/* Version: 4.5 - Enhanced mobile and laptop compatibility */

// Debug function to log loading screen status
function logLoadingStatus(message) {
    console.log(message + ":", {
        "HTML class": document.documentElement.className,
        "Body class": document.body.className,
        "Loading screen": document.getElementById('loading-screen'),
        "Loading screen classes": document.getElementById('loading-screen')?.className,
        "Time": new Date().toISOString()
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-links li a');

    if (!menuToggle || !navContainer) {
        console.warn('Mobile menu elements not found');
        return;
    }

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        menuToggle.classList.toggle('active');
        navContainer.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
    });

    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navContainer.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navContainer.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerOffset = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Active navigation item on scroll
function initActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    if (sections.length === 0 || navItems.length === 0) {
        console.warn('Sections or nav items not found for active navigation');
        return;
    }

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// Touch ripple effect
function initTouchRipple() {
    const interactiveElements = document.querySelectorAll('.cta-button, .project-card, .skill-item, .social-link, .submit-button, .info-item');

    interactiveElements.forEach(element => {
        element.classList.add('touch-ripple');
        
        element.addEventListener('mousedown', createRipple);
        element.addEventListener('touchstart', createRipple, {passive: true});
    });

    function createRipple(event) {
        const element = this;
        const ripples = element.querySelectorAll('.ripple');
        ripples.forEach(ripple => ripple.remove());
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        element.appendChild(ripple);
        
        const rect = element.getBoundingClientRect();
        let x, y;
        
        if (event.type === 'touchstart' && event.touches.length > 0) {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        } else {
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        }
        
        const size = Math.max(rect.width, rect.height) * 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;
        
        setTimeout(() => {
            if (ripple && ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
}

// Typing effect for hero section
function initTypingEffect() {
    const typingElement = document.querySelector('.typing');
    if (!typingElement) return;

    const roles = ["an AI MODEL DEVELOPER ", "an AI & ML Student", "a Problem Solver", "a Creative Thinker"];
    let currentRole = 0;
    let letterIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        const role = roles[currentRole];
        
        if (isDeleting) {
            currentText = role.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentText = role.substring(0, letterIndex + 1);
            letterIndex++;
        }
        
        typingElement.textContent = currentText;
        
        let typeSpeed = isDeleting ? 50 : 150;
        
        if (!isDeleting && letterIndex === role.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
}

// Set current year in footer
function initFooterYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Enhanced header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Reduce animations on mobile
    if (window.innerWidth < 768) {
        document.querySelectorAll('[class*="animation"]').forEach(el => {
            el.style.animationDuration = '0.5s';
        });
    }
    
    // Add reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationDuration = '0.02ms !important';
            el.style.transitionDuration = '0.02ms !important';
        });
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        
        // Remove loading classes after transition
        setTimeout(() => {
            document.documentElement.classList.remove('loading');
            document.body.classList.remove('loading');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }, 800);
    }
}

// Animate loading screen elements (optional)
function animateSpaceTravelLoading() {
    const spaceship = document.querySelector('.spaceship');
    if (!spaceship) return;

    // Example: simple up and down animation is handled by CSS keyframes
    // Additional JS animations can be added here if needed
}

// Starfield animation for loading screen
function initStarfield(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const starsCount = 400;
    const depth = 1000;
    const stars = [];

    class Star {
        constructor(width, height, depth) {
            this.width = width;
            this.height = height;
            this.depth = depth;
            this.reset();
        }

        reset() {
            this.x = Math.random() * this.width - this.width / 2;
            this.y = Math.random() * this.height - this.height / 2;
            this.z = Math.random() * this.depth;
            this.pz = this.z;
        }

        update(speed) {
            this.z -= speed;
            if (this.z < 1) {
                this.reset();
                this.z = this.depth;
                this.pz = this.z;
            }
        }

        draw(ctx, cx, cy) {
            const sx = cx + (this.x / this.z) * cx;
            const sy = cy + (this.y / this.z) * cy;

            const px = cx + (this.x / this.pz) * cx;
            const py = cy + (this.y / this.pz) * cy;

            this.pz = this.z;

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(sx, sy);
            ctx.stroke();

            const radius = (1 - this.z / this.depth) * 3;
            ctx.beginPath();
            ctx.arc(sx, sy, radius, 0, Math.PI * 2);
            // sky-blue glow for stars
            const blueShade = `rgba(173, 216, 255, ${0.6 + Math.random() * 0.4})`;
            ctx.fillStyle = blueShade;
            ctx.fill();
        }
    }

    for (let i = 0; i < starsCount; i++) {
        stars.push(new Star(width, height, depth));
    }

    let speed = 100;

    function animate() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;

        stars.forEach(star => {
            star.update(speed);
            star.draw(ctx, cx, cy);
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

// Subtle sky-blue animated background for modern look
function initAnimatedBackground() {
    const canvas = document.getElementById('animated-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles = [];
    const count = Math.max(40, Math.floor((w * h) / 60000));

    function rand(min, max) { return Math.random() * (max - min) + min; }

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: rand(0.6, 3.2),
            vx: rand(-0.15, 0.15),
            vy: rand(-0.05, 0.05),
            alpha: rand(0.12, 0.6)
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;
            if (p.y < -10) p.y = h + 10;
            if (p.y > h + 10) p.y = -10;

            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
            grad.addColorStop(0, `rgba(123,232,255,${p.alpha})`);
            grad.addColorStop(0.6, `rgba(0,170,255,${p.alpha * 0.35})`);
            grad.addColorStop(1, 'rgba(2,16,37,0)');

            ctx.beginPath();
            ctx.fillStyle = grad;
            ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });
}

// Initialize all features
function initAllFeatures() {
    console.log('Initializing enhanced mobile and laptop compatibility features...');
    
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavigation();
    initTouchRipple();
    initTypingEffect();
    initFooterYear();
    initHeaderScroll();
    initPerformanceOptimizations();
    initAnimatedBackground();
    initStarfield('starfield-canvas');
    
    console.log('All compatibility features initialized successfully!');
}

    // --- Modern UI: Theme Toggle, Custom Cursor, Project Filters ---
    function initThemeToggle() {
        const btn = document.getElementById('themeToggle');
        if (!btn) return;
        const root = document.documentElement;
        const saved = localStorage.getItem('theme');
        if (saved === 'light') root.classList.add('light');

        btn.addEventListener('click', () => {
            root.classList.toggle('light');
            const mode = root.classList.contains('light') ? 'light' : 'dark';
            localStorage.setItem('theme', mode);
            btn.textContent = mode === 'light' ? '☀️' : '🌙';
        });
    }

    function initCustomCursor() {
        const cursor = document.getElementById('customCursor');
        if (!cursor) return;

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .project-card, .cta-button').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover-grow'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover-grow'));
        });
    }

    function initProjectFilters() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        // Create filter controls
        const controls = document.createElement('div');
        controls.className = 'projects-controls';
        const tags = ['All', 'Python', 'React', 'JavaScript', 'AI'];
        tags.forEach(t => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn' + (t === 'All' ? ' active' : '');
            btn.textContent = t;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterProjects(t);
            });
            controls.appendChild(btn);
        });

        projectsGrid.parentNode.insertBefore(controls, projectsGrid);

        function filterProjects(tag) {
            const cards = projectsGrid.querySelectorAll('.project-card');
            cards.forEach(card => {
                if (tag === 'All') { card.style.display = ''; return; }
                const tags = Array.from(card.querySelectorAll('.project-tags span')).map(s => s.textContent.trim());
                card.style.display = tags.includes(tag) ? '' : 'none';
            });
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        initThemeToggle();
        initCustomCursor();
        initProjectFilters();
    });

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllFeatures);
} else {
    initAllFeatures();
}

// Handle window resize for responsive features
window.addEventListener('resize', () => {
    initPerformanceOptimizations();
});
