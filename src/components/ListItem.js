import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const itemDonate = document.createElement('div')
    itemDonate.className = 'donate-item'
    itemDonate.textContent = `${this.state.date} - `
    const donateValue = document.createElement('b')
    donateValue.textContent = `$${this.state.amount}`
    itemDonate.append(donateValue)
    this.$rootElement.append(itemDonate)

    this.$deleteButton = document.createElement('button')
    this.$deleteButton.className = 'delete-button'
    this.$deleteButton.textContent = 'Удалить'
    this.$rootElement.append(this.$deleteButton)

    this.$deleteButton = document.createElement('button')
    this.$deleteButton.className = 'delete-button'
    this.$deleteButton.textContent = 'Удалить'
    this.$rootElement.append(this.$deleteButton)

    this.$deleteButton.addEventListener('click', () => {
      this.$rootElement.remove()
    })
  }
}
