export const generateStars = (container, maxStars, userRating) => {
    // Generar estrellas
    for (let i = 1; i <= maxStars; i++) {
        const star = document.createElement('span');
        star.innerHTML = '&#9733;'; // Estrella sólida
        star.className = 'star';

        // Valoración aleatoria
        if (i <= userRating) {
            star.classList.add('rated');
        }
        container.appendChild(star);
    }
}

const cardContainers = document.querySelectorAll('.card-footer');

export const drawStars = () =>{
    // Número máximo de estrellas
    const maxStars = 5;
    // Iterar sobre cada contenedor de tarjetas y generar las estrellas
    cardContainers.forEach(cardContainer => {
        // Valoración aleatoria de ejemplo
        const userRating = Math.floor(Math.random() * maxStars) + 1;
        generateStars(cardContainer, maxStars, userRating);
    });
}
