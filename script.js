document.addEventListener('DOMContentLoaded', () => {
    // Fade in effect for the hero section
    const hero = document.querySelector('.hero-content');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease';
        hero.style.opacity = '1';
    }, 100);

    // Create floating hearts
    const floatingHeartsContainer = document.querySelector('.floating-hearts');
    function createHeart() {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.opacity = '0';
        heart.style.position = 'absolute';
        heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        
        floatingHeartsContainer.appendChild(heart);
        
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    setInterval(createHeart, 300);

    // Rose button functionality
    const roseButton = document.getElementById('roseButton');
    const roseGarden = document.getElementById('rose-garden');

    roseButton.addEventListener('click', () => {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.textContent = '🌹';
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = Math.random() * 100 + '%';
        roseGarden.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 3000);
    });

    // Heart shower functionality
    const heartShowerButton = document.getElementById('heartShower');
    
    heartShowerButton.addEventListener('click', () => {
        for(let i = 0; i < 50; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 50);
        }
    });

    // Love message functionality
    const loveMessageButton = document.getElementById('loveMessage');
    const messageModal = document.getElementById('message-modal');
    const messageContent = messageModal.querySelector('p');
    const closeButton = messageModal.querySelector('.close-button');

    const messages = [
        "Every moment with you is a treasure I cherish deeply.",
        "Your smile lights up my world in ways nothing else can.",
        "In your eyes, I see my future, bright and beautiful.",
        "My heart beats your name with every pulse.",
        "You're the missing piece that makes my life complete.",
        "With you, every day feels like a beautiful dream.",
        "Your love is the greatest gift I've ever received.",
        "You make my heart skip a beat, today and always.",
        "In your arms is where I belong, forever and always.",
        "You're not just my love, you're my everything."
    ];

    loveMessageButton.addEventListener('click', () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageContent.textContent = randomMessage;
        messageModal.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
        messageModal.classList.remove('show');
    });

    messageModal.addEventListener('click', (e) => {
        if (e.target === messageModal) {
            messageModal.classList.remove('show');
        }
    });

    // Smooth scroll and fade in for sections
    const sections = document.querySelectorAll('.portrait-section, .gallery, .love-letter');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 1s ease, transform 1s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Parallax effect for portrait
    const portrait = document.querySelector('.portrait-container');
    window.addEventListener('scroll', () => {
        if (portrait) {
            const rect = portrait.getBoundingClientRect();
            const visible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (visible) {
                const speed = 0.15;
                const yPos = (rect.top - window.innerHeight/2) * speed;
                portrait.style.transform = `translateY(${yPos}px)`;
            }
        }
    });
});