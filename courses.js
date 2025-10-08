// تفعيل AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// تأثير العيون على العنوان
const title = document.querySelector("header h1");
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    title.style.transform = `translate(${x}px, ${y}px)`;
    title.style.textShadow = `
        ${x}px ${y}px 15px #00ff99,
        ${-x}px ${-y}px 30px #00ffcc
    `;
});

// تأثير البارالاكس على الخلفية
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollY * 0.3}px`;
});

// تأثير عند الضغط على كارت الفيديو
document.querySelectorAll(".video-card").forEach(card => {
    card.addEventListener("click", () => {
        alert(`تم الضغط على: ${card.querySelector("h3").textContent}`);
    });
});
