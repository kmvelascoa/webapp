document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;

    // Función para mostrar el elemento actual
    function showItem(index) {
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
        carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    // Evento para el botón "Next"
    document.querySelector('.next').addEventListener('click', function() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            showItem(currentIndex);
        }
    });

    // Evento para el botón "Prev"
    document.querySelector('.prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showItem(currentIndex);
        }
    });

    showItem(currentIndex); // Muestra el primer elemento al cargar
});
