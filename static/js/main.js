// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
            toggleButton.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggleButton.classList.remove('active');
        }
    });
});
