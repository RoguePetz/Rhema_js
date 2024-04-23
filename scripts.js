window.addEventListener('scroll', function() {
    const distance = window.scrollY;
    document.querySelectorAll('.section').forEach(function(section, index) {
        if (section.offsetTop - window.innerHeight / 1.3 < distance) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});