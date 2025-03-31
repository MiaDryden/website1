const container = document.getElementById('container')
const txt = document.getElementById('text')

setInterval(breatheAnimation, 7500)

function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout( ()=> {
        text.innerHTMl = 'Hold'
    }, 3000)

    setTimeout(() => {
        text.innerHTML = 'Breathe Out!'
        container.classList.remove('grow')
        container.classList.add('shrink')
    }, 4500)
}
