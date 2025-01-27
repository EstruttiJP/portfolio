const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
const particles = [];

// Configurações das partículas
const createParticle = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: Math.random() * 0.5 - 0.25,
    speedY: Math.random() * 0.5 - 0.25,
    opacity: Math.random(),
});

const initParticles = () => {
    for (let i = 0; i < 100; i++) {
        particles.push(createParticle());
    }
};

const drawParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
    });
};

const updateParticles = () => {
    particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reposicionar se sair da tela
        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
    });
};

const animate = () => {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
};

const resizeCanvas = () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
initParticles();
animate();