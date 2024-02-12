
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
    console.log('isInverted', isInverted, 'invertTextElement', invertTextElement.textContent);
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




