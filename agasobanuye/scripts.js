// Simple carousel scrolling
document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('wheel', (event) => {
        event.preventDefault();
        carousel.scrollLeft += event.deltaY;
    });
});
// JavaScript for Carousel Navigation
document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Function to update the carousel's visible items
    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.display = (index === currentIndex) ? 'block' : 'none';
        });
    }

    // Next and Previous button functionality
    carousel.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    carousel.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel();
});

// JavaScript for Search Bar Filtering
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const movies = document.querySelectorAll('.movie-card');

    movies.forEach(movie => {
        const title = movie.querySelector('h3').textContent.toLowerCase();
        movie.style.display = title.includes(query) ? 'block' : 'none';
    });
});

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

