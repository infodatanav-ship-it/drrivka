// Video Intro Handler
document.addEventListener('DOMContentLoaded', function() {
    const videoClose = document.getElementById('videoClose');
    const introVideo = document.getElementById('introVideo');

    // Close button click handler
    if (videoClose) {
        videoClose.addEventListener('click', function() {
            const videoSection = document.getElementById('videoIntroSection');
            if (videoSection) {
                videoSection.style.display = 'none';
            }
            if (introVideo) {
                introVideo.pause();
            }
        });
    }

    // Handle video load error
    if (introVideo && introVideo.tagName === 'VIDEO') {
        introVideo.addEventListener('error', function() {
            console.log('Video failed to load. Make sure videos/intro-video.mp4 exists.');
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.flexDirection = 'column';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.gap = '0';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                reason: document.getElementById('reason').value,
                message: document.getElementById('message').value
            };

            // Validate required fields
            if (!formData.name || !formData.email || !formData.subject || !formData.reason || !formData.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Validate email
            if (!isValidEmail(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (In a real application, this would send to a server)
            console.log('Form Data:', formData);

            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', 'success');

            // Reset form
            contactForm.reset();

            // Clear message after 5 seconds
            setTimeout(function() {
                const formMessage = document.getElementById('formMessage');
                formMessage.classList.remove('show');
            }, 5000);
        });
    }

    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactSection = document.querySelector('.contact-info-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Smooth scroll for secondary buttons
    const secondaryButtons = document.querySelectorAll('.secondary-button');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const whatWeDoSection = document.querySelector('.wellness-programs');
            if (whatWeDoSection) {
                whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = 'what-we-do.html';
            }
        });
    });

    // Add scroll animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.service-card, .program-card, .testimonial-card, .contact-box, .mission-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Form message display function
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message show ${type}`;
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Active nav link on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
