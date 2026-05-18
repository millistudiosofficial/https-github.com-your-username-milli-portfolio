// 3D Parallax Effect for Hero Section
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Interactive Skills Bubbles - Add slight repel effect from mouse
const bubbles = document.querySelectorAll('.bubble');
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
        } else {
            // Revert back to original float animation handling
            bubble.style.transform = '';
        }
    });
});
