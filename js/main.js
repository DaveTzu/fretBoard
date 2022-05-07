const sounds = document.querySelectorAll('audio')
butts = document.querySelectorAll('.note')
let playing, string1, string2, string3, string4, string5, string6


butts.forEach(but => {
    but.addEventListener('click', playNote)
});

function playNote(e) {
    console.log(e.target.dataset.note)
    //sounds[e.target.classList[2].split('fret').pop()].play()
    sound = Array.from(sounds).find(s => s.dataset.note === e.target.dataset.note)
    if(!string1 && e.target.classList[1] === 'string1') {
        string1 = sound
        string1.currentTime = 0;
        string1.play()
    }
    else if (e.target.classList[1] === 'string1'){
        string1.pause()
        string1 = sound
        string1.currentTime = 0;
        string1.play()
    } else if(!string2 && e.target.classList[1] === 'string2') {
        string2 = sound
        string2.currentTime = 0;
        string2.play()
    } else if (e.target.classList[1] === 'string2'){
        string2.pause()
        string2 = sound
        string2.currentTime = 0;
        string2.play()
    } if(!string3 && e.target.classList[1] === 'string3') {
        string3 = sound
        string3.currentTime = 0;
        string3.play()
    } else if (e.target.classList[1] === 'string3'){
        string3.pause()
        string3 = sound
        string3.currentTime = 0;
        string3.play()
    } if(!string4 && e.target.classList[1] === 'string4') {
        string4 = sound
        string4.currentTime = 0;
        string4.play()
    } else if (e.target.classList[1] === 'string4'){
        string4.pause()
        string4 = sound
        string4.currentTime = 0;
        string4.play()
    } if(!string5 && e.target.classList[1] === 'string5') {
        string5 = sound
        string5.currentTime = 0;
        string5.play()
    } else if (e.target.classList[1] === 'string5'){
        string5.pause()
        string5 = sound
        string5.currentTime = 0;
        string5.play()
    } else if(!string6 && e.target.classList[1] === 'string6') {
        string6 = sound
        string6.currentTime = 0;
        string6.play()
    }
    else if (e.target.classList[1] === 'string6'){
        string6.pause()
        string6= sound
        string6.currentTime = 0;
        string6.play()
    }
    else {
        playing.pause()
        playing = sound
        sound.currentTime = 0;
        sound.play()
    }
}