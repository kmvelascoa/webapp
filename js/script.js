document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Asegúrate de que el botón exista antes de agregar el evento
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');

            // Guardar la preferencia del usuario
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = "Cambiar a Modo Claro"; // Cambiar texto del botón
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = "Cambiar a Modo Oscuro"; // Cambiar texto del botón
            }
        });
    }

    // Verificar la preferencia guardada al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.documentElement.classList.add('dark');
        darkModeToggle.textContent = "Cambiar a Modo Claro"; // Cambiar texto del botón
    }
});
