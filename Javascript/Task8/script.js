var trainElement;
var isMoving = false;
var animationInterval;

function init() {
    trainElement = document.getElementById('train');
}

function moveTrain() {
    var currentPosition = parseInt(trainElement.style.left) || 0;
    var newPosition = currentPosition + 10;
    trainElement.style.left = newPosition + 'px';

    if (newPosition >= window.innerWidth) {
        stopTrain();
    }
}

function startTrain() {
    if (!isMoving) {
        isMoving = true;
        animationInterval = setInterval(moveTrain, 100);
    }
}

function stopTrain() {
    if (isMoving) {
        isMoving = false;
        clearInterval(animationInterval);
    }
}

window.onload = init;