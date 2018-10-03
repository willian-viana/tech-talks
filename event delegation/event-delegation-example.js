'use strict'

const create = document.getElementById('create-button')
const example = document.getElementById('xpto')

class Example {
  constructor (elem) {
    this._elem = elem
    elem.onclick = this.onClick.bind(this)
    create.onclick = this.onCreateButtonClick.bind(this)
  }

  onClick (event) {
    if (!event.target.className.includes('btn')) {
      return
    }

    console.log(event)
    window.alert('it\'s working - ' + event.target.value)
  }

  onCreateButtonClick () {
    let node = document.createElement('button')
    let text = document.createTextNode('new Butaum')
    node.appendChild(text)
    node.setAttribute('value', 'NEW BUTAUM MODAFOCA')
    node.setAttribute('class', 'btn button button-default')
    example.appendChild(node)
  }
}

new Example(example);