
let isInverted = false;


function handleInvert() {
    const htmlElement = document.querySelector('html');
    const videoElement = document.getElementById('myVideo');
    const invertTextElement = document.getElementById('invertText');

    if (isInverted) {
        htmlElement.style.filter = 'invert(0%)';
        videoElement.style.transform = 'scaleY(1)';
        invertTextElement.textContent = 'Light Mode';
    } else {
        htmlElement.style.filter = 'invert(100%)';
        videoElement.style.transform = 'scaleY(-1)';
        invertTextElement.textContent = 'Dark Mode';
    }

    isInverted = !isInverted;

}

document.getElementById('invertButton').addEventListener('click', handleInvert);
document.getElementById('invertText').addEventListener('click', handleInvert);


function downloadCV() {
    const cvLink = 'CV_WEBSITE.pdf';
    const link = document.createElement('a');
    const fileName = 'CV_WEBSITE.pdf';
    link.download = fileName;
    link.href = cvLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var video = document.getElementById("myVideo");
var prevEvent, currentEvent;
document.documentElement.onmousemove = function (event) {
    currentEvent = event;
}

var maxSpeed = 0, prevSpeed = 0, maxPositiveAcc = 0, maxNegativeAcc = 0;
var maxPlaybackRate = 6;

setInterval(function () {
    if (prevEvent && currentEvent) {
        var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
        var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
        var movement = Math.sqrt(movementX * movementX + movementY * movementY);


        var speed = movement;
        // console.log(speed)

        if (speed > 0) {
            calculatedPlaybackRate = 1 + (speed / 100)
            video.playbackRate = Math.min(calculatedPlaybackRate, maxPlaybackRate);
        } else if (speed < 0.1) {
            video.playbackRate = 1;
        }



    }

    prevEvent = currentEvent;
    prevSpeed = speed;
}, 100);


function copyText(elementId) {
    var copyText = document.getElementById(elementId).innerText;

    navigator.clipboard.writeText(copyText)
        .then(() => {
            const alertElement = document.createElement('div');
            alertElement.classList.add('alert');
            alertElement.textContent = 'Copied to clipboard';
            document.body.appendChild(alertElement);
            setTimeout(() => {
                alertElement.remove();
            }, 1500);
        })
        .catch((error) => {
            console.error('Failed to copy text: ', error);
        });

}




