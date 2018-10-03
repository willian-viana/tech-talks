'use strict'

const example = document.getElementById('example')
const create = document.getElementById('create-button')

class Example {
  constructor () {
    this.init()
    create.onclick = this.onCreateButtonClick.bind(this)
  }

  init () {
    let elem = document.querySelectorAll('.btn')

    elem.forEach(element => {
      element.addEventListener('click', this.onClick)
    })
  }

  onClick (event) {
    console.log(event)
    window.alert('it\'s working - ' + event.target.value)
  }

  addNewListener (element) {
    element.addEventListener('click', this.onClick.bind(this))
  }

  onCreateButtonClick () {
    let node = document.createElement('button')
    let text = document.createTextNode('new button')
    node.appendChild(text)
    node.setAttribute('value', 'NEW BUTTON MODAFOCA')
    node.setAttribute('class', 'btn button button-default')
    example.appendChild(node)

    this.addNewListener(node)
  }
}

new Example(example)