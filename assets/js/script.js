// calcul la rotation de chaque aiguille en fonction de son nom et de l'heure
function rotateHand(name, time) {
    // Récupère l'aiguille ciblée par name
    let Hand = document.querySelector(`.${name}`);

    // fixe la division par défaut pour le cadran : il y a 60 minutes dans une heure, 60 secondes dans une minute
    let dialDivisions = 60;

    // remplace la valeur par défaut si on travaille sur les heures: il y a 12 heures sur le cadran d'une montre
    if (name === 'hours') {
        dialDivisions = 12;
    }

    //calcule le degré de rotation : 180 = par de rotation, on reste sur 12h
    let rotationDeg = 180 + (time / dialDivisions) * 360;

    // modifie le css avec la valeur du transform.
    Hand.style.transform = `rotate(${rotationDeg}deg)`;
}

// lancée au chargement. appelle la fonction rotateHand chaque seconde, sur les 3 aiguilles.
function init() {
    let interval = setInterval(() => {
        let time = new Date();

        rotateHand('hours', time.getHours());
        rotateHand('minutes', time.getMinutes());
        rotateHand('seconds', time.getSeconds());
    }, 1000);
}

init();

function drawMarker(place, className) {
    let marker = document.createElement('div');
    marker.classList.add(className);
    return place.appendChild(marker);
}

function drawMarkers() {
    let frame = document.querySelector('.wrapper');

    for (i = 0; i < 60; i++) {
        let className = 'marker';

        if (i % 5 === 0) {
            className = 'mainMarker';
        }

        let marker = drawMarker(frame, className);
        marker.style.transform = `rotate( ${180 + (i / 60) * 360}deg )`;
    }
}

drawMarkers();
