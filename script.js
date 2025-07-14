document.querySelectorAll('.nav-btn').forEach((btn, i) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        btn.style.transition = 'opacity 0.6s cubic-bezier(.4,2,.3,1), transform 0.6s cubic-bezier(.4,2,.3,1)';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    }, 400 + i * 120);
});
