setInterval(() => {

    const d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    
    hrt = 30*h + m/2 
    mrt = 6*m + s/10
    srt = 6*s

    let hHand = document.getElementById('hour-hand')
    let mHand = document.getElementById('minute-hand')
    let sHand = document.getElementById('second-hand')

    hHand.style.transform = `rotate(${hrt}deg)`
    mHand.style.transform = `rotate(${mrt}deg)`
    sHand.style.transform = `rotate(${srt}deg)`

    let fix1 = document.getElementById('fix1')
    fix1.innerHTML = d.toLocaleTimeString()

    let fix2 = document.getElementById('fix2')
    fix2.innerHTML = d.toLocaleDateString()

    const aud = new Audio('clock.mp3')
    aud.play()
}, 1000)