function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; ///stop function from running
    audio.currentTime = 0; /// allows to play sounds in succession by rewinding them
    audio.play();
    console.log(key)
    key.classList.add('playing');

}

const keys = document.querySelectorAll('.key')

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)