// No JS needed for nav-btn animation; handled by CSS animation: fadeInUp

// Navigation history sidebar logic
(function() {
    const pageTitles = {
        'index.html': 'Home',
        'about.html': 'About',
        'contact.html': 'Contact',
        'ourproducts.html': 'Our Products'
    };
    const current = location.pathname.split('/').pop();
    let history = JSON.parse(localStorage.getItem('tsolar_history') || '[]');
    // Remove current page if already in history
    history = history.filter(item => item !== current);
    // Add current page to history
    history.unshift(current);
    // Limit to last 5 pages
    history = history.slice(0, 5);
    localStorage.setItem('tsolar_history', JSON.stringify(history));
    // Render history
    const list = document.getElementById('history-list');
    if (list) {
        history.forEach(page => {
            if (page !== current) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = page;
                a.textContent = pageTitles[page] || page;
                li.appendChild(a);
                list.appendChild(li);
            }
        });
    }
})();

// Breadcrumb bar logic
(function() {
    const pageTitles = {
        'index.html': 'Home',
        'about.html': 'About',
        'contact.html': 'Contact',
        'ourproducts.html': 'Our Products'
    };
    const current = location.pathname.split('/').pop();
    const list = document.getElementById('breadcrumb-list');
    if (list) {
        // Always start with Home
        const homeLi = document.createElement('li');
        if (current !== 'index.html') {
            const a = document.createElement('a');
            a.href = 'index.html';
            a.textContent = 'Home';
            homeLi.appendChild(a);
        } else {
            homeLi.textContent = 'Home';
        }
        list.appendChild(homeLi);
        if (current !== 'index.html') {
            const pageLi = document.createElement('li');
            pageLi.textContent = pageTitles[current] || current;
            list.appendChild(pageLi);
        }
    }
})();
