const toggle = document.getElementById('toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(currentTheme);

if (currentTheme === 'dark-mode') {
    toggle.classList.add('active');
}

// Toggle dark mode on click
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});