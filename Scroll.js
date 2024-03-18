document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior to the "Scroll to Map" link
    var scrollLinks = document.querySelectorAll('.scroll-to-map');
    
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});