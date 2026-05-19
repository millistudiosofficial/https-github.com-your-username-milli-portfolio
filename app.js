// 3D Parallax Effect for Hero Section
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const x = (window.innerWidth - e.clientX * 2) / 100;
    const y = (window.innerHeight - e.clientY * 2) / 100;

    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.05;
        const xOffset = x * speed * 100;
        const yOffset = y * speed * 100;
        
        el.style.transform = `translate(${xOffset}px, ${yOffset}px) rotateX(${-yOffset * 0.1}deg) rotateY(${xOffset * 0.1}deg)`;
    });
});

// Smooth reveal on scroll for glass cards
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .project-card, .poster-card, .reel-card').forEach(el => {
    el.classList.add('reveal-item');
    observer.observe(el);
});

// Interactive Skills Bubbles - Add slight repel effect from mouse
const bubbles = document.querySelectorAll('.skill-pill');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    bubbles.forEach(bubble => {
        const rect = bubble.getBoundingClientRect();
        const bubbleX = rect.left + rect.width / 2;
        const bubbleY = rect.top + rect.height / 2;

        const distX = mouseX - bubbleX;
        const distY = mouseY - bubbleY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 150) {
            const repelX = -distX * 0.1;
            const repelY = -distY * 0.1;
            bubble.style.transform = `translate(${repelX}px, ${repelY}px) scale(1.05)`;
            bubble.style.transition = 'transform 0.1s ease-out';
        } else {
            // Revert back to original float animation handling
            bubble.style.transform = '';
            bubble.style.transition = 'transform 0.4s ease-out';
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
