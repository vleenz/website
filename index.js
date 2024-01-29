
let isInverted = false;

function handleInvert() {
    const htmlElement = document.querySelector('html');
    const videoElement = document.getElementById('myVideo');

    if (isInverted) {
        htmlElement.style.filter = 'invert(0%)';
        videoElement.style.transform = 'scaleY(1)';
    } else {
        htmlElement.style.filter = 'invert(100%)';
        videoElement.style.transform = 'scaleY(-1)';
    }

    isInverted = !isInverted;
}

document.getElementById('invertButton').addEventListener('click', handleInvert);
document.getElementById('invertText').addEventListener('click', handleInvert);


function downloadCV() {
    const cvLink = 'CV_VL.pdf';
    const link = document.createElement('a');
    const fileName = 'CV_VL.pdf';
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

// var video = document.getElementById("myVideo");
// var lastMouseX = null;
// var lastTimestamp = null;

// // Track mouse movement
// document.addEventListener("mousemove", function (event) {
//     var currentMouseX = event.clientX;
//     var currentTime = Date.now();

//     if (lastMouseX !== null && lastTimestamp !== null) {
//         var distance = Math.abs(currentMouseX - lastMouseX);
//         var timeDiff = currentTime - lastTimestamp;
//         var speed = distance / timeDiff;

//         // Adjust video playback speed based on mouse speed
//         if (speed > 10) {
//             video.playbackRate = 10; // Increase playback speed
//         } else if (speed > 5) {
//             video.playbackRate = 6;
//         } else if (speed > 2) {
//             video.playbackRate = 3;
//         } else {
//             video.playbackRate = 1; // Normal playback speed
//         }
//     }

//     lastMouseX = currentMouseX;
//     lastTimestamp = currentTime;
// });

var video = document.getElementById("myVideo");
var isMouseMoving = false;

document.addEventListener("mousemove", function (event) {

    if (!isMouseMoving) {
        isMouseMoving = true;
        video.playbackRate = 5;
    }


    clearTimeout(timeout);
    var timeout = setTimeout(function () {
        isMouseMoving = false;
        video.playbackRate = 1;
    }, 100);
});