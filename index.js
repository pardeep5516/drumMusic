var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case 'w':
                playSound("sounds/tom-1.mp3");
                break;
            case 'a':
                playSound("sounds/tom-2.mp3");
                break;
            case 's':
                playSound("sounds/tom-3.mp3");
                break;
            case 'd':
                playSound("sounds/tom-4.mp3");
                break;
            case 'j':
                playSound("sounds/snare.mp3");
                break;
            case 'k':
                playSound("sounds/crash.mp3");
                break;
            case 'l':
                playSound("sounds/kick-bass.mp3");
                break;
            default:
                null;
        }

    });
}
function playSound(sound) {
    var audio = new Audio(sound);
    audio.play();
}