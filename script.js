const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach((btn, i) => {
    btn.style.opacity = '0';
    btn.style.transform = 'scale(0.7) translateY(30px)';
    btn.style.filter = 'blur(2px)';
    setTimeout(() => {
        btn.style.transition = 'opacity 1.2s cubic-bezier(.22,1,.36,1), transform 1.2s cubic-bezier(.22,1,.36,1), filter 1.2s cubic-bezier(.22,1,.36,1)';
        btn.style.opacity = '1';
        btn.style.transform = 'scale(1) translateY(0)';
        btn.style.filter = 'blur(0)';
    }, 400 + i * 180);
});
