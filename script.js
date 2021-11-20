const chel = document.getElementById('chel');
const dev = document.getElementById('dev');

document.addEventListener("keydown", function(event){
    jump();
})

function jump () {
    if (chel.classList != 'jump') {
        chel.classList.add('jump')
    }
    setTimeout (function() {
        chel.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval ( function(){
    let chelTop = parseInt(window.getComputedStyle(chel).getPropertyValue('top'))
    let devLeft = parseInt(window.getComputedStyle(dev).getPropertyValue('left'))

    if (devLeft < 28 && devLeft > 0 && chelTop >= 320) {
        alert('ЗАКАДРИЛА СУЧКА')
    }
}, 10)