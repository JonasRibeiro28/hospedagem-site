document.addEventListener('DOMContentLoaded', () => {
    // Animate photos sequentially
    const photos = document.querySelectorAll('.photo-item');
    photos.forEach((photo, index) => {
        photo.style.opacity = '0';
        photo.style.transform = 'translateY(20px)';
        setTimeout(() => {
            photo.style.opacity = '1';
            photo.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });

    // Animate messages sequentially
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 1200 + (index * 300));
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add sparkle effect to the photo on hover
    const photo = document.getElementById('special-photo');
    photo.addEventListener('mouseover', () => {
        photo.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.3)';
    });
    photo.addEventListener('mouseout', () => {
        photo.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
}); 