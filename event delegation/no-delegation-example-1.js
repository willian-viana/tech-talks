'use strict'

const example = document.getElementById('example')
const create = document.getElementById('create-button')

class Example {
  constructor () {
    this.init()
    create.onclick = this.onCreateButtonClick.bind(this)
  }

  init () {
    let elem = document.querySelector('.btn')
    elem.addEventListener('click', this.onClick)
  }

  onClick (event) {
    console.log(event)
    window.alert('it\'s working - ' + event.target.value)
  }

  onCreateButtonClick () {
    let node = document.createElement('button')
    let text = document.createTextNode('new button')
    node.appendChild(text)
    node.setAttribute('value', 'NEW BUTTON MODAFOCA')
    node.setAttribute('class', 'btn button button-default')
    example.appendChild(node)
  }
}

new Example(example)