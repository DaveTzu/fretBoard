const sounds = document.querySelectorAll('audio')
butts = document.querySelectorAll('.note')

butts.forEach(but => {
    but.addEventListener('click', playNote)
});

function playNote(e) {
    sounds[e.target.classList[2].split('fret').pop()].play()
}