import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    
}


export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    el.minutes.click()
}

export function toggleTree() {
    if(state.isMute == false){
        state.isMute = true
        sounds.floresta.pause()
        el.tree.classList.remove('playing')
    } else {
        state.isMute = false
        sounds.floresta.play()
        el.tree.classList.add('playing')
    }
}

export function toggleCloud() {
    if(state.isMute == false){
        state.isMute = true
        sounds.chuva.pause()
        el.cloud.classList.remove('playing')
    } else {
        state.isMute = false
        sounds.chuva.play()
        el.cloud.classList.add('playing')
    }
}

export function toggleStore() {
    if(state.isMute == false){
        state.isMute = true
        sounds.cafeteria.pause()
        el.store.classList.remove('playing')
    } else {
        state.isMute = false
        sounds.cafeteria.play()
        el.store.classList.add('playing')
    }
}

export function toggleFire() {
    if(state.isMute == false){
        state.isMute = true
        sounds.lareira.pause()
        el.fire.classList.remove('playing')
    } else {
        state.isMute = false
        sounds.lareira.play()
        el.fire.classList.add('playing')
    }
}



export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
        sounds.cafeteria.play()

    }
    
}