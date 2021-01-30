// Appeler l'heure locale
clock();

// fonction pour afficher l'heure
function clock() {
    // Date
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Degrés
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    // Afficher
    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

// Interval
setInterval(clock, 1000);
