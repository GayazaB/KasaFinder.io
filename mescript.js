// Filter and sort functionality
const filterSelect = document.getElementById('filter-by');
const sortButton = document.getElementById('sort-btn');
const medicalCenters = document.querySelectorAll('#medical-centers li');

filterSelect.addEventListener('change', (e) => {
    const selectedFilter = e.target.value;
    medicalCenters.forEach((center) => {
        if (selectedFilter === 'all' || center.classList.contains(selectedFilter)) {
            center.style.display = 'flex';
        } else {
            center.style.display = 'none';
        }
    });
});

sortButton.addEventListener('click', () => {
    // Implement sort logic here (e.g., by rating, alphabetical order)
    medicalCenters.forEach((center) => {
        // Get rating or other sorting criteria
        const rating = center.querySelector('span.rating').textContent;
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
