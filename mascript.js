// Filter and sort functionality
const filterSelect = document.getElementById('filter-by');
const sortButton = document.getElementById('sort-btn');
const freshFoodMarkets = document.querySelectorAll('#fresh-food-markets li');

filterSelect.addEventListener('change', (e) => {
    const selectedFilter = e.target.value;
    freshFoodMarkets.forEach((market) => {
        if (selectedFilter === 'all' || market.classList.contains(selectedFilter)) {
            market.style.display = 'flex';
        } else {
            market.style.display = 'none';
        }
    });
});

sortButton.addEventListener('click', () => {
    // Implement sort logic here (e.g., by rating, alphabetical order)
    freshFoodMarkets.forEach((market) => {
        // Get rating or other sorting criteria
        const rating = market.querySelector('span.rating').textContent;
        // Sort logic here (e.g., ascending or descending order)
        // Update display accordingly
    });
});

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

// Testimonial slider functionality
const testimonialSliders = document.querySelectorAll('.testimonial-slider');

testimonialSliders.forEach((slider) => {
    const testimonials = slider.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    setInterval(() => {
        testimonials[currentTestimonialIndex].style.display = 'none';
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].style.display = 'block';
    }, 2000); // 2-second interval
});

// Pop-up message for special inquiries
const specialInquiriesButton = document.getElementById('special-inquiries-btn');
const popUpMessage = document.getElementById('pop-up-message');

specialInquiriesButton.addEventListener('click', () => {
    popUpMessage.style.display = 'block';
});

popUpMessage.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn')) {
        popUpMessage.style.display = 'none';
    }
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