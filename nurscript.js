const schoolList = document.querySelector('.school-list');
const schoolType = document.querySelector('.school-address');
const schoolSearch = document.querySelector('.school-search');


schoolType.addEventListener('change', (e) => {
  const selectedType = e.target.value;
  const schools = schoolList.children;

  for (let i = 0; i < schools.length; i++) {
    if (selectedType === 'all' || schools[i].classList.contains(selectedType)) {
      schools[i].style.display = 'flex';
    } else {
      schools[i].style.display = 'none';
    }
  }
});

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


schoolSearch.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const schools = schoolList.children;

  for (let i = 0; i < schools.length; i++) {
    const schoolName = schools[i].querySelector('h2').textContent.toLowerCase();

    if (schoolName.includes(searchTerm)) {
      schools[i].style.display = 'flex';
    } else {
      schools[i].style.display = 'none';
    }
  }
});
