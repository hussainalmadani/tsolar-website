const navBtns = document.querySelectorAll('.nav-btn');
console.log('script.js loaded');
console.log('Found nav-btn elements:', navBtns.length);
navBtns.forEach((btn, i) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        btn.style.transition = 'opacity 0.6s cubic-bezier(.4,2,.3,1), transform 0.6s cubic-bezier(.4,2,.3,1)';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
        btn.style.border = '2px solid #ff9800'; // Temporary border for visibility
        btn.style.background = 'linear-gradient(90deg, #ff9800 0%, #00A3FF 100%)'; // Temporary background for visibility
        console.log('Animated nav-btn:', btn.textContent);
    }, 400 + i * 120);
});
