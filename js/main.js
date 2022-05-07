const sounds = document.querySelectorAll('audio')
butts = document.querySelectorAll('.note')

butts.forEach(but => {
    but.addEventListener('click', playNote)
});

function playNote(e) {
    console.log(e.target.dataset.note)
    //sounds[e.target.classList[2].split('fret').pop()].play()
    sound = Array.from(sounds).find(s => s.dataset.note === e.target.dataset.note)
    sound.play()
}