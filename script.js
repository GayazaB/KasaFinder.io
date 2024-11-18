// Image slider functionality
const imageSliders = document.querySelectorAll('.image-slider');

imageSliders.forEach((slider) => {
    const images = slider.querySelectorAll('img');
    let currentImageIndex = 0;

    setInterval(() => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }, 2000); // 2-second interval
});

// Search bar functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const sectionTitle = section.querySelector('h2').textContent.toLowerCase();
        const sectionContent = section.querySelector('p').textContent.toLowerCase();

        if (sectionTitle.includes(searchTerm) || sectionContent.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// Animations
const fadeIns = document.querySelectorAll('.fade-in');

fadeIns.forEach((element) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            element.classList.add('visible');
        }
    }, { threshold: 0.5 });

    observer.observe(element);
});