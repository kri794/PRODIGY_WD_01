window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
});

var links = document.querySelectorAll('#navbar a');

links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ff5733'; // Change font color on hover
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#333';
    });
});
