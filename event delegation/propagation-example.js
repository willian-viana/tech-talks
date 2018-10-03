'use strict'

const btn = document.getElementById('btn-bubble')
const body = document.getElementsByTagName('body')
const container = document.getElementsByClassName('container')
const row = document.getElementsByClassName('bubble')

// Exemplo visual de forma simples, como o event propagation funciona

btn.addEventListener('click', function (event) {
  console.log(event.target, event.eventPhase)
  event.target.setAttribute('style', 'background-color: black')
})

body[0].addEventListener('click', function (event) {
  var current = event.currentTarget
  var eventPhase = event.eventPhase
  setTimeout(() => {
    console.log(current, eventPhase)
    current.setAttribute('style', 'background-color: #fffccf')
  }, 4000)
})

container[0].addEventListener('click', function (event) {
  var current = event.currentTarget
  var eventPhase = event.eventPhase
  setTimeout(() => {
    console.log(current, eventPhase)
    current.setAttribute('style', 'background-color: #f8f8f8')
  }, 3000)
}, true)

row[0].addEventListener('click', function (event) {
  var current = event.currentTarget
  var eventPhase = event.eventPhase
  setTimeout(() => {
    console.log(current, eventPhase)
    current.setAttribute('style', 'background-color: #397615')
  }, 2000)
})
