const sounds = document.querySelectorAll('audio')
const string1Elements = document.querySelectorAll('.string1')
const string2Elements = document.querySelectorAll('.string2')
const string3Elements = document.querySelectorAll('.string3')
const string4Elements = document.querySelectorAll('.string4')
const string5Elements = document.querySelectorAll('.string5')
const string6Elements = document.querySelectorAll('.string6')

butts = document.querySelectorAll('.note')
let playing, string1, string2, string3, string4, string5, string6
let hoverStrings = false
let pluckStrings = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2']

chord =    [ Array.from(sounds).find(s => s.dataset.note === 'E2'), 
             Array.from(sounds).find(s => s.dataset.note === 'B2'),
             Array.from(sounds).find(s => s.dataset.note === 'E3'),
             Array.from(sounds).find(s => s.dataset.note === 'Gs3'),
             Array.from(sounds).find(s => s.dataset.note === 'B3'),
             Array.from(sounds).find(s => s.dataset.note === 'E4')]

function playChord(){
    chord.forEach(a => {
        a.play()
        setTimeout(function(){
            console.log('what')
        }, 1000)
    })
}

function playChord2(){
    chord[0].play()
    setTimeout(function(){ chord[1].play() }, 15)
    setTimeout(function(){ chord[2].play() }, 25)
    setTimeout(function(){ chord[3].play() }, 35)
    setTimeout(function(){ chord[4].play() }, 45)
    setTimeout(function(){ chord[5].play() }, 55)
}

butts.forEach(but => {
    but.addEventListener('click', playNote)
    but.addEventListener('mouseenter', pluckString)
});

function playNote(e) {
    //console.log(e.target.dataset.note)
    const sound = Array.from(sounds).find(s => s.dataset.note === e.target.dataset.note)
    stringControl(sound, e.target.classList[1])
    e.target.classList.add('playingNote')
    removeAfterThreeSeconds(e.target)
}

function removeAfterThreeSeconds(element) {
    setTimeout(function() {
        element.classList.remove('playingNote')
    }, 2000)
}

//pluckStrings = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2']

function pluckString(e) {
    if(!hoverStrings){
        return
    }
    let stringPlucked = e.target.classList[1]
    let stringNum = Number(e.target.classList[1].charAt(e.target.classList[1].length - 1))
    sound = Array.from(sounds).find(s => s.dataset.note === pluckStrings[stringNum - 1])
    stringControl(sound, stringPlucked)
}

function stringControl(sound, string){
    if(!string1 && string === 'string1') {
        string1 = sound
        string1.currentTime = 0;
        string1.play()
    }
    else if (string === 'string1'){
        string1.pause()
        string1 = sound
        string1.currentTime = 0;
        string1.play()
    } else if(!string2 && string === 'string2') {
        string2 = sound
        string2.currentTime = 0;
        string2.play()
    } else if (string === 'string2'){
        string2.pause()
        string2 = sound
        string2.currentTime = 0;
        string2.play()
    } if(!string3 && string === 'string3') {
        string3 = sound
        string3.currentTime = 0;
        string3.play()
    } else if (string === 'string3'){
        string3.pause()
        string3 = sound
        string3.currentTime = 0;
        string3.play()
    } if(!string4 && string === 'string4') {
        string4 = sound
        string4.currentTime = 0;
        string4.play()
    } else if (string === 'string4'){
        string4.pause()
        string4 = sound
        string4.currentTime = 0;
        string4.play()
    } if(!string5 && string === 'string5') {
        string5 = sound
        string5.currentTime = 0;
        string5.play()
    } else if (string === 'string5'){
        string5.pause()
        string5 = sound
        string5.currentTime = 0;
        string5.play()
    } else if(!string6 && string === 'string6') {
        string6 = sound
        string6.currentTime = 0;
        string6.play()
    }
    else if (string === 'string6'){
        string6.pause()
        string6= sound
        string6.currentTime = 0;
        string6.play()
    }
    else {
        playing = sound
        sound.currentTime = 0;
        sound.play()
    }
}

function toggleHoverMode(){
    if(hoverStrings){
        hoverStrings = false;
        console.log('REMOVE THE hover stylesing!')
    } else {
        hoverStrings = true;
        string1Elements.forEach(e => e.classList.add('hoverStringMode'))
        string2Elements.forEach(e => e.classList.add('hoverStringMode'))
        string3Elements.forEach(e => e.classList.add('hoverStringMode'))
        string4Elements.forEach(e => e.classList.add('hoverStringMode'))
        string5Elements.forEach(e => e.classList.add('hoverStringMode'))
        string6Elements.forEach(e => e.classList.add('hoverStringMode'))
    } 
}